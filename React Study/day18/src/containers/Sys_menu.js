/*
 * @Author: your name
 * @Date: 2020-05-25 22:42:28
 * @LastEditTime: 2020-05-25 23:37:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\containers\Sys_menu.js
 */

import { connect } from "react-redux";
import { handleAddMenu, GetMenuList ,SHOW_ADD_MENU} from "src/actions";
import Sys_menu from "@/Sys_menu";

const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: [state.menuListData],
    add: false
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadData:()=>dispatch(GetMenuList()),
  handleAddMenu: () => dispatch(handleAddMenu()),
  handleOnClick: () => dispatch({type:SHOW_ADD_MENU}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sys_menu);
