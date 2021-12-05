export interface CategoryType {
  id: number;
  name: string;
  active: boolean;
}

export interface CategoryProps {
  category: CategoryType[];
  onPressCategory: (id: string) => void;
}

export interface FoodType {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
}
export interface IconType {
  active?: boolean;
}
