import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; // sintax reduzida, ideia = input, porem sem sobre escrever nada

//children infos dentro do Button
//rest demais propriedades
const Button: React.FC<ButtonProps> = ({children, ...rest}) => (
  <Container type="button" {...rest}>
    {children}
  </Container> 
); 

export default Button;