import { CategoryType, FoodType } from './interfaces';

export const categoryData: CategoryType[] = [
  {
    id: 1,
    name: 'Foods',
    active: true,
  },
  {
    id: 2,
    name: 'Drinks',
    active: false,
  },
  {
    id: 3,
    name: 'Snacks',
    active: false,
  },
  {
    id: 4,
    name: 'Sauce',
    active: false,
  },
];

export const foodData: FoodType[] = [
  {
    id: 1,
    image: 'image',
    name: 'Veggie tomato mix',
    price: 'N1,900',
    category: 'Foods',
  },
  {
    id: 2,
    image: 'image',
    name: 'Spicy fish sauce',
    price: 'N2,300.99',
    category: 'Foods',
  },
  {
    id: 3,
    image: 'image',
    name: 'Spicy fish sauce',
    price: 'N1,900',
    category: 'Foods',
  },
  {
    id: 4,
    image: 'image',
    name: 'Food 4',
    price: 'N1,900',
    category: 'Drinks',
  },
  {
    id: 5,
    image: 'image',
    name: 'Food 5',
    price: 'N1,900',
    category: 'Snacks',
  },
];
