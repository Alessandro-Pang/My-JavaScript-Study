import { connect } from "react-redux";
import Header from "../../components/Header/index";
import {
  input_focus,
  input_blur,
  hotbox_mouseIn,
  hotbox_mouseOut,
  get_hotbox_list,
  get_hotbox_page,
  login_user_error
} from "../../actions/actionCreators";

const mapStateToProps = (state: any) => {
  return {
    focus: state.headerReduces.get("focusd"),
    mouseIn: state.headerReduces.get("mouseIn"),
    list: state.headerReduces.get("list"),
    page: state.headerReduces.get("page"),
    user_login_state: state.loginReducers.get("user_login_state"),
  };
};

const mapDispatchToProps = (dispatch: Function): object => ({
  handleInputFocus: (focus: boolean, page: number, list: any) => {
    dispatch(input_focus(focus));

    if (!list.size) {
      //避免多次查询
      dispatch(get_hotbox_list());
    }
    dispatch(get_hotbox_page(page));
  },
  handleInputBlur: (focus: boolean) => dispatch(input_blur(focus)),
  handleMuseIn: (mouseIn: boolean) => dispatch(hotbox_mouseIn(mouseIn)),
  handleMuseOut: (mouseIn: boolean) => dispatch(hotbox_mouseOut(mouseIn)),
  handleClickInBatch: (page: number, list: any) => {
    let size = Math.floor(list.size / 10) ;
    let totalPage = list.size % 10 === 0 ? size : size + 1;
    if (page <= totalPage) {
      dispatch(get_hotbox_page(page + 1));
    } else {
      dispatch(get_hotbox_page(1));
    }
  },
  handleClickLayout:()=>{
    dispatch(login_user_error("error"))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
