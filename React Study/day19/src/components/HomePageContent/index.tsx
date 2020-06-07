/*
 * @Author: your name
 * @Date: 2020-05-29 23:13:50
 * @LastEditTime: 2020-06-06 20:10:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSections\index.ts
 */
import React, { PureComponent } from "react";
import {
  HomeContentWrapper,
  BannerWrapper,
  ArticleWrapper,
  SectionsWrapper,
  SectionTitle,
  SectionAbstract,
  Content,
  SectionImg,
  SectionTools,
  ShowMoreAticle,
} from "./style";

import bannerPic from "../../static/banner.bmp";
import sectionImgPic from "../../static/section.bmp";
import immutable from "immutable";

interface articleType{
  a_id:number,
  title:string,
  content:string
}
interface actionsType{
  get_article_list:Function
}
interface Props {
  articleList:immutable.List<articleType>,
  actions:actionsType
}

class HomePageContent extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.article_list = this.article_list.bind(this);
  }

  componentDidMount(){
    this.props.actions.get_article_list();
  }

  article_list(){
    const { articleList } = this.props;
    const newList = articleList.toJS();
    return newList.map((items: any) => {
      return (
        <SectionsWrapper key={items.a_id}>
          <Content>
            <SectionTitle>{items.title}</SectionTitle>
            <SectionAbstract>{items.content}</SectionAbstract>
            <SectionTools></SectionTools>
          </Content>
          <SectionImg src={sectionImgPic} />
        </SectionsWrapper>
      );
    });
  }
  /**
   * Warning: 
   *  Functions are not valid as a React child. 
   *  This may happen if you return a Component instead of <Component /> from render. 
   *  Or maybe you meant to call this function rather than return it.
   * 
   * 警告：
   *  函数作为受控子组件无效。
   *  如果从render返回组件而不是<Component/>，则可能会发生这种情况。
   *  或者你想调用这个函数而不是返回它。 
   * 
   * 错误原因是调用方法没有加括号 --> this.article_list
   */
  render() {
    return (
      <HomeContentWrapper>
        <BannerWrapper src={bannerPic} />
        <ArticleWrapper>
          {this.article_list()}
          <ShowMoreAticle>阅读更多</ShowMoreAticle>
        </ArticleWrapper>
      </HomeContentWrapper>
    );
  }
}

export default HomePageContent;
