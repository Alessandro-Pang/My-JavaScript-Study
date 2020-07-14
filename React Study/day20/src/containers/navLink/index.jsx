import { connect } from "react-redux";
import NavLink from "@/navLink";
import { get_navlink_list } from "./store/actionCreators";

const mapStateToProps = (state) => {
  return {
    navLinkList: state.NavLinkList.navLinkList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  _get_navlink_list: dispatch(get_navlink_list()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavLink);
