import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            currentValue: props.initialValue
        };
        setInterval(this._increaseValue, 1000);
    }
    _reportMyId = () => {
        this.props.doClick(this.props.id)
    }
    render() {
        return (
            <div 
            className='counter'
            onClick={() => {this.props.doClick(this.props.id)}}
            >
            {this.state.currentValue}
            {this.props.id}
            </div>
        );
    }
    _increaseValue = () => {
        // calculate the new currentValue
        let newCurrentValue = this.state.currentValue + 1;
        // then set the new currentValue in state
        // but, I must call this.setState as I can't alter this.state directly
        this.setState({
            currentValue: newCurrentValue
        });
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