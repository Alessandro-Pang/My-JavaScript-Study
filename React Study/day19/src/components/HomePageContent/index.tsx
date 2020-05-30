/*
 * @Author: your name
 * @Date: 2020-05-29 23:13:50
 * @LastEditTime: 2020-05-30 00:09:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSections\index.ts
 */
import React from "react";
import { 
  HomeContentWrapper, 
  BannerWrapper, 
  ArticleWrapper, 
  SectionsWrapper 
} from './style';

import bannerPic from "../../static/banner.bmp"

const HomePageContent = (props: any) => {
  return (
    <HomeContentWrapper>
      <BannerWrapper src={bannerPic}/>
        
      <ArticleWrapper>
      
      </ArticleWrapper>
      <SectionsWrapper>

      </SectionsWrapper>
    </HomeContentWrapper>
  )
}

export default HomePageContent;