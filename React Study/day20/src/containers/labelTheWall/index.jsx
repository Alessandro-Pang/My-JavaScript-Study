import { connect } from "react-redux";
import LabelTheWall from "@/labelTheWall";
import { get_tag_list } from "./store/actionCreators"

const mapStateToProps = (state) => {
  return {
    tagList: state.LabelTheWall.tagList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  _get_tag_list:dispatch(get_tag_list())
});

export default connect(mapStateToProps,mapDispatchToProps)(LabelTheWall);
