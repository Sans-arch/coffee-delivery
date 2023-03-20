import { ActionButtons, CartButton, Container, LocationButton } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logotipo Coffee Delivery" />

      <ActionButtons>
        <LocationButton>
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationButton>
        <CartButton>
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </ActionButtons>
    </Container>
  )
}