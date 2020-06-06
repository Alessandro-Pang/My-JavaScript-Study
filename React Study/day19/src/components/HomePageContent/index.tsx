/*
 * @Author: your name
 * @Date: 2020-05-29 23:13:50
 * @LastEditTime: 2020-06-03 20:29:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSections\index.ts
 */
import React from "react";
import PropType from "prop-types";
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

const HomePageContent = (props: any) => {
  const { articleList } = props;
  const newList = articleList.toJS();

  let article_list = newList.map((items: any) => {
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

  return (
    <HomeContentWrapper>
      <BannerWrapper src={bannerPic} />
      <ArticleWrapper>
        {article_list}
        <ShowMoreAticle>阅读更多</ShowMoreAticle>
      </ArticleWrapper>
    </HomeContentWrapper>
  );
};

HomePageContent.propTypes = {
  get_article_list: PropType.func,
  articleList: PropType.object,
};
export default HomePageContent;
