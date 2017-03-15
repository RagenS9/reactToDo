import React from 'react';


class Todo extends React.Component { 
// id="check" used to be in checkbox after col. <div className="checkbox" id="check" . . . i think it came over with bootstrap? but we can't use ids in react? it was working with it in there, but i took it out just in case. leaving this note in case taking it out breaks the world. 
   render () { // render is the method.
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-xs-8">
                        <div className="checkbox"><label className={this.props.completed === 'yes' ? 'done' : ''}><input type="checkbox" checked={this.props.completed === 'yes' ? true : false} onChange={(e) => this.props.toggleComplete(this.props.id, e.target.checked)} />{this.props.todo}</label></div>
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

//these are the types of props I expect to come into my code. it's at the bottom becuase we have to have the class already created and defined before you can set the prop types.
// Todo.propTypes = {
//     id: React.PropTypes.any.isRequired,
//     completed: React.PropTypes.string.isRequired,
//     todo: React.PropTypes.string.isRequired,
//     category: React.PropTypes.string.isRequired,
//     toggleComplete: React.PropTypes.func.isRequired
// }

export default Todo;

// added this when I was following Collin's directions on day 2 to add this to the Todo file.
    // constructor(props) { 
    //     super(props)
    //     this.state = {
    //     completed: false,
    //     }
    // }

// this is how people did the checkbox step during the backend week. 
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
 