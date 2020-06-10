import React, { useEffect } from "react";
import { ArticleContentWrapper } from "./style";
import { useParams } from "react-router-dom"

const ArticleContent = (props: any) => {
  const { article_list, article, article_content } = props;
  const { id } = useParams();
  
  useEffect(() => {
    article(article_list, id);
  });

  return (
    <ArticleContentWrapper>
      {article_content}
    </ArticleContentWrapper>
  )
}


export default ArticleContent;