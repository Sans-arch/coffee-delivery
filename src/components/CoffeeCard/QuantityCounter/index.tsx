import { useState } from "react";
import { Container, Plus, Minus } from "./styles";

export function QuantityCounter() {
  const [quantity, setQuantity] = useState(0)

  function handlePlus() {
    setQuantity(prevState => prevState + 1)
  }

  function handleMinus() {
    setQuantity(prevState => prevState <= 0 ? 0 : prevState - 1)
  }

  return (
    <Container>
      <Minus onClick={handleMinus} disabled={quantity === 0}>-</Minus>
      <p>{quantity}</p>
      <Plus onClick={handlePlus}>+</Plus>
    </Container>
  )
}
