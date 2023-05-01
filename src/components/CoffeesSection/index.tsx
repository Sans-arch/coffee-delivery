import { CoffeeCard } from '../CoffeeCard'
import { CoffeesArea, Container, Title } from "./styles";

import traditionalCoffee from '../../assets/traditional-coffee.png'
import americanExpress from '../../assets/american-express.png'
import arabic from '../../assets/arabic.png'
import capuccino from '../../assets/capuccino.png'
import macchiato from '../../assets/macchiato.png'
import mocaccino from '../../assets/mocaccino.png'
import coffeeWithMilk from '../../assets/coffee-with-milk.png'
import creamyExpress from '../../assets/creamy-express.png'
import cuban from '../../assets/cubano.png'
import hawaiian from '../../assets/havaiano.png'
import hotChocolate from '../../assets/hot-chocolate.png'
import iceExpress from '../../assets/ice-express.png'
import irish from '../../assets/irish.png'
import latte from '../../assets/latte.png'

export function CoffeesSection() {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CoffeesArea>
        <CoffeeCard
          name='Expresso Tradicional'
          description='O tradicional café feito com água quente e grãos moídos'
          image={traditionalCoffee}
        />
        <CoffeeCard
          name='Expresso Americano'
          description='Expresso diluído, menos intenso que o tradicional'
          image={americanExpress}
        />
        <CoffeeCard
          name='Expresso Cremoso'
          description='Café expresso tradicional com espuma cremosa'
          image={creamyExpress}
        />
        <CoffeeCard
          name='Expresso Gelado'
          description='Bebida preparada com café expresso e cubos de gelo'
          image={iceExpress}
        />
        <CoffeeCard
          name='Café com Leite'
          description='Meio a meio de expresso tradicional com leite vaporizado'
          image={coffeeWithMilk}
        />
        <CoffeeCard
          name='Latte'
          description='Uma dose de café expresso com o dobro de leite e espuma cremosa'
          image={latte}
        />
        <CoffeeCard
          name='Capuccino'
          description='Bebida com canela feita de doses iguais de café, leite e espuma'
          image={capuccino}
        />
        <CoffeeCard
          name='Macchiato'
          description='Café expresso misturado com um pouco de leite quente e espuma'
          image={macchiato}
        />
        <CoffeeCard
          name='Mocaccino'
          description='Café expresso com calda de chocolate, pouco leite e espuma'
          image={mocaccino}
        />
        <CoffeeCard
          name='Chocolate Quente'
          description='Bebida feita com chocolate dissolvido no leite quente e café'
          image={hotChocolate}
        />
        <CoffeeCard
          name='Cubano'
          description='Drink gelado de café expresso com rum, creme de leite e hortelã'
          image={cuban}
        />
        <CoffeeCard
          name='Havaiano'
          description='Bebida adocicada preparada com café e leite de coco'
          image={hawaiian}
        />
        <CoffeeCard
          name='Árabe'
          description='Bebida preparada com grãos de café árabe e especiarias'
          image={arabic}
        />
        <CoffeeCard
          name='Irlandês'
          description='Bebida a base de café, uísque irlandês, açúcar e chantilly'
          image={irish}
        />
      </CoffeesArea>
    </Container>
  )
}
