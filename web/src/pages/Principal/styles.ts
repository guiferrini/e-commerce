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

  main h1{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  section{
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  section div{
    display: flex;
  }

  section div hgroup{
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }

  section div img {
    width: 180px;
    height: 180px;
    background: black;
  }

  main hgroup{
    display: flex;
    justify-content: space-around;
  }

  main hgroup form input {
    margin-right: 5px;
  }

  main hgroup div label {
    margin-right: 5px;
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
        transition: background-color 0.4s;
        font-size: 15px;
        margin-top: 10px;

        &:hover {
          color: #30121e;
          font-weight: bold;
          /* font-size: 22px; */
        }

        h2 {
          margin-left: 5px;
          font-size: 15px;
        }
      }
    }
}
`;
