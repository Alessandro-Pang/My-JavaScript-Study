import { connect } from "react-redux";
import Register from "../../../components/LoginRegister/Register";
import * as actionCreators from "../../../actions/actionCreators";

const mapStateToProps = (state:any) => ({
  username: state.registerReduces.get("username"),
  password: state.registerReduces.get("password"),
  phone: state.registerReduces.get("phone"),
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleRegisterSubmit: (username: string, password: string,phone:number) => {
    if(!username || !password || !phone){
      return alert("用户名/密码不能为空")
    }

    let loginInfo = {username,password,phone};

    dispatch(actionCreators.fetch_user_register(loginInfo));
  },
  handleInputChange: (ref: any) => {
    switch (ref.name) {
      case "username":
        return dispatch(actionCreators.get_register_username(ref.value));
      case "password":
        return dispatch(actionCreators.get_register_password(ref.value));
      case "phone":
        return dispatch(actionCreators.get_register_phone(ref.value));
      default:
        console.log(
          "%c" + new Error("not found form !"),
          "color:red;background:rgb(255,239,239)"
        );
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
