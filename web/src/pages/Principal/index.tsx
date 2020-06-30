import React, { useContext, useCallback, useRef } from 'react';
import { 
  FiFacebook, FiInstagram, FiLinkedin, FiYoutube, 
  FiAlertCircle, FiFrown, FiMail, FiKey, FiSearch,
  FiShoppingCart,  
} from 'react-icons/fi'
import { Link } from 'react-router-dom';
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
// import { sign } from 'crypto';

interface SingInFormData {
  email: string;
  password: string;  
}

const Principal: React.FC = () => {
  const { singIn } = useContext(AuthContext);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async(data: object) => {
    try {
      formRef.current?.setErrors({}); //zerando erros
      
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email required')
          .email('Enter a valid email address'),
        password: Yup.string().required('minimum 6 digits'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // singIn({
        //   email: data.email,
        //   password: data.password,
        // });
    } catch (err) {
      const errors = validationError(err)

      formRef.current?.setErrors(errors)
    }
  }, []); 

  //uma função dentro do componente -> usar 'useCallback'
  const handleSubmitSearch = useCallback(() => {}, []);

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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input 
            icon={FiMail}
            type="text"
            name="email"
            id="email"
            placeholder="EMAIL"
          />
          <Input 
            icon={FiKey}
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
          />
          <Button type="submit">
            Login
          </Button>
          <Link to="/">
            <FiFrown/>
            <h2>Forgot my password</h2>
          </Link>
          <Link to="/">
            <FiAlertCircle/>
            <h2>Register</h2>
          </Link>
        </Form>
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
        {/* <Form initialData={{ search: 'Malbec'}}> */}
          <Form onSubmit={handleSubmitSearch}>
            <Input 
              icon={FiSearch}
              type="text"
              name="search"
              id="search"
              placeholder="SEARCH"
            />
            <Button type="submit">
              Search
            </Button>
          </Form>
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