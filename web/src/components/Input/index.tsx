import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons' //passa as propriedades base de um icon

import { Container } from './styles';

// extendendo as propriedades do Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; //sobre escreve 'name'
  icon?: React.ComponentType<IconBaseProps>;
}
//Letra Maiuscula é componente (e passo como propriedade icone (minusculo)) -> Icon
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={16} />}
    <input {...rest}/>
  </Container>
);

export default Input;