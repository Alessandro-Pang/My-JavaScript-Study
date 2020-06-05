import { connect } from "react-redux";
import LoginRegister from "../../components/LoginRegister";
// import {login_user_error} from "../../actions/actionCreators";

// const mapStateToPorps = (state: any) => ({
//   user_login_state: state.loginReducers.get("user_login_state"),
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   handleClickLayout:()=>{
//     dispatch(login_user_error("error"))
//   }
// });

export default connect(null,null)(LoginRegister);