## opencv

### 1、第一个阶段：python

​	任务1：xmind思维导图，把所有学过的内容归总，明天早上提交

​	任务2：系统未提交的

​	任务3：购物车管理系统

- python基础语法: 缩进,注释,输入输出,常量,变量,运算符表达式,数据类型,关键字,标识符
- python结构化程序设计:for循环,while循环,条件选择语句
- python数据类型: str, list, tuple, dict, set,数字类型,列表推导式,字典推导式
- python函数
- python的面向对象的思想: 类与对象,引用,类的属性,类的方法,装饰器,单列模式,继承,多态
- ==python的文件操作: txt,json,csv,html,xml==
- ==python的第三方库: numpy,pandas,,matplotlib==
- python的数据结构: 链表,栈,队列
- PyQt
- FastAPI



### 2、环境搭建

- 元宇宙平台，不用安装，网页版

- 人工智能虚拟仿真服务平台

  - 安装证书

  - 加载DLC     项目源代码

- 在python中安装Jupyter

  ```python
  pip install jupyter
  ```

  ```python
  jupyter notebook
  ```

  ```python
  # 在Windows中
  jupyter notebook C:\path\to\your\directory
  ```

- jupyter用法

- vscode中如何使用jupyter，安装jupyter插件

  

### 3、anaconda环境

- 安装anaconda

- 查看anaconda的环境

  conda env list

- 删除虚拟换进

  conda remove env -n opencv_env

- 创建虚拟环境

  conda create -n opencv_env  python==3.12.0

  创建的位置: D:\soft\anaconda3\envs

- 进入虚拟环境

  conda activate opencv_env

  

### 4、opencv

说明: 主要是用来进行图像处理的开源库

```python
pip install opencv-python -i http://mirrors.aliyun.com/pypi/simple/
```

- opencv打开图像

  imread(filename)

- 显示图像

  imshow('image', image_np)

- 保存图像

  imwrite(路径, image_np)

- 图像缩放

  resize(src, dsize, fx=0.5, fy=0.5)

- 绘制集合图像（直线，圆形，矩形，添加文字）

- opencv如何操作摄像头

  







