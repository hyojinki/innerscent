import styled, { createGlobalStyle } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const green = "#25614B";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;

    font-family: 'Noto Sans KR';
    font-weight: 400;
    color: #333333;
  }

  a {
    text-decoration: none;
    font-family: 'Noto Serif KR';
    font-weight: 400;
  
    &:hover {
      color: ${green};
  }

`;

export const BodyContainer = styled.main`
  background-color: #ffffff;
  // padding: 8% 20%;

`;

export const ContentArea = styled.section`
  padding: 2% 10%;
`;

export default GlobalStyle;