import React from "react";
import Travolta from "../../assets/img/Travolta.gif";
import PageDefault from "../../components/PageDefault";

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>404 - Conteúdo não encontrado</h1>

      <div className="notFound">
        <img src={Travolta} alt="where da fuq is this" />
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;
