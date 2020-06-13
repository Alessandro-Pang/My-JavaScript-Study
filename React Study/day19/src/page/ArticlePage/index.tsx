import React from 'react';
import Header from "../../containers/header"
import ArticleContent from "../../containers/article/Content"
import ArticleSider from "../../containers/article/Sider"
import {ArticlePageWrapper} from "./style";

const AticlePage = (props:any) =>{
    return (
      <ArticlePageWrapper>
        <Header />
        <ArticleContent/>
        <ArticleSider/>
      </ArticlePageWrapper>
    );
}

export default AticlePage;
