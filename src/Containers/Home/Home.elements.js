import styled from "styled-components";

export const MainBanner = styled.section`
  width: 100%;
  // height: 50vh;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ), url('https://images.pexels.com/photos/4210784/pexels-photo-4210784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  margin: 2% auto;
  margin-top: 16%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

export const BannerContentWrapper = styled.div`
  margin: 3% auto;
`;  


export const BrandTitle = styled.h2`
  font-family: 'Noto Serif KR';
  margin: 3% auto;
`;

export const Logo = styled.img`
  width: 20%;
  margin-bottom: 1%;
`;

export const BrandDetail = styled.p`
  font-size: 1rem;
  margin: 3% auto;
  line-height: 1.5rem;
`;

//Contents

export const StoryContainer = styled.div`
  width: 100%;
  margin: 14% auto;
  display: flex;
  justify-content: space-between;
`;

export const StoryImgContainer = styled.div`
  width: 50%;
  margin: auto;
`;

export const StoryImg = styled.img`
  width: 100%;
  height: 0;
  padding-top: 100%;
  ${(p) => 
    p.img
    ? `background-image: url(${p.img});`
    : `background-color: #000000;`
  };
  background-size: cover;
`;

export const LeftStoryTxtContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
`;

export const RightStoryTxtContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-right: 3%;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const LeftStoryTitleWrapper = styled.div`
    display: flex;
    margin-bottom: 7%;
`;

export const RightStoryTitleWrapper = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 7%;
`;

export const StoryTitleKr = styled.h1`
  font-size: 2rem;
  margin: auto 2%;
  font-family: 'Noto Serif KR';
`;

export const StoryTitleEng = styled.h1`
  margin: auto 2%;
  font-family: 'Noto Serif KR';
  opacity: 40%;
`;

export const StoryDetail = styled.p`
  margin: 5% auto;
  font-size: 1rem;
  line-height: 1.4rem;
  margin: auto 2%;
  white-space: pre-wrap;
`;