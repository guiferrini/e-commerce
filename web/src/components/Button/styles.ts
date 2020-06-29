import styled from 'styled-components';

export const Container = styled.button`
  margin-bottom: 6px;
  border-radius: 8px;
  padding: 5px;
  height: 30px;
  width: auto;
  border: 2px solid black;
  transition: background-color 0.2s;
  
  &:hover {
    background: #8c313d;
    color: #F0F0F5;
    font-weight: bold;
    border: 2px solid #8c313d;
}
`;