import { connect } from "react-redux";
import AticleContent from "../../../components/ArticlePageContent";
import * as actionCreators from '../../../actions/actionCreators'
import immutable from "immutable";
const mapStateToProps = (state: any) => ({
  article_list: state.contentReduces.get("article_list"),
  article_content: state.articleReducers.get("content")
});

const mapDispatchToprops = (dispatch: any) => ({
  article: (article_list: immutable.List<string>, article_id: number) => {
    let newList = article_list.toJS();
    if(!newList.length){
      dispatch(actionCreators.get_article_list());
    }
    newList.forEach((value: any) => {
      if (Number(value.a_id) === Number(article_id)) {
        dispatch(actionCreators.get_article_info(value));
      }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToprops)(AticleContent);

/**
 * -public
 * -src
 *   -common  //公共组件
 *   -page
 *     -component
 *     -store
 *       -reducer
 *       -constants
 *       -actionCreators
 *   -static
 *   -utils //常用函数
 *   -store
 *
 */