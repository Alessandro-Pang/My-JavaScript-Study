import { connect } from "react-redux";
import Register from "../../../components/LoginRegister/Register";

import {
  get_register_username,
  get_register_phone,
  get_register_password,
  fetch_user_register
} from "../../../actions/actionCreators";

const mapStateToProps = (state: any) => ({
  username: state.registerReduces.get("username"),
  password: state.registerReduces.get("password"),
  phone: state.registerReduces.get("phone"),
});

const mapDispatchToProps = (dispatch: any) => ({
  handleRegisterSubmit: (username: string, password: string,phone:string) => {
    if(!username || !password || !phone){
      return alert("用户名/密码不能为空")
    }
    let loginInfo = {
      username,
      password,
      phone
    };
    dispatch(fetch_user_register(loginInfo));
  },
  handleInputChange: (ref: any) => {
    switch (ref.name) {
      case "username":
        return dispatch(get_register_username(ref.value));
      case "password":
        return dispatch(get_register_password(ref.value));
      case "phone":
        return dispatch(get_register_phone(ref.value));
      default:
        console.log(
          "%c" + new Error("not found form !"),
          "color:red;background:rgb(255,239,239)"
        );
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
