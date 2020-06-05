import React from "react";
import { LoginForm } from "../style";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types"

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
          <a href="javscript:;"> 登陆遇到问题？ </a>
        </div>
      </div>
      <div>
        <input
          type="submit"
          name="submit"
          value="登录"
          onClick={() => handleLoginSubmit(username, password)}
        />
      </div>
      {user_login_state === "success" && <Redirect to="/" /> }
    </LoginForm>
  );
};

Login.propTypes = {
  username:PropTypes.string,
  password:PropTypes.string,
  remember:PropTypes.bool,
  user_login_state:PropTypes.string,
  handleLoginSubmit:PropTypes.func,
  handleInputChange:PropTypes.func,
}

export default Login;
