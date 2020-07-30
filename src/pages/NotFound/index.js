import React from "react";
import Travolta from "../../assets/img/Travolta.png";
import PageDefault from "../../components/PageDefault";
import styled from 'styled-components';

const backgroundImage = () => {
  let imgs = [
    "https://dicasnovayork.com.br/wp-content/uploads/2017/03/hospedagem_header-1000x700.jpg",
    "https://i.pinimg.com/originals/1a/79/3b/1a793b05229e9e1e6a5391783c97bade.jpg",
    "https://s.france24.com/media/display/a6391d38-08f5-11e9-a9fd-005056a964fe/w:1280/p:16x9/260416-champs-elysees-m.webp",
  ];

  return imgs[Math.floor(Math.random() * imgs.length)];
};

const Main = styled.div`
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-image: url(${backgroundImage});

  img {
      display: block;
  }
`;


function NotFound() {
  return (
    <PageDefault>
      <h1>404 - Conteúdo não encontrado</h1>

      <Main>
        <img src={Travolta} alt="where da fuq is this" />
      </Main>
    </PageDefault>
  );
}

export default NotFound;
