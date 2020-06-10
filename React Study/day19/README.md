<!--
 * @Author: your name
 * @Date: 2020-05-28 09:00:39
 * @LastEditTime: 2020-06-09 08:29:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\README.md
-->

# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### 暴露 webpack 配置

**注意：这是单向操作。一旦暴露配置后，则无法回退操作.**

_一旦暴露 webpack 配置后，就只能通过 creact-react-app 重新创建项目恢复配置._

如果需要对生成工具和配置选项进行更改，可以随时`暴露配置项`。此命令将从项目中删除单个生成依赖项。

相反，它会将所有配置文件和可传递依赖项（webpack、Babel、ESLint 等）复制到您的项目中，这样您就可以完全控制它们。除了“eject”之外，所有的命令仍然可以工作，但是它们将指向复制的脚本，以便您可以调整它们。现在你只能靠自己了。

管理的功能集适合于中小型部署，中小型项目中不应该觉得有必要使用此功能。

但是，如果你需要加入`less`,`sass`,或者一些 `webpack plugin` 则要暴露出配置，进行更改和添加

注意：执行前需要对该项目执行`git add .`,`git commit`两个命令，这是强制性的，为了防止生成后反悔...
当你执行 `npm run eject`后，需要移除 `node_modules` ,重新执行 `npm install`，
如果你安装了其他的第三方库，则需要手动再执行一遍安装命令，甚至 react,react-dom也需要安装
如果需要暴露配置文件，建议在开始开发前，就执行命令，因为在开发时执行命令会存在一些未知的问题；

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
