import { useContext } from 'react';
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from '../contexts/ShoppingCartContext';

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function useShoppingCartDispatch() {
  return useContext(ShoppingCartDispatchContext);
}
