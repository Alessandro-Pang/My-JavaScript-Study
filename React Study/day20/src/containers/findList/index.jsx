import { connect } from "react-redux";
import FindList from "@/findList";
import { bindActionCreators } from "redux"
import { get_findArticle } from "./store/actionCreators";

const mapStateToProps = (state) => {
  return {
    articleList: state.FindArticleList.articleList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ get_findArticle }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FindList);
