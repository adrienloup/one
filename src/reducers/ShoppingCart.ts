import { ProductType } from '../models/Product';

export function ShoppingCartReducer(
  state: ProductType[],
  action: { type: string; payload: ProductType }
) {
  switch (action.type) {
    case 'cleared': {
      return [];
    }
    case 'removed': {
      return state.filter((product) => product !== action.payload);
    }
    case 'added': {
      return !state.find((product) => product.id === action.payload.id)
        ? [...state, action.payload]
        : state;
    }
    case 'decremented': {
      return state.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity:
                product.quantity > 1 ? product.quantity - 1 : product.quantity,
            }
          : product
      );
    }
    case 'incremented': {
      return state.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity:
                product.quantity < product.stock
                  ? product.quantity + 1
                  : product.quantity,
            }
          : product
      );
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
