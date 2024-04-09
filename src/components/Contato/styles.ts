import styled from 'styled-components'

export const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    input {
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    p {
      margin-bottom: 8px;
      font-size: 14px;
    }

    button {
      padding: 8px 12px;
      margin-top: 8px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e0e0e0;
      }
    }
  }
`

export const ButtonEditar = styled.button`
  background-color: #2196f3;
  color: #fff;
`

export const ButtonRemover = styled.button`
  background-color: #f44336;
  color: #fff;
`
