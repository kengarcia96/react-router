import React from 'react';
import ToDo from './ToDo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.task,
            todoList: []
        }
    }

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value});
    }

    // renderList = () => {
    //     if (this.state.inputValue) {
    //         let todoList = this.state.todoList;
    //         todoList.push(<ToDo task={this.state.inputValue}/>);
    //         this.setState({todoList: todoList, inputValue: ''});
    //     }
    // }

    renderList = () => {
        fetch("http://localhost:8080/api/todos", {mode: 'cors'}).then(res => res.json()).then(res => console.log(res))
    }


    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button onClick={this.renderList}>Add</button>
                    <br/>
                </div>
                <div align="left">
                    {this.state.todoList.map(item => (<span key={item}>{item}</span>))}
                </div>
            </div>
        );
    }
}

export default TodoList;