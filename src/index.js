import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import NotFound from './pages/NotFound';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

