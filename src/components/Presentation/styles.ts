import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 94px;
`

export const PresentationContent = styled.div``

export const MainImageArea = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

export const MainTitle = styled.h1`
  color: ${props => props.theme.base["base-title"]};
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  margin-bottom: 16px;

  // Laptop configs
  @media (max-width: 1400px) {
    font-size: 2.1rem;
  }
`

export const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  width: 90%
`

export const TopicsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 66px;
`

export const Topic = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;

  &:nth-last-child(-n+2) {
    margin-top: 20px;
  }

  svg {
    color: ${props => props.theme.white};
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme.base["base-text"]};
    margin-left: 12px;
  }
`

interface TopicIconProps {
  topicColor: string
  theme: any
}

const TopicIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
`

export const CartIcon = styled(TopicIcon)`
  background: ${props => props.theme.product["yellow-dark"]};
`

export const BoxIcon = styled(TopicIcon)`
  background: ${props => props.theme.base["base-text"]};
`

export const ClockIcon = styled(TopicIcon)`
  background: ${props => props.theme.product.yellow};
`

export const CoffeeIcon = styled(TopicIcon)`
  background: ${props => props.theme.product.purple};
`
