import React, { useCallback, useRef } from 'react';
import { 
  FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiLogIn, 
  FiMail, FiCalendar, FiKey, FiMessageCircle, FiUser,
  FiHome, FiPlusCircle, FiTarget, FiTag  
} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core'; // tipagem c tds funções do useRef.current
import * as Yup from 'yup';

import validationError from '../../erros/validationErros';
import { AuthContext } from '../../context/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api'; 

import logo from '../../assets/Logo_Bodega_Ferrini.png';

import { Container, Content } from './styles';

interface CreteUserData {
  name: string;
  email: string;
  password: string;
  whatsapp: number,
  date: Date;
  street: string;
  number: number;
  complement: string;
  uf: string;
  city: string;
}

const CreateUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory();

  const handleSubmitCreate = useCallback(async (data: CreteUserData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Minimum 3 characters'),
        email: Yup.string()
          .required('Email required')
          .email('Enter a valid email address'),
        password: Yup.string().required('minimum 6 digits'),
        whatsapp: Yup.string().required('Only numbers'),
        date: Yup.string().required('Select the date of birth'),
        street: Yup.string().required('Street required'),
        number: Yup.string().required('Only numbers'),
        complement: Yup.string().required('Complement required'),
        uf: Yup.string().required('UF required'),
        city: Yup.string().required('City required'),
      })
      
      await schema.validate(data, {
        abortEarly: false,
      });
      
      await api.post('/users', data);

      alert('Account successfully created :), Now, you can do you Login!');
      history.push('/')

    } catch (err) {
      const errors = validationError(err)

      formRef.current?.setErrors(errors)
    }
  }, [history]);

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
          <Form ref={formRef} onSubmit={handleSubmitCreate}>
            <h1>Welcome to the Register</h1>
            <fieldset>
              <legend>Your Account</legend>
              <div>
                <Input 
                  icon={FiUser}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="NAME"
                />
                <Input 
                  icon={FiMail}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                />
                <Input 
                  icon={FiKey}
                  type="text"
                  name="password"
                  id="password"
                  placeholder="PASSWORD"
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Your Information</legend>
              <div>
                <Input 
                  icon={FiMessageCircle}
                  type="number"
                  name="whatsapp"
                  id="whatsapp"
                  placeholder="WHATSAPP"
                />
                <Input 
                  icon={FiCalendar}
                  type="Date"
                  name="date"
                  id="date"
                  placeholder="DATE DD/MM/YYYY"
                />
              </div>
              <div>
                <Input 
                  icon={FiHome}
                  type="text"
                  name="street"
                  id="street"
                  placeholder="STREET"
                />
                <Input 
                  icon={FiTarget}
                  type="number"
                  name="number"
                  id="number"
                  placeholder="NUMBER"
                />
              </div>
              <div>
                <Input 
                  icon={FiPlusCircle}
                  type="text"
                  name="complement"
                  id="complement"
                  placeholder="COMPLEMENT"
                />
              </div>
              <div>
                <Input 
                  icon={FiTag}
                  type="text"
                  name="uf"
                  id="uf"
                  placeholder="UF"
                />
                <Input 
                  icon={FiTag}
                  type="text"
                  name="city"
                  id="city"
                  placeholder="CITY"
                />
              </div>
            </fieldset>
            <Button type="submit">
              Submit
            </Button>
          </Form>
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