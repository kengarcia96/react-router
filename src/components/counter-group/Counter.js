import React from 'react';
// import '../App.css';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0}
  }


increaseNumber = () => {
    this.setState({count: this.state.count +1});
    this.props.onCounterValueChange(1);
}

decreaseNumber = () => {
    this.setState({count: this.state.count -1});
    this.props.onCounterValueChange(-1);
}


  render(){
    return (
      <div className="Counter">
          <button onClick={this.increaseNumber}>+</button>
          <span>{this.state.count}</span>
          <button onClick={this.decreaseNumber}>-</button>
      </div>  
    );
  }
  }


export default Counter;
