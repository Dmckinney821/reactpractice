import React from 'react';
import Counter from './Counter';

const App = () => {
//  return <h1>Hello</h1>;
    return (
    <div className='container'>
      <button>+</button>
      <div className='counterBox'>
        {/* /* <div className='counter'>3</div>
        <div className='counter'>1</div>
        <div className='counter'>1</div> */ }
          <Counter finalValue='100' initialValue='42' />
          <Counter finalValue='100' initialValue='33'/>
          <Counter finalValue='100' initialValue='65'/>
          <Counter finalValue='100' initialValue='4'/>
          <Counter finalValue='100' initialValue='1'/>

      </div>
    </div>
    );

};

export default App;
