import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiAlertCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '../../assets/Logo_Bodega_Ferrini.png';

const Principal: React.FC = () => {

return (
  <Container>
    <Content>
      <header>
        <hgroup>
          <a href='https://www.instagram.com/guiferrini/?hl=pt-br' target='_blank'>
            <span><FiInstagram /></span>
            <strong>Instagram</strong>
          </a>
          <a href='https://www.linkedin.com/in/guilherme-ferrini-44678256/' target='_blank'>
            <span><FiLinkedin /></span>
            <strong>Linkedin</strong>
          </a>
          <a href='https://github.com/guiferrini' target='_blank'>
            <span><FiFacebook /></span>
            <strong>Facebook</strong>
          </a>
          <a href='https://www.youtube.com/' target='_blank'>
            <span><FiYoutube /></span>
            <strong>Youtube</strong>
          </a>
        </hgroup>
        <figure>
          <img src={logo} alt="Bodega_Ferrini_Wine_House" />
          <h1>Bodega Ferrini - Wine House</h1>
        </figure>
        <div>

          <input 
            type="text"
            name="email"
            id="email"
            placeholder="EMAIL"
          />
          <input 
            type="text"
            name="password"
            id="password"
            placeholder="PASSWORD"
          />
          <button type="submit">
            Entrar
          </button>
          <Link to="/">
            <FiAlertCircle/>
            <h2>Esqueci minha senha</h2>
          </Link>
          <Link to="/">
            <FiAlertCircle/>
            <h2>Cadastro</h2>
          </Link>


        </div>
      </header>

      <main>
        <h1>corpo</h1>
      </main>

      <footer>
        <h1>rodape</h1>
      </footer>
    </Content>
  </Container>
)
}

export default Principal;