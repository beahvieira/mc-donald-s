import styled, { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const mediaQuery = css`
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;


export const Container = styled.header`
  color: #fff;
  display:flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;

  ${mediaQuery}
  
`;

export const Logo = styled.div`
  width: 5vw;
  height: 8vh;
  display: flex;
  margin-left: 50px;

  ${mediaQuery}

`

export const Pedido = styled.div`
width: 22vw;
height: 10vh;
display: flex;
margin-right: 50px;

button {
  display: flex;
  border: none;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 100;
  color: #373737;
  font-size: 17px;
  

}

.app-button{
  display: flex;
  align-items: center;
  background-color: white;  

}

.app-button img{
  width: 1.8vw;
  margin-right: 15px;
 }

.celular-button {
  width: 11vw;
  height: 5.6vh;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFC72C;
}

 .celular-button img{
  width: 1.8vw;
  margin-right: 15px;
 }

${center}
justify-content: space-between;


${mediaQuery}

`

