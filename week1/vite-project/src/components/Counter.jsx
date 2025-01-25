import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  const feedback = count < 10 ? 'Keep counting...' : "It's higher than 10! ";

  return (
    <div>
      <Count count={count} />
      <Button increment={() => setCount(count + 1)} />
      <p>{feedback}</p>
    </div>
  );
}

export default Counter;
