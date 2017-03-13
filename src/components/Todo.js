import React from 'react';

class Todo extends React.Component {
    render () {
        return (
        <li className="list-group-item">
            <div className="checkbox" id="check"><label><input type="checkbox"/>{this.props.description}</label></div>
        </li>
        )
    } 
}

export default Todo;