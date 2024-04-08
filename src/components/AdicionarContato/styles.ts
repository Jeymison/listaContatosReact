import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;

  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    background-color: #f8f8f8;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      border-color: #00b4d8;
      box-shadow: 0 0 0 2px rgba(0, 180, 216, 0.2);
      outline: none;
    }
  }

  button {
    padding: 10px;
    background-color: #00b4d8;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0077b6;
    }
  }
`;
