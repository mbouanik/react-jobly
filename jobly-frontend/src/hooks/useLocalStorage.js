import { useEffect, useState } from "react";

const useLocalStorage = key => {
  const initial_value = localStorage.getItem(key);
  const [state, setState] = useState(initial_value);
  useEffect(() => {
    if (state == null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, state);
    }
  }, [key, state]);

  return [state, setState];
};
export default useLocalStorage;
