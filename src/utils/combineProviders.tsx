/* eslint-disable  @typescript-eslint/no-explicit-any */
import {
  ComponentPropsWithoutRef,
  ComponentType,
  FC,
  FunctionComponent,
  ReactNode,
} from 'react';
import { CollectionProvider } from '../contexts/CollectionContext';
import { ProductProvider } from '../contexts/ProductContext';
import { ShoppingCartProvider } from '../contexts/ShoppingCartContext';
import { SlotType } from '../models/Slot';

type Providers = [ComponentType<SlotType>, ComponentPropsWithoutRef<any>?][];

const combineProviders = (providers: Providers): FC =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>{children}</Provider>
        </AccumulatedProviders>
      ),
    ({ children }: any) => <>{children}</>
  );

export const AllProviders: FunctionComponent<{ children: ReactNode }> =
  combineProviders([
    [CollectionProvider],
    [ProductProvider],
    [ShoppingCartProvider],
  ]);
