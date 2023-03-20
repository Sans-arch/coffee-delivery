import styled from "styled-components";

export const Container = styled.header`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0px;

  img {
    width: 85px;
    height: 40px;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`

export const LocationButton = styled.div`
  background: ${props => props.theme.product["purple-light"]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  cursor: default;
  
  svg {
    color: ${props => props.theme.product["purple-dark"]};
    margin-right: 4px;
  }
  
  span {
    color: ${props => props.theme.product["purple-dark"]};
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }
  `

export const CartButton = styled.div`
  background: ${props => props.theme.product["yellow-light"]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  
  svg {
    color: ${props => props.theme.product["yellow-dark"]};
  }
`