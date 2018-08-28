# 根据vue-cli3.0搭建项目结构

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
###
```
 |--dist 生成打包后文件
 |--node_modules 安装的依赖包
 |--public public中的静态资源会被复制到输出目录(dist)中
 |--src
 |  |-- api 与后端交互使用相关方法和配置
 |  |   |-- services 对应组件使用的api方法和数据处理
 |  |   |   |-- instance.js 封装使用的ajax方法，拦截器等（我这里使用的axios）
 |  |   |   |-- about.js about组件相关的api
 |  |   |-- config.js 项目配置生产，开发，测试接口配置
 |  |   |-- index.js services文件api，统一出口，方便模块使用
 |  |   |-- resource.js 全局使用的常量
 |  |-- assets 放置一些静态资源，例如图片，图标，字体。
 |  |-- components 一些公共组件
 |  |-- router vue-router 相关配置
 |  |   |-- index.js 导出路由配置
 |  |   |-- routes.js 所有的路由
 |  |-- store vuex 相关配置
 |  |   |-- global 全局vuex使用的配置
 |  |   |   |-- actions.js 全局vuex actions方法
 |  |   |   |-- index.js 导出全局vuex配置
 |  |   |   |-- mutations.js 全局vuex mutations方法
 |  |   |   |-- state.js 全局vuex state
 |  |   |-- modules 模块化的vuex
 |  |   |   |-- index.js 将modules下的所有模块(about)导出
 |  |   |   |-- about.js about组件对应的vuex模块
 |  |   |-- index.js 导出vuex所有配置
 |  |-- views 所有的路由组件
 |  |-- |-- About /about 路由对应的文件
 |  |   |   |-- Child /about 路由对应下的子路由
 |  |-- App.vue 路由组件的顶层路由
 |  |-- main.js vue入口文件
 |  |-- utils.js 封装的工具函数，例如：时间格式化等
 |-- env.local 本地启动项目运行环境配置npx vue-cli-service serve 配置环境变量的文件
 |-- env.test 打测试包（vue-cli-service build --mode test）配置环境变量的文件（取决于--mode 后面的参数）
 |-- env.production 打生产包（vue-cli-service build）配置环境变量的文件
 |-- .gitignore 配置不提交到git仓库的文件
 |-- babel.config 参见https://cli.vuejs.org/zh/config/babel
 |-- vue.config.js 参见https://cli.vuejs.org/zh/config/#vue-config-js
```
###