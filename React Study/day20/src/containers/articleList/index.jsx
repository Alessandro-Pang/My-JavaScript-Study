import { connect } from "react-redux";
import ArticleList from "@/articleList";
import { bindActionCreators } from "redux";
import {
  get_article_info,
  article_limit_list,
  set_page_size,
  set_page,
} from "./store/actionCreators";

const mapStateToProps = (state) => {
  return {
    articleList: state.ArticleList.articleList,
    articleLimit: state.ArticleList.articleLimit,
    page_size: state.ArticleList.pagesize,
    page: state.ArticleList.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  _get_article_info: dispatch(get_article_info()),
  actions: bindActionCreators({ article_limit_list,set_page_size, set_page }, dispatch),
  handleClickUpdatePage: (props) => {
    const { number, type, page, page_size, articleList } = props;
    if (
      (type === "page" && number === page) ||
      (type === "size" && number === page_size)
    ) {
      window.scrollTo(0, 0);
      return false;
    }
    // 不直接修改 state 对象
    let [newPage, new_size] = [page, page_size];
    if (type === "page") {
      dispatch(set_page(number));
      newPage = number;
    } else if (type === "size") {
      dispatch(set_page_size(number));
      new_size = number;
    }
    const offset = newPage === 1 ? 0 : (newPage - 1) * new_size;
    const limit = newPage * new_size;
    const data = articleList.rows.slice(offset, limit);
    dispatch(article_limit_list(data));
    window.scrollTo(0, 0);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
