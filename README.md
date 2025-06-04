# 🥚 Electron-Job

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/NextEraAbyss/electron-job.svg?style=for-the-badge&logo=github)](https://github.com/NextEraAbyss/electron-job/stargazers)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)



**🚀 跨平台桌面软件快速开发框架**

*基于 Electron + Vue3 + Vite + TypeScript 的企业级桌面应用解决方案*

[🎯 快速开始](#-快速开始) • [📖 在线文档](https://www.kaka996.com/) • [🎪 在线演示](http://demo.gin-vue-admin.com) • [💬 加入社区](#-社区交流)

</div>

---

## 🌟 项目简介

Electron-Job 是一个简单易用、功能强大的桌面软件开发框架。通过Electron和现代前端技术，让每一位开发者都能快速构建跨平台桌面应用。

### ✨ 为什么选择 Electron-Job？

- 🎯 **开箱即用** - 预配置完整的开发环境，5分钟内启动项目
- 🚀 **高性能** - 基于最新的 Electron 31 + Vue 3 + Vite 技术栈
- 📱 **跨平台** - 一套代码，支持 Windows、macOS、Linux 全平台
- 🔧 **可扩展** - 模块化架构，支持插件扩展
- 🛡️ **安全稳定** - 内置安全机制，支持代码加密混淆
- 🎨 **现代化UI** - 集成 Tailwind CSS，快速构建美观界面

## 📊 技术栈

### 前端技术

- **🎨 UI框架**: Vue 3.5+ (Composition API)
- **⚡ 构建工具**: Vite 5.4+
- **🎭 CSS框架**: Tailwind CSS 3.4+
- **🧭 路由管理**: Vue Router 4
- **📦 状态管理**: Pinia
- **🔧 工具链**: TypeScript, ESLint, Prettier

### 桌面端技术

- **🖥️ 桌面框架**: Electron 31+
- **🔧 构建工具**: Electron Builder
- **🔄 自动更新**: Electron Updater
- **📦 核心引擎**: ee-core 4.1+
- **🛡️ 安全策略**: CSP (内容安全策略), 代码混淆
- **🔌 系统集成**: 系统托盘, 原生菜单, 全局快捷键

### 开发工具

- **📝 代码编辑**: 支持 VS Code, WebStorm
- **🐛 调试工具**: Chrome DevTools 集成
- **📱 热重载**: 前端 + 主进程热更新
- **📦 打包部署**: 自动化构建流程
- **🔄 CI/CD**: GitHub Actions, Jenkins, GitLab CI

## 🚀 快速开始

### 📋 环境要求

- **Node.js**: >= 16.14.0
- **npm/pnpm**: 最新版本
- **Git**: 最新版本
- **操作系统**: Windows 10+, macOS 10.15+, Ubuntu 18.04+

### ⚡ 一键启动

```bash
# 克隆项目
git clone https://github.com/dromara/electron-egg.git
cd electron-egg

# 安装依赖
npm install
# 或使用 pnpm (推荐)
pnpm install

# 启动开发环境
npm run dev

# 🎉 应用将在几秒内启动！
```

### 🏗️ 项目结构

```
electron-job/
├── 📁 frontend/              # 前端源码 (Vue3 + Vite)
│   ├── 📁 src/
│   │   ├── 📁 views/         # 页面组件
│   │   ├── 📁 components/    # 公共组件
│   │   ├── 📁 router/        # 路由配置
│   │   ├── 📁 utils/         # 工具函数
│   │   └── 📁 assets/        # 静态资源
│   ├── 📄 package.json
│   └── 📄 vite.config.js     # Vite 配置
├── 📁 electron/              # Electron 主进程
├── 📁 public/                # 静态资源
├── 📁 build/                 # 构建配置
├── 📄 package.json           # 项目配置
└── 📄 README.md
```

## 🎯 核心功能

### 🖥️ 桌面应用特性

- ✅ **多窗口管理** - 支持主窗口、子窗口、模态窗口
- ✅ **系统托盘** - 最小化到系统托盘，后台运行  
- ✅ **原生菜单** - 自定义应用菜单和右键菜单
- ✅ **文件操作** - 文件读写、拖拽、系统对话框
- ✅ **系统通知** - 原生系统通知推送
- ✅ **快捷键** - 全局和局部快捷键支持

### 🔧 开发工具

- ✅ **热重载** - 前端和主进程代码热更新
- ✅ **调试工具** - 集成 Chrome DevTools
- ✅ **代码生成** - 自动生成页面和组件模板
- ✅ **打包构建** - 自动化打包多平台安装包
- ✅ **代码加密** - 源码混淆和加密保护
- ✅ **自动更新** - 内置应用自动更新机制

### 🛡️ 企业级特性

- ✅ **安全防护** - CSP安全策略，防XSS攻击
- ✅ **性能优化** - 内存管理，CPU优化
- ✅ **错误监控** - 崩溃日志收集和分析
- ✅ **数据存储** - 支持 SQLite、JSON文件存储
- ✅ **网络请求** - HTTP/HTTPS 请求封装
- ✅ **插件系统** - 可扩展的插件架构

## 📦 构建部署

### 🏗️ 构建命令

```bash
# 构建前端资源
npm run build-frontend

# 构建 Electron 主进程
npm run build-electron

# 完整构建 (前端 + 主进程 + 加密)
npm run build

# 平台特定构建
npm run build-w      # Windows x64
npm run build-m      # macOS
npm run build-l      # Linux
npm run build-m-arm64  # macOS ARM64
```

### 📱 支持平台

| 平台 | 支持版本 | 安装包格式 |
|------|----------|------------|
| 🪟 **Windows** | Windows 10+ | `.exe`, `.msi` |
| 🍎 **macOS** | macOS 10.15+ | `.dmg`, `.app` |
| 🐧 **Linux** | Ubuntu 18.04+ | `.AppImage`, `.deb`, `.rpm` |
| 🇨🇳 **国产OS** | UOS, Deepin, 麒麟 | `.deb`, `.rpm` |

## 🚀 自动化部署

### 📋 CI/CD配置

```yaml
# .github/workflows/build.yml
name: Build and Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build
```

### 📊 GitHub Actions完整配置

```yaml
# .github/workflows/release.yml
name: Build and Release
on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Build Windows
        if: matrix.os == 'windows-latest'
        run: npm run build-w
      
      - name: Build macOS
        if: matrix.os == 'macos-latest'
        run: npm run build-m
      
      - name: Build Linux
        if: matrix.os == 'ubuntu-latest'
        run: npm run build-l
      
      - name: Upload Artifacts
        uses: actions/upload-artifact@v3
        with:
          name: electron-job-${{ matrix.os }}
          path: build/
      
      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          files: |
            build/*.exe
            build/*.dmg
            build/*.AppImage
            build/*.deb
            build/*.rpm
```

## 🛡️ 安全最佳实践

### 🔒 保护用户数据

- **加密本地存储** - 敏感数据加密存储
- **安全凭证管理** - 安全存储密钥和凭证
- **最小权限原则** - 只请求必要的系统权限

### 🛠️ 应用安全

- **CSP策略** - 防止XSS攻击
- **源码保护** - 代码混淆和加密
- **禁用危险API** - 限制potentiallyDangerousAPI
- **输入验证** - 防止命令注入和恶意输入
- **安全更新机制** - 签名验证的自动更新

## 🎯 性能优化

### ⚡ 资源优化

- **按需加载** - 模块懒加载
- **渲染进程优化** - 减少不必要的DOM操作
- **主进程优化** - 避免阻塞主进程
- **内存管理** - 防止内存泄漏

### 🚀 打包优化

- **减小包体积** - Tree Shaking, 代码分割
- **预编译模块** - 优化原生模块
- **多进程构建** - 提高构建速度
- **静态资源优化** - 压缩图片和其他静态资源

## 📚 最佳实践

### 🧩 架构设计

- **主进程/渲染进程分离** - 清晰的职责划分
- **模块化设计** - 功能模块化，方便扩展
- **IPC通信优化** - 高效的进程间通信
- **状态管理** - 使用Pinia管理应用状态

### 🔄 开发工作流

- **Git工作流** - 分支策略和提交规范
- **自动化测试** - 单元测试和E2E测试
- **文档生成** - 自动生成API文档
- **版本管理** - 语义化版本控制

## 🌎 国际化支持

- **多语言支持** - i18n集成
- **RTL布局** - 支持右到左阅读布局
- **本地化日期和数字** - 根据地区格式化
- **本地化资源** - 按地区加载不同资源

## 🤝 社区交流

### 💬 即时通讯

<table>
<tr>
<td align="center">
<img src="./public/images/example/qq-group.png" width="200"/>
<br/>
<strong>QQ交流群</strong>
<br/>
622360840
</td>
<td align="center">
<img src="./public/images/example/wechat-group.png" width="200"/>
<br/>
<strong>微信交流群</strong>
<br/>
扫码加入
</td>
</tr>
</table>

### 🔗 社交媒体
- 📝 [知乎专栏](https://www.zhihu.com/people/electron-job)
- 🐦 [微博关注](https://weibo.com/electron-job)
- 📺 [B站频道](https://space.bilibili.com/electron-job)

## 🛠️ 开发指南

### 🔧 本地开发

```bash
# 前端开发 (带热重载)
npm run dev-frontend

# 主进程开发 (带热重载)  
npm run dev-electron

# 同时启动前端和主进程
npm run dev
```

### 🎨 自定义配置

```javascript
// vite.config.js - 前端构建配置
export default {
  plugins: [vue()],
  build: {
    outDir: 'dist'
  }
}

// electron-builder 配置
{
  "appId": "com.your-app.id",
  "productName": "Your App Name",
  "directories": {
    "output": "build"
  }
}
```

## 📄 开源协议

本项目采用 MIT License 开源协议。

```
Copyright 2024 Electron-Job Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

## 🔗 相关链接 | Links

- 🌐 **个人网站**: cv.wat.ink
- 📝 **技术博客**: blog.wat.ink
- 🛠️ **管理后台**: admin.wat.ink
- 🔌 **API文档**: api.wat.ink
- 👨‍💻 **GitHub**: @NextEraAbyss
- 🦄 **Gitee**: @NextEraAbyss

---

<div align="center">

**🌟 如果这个项目对您有帮助，请给个 Star 支持一下！**

<p>
  <img src="https://img.shields.io/github/stars/NextEraAbyss/electron-job?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/NextEraAbyss/electron-job?style=social" alt="GitHub forks">
</p>

*Built with ❤️ by [秦若宸](https://cv.wat.ink)*

**💼 展示您的全栈技术能力，成就技术人生！**

</div>