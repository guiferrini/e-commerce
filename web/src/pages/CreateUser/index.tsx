import React from 'react';

import { 
  FiFacebook, FiInstagram, FiLinkedin, FiYoutube, 
  FiLogIn  
} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core'; // tipagem c tds funções do useRef.current
import * as Yup from 'yup';

import validationError from '../../erros/validationErros';
import { AuthContext } from '../../context/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

import logo from '../../assets/Logo_Bodega_Ferrini.png';
import argentina from '../../assets/wine_of_Argentina.jpg';
import prices from '../../assets/special_prices.jpg';
import week from '../../assets/wine_of_week.jpg';

const CreateUser: React.FC = () => {
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
          <Link to='/'>
            <FiLogIn/>
            <h2>Back to Login</h2>
          </Link>
        </header>

        <main>
          <h1>main</h1>
        </main>

        <footer>
          <hgroup>
            <a href='https://www.instagram.com/guiferrini/?hl=pt-br' target='_blank'>
              <span><FiInstagram /></span>
              <strong>Instagram</strong>
            </a>
            <a href='https://www.linkedin.com/in/guilherme-ferrini-44678256/' target='_blank'>
              <span><FiLinkedin /></span>
              <strong>Linkedin</strong>
            </a>
          </hgroup>
          <div>
            <span>
              <h1>contact@bf.com</h1>
              <h1>Bodega Ferrini - Wine House</h1>
            </span>
          </div>
          <hgroup>
            <a href='https://github.com/guiferrini' target='_blank'>
              <span><FiFacebook /></span>
              <strong>Facebook</strong>
            </a>
            <a href='https://www.youtube.com/' target='_blank'>
              <span><FiYoutube /></span>
              <strong>Youtube</strong>
            </a>
          </hgroup>
        </footer>

      </Content>
    </Container>
  );
};

export default CreateUser;