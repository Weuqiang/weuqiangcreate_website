面试问题1: 使用LangGraph构建智能体的流程?
面试问题2: 状态图的执行流程是怎样的?

1. 初始化一个状态图
    1.1 创建节点
        self.tool_node = ToolNode(tools)        #创建一个工具节点
        
    1.2 创建状态图
        1.2.1 定义一个对话状态（看官网）, 就是用来保存我们信息/历史记录
            # 定义对话状态类型
            class ChatState(TypedDict):
                """对话状态定义"""
                messages: Annotated[List[Dict[str, Any]], add_messages]
                
        1.2.2 添加节点,指定节点的执行函数
            builder.add_node("chatbot", self._chatbot_node)         # chatbot 节点：处理聊天机器人的回复
            builder.add_node("tools", self.tool_node)               # tools 节点：处理工具调用
            说明: 起始节点，结束节点，直接导入即可。
            
        1.2.3 创建边
            a. 条件边
            builder.add_conditional_edges(                          # 设置节点间的连接关系
                "chatbot",                                          # 从chatbot节点出发的条件边，由_route_tools方法决定下一个节点,
                self._route_tools,                                  # 决策函数: 决定是否需要工具调用, 通过该方法的返回值判断路由方向
                {"tools": "tools", END: END}                        # 映射表：将决策函数的返回值映射到目标节点
            )
            
            b. 普通边
            builder.add_edge("tools", "chatbot")                    # tools节点到chatbot节点的直接边, 表示工具调用后回到聊天机器人
            builder.add_edge(START, "chatbot")                      # 起始节点到chatbot节点的直接边, 表示用户输入到聊天机器人
        1.2.4 编译图
            builder.compile()

2. 初始化大模型
    from langchain_community.chat_models import ChatTongyi
    #2.1 初始化大模型, 调用的是通义千问的后台服务器的模型
    llm = ChatTongyi(
        # api_key=os.getenv("DASHSCOPE_API_KEY"),
        api_key="sk-3b81bc6f420c45148c7d7b9820f1f141",
        model="qwen2.5-vl-72b-instruct",
    )
    #2.2 绑定工具
    tools = [send_mail_tool, search_tool, generate_image_tool]
    from llm_tools import tools
    llm_with_tools = llm.bind_tools(tools=tools)
      
3. 获取用户信息，并执行状态图
    {"messages": [HumanMessage(content=user_input)]},   # 输入用户消息, 将用户输入封装为消息对象
    {"configurable": {"thread_id": thread_id}}
    self.graph.stream(传入的是历史信息记录)
    
    1. 执行起始节点(其实就是用户的输入)
    2. 根据添加的边的信息，可以知道下面要执行那个节点
       这里执行chatbot节点
       response = llm_with_tools.invoke(state["messages"]      # 大模型推理
       {"messages": [response]}
       大模型推理，将放回的消息添加到对话状态列表中
    3. 然后,回去执行条件变绑定的决策函数
       决策函数默认会就接收这个对话状态列表，里面包含的就是所有的聊天历史对话记录消息
       然后，决策函数会再对话状态列表中取出最后一条消息
       并判断，是否有tool_calls属性，如果有，说明需要调用工具
    4. 执行工具节点，
       首先会判断对话状态列表中是否有消息
       如果没有，直接抛出异常
       如果有，取最后一条消息,再次判断是否有tool_calls
       如果没有,则添加一条空消息，并直接返回
       如果有, 则遍历tool_calls的列表, 每遍历一个得到一个工具详细信息
       工具的属性/详细信息:包括要调用的工具名称,工具id,执行工具需要的参数,类型
       
       这里，重点获取工具的名称，然后根据工具名称取工具列表中找到
       对应的工具执行函数，并执行这个工具函数
       执行工具函数，会返回结果，然后构建一个ToolMessage，并添加到对话状态列表中欧
    
       
    
4. 查看消息内容:
   用户输入:你好
   [
        HumanMessage(
            content='你好',
            additional_kwargs={},
            response_metadata={},
            id='ff0b95a0-7e3a-4b0e-9e90-2d9929a89447'
        ),
        AIMessage(
            content=[{'text': '你好！很高兴为你提供帮助。请问有什么我可以帮你的吗？'}],
            additional_kwargs={},
            response_metadata={
                'model_name': 'qwen2.5-vl-72b-instruct',
                'finish_reason': 'stop',
                'request_id': 'e3582e9e-50b8-9785-8ba1-077f0ee29fdf',
                'token_usage': {
                    'input_tokens': 1481,
                    'output_tokens': 15,
                    'input_tokens_details': {'text_tokens': 1481},
                    'total_tokens': 1496,
                    'output_tokens_details': {'text_tokens': 15}
                }
            },
            id='run--f2f45ddb-84a9-4cf5-9ef4-cec03314e682-0'
        )
    ]
    
    用户输入: 查询深圳今天的天气
    [
        HumanMessage(
            content='查询深圳今天的天气',
            additional_kwargs={},
            response_metadata={},
            id='22d21df3-8075-4cff-acf5-deb5afe98166'
        ),
        #大模型返回的消息
        AIMessage(
            content=[],
            additional_kwargs={
                'tool_calls': [
                    {
                        'function': {
                            'name': 'tavily_search',
                            'arguments': '{"query": "深圳今天的天气"}'
                        },
                        'index': 0,
                        'id': 'call_dc5154f8746b48ed97d1ee',
                        'type': 'function'
                    }
                ]
            },
            response_metadata={
                'model_name': 'qwen2.5-vl-72b-instruct',
                'finish_reason': 'tool_calls',
                'request_id': 'b4ec6763-110d-97d6-9008-d12c2ba89c61',
                'token_usage': {
                    'input_tokens': 1484,
                    'output_tokens': 21,
                    'input_tokens_details': {'text_tokens': 1484},
                    'total_tokens': 1505,
                    'output_tokens_details': {'text_tokens': 21}
                }
            },
            id='run--fa027295-d893-4447-899c-fe3c69039149-0',
            # 工具调用, 大模型理解之后, 要调用工具
            tool_calls=[
                {
                    'name': 'tavily_search',
                    'args': {'query': '深圳今天的天气'},
                    'id': 'call_dc5154f8746b48ed97d1ee',
                    'type': 'tool_call'
                }
            ]
        )
        ToolMessages(
        
        )
        AIMessage(
        
        )
    ]
    
    
    
    
        