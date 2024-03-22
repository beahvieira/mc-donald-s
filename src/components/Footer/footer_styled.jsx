import styled, { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const mediaQuery = css`
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;


export const BoxFooter = styled.footer`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #afafaf;
  ${mediaQuery}
`


export const BoxLogo = styled.div`
  width: 15vw;
  height: 8vh;
  display: flex;
  align-items: center;
  margin-left: 50px;

p {
  font-size: 19px;
  color: #2a2a2a;
  margin-left: 25px;
}
${mediaQuery}
`


export const Aplicativos = styled.div`
  width: 18vw;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 25px;
  ${mediaQuery}
`