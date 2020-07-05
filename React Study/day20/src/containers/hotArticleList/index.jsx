import { connect } from "react-redux";
import HotArticleList from "@/hotArticleList";
import { get_hot_article_list } from "./store/actionCreators";

const mapStateToProps = (state) => {
  return {
    hotList: state.HotArticleList.hotList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  _get_hot_article:dispatch(get_hot_article_list())
});

export default connect(mapStateToProps, mapDispatchToProps)(HotArticleList);