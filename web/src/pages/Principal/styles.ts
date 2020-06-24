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

    div {
      display: flex;
      flex-direction: column;
      margin-right: 5px;
      padding: 15px;

      input {
        margin-bottom: 6px;
        padding: 5px;
        color: black;
        border-radius: 8px;
        text-align: center;
        height: 30px;
        width: auto;
      }

      button {
        margin-bottom: 6px;
        border-radius: 8px;
        padding: 5px;
        height: 30px;
        width: auto;
        transition: background-color 0.2s;
        
        &:hover {
          background: #8c313d;
          color: #F0F0F5;
          font-weight: bold;
        }
      }


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
