import { useState, useEffect } from 'react';

export function useStream(initialState, observable$) {
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    const subscription = observable$.subscribe(newValue => {
      setValue(newValue);
    })

    return () => {
      subscription.unsubscribe();
    }
  }, []);

  return value;
}
