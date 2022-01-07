import React from "react";
import * as S from "./Home.elements";
import LogoImg from "../../static/innerscent-logo.png";
import {ContentArea} from "../../globalStyles";

const Home = () => {
  const story1 = {img: "https://images.pexels.com/photos/1808242/pexels-photo-1808242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    titleKr: "기억", titleEng: "Memories", detail: 
      ` 이너센트는 향에 ‘기억’을 담습니다.

사진과 향은 순간의 기억을 간직해준다는 공통점이 있습니다. 이너센트는 전문 조향사와의 협업을 통해 풍부한 이야기를 가진 향을 직접 제작합니다. 이너센트의 다채로운 향기로 언제 어디서든 자신만의 소중한 기억을 떠올릴 수 있습니다.
      `
  }

  const story2 = {img: "https://images.pexels.com/photos/3826686/pexels-photo-3826686.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
    titleKr: "마음", titleEng: "Heart", detail: 
      `이너센트는 향에 ‘마음’을 담습니다.

주변 사람에게 전하고 싶지만 망설였던 마음이 있나요? 이너센트는 구성품 하나하나에 진정성있는 메시지를 담아 소중한 사람에게 진심을 전할 수 있도록 돕습니다. 말로 하기 어려웠던 감정도 이너센트의 은은한 향기에 담아 선물하세요. 
      `
  }

  const story3 = {img: "https://images.pexels.com/photos/4015422/pexels-photo-4015422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
    titleKr: "재발견", titleEng: "in a New Light", detail: 
      `이너센트는 향에 ‘가치의 재발견'을 담습니다.

때로는 소중한 것들이 당연하게 여겨져 그 가치가 잊히곤 합니다. 이너센트는 버려지는 것을 활용하는 업사이클링 제품으로 그 쓰임새를 재조명하고자 합니다. 가끔씩 불쑥 코를 간지럽히는 이너센트의 향기가 잊고 있던 소중한 가치를 다시 떠올리게 할 것입니다.
      `
  }

  return (
    <>
      <S.MainBanner>
        <S.BannerContentWrapper>
          <S.BrandTitle>향으로 마음을 전하다, 이너센트</S.BrandTitle>
          <S.Logo src={LogoImg} />
          <S.BrandDetail>
            이너센트는 ‘당연하게 버려지는 것들에 대한 인식 변화’를 통해 <br/>
            대중들이 자연스레 참여하게 되는 ‘환경 보호의 선순환’ 구조를 만들기 위해 시작되었습니다.<br/><br/>

            환경뿐만 아니라 ‘고마움’, ‘사랑’과 같이 <br/>
            중요하지만 당연하게 여겨 온 감정들을 끄집어 내는 아이디어로 <br/>
            사람과 환경의 문제를 함께 해결하는 브랜드를 만들고자 합니다.
          </S.BrandDetail>
        </S.BannerContentWrapper>
      </S.MainBanner>

      <ContentArea>
        <S.StoryContainer>
          <S.StoryImgContainer>
            <S.StoryImg img={story1.img}/>
          </S.StoryImgContainer>
          <S.LeftStoryTxtContainer>
            <S.LeftStoryTitleWrapper>
              <S.StoryTitleKr>{story1.titleKr}</S.StoryTitleKr>
              <S.StoryTitleEng>{story1.titleEng}</S.StoryTitleEng>
            </S.LeftStoryTitleWrapper>
              <S.StoryDetail>
                {story1.detail}
              </S.StoryDetail>
          </S.LeftStoryTxtContainer>
        </S.StoryContainer>

        <S.StoryContainer>
          <S.RightStoryTxtContainer>
            <S.RightStoryTitleWrapper>
              <S.StoryTitleEng>{story2.titleEng}</S.StoryTitleEng>
              <S.StoryTitleKr>{story2.titleKr}</S.StoryTitleKr>
            </S.RightStoryTitleWrapper>
              <S.StoryDetail>
                {story2.detail}
              </S.StoryDetail>
          </S.RightStoryTxtContainer>
          <S.StoryImgContainer>
            <S.StoryImg img={story2.img}/>
          </S.StoryImgContainer>
        </S.StoryContainer>

        <S.StoryContainer>
          <S.StoryImgContainer>
            <S.StoryImg img={story3.img}/>
          </S.StoryImgContainer>
          <S.LeftStoryTxtContainer>
            <S.LeftStoryTitleWrapper>
              <S.StoryTitleKr>{story3.titleKr}</S.StoryTitleKr>
              <S.StoryTitleEng>{story3.titleEng}</S.StoryTitleEng>
            </S.LeftStoryTitleWrapper>
              <S.StoryDetail>
                {story3.detail}
              </S.StoryDetail>
          </S.LeftStoryTxtContainer>
        </S.StoryContainer>
      </ContentArea>
    </>
  )
}

export default Home;