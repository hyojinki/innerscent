import React from "react";
import * as S from "./Products.elements";
import {ContentArea} from "../../globalStyles";
import floralPic from "./floral_pic.png";
import floralDetail from "./floral_detail.png";
import muskPic from "./musk_pic.png";
import muskDetail from "./musk_detail.png";
import woodyPic from "./woody_pic.png";
import woodyDetail from "./woody_detail.png";
import howToUse from "./how_to_use.png";


const Products = () => {
  const bannerDetail = `
필름매거진이란, 카메라에 들어가는 필름을 담고있는 작은 알루미늄 용기를 말합니다.

행복한 추억을 담아준 필름매거진에게 다시 한 번 힘을 불어 넣어주고자, 
빈 용기를 감성적인 디자인으로 재탄생시켰습니다.
향 오일을 필름매거진에 떨어뜨려 방 안 가득 퍼지는 이너센트의 특별한 향을 느껴보세요.

패키지 구성품 : 필름매거진 용기 x3, 디자인 카드 x2, 스토리 엽서, 향 오일 20ml
  `;

  const floral = {
    pic : {floralPic}, 
    detail: "floral_detail.png"
  }

  const musk = {
    pic : "src/static/musk_pic.png", 
    detail: "src/static/musk_detail.png"
  }

  const woody = {
    pic : "src/static/woody_pic.png", 
    detail: "src/static/woody_detail.png"
  }

  return (
    <>
      <S.MainBanner>
        <S.BannerContentWrapper>
          <S.BannerTextWrapper>
            <S.BannerTitle>필름매거진 업사이클링 디퓨저</S.BannerTitle>
            <S.BannerDetail>
              {bannerDetail}
            </S.BannerDetail>
          </S.BannerTextWrapper>
          {/* <S.BannerImageWrapper>
            <S.BannerImg img={"https://images.pexels.com/photos/1808242/pexels-photo-1808242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/>
          </S.BannerImageWrapper> */}
        </S.BannerContentWrapper>
      </S.MainBanner>

      <ContentArea>
        <S.ProductContainer>
          <S.ProductPicContainer>
            <S.ProductPic img={floralPic}/>
          </S.ProductPicContainer>
          <S.ProductDetailContainer>
            <S.ProductDetail img={floralDetail}/>
          </S.ProductDetailContainer>
        </S.ProductContainer>

        <S.ProductContainer>
          <S.ProductPicContainer>
            <S.ProductPic img={muskPic}/>
          </S.ProductPicContainer>
          <S.ProductDetailContainer>
            <S.ProductDetail img={muskDetail}/>
          </S.ProductDetailContainer>
        </S.ProductContainer>

        <S.ProductContainer>
          <S.ProductPicContainer>
            <S.ProductPic img={woodyPic}/>
          </S.ProductPicContainer>
          <S.ProductDetailContainer>
            <S.ProductDetail img={woodyDetail}/>
          </S.ProductDetailContainer>
        </S.ProductContainer>
        <S.HowToUseContainer>
          <S.HowToUse img={howToUse}/>
        </S.HowToUseContainer>
      </ContentArea>
    </>
  )
}

export default Products;