/*
 * @Author: your name
 * @Date: 2020-06-03 08:51:26
 * @LastEditTime: 2020-06-06 19:46:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\containers\content\index.ts
 */

import { connect } from "react-redux";
import HomePageContent from "../../components/HomePageContent";
import { get_article_list } from "../../actions/actionCreators";
import { bindActionCreators } from "redux";

const mapStateToProps = (state: any) => ({
  articleList: state.contentReduces.get("article_list"),
});

const mapDispatchToPorps = (dispatch: any) => ({
  actions:bindActionCreators({get_article_list},dispatch)
});

export default connect(mapStateToProps, mapDispatchToPorps)(HomePageContent);
