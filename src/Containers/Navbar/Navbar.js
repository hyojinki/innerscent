import React from "react";
import LogoImg from "../../static/innerscent-logo.png";
import * as S from "./Navbar.elements";

const Navbar = () => {

  return (
    <>
      <S.NavContainer>
        <S.NavWrapper>
          <S.LogoContainer to="/">
            <S.Logo src={LogoImg}/>
          </S.LogoContainer>
          <S.NavLinkContainer>
            <S.NavLink to="/">BRAND</S.NavLink>
            <S.NavLink to="/products">PRODUCTS</S.NavLink>
            <S.NavLink to="/contact">CONTACT</S.NavLink>
          </S.NavLinkContainer>
        </S.NavWrapper>
      </S.NavContainer>
    </>
  )
}

export default Navbar;