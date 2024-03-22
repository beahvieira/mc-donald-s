import logo from "../../assets/logo.png"
import celular from "../../assets/celular.png"
import app from "../../assets/app.png"
import * as S from "./header_styled"


const Header = () => {
    return (
        <S.Container>
            <S.Logo>
                <img src={logo} alt="logo mac-donald's" />
            </S.Logo>
            <S.Pedido>
                <button className="app-button">
                    <img src={celular} alt="" />
                    <p>Baixe o App</p>
                </button>
                <button className="celular-button">
                    <img src={app} alt="" />
                    <p>Peça seu Méqui</p>
                </button>
            </S.Pedido>
        </S.Container>
    );
};

export default Header;
