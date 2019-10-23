import React from 'react';
// import '../List.css';

class ToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {toDoTask: this.props.task, checked: false};
    }

    checkStatus= () => {
        this.setState({checked: !this.state.checked});
    };

    render() {
        return (
            <div className={this.state.checked ? 'doneToDo' : ''}>
                <input type="checkbox" onChange={this.checkStatus}></input> <span>{this.state.toDoTask}</span>
            </div>

        );
    }

}

export default ToDo;