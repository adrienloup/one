import { Dispatch, createContext, useReducer } from 'react';
import { ShoppingCartReducer } from '../reducers/ShoppingCart';
import { SlotType } from '../models/Slot';
import { ProductType } from '../models/Product';

export const ShoppingCartContext = createContext<ProductType[]>([]);

export const ShoppingCartDispatchContext = createContext<
  Dispatch<{ type: string; payload: ProductType }>
>(() => {});

export function ShoppingCartProvider({ children }: SlotType) {
  const [state, dispatch] = useReducer(ShoppingCartReducer, []);

  return (
    <ShoppingCartContext.Provider value={state}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
}
