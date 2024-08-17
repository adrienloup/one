import {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
  ReactNode,
} from 'react';
import { CollectionProvider } from '../contexts/Collection';
import { ProductProvider } from '../contexts/Product';
import { ShoppingCartProvider } from '../contexts/ShoppingCart';
import { AlertProvider } from '../contexts/Alert';
import { SlotType } from '../models/Slot';

type ProvidersType = [
  ComponentType<SlotType>,
  ComponentPropsWithoutRef<ElementType>?,
][];

const combineProviders = (providers: ProvidersType) =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: SlotType) => <>{children}</>
  );

export const AllProviders: FunctionComponent<{ children: ReactNode }> =
  combineProviders([
    [CollectionProvider],
    [ProductProvider],
    [ShoppingCartProvider],
    [AlertProvider],
  ]);
