<!--
 * @Author: your name
 * @Date: 2020-06-06 21:38:05
 * @LastEditTime: 2020-06-15 11:09:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\commonReactLibrary.md
-->

# React 开发常用库

## 一、React 全家桶

- React

- React-DOM

- Porp-Types

- React-Router

- React-Router-Dom

- Redux

- React-Redux

- Redux-Thunk

- immutable

- redux-immutable

- styled-components

## 二、React 全家桶第二套方案

- axios

- Immer

- Reselect

- React 状态管理

  - MobX

  - Mobx State Tree

  - Stamen --from Mobx

  - Dva

  - Chunk

- Redux 异步

  - Redux observable
  
  - Redux-Saga

- Graph QL 的远程状态管理

  - Apollo Client

  - urql

  - Relay

- Tailwind CSS

  _Functional CSS_

- Redux DevTool

  - redux-devtools-extension

- 测试工具

  - Jest

  - Enzyme

## 三、React Webpack

- &:webpack

  - webpack-cli

  - webpack-dev-server

  - html-webpack-plugin

- &:babel

  - babel-loader

  - @babel/core

  - @babel/preset-env

  - @babel/preset-react

  - babel-plugin-transform-es2015-modules-commonjs

- style

  - style-loader

  - css-loader

- file

  - file-loader

  - url-loader

- &:postcss-loader

  - autoprefixer

  - precss

  - precss-loader

- webpack plugin

  - CleanWebpackPlugin

    _每次打包先清理build文件夹_
  
  - HotModuleReplacementPlugin

    _webpack自带热更新插件_

  - mini-css-extract-plugin

    _分离CSS, 但是对于JS in css OR Functional in CSS 没有用_

  - purifycss-webpack

    _puirfy-css 消除冗余CSS_

  - optimize-css-assets-webpack-plugin

    _压缩 css_

  - terser-webpack-plugin

    _压缩JS_

  - splitChunks

    _提取公共代码。。。React 似乎并不需要_

  - image-webpack-loader

    _图片压缩_

  - gZip

    _启动 GZIP 压缩，需要服务器配置_

## 四、 React UI 库

- Ant.Desgin

- Material UI

- Semantic UI

- Chakra UI

- Tailwind UI

- React Bootstrap

## React 其他第三方库

- React 组件拖动解决方案
  
  - react-beautiful-dnd

- React 组件异步加载

  - react-loadable

  - @loadable/component

  - @types/loadable__component

- 时间格式化解决方案

  - Momentjs

  - date-fns

  - Day.js

- React 动画库

  - react-motion

  - react-spring

  - Framer Motion

  - Animated (React Native)

  - React Transition Group

- React 可视化

  - nivo

  - Victory

  - react-vis

  - Recharts

  - Chart Parts

  - D3

- Raect 代码风格

  - ESLint

    _Airbnb 开源的 React style guide_

  - Prettier

- React 表单库

  - Formik

  - React Hook Form

- React 身份认证

  - Passport.js

  - Auth0

  - Firebase

    _身份验证 + 数据库_

  - AWS Cognito

    _身份验证 + 数据库_

- React 国际化

  - react-i18next

  - react-intl

  - LinguiJS

  - FBT

- React 富文本

  - Draft.js

  - Slate

- React Deaktop Application

  - Electron

  - NW.js

  - Neutralino.js

- React 支付

  - PayPal

  - Stripe Elements

  - Stripe Checkout

- React VR/AR

  - React 360

  - react-viro

  - react-native-arkit

- 原型设计

  - Sketch

  - Figma

  - Framer

- 书写文档

  - Styleguidist

  - docz

  -Docusaurus

## React 脚手架

- Creact-React-app

- Creact-React-app --typescipt

- Next

- Gatsby

- Rekit

- Codeandbox

- Codepen

- Stackblitz

# 项目解决方案

## 小型应用

- 程式样板: create-react-app

- 样式库: basic CSS and inline style

- 异步请求: fetch or axios

- 代码风格:无

- 类型检查:无

- 状态管理: React Hooks

- 路由: 无 or React Router

- 身份验证: Firebase

- 数据库: FirebaseUI

- 库: none

- 表单库: 无

- 测试库: Jest

- 实用程序库: JavaScript

- 国际化: react-i18nextReact

- 桌面: Electron

## 中型应用

- 样板文件: Next.js or Gatsby.js

- 样式库: CSS Modules or Styled Components

- 异步请求: fetch or axios

- 代码风格: Prettier,ESLint

- 类型检查: 无 或 TypeScript

- 状态管理: React Hooks and/or Apollo

- 路由: React Router

- 身份验证: Firebase

- 数据库: FirebaseUi

- 库: none 或 UI 组件库

- 表单库: none 或 Formik 或 React Hook Form

- 测试库: Jest with React Testing Library

- 实用程序库: JavaScript

- 国际化: react-i18nextReact

- 桌面: Electron

## 大型应用程序

- 样板文件: Next.js, Gatsby.js, custom setup

- 样式库: CSS Modules or Styled Components

- 异步请求: axios 或 Apollo Client

- 代码风格: Prettier,ESLint

- 类型检查: TypeScript

- 状态管理: React Hooks and/或者 Apollo/Redux/MobX

- 路由: React Router

- 认证: Node.js 服务 + Passport.js

- 数据库: SQL/NoSQL DB 提供 Node.js 服务

- Ui 库: UI 组件库

- 表单库: none 或者 Formik 或者 React Hook Form

- 测试库: Jest with React Testing Library and Cypress

- 实用程序库: Lodash

- 国际化: react-i18nextReact

- 桌面: Electron
