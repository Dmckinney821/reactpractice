import React from 'react';
import Counter from './Counter';
// const handleClick = () => {
//   console.log('hay');
// };

function convertNumToCounter(obj) {
  return(
    <Counter key = {obj.id} initialValue={obj.value} />
  );
}

// This is not quite the React way but just an example
// let counterValues = [42, 33, 65, 4, 1];
// let counterElements = counterValues.map(convertNumToCounter)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValues: [{id: 54321, value: 33}]
    };
  }
  _handleClick = () => {
   let newObj = {
     id: (new Date()).getTime(),
     value: 0
   };
    this.setState({
      counterValues: this.state.counterValues.concat(newObj)
    })
  }
    render() {
      return (
      <div className='container'>
        <button onClick={this._handleClick}>+</button>
      <div className='counterBox'>
          {this.state.counterValues.map(convertNumToCounter)}
           </div>
    </div>
    );
    }
  }

// // let counterElements = counterValues.map(value => <Counter initialValue={value} />);
// const App = () => {
// //  return <h1>Hello</h1>;
//     return (
//     <div className='container'>
//       <button onClick={handleClick}>+</button>
//       <div className='counterBox'>
//           {counterElements}
//            </div>
//     </div>
//     );

// };

export default App;
