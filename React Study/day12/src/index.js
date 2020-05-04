/*
 * @Author: your name
 * @Date: 2020-05-04 16:45:22
 * @LastEditTime: 2020-05-04 23:45:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day12\src\index.js
 */
import "@/redux-action/action01";
import "@/redux-action/action02";
import "@/redux-action/action03";
import "@/redux-action/action04"


/**
 * 1、warning: LF will be replaced by CRLF in ** 的原因及解决办法
 * 原因：
      LF和CRLF其实都是换行符，但是不同的是，LF是linux和Unix系统的换行符，CRLF是window 系统的换行符。
      这就给跨平台的协作的项目带来了问题，保存文件到底是使用哪个标准呢？ 
      git为了解决这个问题，提供了一个”换行符自动转换“的功能，并且这个功能是默认处于”自动模式“即开启状态的。
      这个换行符自动转换会把自动把你代码里 与你当前操作系统不相同的换行的方式 
      转换成当前系统的换行方式（即LF和CRLF 之间的转换），这样一来，当你提交代码的时候，
      即使你没有修改过某个文件，也被git认为你修改过了，
      从而提示"LF will be replaced by CRLF in *****"

    解决
       最简单的一种办法就是把自动转换功能关掉即可。
       输入命令 ：git config core.autocrlf false (仅对当前git仓库有效）
       git config --global core.autocrlf false (全局有效）
 * 
 * 2、git 提交的时候报错：error: 'folder/file' does not have a commit checked out
 *    // git add . 递归文件夹太深，需要手动添加
 *    解决方式： git add 'folder/file'
 */