import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: #F0F0F5;

  main {
    width: 90%;
    display: flex;
    justify-content: space-around;
  }
  main h1{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  main Form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  main Form div {
    display: flex;
    justify-content: center;
    margin-right: 5px;
    /* margin-bottom: 20px; */
    padding: 10px;
  }

  main Form fieldset {
    margin-bottom: 10px;
  }

  main Form Button {
    margin-bottom: 20px;
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
    
    > a {
      display: flex;
      align-self: center;
      align-items: center;
      border-radius: 8px;
      padding: 5px;
      height: 30px;
      width: 300px;
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
`;

