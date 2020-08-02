import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(ev) {
    setValue(
      ev.target.getAttribute("name"),
      ev.target.value
    );
  }


  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://monsterflix.herokuapp.com/categorias';


    fetch(URL)
      .then(async (resposta) => {
        const respostaJson = await resposta.json()
        setCategorias([...respostaJson, ]);
        return;
      })
      .catch((error)=> {
        console.log(URL, error);
      });

  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(ev) {
        ev.preventDefault();
        console.log('Tentou enviar o form, né, malandragem?');
        setCategorias([
          ...categorias, values,
        ]);
        setValues(initialValues);
      }}
      >

        <div>
          <FormField
            label="Nome da categoria"
            type="text"
            value={values.nome}
            name="nome"
            onChange={handleChange}
          />
        </div>

        <div>
          <FormField
            label="Descrição"
            type="textarea"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </div>

        <div>
          <FormField
            label="Cor"
            type="color"
            value={values.cor}
            name="cor"
            onChange={handleChange}
          />
        </div>

        <button>Cadastrar</button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">
        Voltar pra home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
