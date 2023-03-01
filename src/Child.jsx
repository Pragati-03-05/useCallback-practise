import './style.css';
import React, { memo } from 'react';

function Child(props) {
  console.log('111111111111', props);
  const incr = () => {
    props.test();
  };
  return (
    <div className="App">
      <button onClick={() => incr()}>Incr</button>
    </div>
  );
}
export default memo(Child);
