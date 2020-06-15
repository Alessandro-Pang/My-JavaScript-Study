import React, { useEffect } from "react";
import { ArticleContentWrapper } from "./style";
import { useParams } from "react-router-dom";

const ArticleContent = (props: any) => {
  const { article_list, article, article_content } = props;
  const { id } = useParams();

  useEffect(() => {
    //存在一个BUG,虽然现在这么写可以勉强解决...
    if(Number(id) !== Number(article_content.a_id)){
      article(article_list, id);
      window.scroll(0, 0);
    }
  })

  return (
    <ArticleContentWrapper>
      <p>
        <b>{article_content.title}</b>
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: article_content.content_info }}
      ></div>
    </ArticleContentWrapper>
  )
}

export default ArticleContent;
