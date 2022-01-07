import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  position: fixed;
  padding: 1rem;
  top: 0;
  z-index: 15;
  background-color: #ffffff;
`;

export const NavWrapper = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
`;

export const LogoContainer = styled(Link)`
  width: 10%;
  margin: auto;
`;

export const Logo = styled.img`
  width: 30%;
  cursor: pointer;
  margin: auto;
`;

export const NavLinkContainer = styled.section`
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 5%;
`;

export const NavLink = styled(Link)`
  cursor: pointer;

  &:hover {
    color: #25614B;
  }

`;
