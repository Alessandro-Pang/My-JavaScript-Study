/*
 * @Author: your name
 * @Date: 2020-05-26 21:00:47
 * @LastEditTime: 2020-05-26 21:42:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day18\src\containers\index.js
 */

import { connect } from "react-redux";
import { GetMenuList, collapsed } from "src/actions";
import Index from "@/index";

const mapStateToProps = (state) => {
  return {
    collapsed: state.openIndex.collapsed,
    data: state.openIndex.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggle: (desc) => dispatch(collapsed(desc)),
  GetMenuList: () => dispatch(GetMenuList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
