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
