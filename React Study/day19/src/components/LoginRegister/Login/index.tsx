/*
 *                                |~~~~~~~|
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *     |~.\\\_\~~~~~~~~~~~~~~xx~~~         ~~~~~~~~~~~~~~~~~~~~~/_//;~|
 *     |  \  o \_         ,XXXXX),                         _..-~ o /  |
 *     |    ~~\  ~-.     XXXXX`)))),                 _.--~~   .-~~~   |
 *      ~~~~~~~`\   ~\~~~XXX' _/ ';))     |~~~~~~..-~     _.-~ ~~~~~~~
 *               `\   ~~--`_\~\, ;;;\)__.---.~~~      _.-~
 *                 ~-.       `:;;/;; \          _..-~~
 *                    ~-._      `''        /-~-~
 *                        `\              /  /
 *                          |         ,   | |
 *                           |  '        /  |
 *                            \/;          |
 *                             ;;          |
 *                             `;   .       |
 *                             |~~~-----.....|
 *                            | \             \
 *                           | /\~~--...__    |
 *                           (|  `\       __-\|
 *                           ||    \_   /~    |
 *                           |)     \~-'      |
 *                            |      | \      '
 *                            |      |  \    :
 *                             \     |  |    |
 *                              |    )  (    )
 *                               \  /;  /\  |
 *                               |    |/   |
 *                               |    |   |
 *                                \  .'  ||
 *                                |  |  | |
 *                                (  | |  |
 *                                |   \ \ |
 *                                || o `.)|
 *                                |`\\) |
 *                                |       |
 *                                |       |
 */

import React, { useState, Fragment } from "react";
import { LoginForm } from "../style";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Dialog from "../../dialog";

const Login = (props: any) => {
  const {
    username,
    password,
    // remember,
    user_login_state,
    handleLoginSubmit,
    handleInputChange,
  } = props;

  let refs_username: any;
  let refs_password: any;
  let refs_remember: any;
  const handleClick = (e: any) => {
    e.preventDefault();
  };
  const [showDialog, setShowDialog] = useState(false);
  const handleClickAffirm = () => {
    setShowDialog(false);
  };

  const singin = () => {
    if (user_login_state === "success") {
      return (
        <Fragment>
          <Dialog
            text="登录成功,跳转中...."
            handleClickAffirm={handleClickAffirm}
            show={showDialog}
          />
          <Redirect to="/" />
        </Fragment>
      );
    } else if(user_login_state === "error"){
      return (
        <Dialog
          text="登录失败！"
          handleClickAffirm={handleClickAffirm}
          show={showDialog}
        />
      );
    }
  };
  return (
    <LoginForm>
      <div>
        <i className="iconfont">&#58896;</i>
        <input
          name="username"
          autoComplete="on"
          placeholder="手机号或邮箱"
          ref={(item) => (refs_username = item)}
          onChange={() => handleInputChange(refs_username)}
        />
      </div>
      <div>
        <i className="iconfont">&#58952;</i>
        <input
          type="password"
          name="password"
          autoComplete="on"
          placeholder="密码"
          ref={(item) => (refs_password = item)}
          onChange={() => handleInputChange(refs_password)}
        />
      </div>
      <div className="login-tools">
        <div>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            ref={(item) => (refs_remember = item)}
            onChange={() => handleInputChange(refs_remember)}
          />
          <label htmlFor="remember">记住我</label>
        </div>
        <div>
          <a href="/" onClick={handleClick}>
            登陆遇到问题？
          </a>
        </div>
      </div>
      <div>
        <input
          type="submit"
          name="submit"
          value="登录"
          onClick={() => {
            handleLoginSubmit(username, password);
            setShowDialog(true);
          }}
        />
      </div>
      {showDialog ? singin() : ""}
    </LoginForm>
  );
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  remember: PropTypes.bool,
  user_login_state: PropTypes.string,
  handleLoginSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};

export default Login;
