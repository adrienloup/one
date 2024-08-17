import { useContext } from 'react';
import { CollectionContext } from '../contexts/Collection';

export function useCollection() {
  return useContext(CollectionContext);
}
