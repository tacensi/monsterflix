import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import {Link} from "react-router-dom";

function Menu() {
    return (
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Logo da MonsterFlix" />
        </Link>
        <Button as={Link} className="ButtonClick" to="/cadastro/video">
          Novo Vídeo
        </Button>
      </nav>
    );
}

export default Menu;
