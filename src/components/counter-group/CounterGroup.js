import React from 'react';
// import '../App.css';
import './CounterGroup.css';
import Counter from './Counter';

class CounterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counterCounts: this.props.defaultCounts, inputValue: this.props.defaultCounts,sum:0}
  }

  counterUpdateCallback = changeNum =>{
    this.setState({sum:this.state.sum+changeNum})
  };

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value});
  };

  regenerateCounters = () => {
    this.setState({counterCounts: this.state.inputValue});
  };


  renderCounters(){
    let counters = [];
    for (let count = 0; count < this.state.counterCounts; count++){
      counters.push(
        <Counter key={count}
        onCounterValueChange={this.counterUpdateCallback}
        />
      )
    }

    return counters;
  }

  render(){


    let counters = this.renderCounters();
    return (

      <div className="counter-group">

        <div className="regenerate">
              <input type="text" value = {this.state.inputValue} onChange={this.handleInputChange}/>
              <button onClick={this.regenerateCounters}>Regenerate Counter</button>
              <span>Sum: {this.state.sum}</span>
        </div>
          
        <div>
            {counters}
        </div>
      </div>  
    );
  }
  }


export default CounterGroup;
