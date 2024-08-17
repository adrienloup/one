import { useContext } from 'react';
import { ProductContext } from '../contexts/Product';

export function useProduct() {
  return useContext(ProductContext);
}
