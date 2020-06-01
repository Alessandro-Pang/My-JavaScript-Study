import React, { useState } from "react";
// import PropTypes from "prop-types";
import {
  HomeSiderWrapper,
  BoardWrapper,
  BoardBanner,
  DownloadAppInfoWrapper,
  DownloadAppImg,
  DownloadAppInfo,
  DownloadBigImg,
} from "./style";

import top1 from "../../static/commendBanner/top1.png";
import top2 from "../../static/commendBanner/top2.png";
import top3 from "../../static/commendBanner/top3.png";
import top4 from "../../static/commendBanner/top4.png";
import downloadInfo from "../../static/commendBanner/download-info.png";
const HomePageSider: Function = (props: any) => {
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
    </HomeSiderWrapper>
  );
};

// HomePageSider.propTypes={

// }

export default HomePageSider;
