import {connect} from "react-redux";
import Header from "common/header";

const mapStateToProps = state =>{
  return {
    menus:state.HeaderReducers.menus
  }
}

const mapDispatchToProps = dispatch =>({
  get_menu:dispatch({type:"header/get_menu_info"})
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)