import { connect } from "react-redux";
import ArticleList from "@/articleList";

const mapStateToProps = (state) => {
  return {
    articleList: state.ArticleList.articleList,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
