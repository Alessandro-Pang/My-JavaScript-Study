import { connect } from "react-redux";
import LoginRegister from "../../components/LoginRegister";
import { login_or_register,login_or_register_type } from "../../actions/actionCreators";
import { Dispatch } from "react";

const mapStateToPorps = ({loginReducers}:any) => {
  return {
    login_or_register: loginReducers.get("login_or_register"),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<login_or_register_type>) => ({
  handleClickLoginRegister: (props: string) => {
    dispatch(login_or_register(props));
  },
});

export default connect(mapStateToPorps, mapDispatchToProps)(LoginRegister);