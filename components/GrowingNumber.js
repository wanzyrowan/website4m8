import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const GrowingNumber = (props) => {
    
    const [count, setCount] = useState(props.startFrom);

    useInterval(() => {
        if (count != props.limit)
            setCount(count + 1);
        }, props.interval)

    return (
        <h1>{count}+</h1>
    );
}

export default GrowingNumber