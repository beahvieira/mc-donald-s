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


export const Section = styled.section`
  width: 100%;
  height: 90vh;
  background-color: #FFC72C;
  display: flex;
  flex-direction: column;
  ${center}
  ${mediaQuery}

  
`

export const BoxTexto = styled.div`
  width: 80vw;
  height: 15vh;
  text-transform: uppercase;
  font-family: 'Inter Tight', sans-serif;
  font-weight: 800;
  color: white;
  font-size: 80px;
  ${mediaQuery}
  
`

export const BoxImagens = styled.div`
  width: 25vw;
  height: 40vh;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  margin-top: 30px;
  box-shadow: 0px 4px 8px #6b4141;

  p {
    font-family: 'Inter Tight', sans-serif;
    font-weight: 400;
    color: #1e1e1e;
    font-size: 17px;
    text-align: center;
    margin: 0px 60px;
  }
  ${mediaQuery}
 
`

export const BoxItens = styled.div`
  width: 80vw;
  height: 10vh;
  display: flex;
  justify-content: center;

  figure {
    width: 25vw;
    height: 9.5vh;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    background-color: #f1f1f1;
    box-shadow: 0px 4px 8px #6b4141;
  }

  img {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
  ${mediaQuery}
 
`

export const Boxs = styled.section`
  width: 100%;
  height: 100vh;
  background-color: white;
  ${center}
  ${mediaQuery}
  
`

export const Promocao = styled.section`
  height: 70vh;
  ${center}
  flex-direction: column;
  justify-content: space-around;

  h2 {
    color: black;
    font-size: 40px;
  }
  ${mediaQuery}
  
`

export const Center = styled.div`
  width: 70vw;
  ${center}
  justify-content: space-around;
  ${mediaQuery}
`

export const Card = styled.div`
  width: 18vw;
  height: 47vh;
  text-align: center;
  box-shadow: 0px 3px 6px rgba(82, 61, 45, 0.5);
  border-radius: 15px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 22px;
    padding: 15px 0px;
  }

  p {
    padding: 10px;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    flex: 1;
    border-radius: 15px 15px 0 0; 
  }

  button {
    background-color: #FFBC0D;
    border: none;
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    
    
  &:hover {
    background-color: #dba000;
    transition: 0.5s;
    cursor: pointer;
  }
  }

  ${mediaQuery}
`
