import React from "react";
import { RegisterForm } from "../style";

const Register: any = (props: any) => {
  const {
    username,
    password,
    phone,
    handleInputChange,
    handleRegisterSubmit,
  } = props;

  const hadleClick = (e: any) => {
    e.preventDefault();
  };

  let refs_username: any;
  let refs_phone: any;
  let refs_password: any;
  return (
    <RegisterForm>
      <div>
        <i className="iconfont">&#58896;</i>
        <input
          name="username"
          autoComplete="on"
          placeholder="你的昵称"
          ref={(item) => (refs_username = item)}
          onChange={() => handleInputChange(refs_username)}
        />
      </div>
      <div>
        <i className="iconfont">&#58913;</i>
        <input
          name="phone"
          autoComplete="on"
          placeholder="手机号"
          ref={(item) => (refs_phone = item)}
          onChange={() => handleInputChange(refs_phone)}
        />
      </div>
      <div>
        <i className="iconfont">&#58952;</i>
        <input
          type="password"
          name="password"
          autoComplete="on"
          placeholder="设置密码"
          ref={(item) => (refs_password = item)}
          onChange={() => handleInputChange(refs_password)}
        />
      </div>
      <div className="submit-warrper">
        <input
          type="submit"
          name="submit"
          value="注册"
          onClick={() => handleRegisterSubmit(username, password, phone)}
        />
      </div>
      <span className="user-agreenment">
        点击 “注册” 即表示您同意并愿意遵守简书
        <br />
        <a href="/" onClick={hadleClick}>
          用户协议
        </a>
        和
        <a href="/" onClick={hadleClick}>
          隐私政策
        </a>
        。
      </span>
    </RegisterForm>
  );
};

export default Register;
