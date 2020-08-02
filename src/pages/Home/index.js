import React from 'react';
import Default from '../../pages/Default'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function Home() {
  return (
    <Default>
      <div style={{ background: "#141414" }}>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que jogar de brancas? Conheça este sistema de abertura que faz parte do repertório de Grandes Mestres como Boris Grachev, Gata Kamsky e Magnus Carlsen. Aprenda com o GM Evandro Barbosa as ideias gerais e os temas típicos do meio jogo."}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />      

        <Carousel
          category={dadosIniciais.categorias[3]}
        />      

        <Carousel
          category={dadosIniciais.categorias[4]}
        />      

        <Carousel
          category={dadosIniciais.categorias[5]}
        />

        <Carousel
          category={dadosIniciais.categorias[6]}
        />
      </div>
    </Default>
  );
}

export default Home;