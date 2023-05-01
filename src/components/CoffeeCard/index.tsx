import { ShoppingCart } from "phosphor-react";

import { CoffeePrice, Container, Tag, CartButton, TagsArea } from "./styles";
import { QuantityCounter } from "./QuantityCounter";
import { ICoffeeCard } from "./ICoffeeCard";

export function CoffeeCard({ name, description, image, tags }: ICoffeeCard) {
  return (
    <Container>
      <img src={image} alt="Café" />
      <TagsArea>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsArea>
      <span>{name}</span>
      <p>{description}</p>
      <CoffeePrice>
        <p><span>R$</span>9,90</p>
        <QuantityCounter />
        <CartButton>
          <ShoppingCart size={18} weight="fill" />
        </CartButton>
      </CoffeePrice>
    </Container>
  )
}
