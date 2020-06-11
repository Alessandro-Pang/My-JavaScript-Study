import React, { useEffect } from "react";
import { ArticleContentWrapper } from "./style";
import { useParams } from "react-router-dom"

const ArticleContent = (props: any) => {
  const { article_list, article, article_content } = props;
  const { id } = useParams();
  useEffect(()=>{
    //处理参数状态不变的问题
    if(Number(id) !== Number(article_content.a_id)){
      article(article_list,id)
    }
  })
  return (
    <ArticleContentWrapper>
    <p>
			<b>{article_content.title}</b>
		</p>
		<div dangerouslySetInnerHTML={{__html:article_content.content_info}}></div>
    </ArticleContentWrapper>
  )
}


export default ArticleContent;