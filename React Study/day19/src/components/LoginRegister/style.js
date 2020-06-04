/*
 * @Author: your name
 * @Date: 2020-06-03 20:03:03
 * @LastEditTime: 2020-06-04 00:05:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\LoginRegister\style.js
 */ 

 import style from "styled-components";

export const LoginRegisterWrapper = style.div`
  display:flex;
  justify-content:center;
  align-items:start;
  width:100%;
  height:100vh;
  background-color:#f1f1f1;
  padding-top:45px;
  margin-left:-5px;
`

export const Logo = style.img`
  position:absolute;
  top:27px;
  left:10px;
  width:180px;
`

export const MainWrapper = style.div`
  margin-top:52px;
  display:flex;
  justify-content:center;
  width:400px;
  height:80vh;
  border-radius:4px;
  box-shadow:0 0 10px #ddd;
  padding:50px 50px 30px;
  flex-direction:column;
  background-color:#fff;
`

export const Maintitle = style.div`
  display:flex;
  height:50px;
  width:100%;
  justify-content:center;
  align-items:center;
  margin-bottom:15px;
  
  h4{
    font-size:18px;
    margin:0 18px;
    display:flex;
    height:43px;
    width:58px;
    justify-content:center;
    align-items:center;
    white-space: nowrap;
  }

  b{
    font-size:12px;
    font-weight:bold;
  }

  a{
    text-decoration:none;
    display:flex;
    height:43px;
    justify-content:center;
    align-items:center;
  }

  a:active{
    font-weight:bold; 
    color:red
  }

  .active{
    border-bottom:2px solid #ea6f5a;
    color:#ea6f5a;
    font-weight:bold;
  }
`

export const SinginContainer = style.div`
  height:calc( 100% - 200px );
  width:100%;
  margin-top:35px;
`

export const LoginForm =style.form`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  input{
    box-sizing:border-box;
    width:300px;
    height:50px;
    padding:4px 12px 4px 35px;
    color: #a0a0a0;
    background-color:hsla(0,0%,71%,.1);
  }

  & > div{
    display:flex;
    flex-direction:row;
    position:relative;
  }

  .iconfont{
    position:absolute;
    left:10px;
    top:14px;
    font-size:18px;
  }

  & > div:nth-of-type(1) > input{
    border:1px solid #bbb;
    border-bottom-width:0;
    border-radius:4px 4px 0 0;
  }

  & > div:nth-of-type(2) > input{
    border:1px solid #bbb;
    border-radius: 0 0 4px 4px;
  }

  div.login-tools{
    display:flex;
    flex-direaction:row;
    flex:1;
    width:100%;
  }
  
  div.login-tools > div:nth-of-type(1){
    display:flex;
    width:50%;
    justify-content:start;
    align-items:center;
    font-size:15px;
  }

  div.login-tools > div:nth-of-type(2){
    display:flex;
    width:50%;
    justify-content:end;
    align-items:center;
    font-size:14px;

    a{
      text-decoration:none;
    }
  }

  input[type="checkbox"]{
    width:5px;
    outline:none;
  }

  input[type="submit"]{
    height:45px;
    border:0px;
    color:#fff;
    padding:0;
    background-color:#259cfa;
    border-radius:25px;
    font-size:18px;
    transition:all 0.2s linear;
  }

  input[type="submit"]:hover{
    background-color:#187cb7;
  }
`

export const MoreSignWrapper = style.div`
  display:flex;
  justify-content:start;
  height:150px;
  margin-top:40px;
  padding:15px 5px;
  width:100%;
  font-size:13px;
  position:relative;
  flex-direction:column;
  align-items:center;

  &::before{
    content:"";
    display:block;
    position:absolute;
    border-top: 1px solid #b5b5b5;
    width:60px;
    height:0;
    top:21px;
    left:30px
  }

  &::after{
    content:"";
    display:block;
    position:absolute;
    border-top: 1px solid #b5b5b5;
    width:60px;
    height:0;
    top:21px;
    right:30px
  }

  ul{
    margin-top:20px;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }

  ul > li{
    width:33%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }

  .iconfont{
    font-size:28px;
  }
  li:nth-of-type(1)>.iconfont{
    color:#e05244;
  }
  li:nth-of-type(2)>.iconfont{
    color:#00bb29;
  }
  li:nth-of-type(3)>.iconfont{
    color:#498ad5;
  }
`