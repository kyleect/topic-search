import { useState } from "react";

export default (key, defaultValue = {}) => {
  const [persisted, setValue] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
  );

  const persist = item => {
    setValue(item);
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  const reset = () => {
    window.localStorage.removeItem(key);
    setValue(defaultValue);
  };

  return [persisted, persist, reset];
};
