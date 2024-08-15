import { useContext } from 'react';
import { CollectionContext } from '../contexts/CollectionContext';

export function useCollection() {
  return useContext(CollectionContext);
}
