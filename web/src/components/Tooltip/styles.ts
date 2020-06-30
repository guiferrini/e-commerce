import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background: #8c313d;
    padding: 1px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #F0F0F5;
    width: 180px;
    height: 18px;
    opacity: 0;
    transition: opacity 0.4s;
    /* visibility: hidden; */

    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-80%);

    &::before{
      content: '';
      border-style: solid;
      border-color: #8c313d transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 79%;
      transform: translateX(-50%);
    }
  }

  &:hover span{
    opacity: 1;
    visibility: visible;  
  }
`;