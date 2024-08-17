import { useContext } from 'react';
import { TransitionPageContext } from '../contexts/Transition';

export function useTransitionPage() {
  return useContext(TransitionPageContext);
}
