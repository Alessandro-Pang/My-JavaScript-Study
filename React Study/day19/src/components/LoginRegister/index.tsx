/*
 * @Author: your name
 * @Date: 2020-06-03 20:02:56
 * @LastEditTime: 2020-06-13 20:50:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\LoginRegister\index.ts
 */

import React, { useState, Fragment } from "react";
import { Link, Route, useLocation } from "react-router-dom";
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
import loadable from "@loadable/component";
import Dialog from "../dialog";
const LoginComponent = loadable(() =>
  import("../../containers/LoginRegister/Login")
);
const RegisterComponent = loadable(() =>
  import("../../containers/LoginRegister/Register")
);

const LoginRegister = (props: any) => {
  const { login_or_register, handleClickLoginRegister } = props;
  let locationRoute = useLocation().pathname;
  const [showDialog, setShowDialog] = useState(false);
  const handleClickAffirm = () => {
    setShowDialog(false);
  };
  return (
    <Route to="/login-register">
      <LoginRegisterWrapper>
        <Link to="/">
          <Logo src={LogoPic}></Logo>
        </Link>
        <MainWrapper>
          <Maintitle>
            <Link
              to="/login-register/login"
              onClick={() => handleClickLoginRegister("login")}
            >
              <h4
                className={
                  login_or_register === "login" ||
                  locationRoute === "/login-register/login"
                    ? "active"
                    : ""
                }
              >
                登录
              </h4>
            </Link>
            <b>{"·"}</b>
            <Link
              to="/login-register/register"
              onClick={() => handleClickLoginRegister("register")}
            >
              <h4
                className={
                  login_or_register === "register" ||
                  locationRoute === "/login-register/register"
                    ? "active"
                    : ""
                }
              >
                注册
              </h4>
            </Link>
          </Maintitle>
          <SinginContainer>
            <Route path="/login-register/login">
              <LoginComponent />
            </Route>
            <Route path="/login-register/register">
              <RegisterComponent />
            </Route>
          </SinginContainer>

          <MoreSignWrapper>
            <div>社交帐号登录</div>
            <ul>
              <li>
                <i
                  className="iconfont"
                  onClick={() => {
                    setShowDialog(true);
                  }}
                >
                  &#58911;
                </i>
              </li>
              <li>
                <i
                  className="iconfont"
                  onClick={() => {
                    setShowDialog(true);
                  }}
                >
                  &#59114;
                </i>
              </li>
              <li>
                <i
                  className="iconfont"
                  onClick={() => {
                    setShowDialog(true);
                  }}
                >
                  &#59098;
                </i>
              </li>
            </ul>
          </MoreSignWrapper>
        </MainWrapper>
        <Dialog
            text="功能未开通!"
            handleClickAffirm={handleClickAffirm}
            show={showDialog}
          />
      </LoginRegisterWrapper>
    </Route>
  );
};

LoginRegister.propTypes = {
  login_or_register: PropTypes.string.isRequired,
  handleClickLoginRegister: PropTypes.func,
};
export default LoginRegister;
