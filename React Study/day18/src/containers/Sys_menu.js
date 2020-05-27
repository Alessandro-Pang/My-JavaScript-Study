/*
 * @Author: your name
 * @Date: 2020-05-25 22:42:28
 * @LastEditTime: 2020-05-26 22:00:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\containers\Sys_menu.js
 */

import { connect } from "react-redux";
import { handleAddMenu, showADDmenu } from "src/actions";
import Sys_menu from "@/Sys_menu";

const mapStateToProps = (state) => {
  return {
    data: state.openIndex.data,
    add: state.menuListData.add,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleAddMenu: (value) => dispatch(handleAddMenu(value)),
  handleOnClick: (add) => dispatch(showADDmenu(add)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sys_menu);
