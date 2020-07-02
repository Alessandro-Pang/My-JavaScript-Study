import { connect } from "react-redux";
import HotArticleList from "@/hotArticleList";
import { hot_article_list } from "./store/actionCreators";

const mapStateToProps = (state) => {
  return {
    articleList: state.ArticleList.articleList,
    hotList: state.HotArticleList.hotList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  initHotList: (data) => {
    if (!data.rows) return;
    const dataList = data.rows.map(items=>items).concat();
    dataList.sort((a, b) => b.pageview - a.pageview);
    dispatch(hot_article_list(dataList.slice(0,10)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HotArticleList);
