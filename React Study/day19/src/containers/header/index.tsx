import { connect } from "react-redux";
import Header from "../../components/Header/index";
import {
  input_focus,
  input_blur,
  hotbox_mouseIn,
  hotbox_mouseOut,
  get_hotbox_list,
  get_hotbox_page,
  login_user_error,
  get_username,
  get_password,
  login_or_register,
} from "../../actions/actionCreators";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect"

const mapStateToProps = (state: any) => {
  return {
    focus: state.headerReduces.get("focusd"),
    mouseIn: state.headerReduces.get("mouseIn"),
    list: state.headerReduces.get("list"),
    page: state.headerReduces.get("page"),
    user_login_state: state.loginReducers.get("user_login_state"),
  };
};
const get_list = (list: any) => list;
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
    { input_blur, hotbox_mouseIn, hotbox_mouseOut },
    dispatch
  ),

  handleInputFocus: (focus: boolean, page: number, list: any) => {
    dispatch(input_focus(focus));

    if (!list.size) {
      //避免多次查询
      dispatch(get_hotbox_list());
    }

    dispatch(get_hotbox_page(page));
  },

  handleClickInBatch: (page: number, list: any, spinIcon: any) => {
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
      dispatch(get_hotbox_page(page + 1));
    } else {
      dispatch(get_hotbox_page(1));
    }
  },
  handleClickLogout: () => {
    const logout = window.confirm("确定要退出登陆吗？");
    if (logout) {
      dispatch(login_user_error("error"));
      dispatch(get_username(""));
      dispatch(get_password(""));
    } else {
      return;
    }
    const timer = setTimeout(() => {
      alert("退出成功!");
      clearTimeout(timer);
    }, 1000);
  },
  handleClickLoginRegister: (props: string) => {
    if (props === "login" || props === "register") {
      dispatch(login_or_register(props));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
