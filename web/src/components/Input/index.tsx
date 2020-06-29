import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

// extendendo as propriedades do Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; //sobre escreve 'name'
}

const Input: React.FC<InputProps> = (props) => (
  <Container>
    <input {...props}/>
  </Container>
);

export default Input;