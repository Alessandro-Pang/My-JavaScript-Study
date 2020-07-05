import { connect } from "react-redux";
import ArticleContent from "@/articleContent";
import { bindActionCreators } from "redux";
import { get_article_info, article_info } from "./store/actionCreators";

const mapStateToProps = (state) => {
  return {
    articleInfo: state.ArticleContent.articleInfo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ get_article_info, article_info }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContent);
