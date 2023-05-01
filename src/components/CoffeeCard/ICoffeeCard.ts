export interface ICoffeeCard {
  name: string
  description: string
  image: string
  tags: Tag[]
}

export enum Tag {
  Traditional = "Tradicional",
  WithMilk = "Com Leite",
  Icy = "Gelado",
  Special = "Especial",
  Alcoholic = "Alcoólico"
}
