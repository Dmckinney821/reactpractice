import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            currentValue: props.initialValue
        };
    }
    render() {
        return (
            <div className='counter'>
            {this.state.currentValue}
            </div>
        )
    }
}












// const Counter = ({finalValue, initialValue}) => {
//     // console.log(props);
//     return (
//         <div className='counter'>
//         {initialValue}
//         </div>
//     );
// };







export default Counter;