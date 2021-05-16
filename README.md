# Vue 3 + Typescript + Vite

[This template should help get you started developing with Vue 3 and Typescript in Vite.](https://mp.weixin.qq.com/s/4aYlFZO8Cr1OGbMMb232og)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

## Update plugins (更新项目插件)

1. Install `npm-check-updates` 命令 [npm  install -g npm-check-updates]()
2. Update `npm-check-updates` 命令 [npm i -g npm-check-updates]()
2. Check `npm-check-updates` 命令 [npm-check-updates]() 简写 [ncu]()
3. Update `package.json` 命令 [ncu -u]()

## 配置打包项目运行环境

1. 全局安装express-generator生成器 命令 [npm install express-generator -g]()
2. 创建一个express项目 命令 [express expressProject]()
3. 进入项目目录 命令 [cd expressProject]()
4. 安装相关项目依赖 命令 [npm install]()
5. 将`Vue build`后生成的`dist`文件夹下的所有文件复制到express项目的`public`文件夹下面
6. 运行 [npm start]() 来启动express项目
