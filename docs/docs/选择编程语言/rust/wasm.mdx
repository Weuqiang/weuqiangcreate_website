# Rust + Web

目前Rust有两种方式运用在泛前端领域，分别是WebAssembly和Node-API

- WebAssembly，可以被使用在Web端和Node端，优点是可以兼容不同的平台。
- Node-API，只可以被使用在Node端，优点是性能更强，缺点是需要为每一个平台编译一份`.node`产物。



## WebAssembly

WebAssembly是一门偏向底层的类汇编语言，不仅能直接被浏览器解释执行，还能够和JavaScript代码进行相互调用，如今WASM通常会作为C++、Rust这类高级语言的编译产物来改进Web端的部分性能瓶颈。



### wasm-pack

`wasm-pack`是Rust官方提供的一站式构建、测试和发布工具，可以用来将Rust编译成WASM，在[官网](https://rustwasm.github.io/wasm-pack/)中即可进行全局安装。

一般我们会搭配`wasm-bindgen`、`js-sys`、`web-sys`、`wasm-bindgen-futures`来促进WASM模块和JS模块的交互性，完整的`Cargo.toml`配置信息如下：

``` toml title="Cargo.toml"
[package]
name = "hello_world"
version = "0.1.0"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2.84"
js-sys = "0.3.61"
wasm-bindgen-futures = "0.4.34"

[dependencies.web-sys]
version = "0.3.4"
features = [
  'Document',
  'Element',
  'HtmlElement',
  'Node',
  'Window',
]
```

``` rust title="lib.rs"
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, learn-wasm!");
}
```

- 用于构建工具打包，在Webpack中借助`@wasm-tool/wasm-pack-plugin`插件来实现，同时需要开启实验标志`experiments.asyncWebAssembly`

  ``` shell
  wasm-pack build # 用于webpack打包
  ```

- 不使用构建工具，直接Web加载

  ``` shell
  wasm-pack build --target web # 用于网页直接加载
  ```

- 用于Node环境

  ``` shell
  wasm-pack build --target node # 用于node环境
  ```

  



### wasm-bindgen

在上面的简单例子中我们通过使用`#[wasm_bindgen]`宏实现了WASM和JS模块的相互调用能力，通过手动定义各种方法的声明，我们能够在Rust代码中直接调用像`alert`、`console`这样的内置对象。



#### js-sys

该模块提供了JavaScript内置的标准对象的绑定，诸如`Object`、`Function`、`Reflect`、` WebAssembly`等等。

``` rust title="lib.rs"
use js_sys::{Function, Object, Reflect, WebAssembly};
```



#### web-sys

提供了各种Web API的绑定，诸如`Window`、`Document`等等。

``` rust title="lib.rs"
use wasm_bindgen::prelude::*;

// Called by our JS entry point to run the example
#[wasm_bindgen(start)]
pub fn run() -> Result<(), JsValue> {
    // Use `web_sys`'s global `window` function to get a handle on the global
    // window object.
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");

    // Manufacture the element we're gonna append
    let val = document.create_element("p")?;
    val.set_text_content(Some("Hello from Rust!"));

    body.append_child(&val)?;

    Ok(())
}
```





## Node-API

在Node环境中除了使用上一节介绍的WASM，我们还可以使用Node-API。众所周知，Node的源码是由C++编写而成的，它所提供的诸多内置模块`fs`、`path`、`http`等都是由C++实现的，除此之外Node甚至允许编写C++插件addons。根据Node的官方文档，它提供了几种方式来实现C++ addons，一种主流的方式是使用Node官方提供的Node-API接口来进行实现。而Rust社区中，又有人基于Node-API实现在Node项目中编写Rust代码，主流的库包括`neon`和`napi-rs`。



### @napi-rs

`@napi-rs`是一个用于构建预编译Node.js插件的框架，它允许你使用Rust编写高性能的Node.js模块。

#### 安装和设置

```shell
# 创建新项目
npm init napi
# 或
yarn create napi

# 安装依赖
npm install
```

#### 基本用法

```rust
// src/lib.rs
use napi::bindgen_prelude::*;

#[napi]
fn fibonacci(n: u32) -> u32 {
    match n {
        1 | 2 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[napi]
fn get_words() -> Vec<String> {
    vec!["hello".to_string(), "world".to_string()]
}

#[napi]
struct User {
    pub name: String,
    pub age: u32,
}

#[napi]
impl User {
    #[napi(constructor)]
    pub fn new(name: String, age: u32) -> Self {
        User { name, age }
    }

    #[napi(getter)]
    pub fn get_name(&self) -> &str {
        &self.name
    }

    #[napi]
    pub fn greet(&self) -> String {
        format!("Hello, I'm {} and I'm {} years old", self.name, self.age)
    }
}
```

#### JavaScript中使用

```javascript
// index.js
const { fibonacci, getWords, User } = require('./index.node');

console.log(fibonacci(10)); // 55
console.log(getWords()); // ['hello', 'world']

const user = new User('Alice', 25);
console.log(user.name); // 'Alice'
console.log(user.greet()); // "Hello, I'm Alice and I'm 25 years old"
```

#### 异步操作

```rust
use napi::bindgen_prelude::*;
use tokio::time::{sleep, Duration};

#[napi]
async fn async_task(ms: u32) -> Result<String> {
    sleep(Duration::from_millis(ms as u64)).await;
    Ok(format!("Task completed after {}ms", ms))
}

#[napi]
fn sync_task_with_callback(callback: JsFunction) -> Result<()> {
    let result = "Task completed";
    callback.call(None, &[result.into()])?;
    Ok(())
}
```

#### 构建配置

```toml
# Cargo.toml
[package]
name = "my-napi-project"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
napi = { version = "2", default-features = false, features = ["napi4"] }
napi-derive = "2"
tokio = { version = "1", features = ["full"] }

[build-dependencies]
napi-build = "2"
```

```json
// package.json
{
  "name": "my-napi-project",
  "version": "1.0.0",
  "main": "index.js",
  "types": "index.d.ts",
  "napi": {
    "name": "my-napi-project",
    "triples": {
      "defaults": true,
      "additional": [
        "x86_64-unknown-linux-musl",
        "aarch64-apple-darwin",
        "aarch64-unknown-linux-gnu",
        "aarch64-pc-windows-msvc"
      ]
    }
  },
  "scripts": {
    "artifacts": "napi artifacts",
    "build": "napi build --platform --release",
    "build:debug": "napi build --platform",
    "prepublishOnly": "napi prepublish -t npm",
    "test": "ava",
    "version": "napi version"
  },
  "devDependencies": {
    "@napi-rs/cli": "^2.0.0"
  }
}
```

#### 构建和发布

```shell
# 构建开发版本
npm run build:debug

# 构建生产版本
npm run build

# 构建所有平台
napi build --platform --release --strip

# 发布到npm
npm run prepublishOnly
npm publish
```

## WebAssembly vs Node-API 对比

| 特性 | WebAssembly | Node-API |
|------|-------------|----------|
| **兼容性** | 浏览器 + Node.js | 仅 Node.js |
| **性能** | 较好 | 更好 |
| **部署** | 单一文件 | 需要为每个平台编译 |
| **调用开销** | 有一定开销 | 几乎无开销 |
| **生态系统** | 标准化，跨平台 | Node.js 特定 |
| **学习曲线** | 中等 | 较陡峭 |
| **调试** | 较困难 | 相对容易 |

## 使用场景建议

### 选择 WebAssembly 当：
- 需要在浏览器和Node.js中都运行
- 对部署简单性有要求
- 性能要求不是极致
- 希望使用标准化技术

### 选择 Node-API 当：
- 只在Node.js环境中运行
- 需要极致性能
- 需要深度集成Node.js生态
- 可以接受为多平台编译的复杂性

## 最佳实践

### WebAssembly 最佳实践
1. **合理使用内存**：避免频繁的内存分配和释放
2. **减少JS-WASM边界调用**：批量处理数据而不是逐个处理
3. **使用合适的数据类型**：优先使用数值类型而不是字符串
4. **启用优化**：使用`wee_alloc`减少内存占用

### Node-API 最佳实践
1. **错误处理**：正确处理Rust的Result类型
2. **内存管理**：避免内存泄漏，正确管理生命周期
3. **异步操作**：使用tokio处理异步任务
4. **类型安全**：充分利用Rust的类型系统



