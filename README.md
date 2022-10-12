# Kitty-plus(vite + vue2 + ts 组件开发模板)

  - 基于 vite3 - Typescript - Vue@2.6 - Less
  - 基于 [kittyui](https://gitee.com/geeksdidi/kittyui) 修改而来

## 安装 pnpm

  `npm i pnpm -g`

## 安装所有依赖

  `pnpm install`

## 本地测试
  1. `pnpm run build:utils`
  2. `pnpm run exm:dev`

## 打包

  `pnpm run build:kitty`

## 发布

  `pnpm run publish:kitty`

## 启动文档 (基于 vitePress 仅支持 vue@^3.0)

  `pnpm run docs:dev`

### 打包文档

  `pnpm run docs:build`

### 启动打包后文档服务

  `pnpm run docs:serve`

## TODO: 执行组件库测试

  `pnpm run test`

## 注意：
  1. 支持 `vue@^2.7` 需要替换插件 `vite-plugin-vue2` -> `@vitejs/plugin-vue2`
  2. 升级 `vite-plugin-dts` 版本
  3. 移除 `vue-template-compiler`
