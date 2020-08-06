import React, { useEffect, useState } from 'react';
import Default from '../../pages/Default'
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categories';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Default paddingAll={0}>
      <div style={{ background: "#141414" }}></div>
      {dadosIniciais.length === 0 && (
          <div className="container">
            <div className="icon chess">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -20 521 582">
              <path style={{fill:"#3A556A"}} d="M417.954,222.879c-1.136-5.552-3.334-11.742-7.052-18.544c-6.891-12.605-12.912-25.684-17.63-39.253
                c-9.179-26.402-25.294-67.241-43.574-88.94c0,0-6.104-39.248,0-57.303c0,0-19.8,10.745-22.155,20.287c0,0-0.785-23.427,7.064-39.126
                c0,0-45.528,29.829-47.098,47.883c0,0-69.862-32.184-167.198,43.172c0,0,32.184-5.494,39.248,0c0,0-95.766,54.163-109.895,112.251
                c0,0,27.474-18.054,38.463-14.914c0,0-47.098,85.561,35.324,175.047h172.692c0,0,0-22.889-16.595-44.062
                c-6.586-8.402-12.686-17.186-17.152-26.883c-11.221-24.359-23.184-66.172,6.432-97.224c5.484-5.75,14.733-5.731,19.987,0.229
                c9.395,10.658,25.731,26.812,43.989,34.319c10.342,4.252,19.598,10.824,25.965,20.016c4.622,6.672,12.097,13.069,23.92,13.791
                C404.592,264.963,422.352,244.377,417.954,222.879z"/>
      
                <path style={{fill:"#2F4859"}} d="M312.163,363.44H102.251c-6.897,0-12.488,5.591-12.488,12.488v30.977h234.888v-30.977
                  C324.651,369.031,319.06,363.44,312.163,363.44z"/>
                <path style={{fill:"#2F4859"}} d="M338.798,406.905H75.617c-6.897,0-12.488,5.59-12.488,12.488v48.9h288.157v-48.9
                  C351.286,412.495,345.695,406.905,338.798,406.905z"/>
      
              <path style={{fill:"#64798A"}} d="M316.101,110.109c-1.004,21.927,15.958,40.515,37.885,41.52
                C354.99,129.702,338.028,111.114,316.101,110.109z"/>
                <text class="loading" x="75" y="530" fill="#2A7AE4">Loading...</text>
              </svg>
      
            </div>
          </div>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].title}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
        
      
    </Default>
  );
}

export default Home;