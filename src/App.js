import React from 'react';
import dados_iniciais from './data/dados_iniciais.json';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  const categorias = dados_iniciais.categorias;
  const categoriasComponents = [];
  categorias.forEach((cat, index) => {
    const ignore = index === 0 ? 'ignoreFirstVideo' : null;
    categoriasComponents.push(
      <Carousel
        ignoreFirstVideo={ignore}
        category={cat}
      />
    );
  });

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      {categoriasComponents}

      <Footer />
    </div>
  );
}

export default App;
