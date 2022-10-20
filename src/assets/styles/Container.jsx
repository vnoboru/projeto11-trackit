import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    width: 303px;
    height: 45px;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  input::placeholder {
    color: #dbdbdb;
  }

  button {
    width: 303px;
    height: 45px;
    font-size: 21px;
    color: #ffffff;
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 18px;
    color: #52b6ff;
    text-decoration-line: underline;
  }
`;

export default Container;
