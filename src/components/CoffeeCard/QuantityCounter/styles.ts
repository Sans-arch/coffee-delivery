import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #E6E5E5;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 4px;
  border-radius: 6px;

  p {
    color: #272221;
  }
`

export const Minus = styled.button`
  background: #E6E5E5;
  border: none;
  color: #8047F8;
  cursor: pointer;
  margin-right: 4px;
  font-size: 1.4rem;
  padding-left: 4px;
  `

export const Plus = styled.button`
  background: #E6E5E5;
  border: none;
  color: #8047F8;
  cursor: pointer;
  margin-left: 4px;
  font-size: 1.2rem;
  padding-right: 4px;
`
