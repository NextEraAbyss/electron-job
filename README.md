# 🥚 Electron-Job

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/dromara/electron-egg.svg?style=for-the-badge&logo=github)](https://github.com/dromara/electron-egg/stargazers)
[![Gitee Stars](https://gitee.com/dromara/electron-egg/badge/star.svg?theme=gvp)](https://gitee.com/dromara/electron-egg/stargazers)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge)](./LICENSE)
[![Version](https://img.shields.io/npm/v/ee-core.svg?style=for-the-badge)](https://www.npmjs.com/package/ee-core)

<img src="./public/images/example/logo.png" width="120" height="120" alt="Electron-Egg Logo" />

**🚀 跨平台桌面软件快速开发框架**

*基于 Electron + Vue3 + Vite + TypeScript 的企业级桌面应用解决方案*

[🎯 快速开始](#-快速开始) • [📖 在线文档](https://www.kaka996.com/) • [🎪 在线演示](http://demo.gin-vue-admin.com) • [💬 加入社区](#-社区交流)

</div>

---

## 🌟 项目简介

Electron-Egg 是一个简单易用、功能强大的桌面软件开发框架。通过Electron和现代前端技术，让每一位开发者都能快速构建跨平台桌面应用。

### ✨ 为什么选择 Electron-Egg？

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

### 开发工具

- **📝 代码编辑**: 支持 VS Code, WebStorm
- **🐛 调试工具**: Chrome DevTools 集成
- **📱 热重载**: 前端 + 主进程热更新
- **📦 打包部署**: 自动化构建流程

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
electron-egg/
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

## 🎪 应用案例

我们的框架已被广泛应用于各个领域：

### 🏢 企业应用
- **📊 ERP 系统** - 企业资源规划管理
- **📈 数据分析** - 实时数据可视化平台
- **💼 OA 办公** - 企业内部办公管理系统

### 🎯 工具软件  
- **📝 笔记应用** - 跨平台笔记管理工具
- **🎨 设计工具** - 图形设计和编辑软件
- **📱 系统工具** - 系统监控和优化工具

### 🎮 创意应用
- **🎵 音乐播放器** - 本地音乐管理播放
- **🎬 视频工具** - 视频编辑和转换工具
- **🎯 游戏辅助** - 游戏数据分析工具

## 📚 学习资源

### 📖 官方文档
- 🎯 [快速入门指南](https://www.kaka996.com/pages/e64ff6/)
- 📘 [API 参考文档](https://www.kaka996.com/pages/api/)
- 🛠️ [开发者指南](https://www.kaka996.com/pages/dev/)
- 💡 [最佳实践](https://www.kaka996.com/pages/best-practice/)

### 🎥 视频教程
- 📺 [B站教学视频](https://www.bilibili.com/video/BV1Rg411u7xH/)
- 🎬 [项目实战演示](https://www.bilibili.com/video/BV1x44y117TT/)
- 📖 [Golang基础教程](https://space.bilibili.com/322210472/)

### 🔗 相关链接
- 🌟 [ElectronJS 官网](https://www.electronjs.org/)
- 🎨 [Vue.js 官网](https://vuejs.org/)
- ⚡ [Vite 官网](https://vitejs.dev/)
- 🎭 [Tailwind CSS](https://tailwindcss.com/)

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
- 📝 [知乎专栏](https://www.zhihu.com/people/electron-egg)
- 🐦 [微博关注](https://weibo.com/electron-egg)
- 📺 [B站频道](https://space.bilibili.com/electron-egg)

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

## 📈 路线图

### 🎯 v4.2 (计划中)
- [ ] 🔥 **React 支持** - 新增 React 技术栈选项
- [ ] 🎨 **UI 组件库** - 内置桌面端 UI 组件
- [ ] 🔌 **插件市场** - 官方插件生态
- [ ] 📊 **性能面板** - 应用性能监控工具

### 🚀 v5.0 (规划中)
- [ ] ⚡ **Rust 后端** - 可选 Rust 原生模块
- [ ] 🌐 **Web 版本** - 支持 PWA 渐进式应用
- [ ] 🤖 **AI 集成** - 内置 AI 助手功能
- [ ] 🎯 **低代码** - 可视化应用构建器

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 🐛 Bug 报告
如果您发现了 bug，请[创建 issue](https://github.com/dromara/electron-egg/issues/new) 并包含：
- 操作系统和版本
- Node.js 版本  
- 详细的重现步骤
- 错误截图或日志

### 💡 功能建议
如果您有好的想法，请[创建 feature request](https://github.com/dromara/electron-egg/issues/new)

### 📝 代码贡献
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)  
5. 创建 Pull Request

## 📄 开源协议

本项目基于 [Apache 2.0](./LICENSE) 协议开源

```
Copyright 2024 Electron-Egg Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
```

## 🙏 致谢

### 💖 核心贡献者
- **哆啦好梦** - 项目创始人
- **wallace5303** - ee-core 核心开发
- **全体贡献者** - 感谢每一位贡献者的付出

### 🔗 相关项目
- [ee-core](https://github.com/wallace5303/ee-core) - 核心引擎
- [Dromara](https://dromara.org/) - 开源社区

### 🌟 特别感谢
感谢所有使用 Electron-Egg 的开发者和企业，你们的反馈让项目变得更好！

---

<div align="center">

**🎉 如果这个项目对您有帮助，请给我们一个 ⭐ Star！**

Made with ❤️ by [Dromara Community](https://dromara.org/)

</div>