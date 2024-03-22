import * as S from "./main_styled"
import PropTypes from 'prop-types';

export default function Card({imagem, texto, info}) {
  return (
    <S.Card>
        <img src={imagem} alt="" />
        <h3>{texto}</h3>
        <p>{info}</p>
        <button>Clique aqui</button>
    </S.Card>
  )
  }

  Card.propTypes = {
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired, 
    info: PropTypes.string.isRequired,
  };
  
