import { connect } from "react-redux";
import LoginRegister from "../../components/LoginRegister";
import {login_or_register} from "../../actions/actionCreators";

const mapStateToPorps = (state: any) => {
  return{
    login_or_register: state.loginReducers.get("login_or_register"),
}}

type props = "login" | "register" ;

const mapDispatchToProps = (dispatch: any) => ({
  handleClickLoginRegister: (props: props) => {
    dispatch(login_or_register(props));
  },
});

export default connect(mapStateToPorps,mapDispatchToProps)(LoginRegister);