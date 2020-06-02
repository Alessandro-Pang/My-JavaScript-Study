/*
 * @Author: your name
 * @Date: 2020-05-29 23:13:50
 * @LastEditTime: 2020-06-01 22:55:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\components\HomePageSections\index.ts
 */
import React from "react";
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
  ShowMoreAticle
} from './style';

import bannerPic from "../../static/banner.bmp"
import sectionImgPic from "../../static/section.bmp"

const HomePageContent = (props: any) => {
  return (
    <HomeContentWrapper>
      <BannerWrapper src={bannerPic}/>
        
      <ArticleWrapper>
        <SectionsWrapper>
          <Content>
            <SectionTitle>
                真正的孤独（经典好文）
              </SectionTitle>
              <SectionAbstract>
                文：贾平凹 好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸，...
              </SectionAbstract>
              <SectionTools></SectionTools>
          </Content>
          <SectionImg src={sectionImgPic}/>
        </SectionsWrapper>

        <SectionsWrapper>
          <Content>
            <SectionTitle>
                真正的孤独（经典好文）
              </SectionTitle>
              <SectionAbstract>
                文：贾平凹 好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸，...
              </SectionAbstract>
              <SectionTools></SectionTools>
          </Content>
          <SectionImg src={sectionImgPic}/>
        </SectionsWrapper>

        <SectionsWrapper>
          <Content>
            <SectionTitle>
                真正的孤独（经典好文）
              </SectionTitle>
              <SectionAbstract>
                文：贾平凹 好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸，...
              </SectionAbstract>
              <SectionTools></SectionTools>
          </Content>
          <SectionImg src={sectionImgPic}/>
        </SectionsWrapper>

        <SectionsWrapper>
          <Content>
            <SectionTitle>
                真正的孤独（经典好文）
              </SectionTitle>
              <SectionAbstract>
                文：贾平凹 好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸，...
              </SectionAbstract>
              <SectionTools></SectionTools>
          </Content>
          <SectionImg src={sectionImgPic}/>
        </SectionsWrapper>

        <SectionsWrapper>
          <Content>
            <SectionTitle>
                真正的孤独（经典好文）
              </SectionTitle>
              <SectionAbstract>
                文：贾平凹 好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸，...
              </SectionAbstract>
              <SectionTools></SectionTools>
          </Content>
          <SectionImg src={sectionImgPic}/>
        </SectionsWrapper>
        <ShowMoreAticle>阅读更多</ShowMoreAticle>
      </ArticleWrapper>
    </HomeContentWrapper>
  )
}

export default HomePageContent;