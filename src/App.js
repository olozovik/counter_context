import { createContext, useContext, useMemo, useState } from "react";
import "./App.css";

const Context = createContext(undefined);

export default function App() {
  const [counter, setCounter] = useState(0);
  const getContext = useMemo(
    () => ({
      counter,
      setCounter,
    }),
    [counter]
  );

  return (
    <>
      <Context.Provider value={getContext}>
        <Counter />
      </Context.Provider>
    </>
  );
}

const Counter = () => {
  const { counter, setCounter } = useContext(Context);

  const handleDecrease = () => setCounter((p) => p - 1);
  const handleIncrease = () => setCounter((p) => p + 1);

  return (
    <div className="counter">
      <button type="button" onClick={handleDecrease}>
        Decrease
      </button>
      <span>{counter}</span>
      <button type="button" onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};
