export interface ProductType {
  id: number;
  category: string;
  title: string;
  short: string;
  description: string[];
  image: string;
  route: string;
  price: number;
  quantity: number;
  stock: number;
  discount: number;
  new: boolean;
  comming: boolean;
}
