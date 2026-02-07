# Tauri

Tauri是基于Rust实现的多平台App解决方案，相较于Electron自带Chromiun和Node的臃肿，Tauri应用的体积非常小，这得益于Tauri使用操作系统所自带的渲染器（或者说WebView）。

## 核心特性

### 轻量级
- **小体积**：应用体积通常只有几MB，而不是Electron的几十MB
- **低内存占用**：使用系统WebView，不需要打包Chromium
- **快速启动**：启动时间比Electron应用快很多

### 安全性
- **默认安全**：采用零信任安全模型
- **权限控制**：细粒度的API权限管理
- **CSP支持**：内容安全策略保护

### 跨平台
- **Windows**：使用WebView2
- **macOS**：使用WKWebView
- **Linux**：使用WebKitGTK

## 架构设计

Tauri采用前后端分离的架构：

- **前端**：使用任何Web技术栈（React、Vue、Svelte等）
- **后端**：Rust核心，处理系统调用和业务逻辑
- **通信**：通过IPC（进程间通信）进行前后端交互

## Setup

### 环境准备

```shell
# 安装Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 安装系统依赖（Linux）
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev

# 安装系统依赖（macOS）
brew install gtk+3
```

### 创建项目

```shell
# 使用官方模板
pnpm create tauri-app
# 或
npm create tauri-app@latest
# 或
yarn create tauri-app

# 进入项目目录
cd tauri-app

# 安装依赖
pnpm install

# 开发模式
pnpm tauri dev
```

## 项目结构

```
tauri-app/
├── src-tauri/          # Rust后端代码
│   ├── src/
│   │   ├── main.rs     # 主入口
│   │   └── lib.rs      # 库文件
│   ├── Cargo.toml      # Rust依赖配置
│   ├── tauri.conf.json # Tauri配置
│   └── icons/          # 应用图标
├── src/                # 前端代码
│   ├── main.js
│   └── index.html
├── package.json
└── README.md
```

## 核心API

### Command（命令）

在Rust后端定义命令：

```rust
// src-tauri/src/main.rs
use tauri::command;

#[command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[command]
async fn async_greet(name: String) -> Result<String, String> {
    // 模拟异步操作
    tokio::time::sleep(tokio::time::Duration::from_millis(1000)).await;
    Ok(format!("Hello, {}!", name))
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, async_greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

在前端调用命令：

```javascript
// 前端JavaScript
import { invoke } from '@tauri-apps/api/tauri';

// 调用同步命令
const greeting = await invoke('greet', { name: 'World' });
console.log(greeting); // "Hello, World! You've been greeted from Rust!"

// 调用异步命令
try {
    const result = await invoke('async_greet', { name: 'Tauri' });
    console.log(result);
} catch (error) {
    console.error('Error:', error);
}
```

### 文件系统API

```javascript
import { readTextFile, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';

// 读取文件
const content = await readTextFile('app.conf', { dir: BaseDirectory.App });

// 写入文件
await writeTextFile('log.txt', 'Hello from Tauri!', { dir: BaseDirectory.App });
```

### 窗口管理

```javascript
import { appWindow } from '@tauri-apps/api/window';

// 最小化窗口
await appWindow.minimize();

// 最大化窗口
await appWindow.maximize();

// 关闭窗口
await appWindow.close();

// 设置窗口标题
await appWindow.setTitle('New Title');

// 监听窗口事件
appWindow.listen('tauri://close-requested', () => {
    console.log('Window is about to close');
});
```

### 系统托盘

```rust
// src-tauri/src/main.rs
use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayEvent};

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let tray_menu = SystemTrayMenu::new()
        .add_item(quit)
        .add_item(hide);
    let system_tray = SystemTray::new().with_menu(tray_menu);

    tauri::Builder::default()
        .system_tray(system_tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position: _,
                size: _,
                ..
            } => {
                println!("system tray received a left click");
            }
            SystemTrayEvent::MenuItemClick { id, .. } => {
                match id.as_str() {
                    "quit" => {
                        std::process::exit(0);
                    }
                    "hide" => {
                        let window = app.get_window("main").unwrap();
                        window.hide().unwrap();
                    }
                    _ => {}
                }
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### 通知

```javascript
import { sendNotification } from '@tauri-apps/api/notification';

// 发送通知
sendNotification({
    title: 'Tauri App',
    body: 'This is a notification from Tauri!',
    icon: 'icon.png'
});
```

## 配置文件

### tauri.conf.json

```json
{
  "build": {
    "beforeDevCommand": "npm run dev",
    "beforeBuildCommand": "npm run build",
    "devPath": "http://localhost:1420",
    "distDir": "../dist"
  },
  "package": {
    "productName": "tauri-app",
    "version": "0.0.0"
  },
  "tauri": {
    "allowlist": {
      "all": false,
      "shell": {
        "all": false,
        "open": true
      },
      "fs": {
        "all": true,
        "readFile": true,
        "writeFile": true,
        "scope": ["$APP/*"]
      }
    },
    "bundle": {
      "active": true,
      "targets": "all",
      "identifier": "com.tauri.dev",
      "icon": [
        "icons/32x32.png",
        "icons/128x128.png",
        "icons/icon.icns",
        "icons/icon.ico"
      ]
    },
    "security": {
      "csp": null
    },
    "windows": [
      {
        "fullscreen": false,
        "resizable": true,
        "title": "tauri-app",
        "width": 800,
        "height": 600
      }
    ]
  }
}
```

## Build

### 开发构建

```shell
# 开发模式（热重载）
pnpm tauri dev

# 检查配置
pnpm tauri info
```

### 生产构建

```shell
# 构建应用
pnpm tauri build

# 构建特定目标
pnpm tauri build --target x86_64-pc-windows-msvc

# 构建调试版本
pnpm tauri build --debug
```

### 构建产物

构建完成后，产物位于：
- **Windows**: `src-tauri/target/release/bundle/msi/`
- **macOS**: `src-tauri/target/release/bundle/dmg/`
- **Linux**: `src-tauri/target/release/bundle/deb/` 或 `appimage/`

## 最佳实践

### 1. 安全配置

```json
{
  "tauri": {
    "allowlist": {
      "all": false,
      "fs": {
        "scope": ["$APP/*", "$DOCUMENT/*"]
      }
    },
    "security": {
      "csp": "default-src 'self'; script-src 'self' 'unsafe-inline'"
    }
  }
}
```

### 2. 错误处理

```rust
#[command]
fn risky_operation() -> Result<String, String> {
    match std::fs::read_to_string("important.txt") {
        Ok(content) => Ok(content),
        Err(e) => Err(format!("Failed to read file: {}", e))
    }
}
```

### 3. 状态管理

```rust
use tauri::State;
use std::sync::Mutex;

struct AppState {
    counter: Mutex<i32>,
}

#[command]
fn increment_counter(state: State<AppState>) -> i32 {
    let mut counter = state.counter.lock().unwrap();
    *counter += 1;
    *counter
}

fn main() {
    tauri::Builder::default()
        .manage(AppState {
            counter: Mutex::new(0),
        })
        .invoke_handler(tauri::generate_handler![increment_counter])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## 与Electron对比

| 特性 | Tauri | Electron |
|------|-------|----------|
| 应用大小 | 3-15MB | 100-200MB |
| 内存占用 | 低 | 高 |
| 启动速度 | 快 | 慢 |
| 安全性 | 高（默认安全） | 中等 |
| 生态系统 | 新兴 | 成熟 |
| 学习曲线 | 中等（需要Rust） | 低 |
| 跨平台 | 是 | 是 |



