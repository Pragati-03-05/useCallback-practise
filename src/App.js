import './style.css';
import React, { useState, useCallback } from 'react';
import Child from './Child';

export default function App() {
  const [count, setCount] = useState(0);
  const [value, setMsg] = useState(0);
  const test = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const updateMsg = () => {
    setMsg(value + 1);
  };
  return (
    <div className="App">
      {count}
      <Child test={test} />
      <button onClick={updateMsg}>{value}</button>
    </div>
  );
}
