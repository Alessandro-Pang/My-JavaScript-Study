/*
 * @Author: your name
 * @Date: 2020-06-03 20:02:56
 * @LastEditTime: 2020-06-04 00:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\LoginRegister\index.ts
 */

import React from "react";
import { Link, Route } from "react-router-dom";
import {
  LoginRegisterWrapper,
  Logo,
  MainWrapper,
  Maintitle,
  SinginContainer,
  LoginForm,
  MoreSignWrapper,
} from "./style";
import LogoPic from "../../static/logo.png";

const Login: Function = (props: any) => {
  return (
    <LoginForm action="">
      <div>
        <i className="iconfont">&#58896;</i>
        <input type="username" placeholder="手机号或邮箱" />
      </div>
      <div>
        <i className="iconfont">&#58952;</i>
        <input type="password" placeholder="密码" />
      </div>
      <div className="login-tools">
        <div>
          <input type="checkbox" name="" id="remember" />
          <label htmlFor="remember">记住我</label>
        </div>
        <div>
          <a href="javscript:;"> 登陆遇到问题？ </a>
        </div>
      </div>
      <div>
        <input type="submit" name="" id="" value="登录" />
      </div>
    </LoginForm>
  );
};

const LoginRegister: Function = (props: any) => {
  return (
    <Route to="/login-register">
      <LoginRegisterWrapper>
        <Link to="/">
          <Logo src={LogoPic}></Logo>
        </Link>
        <MainWrapper>
          <Maintitle>
            <Link to="/login-register/login">
              <h4 className={"active"}>登录</h4>
            </Link>
            <b>{"·"}</b>
            <Link to="/login-register/register">
              <h4>注册</h4>
            </Link>
          </Maintitle>
          <SinginContainer>
            <Route path="/login-register/login">
              <Login></Login>
            </Route>
            <Route path="register"> Register </Route>
          </SinginContainer>
          <MoreSignWrapper>
            <div>社交帐号登录</div>
            <ul>
              <li>
                <i className="iconfont">&#58911;</i>
              </li>
              <li>
                <i className="iconfont">&#59114;</i>
              </li>
              <li>
                <i className="iconfont">&#59098;</i>
              </li>
            </ul>
          </MoreSignWrapper>
        </MainWrapper>
      </LoginRegisterWrapper>
    </Route>
  );
};

export default LoginRegister;
