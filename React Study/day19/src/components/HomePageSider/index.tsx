import React, { useState,ElementType } from "react";

//#region import style component

import {
  HomeSiderWrapper,BoardWrapper,BoardBanner,
  DownloadAppInfoWrapper,DownloadAppImg,
  DownloadAppInfo,DownloadBigImg,
  CommendAuthorWrapper,CommendWrapper,
  AuthorWrapper,CommendMoreWrapper,
  HeadPortrait,AuthorName,AuthorInfo,
  AuthorArticleInfo,FocusOnTheAuthor,
} from "./style";

//#endregion

import top1 from "../../static/commendBanner/top1.png";
import top2 from "../../static/commendBanner/top2.png";
import top3 from "../../static/commendBanner/top3.png";
import top4 from "../../static/commendBanner/top4.png";
import downloadInfo from "../../static/commendBanner/download-info.png";
import headPortrait from "../../static/commendAutorHead/author.webp";

const HomePageSider:ElementType = (props: any) => {
  let [mouseIn, setMouseIn] = useState(false);

  const handleMouseDownload = () => {
    if (mouseIn) {
      return (
        <DownloadBigImg>
          <img src={downloadInfo} alt="" />
        </DownloadBigImg>
      );
    }
  };

  return (
    <HomeSiderWrapper>
      <BoardWrapper>
        <BoardBanner src={top1}></BoardBanner>
        <BoardBanner src={top2}></BoardBanner>
        <BoardBanner src={top3}></BoardBanner>
        <BoardBanner src={top4}></BoardBanner>
      </BoardWrapper>
      <DownloadAppInfoWrapper
        onMouseEnter={() => {
          setMouseIn(true);
        }}
        onMouseLeave={() => {
          setMouseIn(false);
        }}
      >
        <DownloadAppImg src={downloadInfo} />
        <DownloadAppInfo>
          <div className="title">下载简书手机APP &gt;</div>
          <div className="description">随时随地发现和创作内容</div>
        </DownloadAppInfo>
        {handleMouseDownload()}
      </DownloadAppInfoWrapper>
      <CommendAuthorWrapper>
        <CommendWrapper>
          <div>推荐作者</div>
          <div>
            <i className="iconfont">&#58909;</i>换一批
          </div>
        </CommendWrapper>
        <AuthorWrapper>
          <HeadPortrait>
            <img src={headPortrait} alt="" />
          </HeadPortrait>
          <AuthorInfo>
            <AuthorName>董克平日记</AuthorName>
            <AuthorArticleInfo>写了979k字 · 3.9k喜欢</AuthorArticleInfo>
          </AuthorInfo>
          <FocusOnTheAuthor>+关注</FocusOnTheAuthor>
        </AuthorWrapper>
        <AuthorWrapper>
          <HeadPortrait>
            <img src={headPortrait} alt="" />
          </HeadPortrait>
          <AuthorInfo>
            <AuthorName>董克平日记</AuthorName>
            <AuthorArticleInfo>写了979k字 · 3.9k喜欢</AuthorArticleInfo>
          </AuthorInfo>
          <FocusOnTheAuthor>+关注</FocusOnTheAuthor>
        </AuthorWrapper>
        <AuthorWrapper>
          <HeadPortrait>
            <img src={headPortrait} alt="" />
          </HeadPortrait>
          <AuthorInfo>
            <AuthorName>董克平日记</AuthorName>
            <AuthorArticleInfo>写了979k字 · 3.9k喜欢</AuthorArticleInfo>
          </AuthorInfo>
          <FocusOnTheAuthor>+关注</FocusOnTheAuthor>
        </AuthorWrapper>
        <AuthorWrapper>
          <HeadPortrait>
            <img src={headPortrait} alt="" />
          </HeadPortrait>
          <AuthorInfo>
            <AuthorName>董克平日记</AuthorName>
            <AuthorArticleInfo>写了979k字 · 3.9k喜欢</AuthorArticleInfo>
          </AuthorInfo>
          <FocusOnTheAuthor>+关注</FocusOnTheAuthor>
        </AuthorWrapper>
        <AuthorWrapper>
          <HeadPortrait>
            <img src={headPortrait} alt="" />
          </HeadPortrait>
          <AuthorInfo>
            <AuthorName>董克平日记</AuthorName>
            <AuthorArticleInfo>写了979k字 · 3.9k喜欢</AuthorArticleInfo>
          </AuthorInfo>
          <FocusOnTheAuthor>+关注</FocusOnTheAuthor>
        </AuthorWrapper>
        <CommendMoreWrapper>查看全部 &gt;</CommendMoreWrapper>
      </CommendAuthorWrapper>
    </HomeSiderWrapper>
  );
};

// HomePageSider.propTypes={

// }

export default HomePageSider;
