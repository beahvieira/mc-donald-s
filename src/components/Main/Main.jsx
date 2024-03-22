import { useState } from 'react';
import * as S from './main_styled';
import burg from '../../assets/burg.png';
import bacon from '../../assets/bacon.png';
import crispy from '../../assets/crispy.png';
import Card from "./Card"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import juntos from "../../assets/juntos.jpg"


const items = [
  { imagem: burg, texto: 'McFiesta: "O McFiesta é um sanduíche que traz um sabor autêntico e vibrante, com carne  suculenta, queijo derretido, alface crocante e o toque especial do molho especial do Méqui, tudo isso em um pão macio e saboroso."'},
  { imagem: bacon, texto: 'McBacon: "O McBacon é um sanduíche delicioso que combina salada fresca e bacon crocante, tudo isso acompanhado do sabor único do molho especial do Méqui."'},
  { imagem: crispy, texto: 'McChicken Crispy: "O McChicken Crispy é um sanduíche que oferece uma experiência crocante e saborosa, com um filé de frango empanado, alface, maionese e pão macio."'},
]

const Main = () => {
  const [itemSelecionado, setItemSelecionado] = useState(items[0]);

  function mudarItem(item) {
    setItemSelecionado(item);
  }

  return (
    <>
    <S.Section>
      <S.BoxTexto>
        <p>
          bateu aquela <span style={{ color: 'red' }}> #fome</span>de
          <span style={{ color: 'red' }}>méqui</span>?
        </p>
      </S.BoxTexto>
      <S.BoxImagens>
        <img src={itemSelecionado.imagem} alt="Imagem Principal" />
        <p>{itemSelecionado.texto}</p>
      </S.BoxImagens>
      <S.BoxItens>
        <figure>
        {items.map((item, index) => (
            <img key={index} onClick={() => mudarItem(item)} src={item.imagem} alt={item.texto} />
          ))}
        </figure>
      </S.BoxItens>
    </S.Section>
    <S.Boxs>
        <S.Promocao>
            <h2>Promoção</h2>
            <S.Center>
              <Card 
              imagem={sofa} 
              texto={"Que tal um #MéquiNoSofá?"} 
              info={"faça agora seu pedido e receba em casa pelo delivery."} />

              <Card imagem={loja}
              texto={"Méqui mais próximo de você."} 
              info={"Encontre o restaurante mais próximo de você. ."} />

              <Card imagem={juntos}
              texto={"Confira as medidas que o Méqui adotou!"} 
              info={"Juntos, vamos sair dessa ainda mais fortes, preparados e unidos."}  />

            </S.Center>
        </S.Promocao>
    </S.Boxs>
    </>
  );
};

export default Main;
