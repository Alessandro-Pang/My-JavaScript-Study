import { connect } from "react-redux";
import Header from "../../components/Header/index";
import * as actionCreators from "../../actions/actionCreators";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import immutable from "immutable";
import { ElementRef } from "react";

const mapStateToProps = ({ headerReduces,loginReducers}: any) => {
  return {
    focus: headerReduces.get("focusd"),
    mouseIn: headerReduces.get("mouseIn"),
    list: headerReduces.get("list"),
    page: headerReduces.get("page"),
    user_login_state: loginReducers.get("user_login_state"),
  };
};

const get_list = (list: immutable.List<string>) => list;
const dataSourceSelector = createSelector(get_list, (list) => {
  //避免重复计算
  let size = Math.floor(list.size / 10);
  let totalPage = list.size % 10 === 0 ? size : size + 1;
  return totalPage;
})
/**
 * 防抖节流标志：tag
 */
let tag = false;
const mapDispatchToProps = (dispatch: any): object => ({
  actions: bindActionCreators(
    {
      input_blur: actionCreators.input_blur,
      hotbox_mouseIn: actionCreators.hotbox_mouseIn,
      hotbox_mouseOut: actionCreators.hotbox_mouseOut
    },
    dispatch
  ),

  handleInputFocus: (focus: boolean, page: number, list: immutable.List<string>):void => {
    dispatch(actionCreators.input_focus(focus));

    if (!list.size) {
      //避免多次查询
      dispatch(actionCreators.get_hotbox_list());
    }

    dispatch(actionCreators.get_hotbox_page(page));
  },

  handleClickInBatch: (page: number, list: immutable.List<string>, spinIcon: ElementRef<"i">):void => {
    //规定用户每秒可点击一次，从而处理防抖节流
    if (tag) return
    tag = true;
    /*
      如果使用 360 * page 动态计算角度
      会存在一个BUG,当input失去焦点，再次获取焦点时
      当前transform 会返回空，点击 `换一批` 将会使 0deg -> 360 * page
    */
    spinIcon.style.transition = "all .8s linear"
    spinIcon.style.transform = "rotate(360deg)";

    let timer = setTimeout(() => {
      tag = false;
      //每次结束清空rotate
      spinIcon.style.transition = "none"
      spinIcon.style.transform = "rotate(0)"
      clearTimeout(timer);
    }, 1000)

    let totalPage = dataSourceSelector(list);
    if (page < totalPage) {
      dispatch(actionCreators.get_hotbox_page(page + 1));
    } else {
      dispatch(actionCreators.get_hotbox_page(1));
    }
  },
  handleClickLogout: ():void => {
    const logout = window.confirm("确定要退出登陆吗？");
    if (logout) {
      dispatch(actionCreators.login_user_error("error"));
      dispatch(actionCreators.get_username(""));
      dispatch(actionCreators.get_password(""));
    } else {
      return;
    }
    const timer = setTimeout(() => {
      alert("退出成功!");
      clearTimeout(timer);
    }, 1000);
  },
  handleClickLoginRegister: (props: string):void => {
    if (props === "login" || props === "register") {
      dispatch(actionCreators.login_or_register(props));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
