import React from 'react';


class Todo extends React.Component { 

    constructor(props) { 
        super(props)
        this.state = {
            completed: false,
            // checkTheBox: props.checkTheBox
        }
    }

// this is how people did this step last week. 
//     handleClickOnCheckbox(e) {
//     // Only do something if a user clicks on a checkbox input tag
//     if (e.target.type === 'checkbox') {
//         var todoId = e.target.getAttribute('data-id')
//         var isComplete = e.target.checked
        
//         toggleTodoComplete(todoId, isComplete)
//     }
// }
// toggleTodoComplete(todoId, isComplete) {
//     if (isComplete) {
//         fetch('/api/v1/todos/:todoId/complete')
//         .then.state.toggleTodoComplete(getTodos)
//     }

//     else {
//         // Your code goes here...
//         fetch('/api/v1/todos/:todoId/incomplete')
//         .then.state.toggleTodoComplete(getTodos)
//     }
// }

// had this in the input type checkbox tag, but it wasn't working. onClick={() => this.checkTheBox(this.props.checkTheBox)}
    render () { // render is the method.
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-xs-8">
                        <div className="checkbox" id="check"><label><input type="checkbox"/>{this.props.description}</label></div>
                    </div>
                    <div className="col-xs-4">
                        <div className="checkbox text-right">
                            <div className="label label-default">{this.props.category}</div>
                        </div>
                    </div>
                </div>
            </li>
        )
    } 
}

export default Todo;