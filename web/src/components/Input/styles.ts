import styled, { css } from 'styled-components';

interface ContainerProps{
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 6px;
  padding: 5px;
  color: black;
  border-radius: 8px;
  text-align: center;
  height: 30px;
  width: 261px; 
  border: 2px solid black;
  
  display: flex;
  align-items: center;
    
  input{
    background: transparent;
    flex: 1;
    border: 0;
  }

  svg{
    margin-right: 5px;
  }

  ${props => props.isError && css`
    border-color: #bd0000;
    box-shadow: 1px 1px 1px #bd0000;
  `}
`;

export const Error = styled.div`
  height: 16px;
  margin-left: 5px;

`;