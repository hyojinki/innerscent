import React from "react";
import * as S from "./Contact.elements";
import { ContentArea } from "../../globalStyles";

const Contact = () => {

  return (
    <>
    <ContentArea>
      <S.ContentsWrapper>
        <S.PageTitle>Contact Us!</S.PageTitle>
        <S.Detail>
          이너센트의 제품 및 브랜드와 관련하여 의견이 있으시거나,<br/>
          협업, 판매 등 제안 혹은 문의사항이 있다면 언제든지 연락주세요.<br/>
          이너센트의 문은 활짝 열려있습니다!
        </S.Detail>
        <S.ContactWrapper>
          <S.Type>E-MAIL</S.Type>
          <S.Contacts>innerscent4u@gmail.com</S.Contacts>
        </S.ContactWrapper>
        <S.ContactWrapper>
          <S.Type>Instagram</S.Type>
          <S.Contacts>@innerscent_4u</S.Contacts>
        </S.ContactWrapper>
      </S.ContentsWrapper>
    </ContentArea>
    </>
  )
}

export default Contact;