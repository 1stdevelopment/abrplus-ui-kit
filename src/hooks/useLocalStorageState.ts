import { Dispatch, SetStateAction, useEffect, useState } from 'react';

function useLocalStorageState<T extends string | number>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  // Get the initial value from localStorage if it exists, or use the provided initialValue
  const initialStoredValue = localStorage.getItem(key);
  const initial = initialStoredValue ? JSON.parse(initialStoredValue) : initialValue;
  // Create the state variable and setter function
  const [state, setState] = useState<T>(initial);

  // Use useEffect to save the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export { useLocalStorageState };
