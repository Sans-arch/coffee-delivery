import { CoffeeCard } from "./components/CoffeeCard";
import { CoffeesArea, Container, Title } from "./styles";

export function CoffeesSection() {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CoffeesArea>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeesArea>
    </Container>
  )
}
