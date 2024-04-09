import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`

export default EstiloGlobal
