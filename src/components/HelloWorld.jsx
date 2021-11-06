import React, { useState } from 'react';

export const HelloWorld = () => {
  const [state, setState] = useState(() => {
    // logic
    return 0;
  });
  return (
    <button
      onClick={() => {
        // setState(state + 1);
        setState(currentState => currentState + 1);
      }}
    >
      Click Me {state}
    </button>
  );
};
