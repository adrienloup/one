import { useState } from 'react';

export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, (n: T) => void] {
  const localValue = () => {
    try {
      return JSON.parse(sessionStorage.getItem(key) ?? '') as T;
    } catch {
      return initialValue;
    }
  };

  const [value, setNewValue] = useState(localValue);

  const setValue = (newValue: T) => {
    sessionStorage.setItem(key, JSON.stringify(newValue));
    setNewValue(newValue);
  };

  return [value, setValue];
}
