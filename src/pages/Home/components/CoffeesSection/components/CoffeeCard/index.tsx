import { Container, Tag } from "./styles";

import coffee from "../../../../../../assets/Coffee.png"

export function CoffeeCard() {
  return (
    <Container>
      <img src={coffee} alt="Café" />
      <Tag>Tradicional</Tag>
      <span>Expresso Tradicional</span>
      <p>O tradicional café feito com água quente e grãos moídos</p>
    </Container>
  )
}
