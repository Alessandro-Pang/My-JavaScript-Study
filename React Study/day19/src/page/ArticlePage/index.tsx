import React, { Fragment } from 'react';
import Header from "../../containers/header"
import ArticleContent from "../../containers/article/Content"

const AticlePage = (props:any) =>{
    return (
      <Fragment>
        <Header />
        <ArticleContent/>
      </Fragment>
    );
}

export default AticlePage;
