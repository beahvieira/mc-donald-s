import * as S from "./footer_styled"
import logo from "../../assets/logo.png"
import play from "../../assets/play.png"
import aple from "../../assets/aple.png"

const Footer = () => {
  return (
    <>

    <S.BoxFooter>
      <S.BoxLogo>
        <img src={logo} alt="" />
        <p> ©McDonalds 2024</p>
      </S.BoxLogo>
      <S.Aplicativos>
        <img src={play} alt="" />
        <img src={aple} alt="" />
      </S.Aplicativos>
    </S.BoxFooter>
    </>
  );
};

export default Footer; 