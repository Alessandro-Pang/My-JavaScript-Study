# 查看版本
$ npm -v
>>2.3.0

#升级 npm
cnpm install npm -g

# 升级或安装 cnpm
npm install cnpm -g

#在用 Vue.js 构建大型应用时推荐使用 NPM 安装：

# 最新稳定版
cnpm install vue

#命令行工具
#Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。

# 全局安装 vue-cli
npm install vue-cli -g

# 创建一个基于 webpack 模板的新项目
vue init webpack my-project

# 这里需要进行一些配置，默认回车即可
This will install Vue 2.x version of the template.

For Vue 1.x use: vue init webpack#1.0 my-project

? Project name my-project
? Project description A Vue.js project
? Author runoob <test@runoob.com>
? Vue build standalone
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes

   vue-cli · Generated "my-project".

   To get started:
   
     cd my-project
     npm install
     npm run dev
   
   Documentation can be found at https://vuejs-templates.github.io/webpack

#进入项目，安装并运行：
cd my-project
cnpm install
npm run dev

>> Listening at http://localhost:8080