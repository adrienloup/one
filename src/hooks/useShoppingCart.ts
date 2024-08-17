import { useContext } from 'react';
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from '../contexts/ShoppingCart';

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function useShoppingCartDispatch() {
  return useContext(ShoppingCartDispatchContext);
}
