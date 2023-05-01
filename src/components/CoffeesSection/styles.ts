import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 7rem;
`

export const Title = styled.h2`
  color: ${props => props.theme.base['base-subtitle']};
  font-family: "Baloo 2", cursive;
  font-size: 2rem;
  margin-bottom: 34px;
`

export const CoffeesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`
