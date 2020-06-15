import React, { useEffect } from "react";
import {
  ArticleSiderWrapper,
  Author,
  AuthorWrapper,
  AuthorInfo,
  AuthorName,
  AuthorArticleInfo,
  AuthorForArticle,
  CommendAritleWrapper,
  CommendHeader,
  CommendInfo,
} from "./style";
import gg from "../../static/ggg/gg.bmp";
import gg2 from "../../static/ggg/gg2.bmp";
import headPortrait from "../../static/commendAutorHead/author.webp";

const ArticleSider = (props: any) => {
  let refs_commend: any;
  const scrollEvent = () => {
    let scrollHeight = window.scrollY;
    if (scrollHeight >= 530) {
      refs_commend.style.position = "fixed";
      refs_commend.style.top = "60px";
    } else {
      refs_commend.style.position = "static";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent, true);
    return () => {
      window.removeEventListener("scroll", scrollEvent, true);
    };
  });
  return (
    <ArticleSiderWrapper>
      <img alt="" src={gg} />
      <AuthorWrapper> 
        <Author>
          <div className="header">
            <img alt="" src={headPortrait} />
          </div>
          <AuthorInfo>
            <AuthorName>董克平日记</AuthorName>
            <AuthorArticleInfo>写了979k字 · 3.9k喜欢</AuthorArticleInfo>
          </AuthorInfo>
        </Author>
        <hr />
        <AuthorForArticle>
          <p>
            《平凡的世界》：孙少安与田润叶，从相恋到婚姻的跨越，爱情是基础，能过日子是关键
          </p>
          <span>阅读 1,358</span>
        </AuthorForArticle>
        <AuthorForArticle>
          <p>耐看，也是书法水平的一个重要评判标准，以田英章和卢中南为例</p>
          <span>阅读 34</span>
        </AuthorForArticle>
        <AuthorForArticle>
          <p>90后摆地摊买奥迪：没有勤快手脚和自我突破，钱不会自己掉下来</p>
          <span>阅读 95</span>
        </AuthorForArticle>
      </AuthorWrapper>
      <CommendAritleWrapper ref={(ref) => (refs_commend = ref)}>
        <CommendHeader>
          <div>推荐阅读</div>
        </CommendHeader>
        <CommendInfo>
          <p>你知道爱和喜欢的区别吗？</p>
          <span>阅读 32,621</span>
        </CommendInfo>
        <CommendInfo>
          <p>大三学姐的经验告诉你们，不要太晚知道</p>
          <span>阅读 22,649</span>
        </CommendInfo>
        <CommendInfo>
          <p>长大后，你得明白的10个潜规则</p>
          <span>阅读 24,830</span>
        </CommendInfo>
        <CommendInfo>
          <p>温柔入骨的仙句</p>
          <span>阅读 5,692</span>
        </CommendInfo>
        <CommendInfo>
          <p>温柔到爆炸的神仙句子</p>
          <span>阅读 4,398</span>
        </CommendInfo>
        <hr />
        <img alt="" src={gg2} />
      </CommendAritleWrapper>
    </ArticleSiderWrapper>
  );
};

export default ArticleSider;
