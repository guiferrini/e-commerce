import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons' //passa as propriedades base de um icon
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

// extendendo as propriedades do Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; //sobre escreve 'name'
  icon?: React.ComponentType<IconBaseProps>;
}
//Letra Maiuscula é componente (e passo como propriedade icone (minusculo)) -> Icon
const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null); //acesso ao elemeto na DOM - manipulo de forma direta
  const { defaultValue, error, fieldName, registerField } = useField(name);
  // qdo usar formulario de edição/trazer infos de outro lugar - 'update' - usar defaultValue.

//Efetuo o input, assim q o componente for exibido em tela
useEffect(() => {
  registerField({
    name: fieldName, //name/email/password/...
    ref: inputRef.current, // ref da acesso ao input no HTML. O input fica dentro do 'current'
    path: 'value', // onde busca o valor, qual é o caminho a informação dentro do input
  });
}, [fieldName, registerField]); 

  return (
    <Container isError={!!error}>
      {Icon && <Icon size={16} />}
      <input 
        defaultValue={defaultValue} 
        ref={inputRef} 
        {...rest}
      />

      {error && 
        <Error>
          <FiAlertCircle size={16} color="#bd0000" />
        </Error>}
    </Container>
  );
};

export default Input;