import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const backgroundImage = () => {
    let imgs = [
      "https://dicasnovayork.com.br/wp-content/uploads/2017/03/hospedagem_header-1000x700.jpg",
      "https://i.pinimg.com/originals/1a/79/3b/1a793b05229e9e1e6a5391783c97bade.jpg",
      "https://s.france24.com/media/display/a6391d38-08f5-11e9-a9fd-005056a964fe/w:1280/p:16x9/260416-champs-elysees-m.webp",
    ];

    return imgs[Math.floor(Math.random() * imgs.length)];
}

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5%;

  .notFound {
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: url(${backgroundImage});
  }
`;

function PageDefault({children}) {
    return (
        <>
            <Menu />

            <Main>
                {children}
            </Main>

            <Footer />
        </>
    )
}

export default PageDefault;