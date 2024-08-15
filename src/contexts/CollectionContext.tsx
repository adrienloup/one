import { createContext } from 'react';
import { ErrorResponse } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { SlotType } from '../models/Slot';
import { CollectionType } from '../models/Collection';

export const CollectionContext = createContext<{
  loading: boolean;
  errors: ErrorResponse | null;
  collections: CollectionType[] | undefined;
}>({
  loading: false,
  errors: { status: 0, statusText: '', data: undefined },
  collections: [],
});

export function CollectionProvider({ children }: SlotType) {
  const obj = useFetch<CollectionType[]>(
    'https://adrienloup.github.io/one/data/collections.json'
  );

  const { loading, errors, data: collections } = obj;

  return (
    <CollectionContext.Provider value={{ loading, errors, collections }}>
      {children}
    </CollectionContext.Provider>
  );
}
