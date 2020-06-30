import {connect} from "react-redux";
import Header from "common/header";
import {get_menu_info} from "./store/actionCreators"

const mapStateToProps = state =>{
  return {
    menus:state.HeaderReducers.menus
  }
}

const mapDispatchToProps = dispatch =>({
  _menusList:dispatch(get_menu_info())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)