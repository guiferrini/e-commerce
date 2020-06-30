import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 20px 15px 20px; */
  width: 100vw;

  main {
    background: blue;
  }

  footer{
    background: blue;
    display: flex;
    text-align: center;
    justify-content: space-between;
    background: #8c313d;
    color: #F0F0F5;
    height: auto;
    padding: 5px;
    font-size: 15px;

    hgroup {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      text-decoration: none;
      padding: 15px;
      /* align-items: stretch */
    }
    
    a {
      text-decoration: none;
      color: #F0F0F5;
      display: flex;     
    }

    span {
      margin-right: 5px;
    }
    
    img {
      padding: 10px;
      width: 10%;
    }
    
    div {
      align-self: center;
      display: flex;
      flex-direction: row;
      justify-content: center;

    }
    span h1 {
      margin-bottom: 5px;
    }
  }

  header{
    display: flex;
    text-align: center;
    justify-content: space-between;
    /* background: #8c313d; */
    background: #F0F0F5;
    color: #8c313d;
    height: auto;
    padding: 5px;

    hgroup {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-decoration: none;
      padding: 15px;
      align-items: stretch
    }
    
    a {
      text-decoration: none;
      color: #8c313d;
      display: flex;     
    }

    span {
      margin-right: 5px;
    }
    
    img {
      padding: 10px;
      width: 30%;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      padding: 15px;

      a {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 6px;
        border-radius: 8px;
        padding: 5px;
        border: 2px solid black;
        transition: background-color 0.2s;
  
        &:hover {
          background: #8c313d;
          color: #F0F0F5;
          font-weight: bold;
          border: 2px solid #8c313d;
        } 
        h2 {
          margin-left: 10px;
          font-size: 15px;
        }
      }
    }
  }
`;

