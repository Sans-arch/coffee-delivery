import { ShoppingCart } from "phosphor-react";

import { CoffeePrice, Container, Tag, CartButton } from "./styles";
import { QuantityCounter } from "./QuantityCounter";
import { ICoffeeCard } from "./ICoffeeCard";

export function CoffeeCard({ name, description, image }: ICoffeeCard) {
  return (
    <Container>
      <img src={image} alt="Café" />
      <Tag>Tradicional</Tag>
      <span>{name}</span>
      <p>{description}</p>
      <CoffeePrice>
        <span>R$9,90</span>
        <QuantityCounter />
        <CartButton>
          <ShoppingCart size={18} weight="fill" />
        </CartButton>
      </CoffeePrice>
    </Container>
  )
}
