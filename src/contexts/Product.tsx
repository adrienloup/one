import { createContext } from 'react';
import { ErrorResponse } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { SlotType } from '../models/Slot';
import { ProductType } from '../models/Product';

export const ProductContext = createContext<{
  loading: boolean;
  errors: ErrorResponse | null;
  products: ProductType[] | undefined;
}>({
  loading: false,
  errors: { status: 0, statusText: '', data: undefined },
  products: [],
});

export function ProductProvider({ children }: SlotType) {
  const obj = useFetch<ProductType[]>(
    'https://adrienloup.github.io/one/data/products.json'
  );

  const { loading, errors, data: products } = obj;

  return (
    <ProductContext.Provider value={{ loading, errors, products }}>
      {children}
    </ProductContext.Provider>
  );
}
