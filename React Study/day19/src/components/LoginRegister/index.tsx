/*
 * @Author: your name
 * @Date: 2020-06-03 20:02:56
 * @LastEditTime: 2020-06-05 00:28:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\LoginRegister\index.ts
 */

import React from "react";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";
import {
  LoginRegisterWrapper,
  Logo,
  MainWrapper,
  Maintitle,
  SinginContainer,
  MoreSignWrapper,
} from "./style";
import LogoPic from "../../static/logo.png";

import Login from "../../containers/LoginRegister/Login";

const LoginRegister = (props: any) => {

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

LoginRegister.propTypes = {
  user_login_state: PropTypes.string,
};
export default LoginRegister;
