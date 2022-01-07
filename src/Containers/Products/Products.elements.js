import styled from "styled-components";
import productBannerImg from "../../static/product_banner.jpg";

export const MainBanner = styled.section`
  width: 100%;
  // height: 50vh;
  background-image: linear-gradient(
    rgba(000, 000, 000, 0.5),
    rgba(000, 000, 000, 0.5)
    ), url(${productBannerImg});
  background-size: cover;
  margin: 2% auto;
  margin-top: 16%;
  z-index: 1;
`;

export const BannerContentWrapper = styled.div`
  padding: 3% 20%;
  display: flex;
  justify-content: space-between;
`;

export const BannerTextWrapper = styled.div`
  margin: 1%;
  padding: 0 10%;
  // margin-right: 5%;
  text-align: left;
  opacity: 0.9;
`;

export const BannerImageWrapper = styled.div`
  width: 70%;
  // margin: 2% 7%;
`;


export const BannerImg = styled.img`
  width: 100%;
  height: 0;
  padding-top: 120%;
  ${(p) => 
    p.img
    ? `background-image: url(${p.img});`
    : `background-color: #000000;`
  };
  background-size: cover;
`;

export const BannerTitle = styled.h2`
  font-family: 'Noto Serif KR';
  font-weight: 300;
  // margin: 5% auto;
  margin-bottom: 10%;
  font-size: 1.7rem;
  color: #ffffff;
`;

export const BannerDetail = styled.p`
  font-size: 1rem;
  margin: 3% auto;
  line-height: 1.5rem;
  color: #ffffff;
  white-space: pre-wrap;
`;

export const ProductContainer = styled.div`
  width: 100%;
  margin: 14% auto;
  display: flex;
  justify-content: space-between;
`;

export const ProductPicContainer = styled.div`
  width: 40%;
  margin: auto;
`;

export const ProductPic = styled.img`
  width: 100%;
  height: 0;
  padding-top: 150%;
  ${(p) => 
    p.img
    ? `background-image: url(${p.img});`
    : `background-color: #000000;`
  };
  background-size: cover;
`;

export const ProductDetailContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
`;

export const ProductDetail = styled.img`
  width: 100%;
  height: 0;
  padding-top: 55%;
  ${(p) => 
    p.img
    ? `background-image: url(${p.img});`
    : `background-color: #000000;`
  };
  background-size: contain;
  background-repeat: no-repeat;
`;

export const HowToUseContainer = styled.div`
  width: 100%;
  margin: 10% auto;
  text-align: center;
`;

export const HowToUse = styled.img`
  width: 70%;
  height: 0;
  padding-top: 70%;
  ${(p) => 
    p.img
    ? `background-image: url(${p.img});`
    : `background-color: #000000;`
  };
  background-size: contain;
  background-repeat: no-repeat;
  // background-size: cover;
`;