import React, { useContext, useCallback, useState } from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiAlertCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
// import { Form } from '@unform/web'; 

import { AuthContext } from '../../context/AuthContext';

import { Container, Content } from './styles';

import logo from '../../assets/Logo_Bodega_Ferrini.png';
import argentina from '../../assets/wine_of_Argentina.jpg';
import prices from '../../assets/special_prices.jpg';
import week from '../../assets/wine_of_week.jpg';
// import { sign } from 'crypto';

interface SingInFormData {
  email: string;
  password: string;  
}

const Principal: React.FC = () => {

  const [inputEmail, setInputEmail] = useState('');
  const { singIn } = useContext(AuthContext);

  const handleSubmit = useCallback(async(data: SingInFormData) => {

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email required')
          .email('Enter a valid email address'),
        password: Yup.string().required('Password required')
      });

      // const email = setInputEmail;
      // console.log(email);
      singIn({
        email: data.email,
        password: data.password,
      });
    } catch (err){
      throw new err('ERRO');
    }
  }, []);

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
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
          <Link to="/">
            <FiAlertCircle/>
            <h2>Forgot my password</h2>
          </Link>
          <Link to="/">
            <FiAlertCircle/>
            <h2>Register</h2>
          </Link>
        </form>
      </header>

      <main>
        <h1>Wines of the Week - News - com foto</h1>
        <section>
          <div>
            <div>
              <img src={week} alt=""/>
            </div>
            <hgroup>
              <h1>Name</h1>
              <h2>Description</h2>
              <h2>Grapes</h2>
              <h2>Price</h2>
              <h2>Buy</h2>
            </hgroup>
          </div>
          <div>
            <div>
              <img src={week} alt=""/>
            </div>
            <hgroup>
              <h1>Name</h1>
              <h2>Description</h2>
              <h2>Grapes</h2>
              <h2>Price</h2>
              <h2>Buy</h2>
            </hgroup>
          </div>
          <div>
            <div>
              <img src={week} alt=""/>
            </div>
            <hgroup>
              <h1>Name</h1>
              <h2>Description</h2>
              <h2>Grapes</h2>
              <h2>Price</h2>
              <h2>Buy</h2>
            </hgroup>
          </div>
        </section>
        <hgroup>
        {/* busca cliente digita / filtro - com foto */}
          <form>
            <input 
              type="text"
              name="search"
              id="search"
              placeholder="SEARCH"
            />
            <button type="submit">
              Search
            </button>
          </form>
          <Link to="/">See More Wines</Link>
          <div>
            <label htmlFor="uf">Select one Grape</label>
            <select name="uf" id="uf">
              <option value="0">Grape</option>
            </select>
          </div>
        </hgroup>
        <div>output</div>
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
)
}

export default Principal;