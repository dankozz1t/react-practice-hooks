import React, { useState, useRef, useEffect } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [id, setId] = useState(null);

  const value = useRef();

  useEffect(() => {
    startCounter();
  }, []);

  const startCounter = () => {
    const currentId = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    value.current = currentId;

    setId(currentId);
  };

  const stopCounter = () => {
    clearInterval(value.current);
  };

  console.log('id ' + id);
  console.log(value);

  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={startCounter}>
        go
      </button>
      <button type="button" onClick={stopCounter}>
        btn
      </button>
    </div>
  );
};
