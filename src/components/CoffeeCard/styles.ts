import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #F3F2F2;
  border-radius: 6px 36px;
  width: 256px;
  height: 310px;
  padding: 0 20px 20px 20px;

  img {
    width: 120px;
    height: 120px;
    position: relative;
    top: -20px;
  }

  span {
    font-family: "Baloo 2", sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 26px;
    margin-bottom: 8px;
  }

  p {
    color: #8D8686;
    text-align: center;
    font-size: 0.875rem;
  }
`

export const Tag = styled.div`
  background: #F1E9C9;
  border-radius: 100px;
  padding: 4px 8px;
  color: #C47F17;
  font-weight: 700;
  margin-bottom: 16px;
  font-size: 12px;
  text-transform: uppercase;
`

export const CoffeePrice = styled.div`
  display: flex;
  overflow: hidden;
  width: 90%;
  margin-top: 33px;
  font-family: "Baloo 2", sans-serif;
  color: #574F4D;
  font-weight: 800;
  justify-content: space-between;
`

export const CartButton = styled.div`
  background: ${props => props.theme.product["purple-dark"]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  height: 100%;

  svg {
    color: ${props => props.theme.white};
  }
`
