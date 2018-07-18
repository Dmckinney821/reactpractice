import React from 'react';
import Counter from './Counter';
const handleClick = () => {
  console.log('hay');
};

function convertNumToCounter(value) {
  return(
    <Counter initialValue={value} />
  );
}

// This is not quite the React way but just an example
let counterValues = [42, 33, 65, 4, 1];
let counterElements = counterValues.map(convertNumToCounter)

// let counterElements = counterValues.map(value => <Counter initialValue={value} />);
const App = () => {
//  return <h1>Hello</h1>;
    return (
    <div className='container'>
      <button onClick={handleClick}>+</button>
      <div className='counterBox'>
        {/* /* <div className='counter'>3</div>
        <div className='counter'>1</div>
        <div className='counter'>1</div> */ }
          {counterElements}

      </div>
    </div>
    );

};

export default App;
