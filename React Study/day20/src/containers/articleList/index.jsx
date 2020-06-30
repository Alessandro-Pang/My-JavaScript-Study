import { connect } from "react-redux";
import ArticleList from "@/articleList";
import { bindActionCreators } from "redux";
import {
  get_article_info,
  set_page_offset,
  set_page_size,
  set_page
} from "./store/actionCreators";

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
  return {
    articleList: state.ArticleListReducers.articleList,
    page_offset:state.ArticleListReducers.offset,
    page_size:state.ArticleListReducers.pagesize,
    page:state.ArticleListReducers.page
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { get_article_info, set_page_offset, set_page_size,set_page },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
