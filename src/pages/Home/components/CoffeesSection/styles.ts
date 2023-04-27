import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid red;
  margin-top: 32px;
`

export const Title = styled.h2`
  color: ${props => props.theme.base['base-subtitle']}
  font-family: "Baloo 2", cursive;
  border: 2px solid red;
`
