//anything acting with the todos needs to be in here. This actually conceptually fits with the database table called todos. Everything changing the table called todos is being dealt with on the file called Todos.js. 

import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

class Todos extends React.Component {

//setup
    constructor(props) {
        //call the react.component constructor() method
        //pass the props onto the contstructor
        super(props)

//Bind custom methods to this object context
        // this.addTodo = this.addTodo.bind(this) //have to do this when you make your own method on a react component
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)

//initial state
        this.state = { //object literal. one object--todos. 
            todos: [] //initially, we have an empty array. no todos.
        }
    }

//react lifecycle methods
    componentWillMount() { //lifecycle method
        //before we mount the component onto the page, initiate API call
        this.getTodos() //method
    }

//API methods
    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json()) //parse the response back
        .then(todos => this.setState({todos: todos})) // take the parsed response and modify the state and put in the new value--the new state. Get a bunch of todos from the database and put that in as the new state. 
    }

//he moved addTodo from AddTodo file to here. because anything that's impacting the state of todos should be here. it would still work in AddTodo where we had it.
    addTodo(description, category) {
        if (description !== '' && category !== '') {
            fetch('/api/v1/todos', {
                method: 'POST', //start object literal
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ //turn object into a string
                    todo: description,
                    category: category,
                    completed: false
                    // how it worked yesterday:
                    // todo: this.state.description,
                    // category: this.state.category,
                    // completed: false
                })
            })
            .then(this.getTodos)
    }
    }

//probably will have an if statement instead of the turinaries
      toggleComplete(todoId, isComplete) {
        fetch('/api/v1/todos/' + todoId + '/' + (isComplete ? 'complete' : 'incomplete'))
        .then(this.getTodos)
    }

    render () {
        // let todos = this.state.todos.map((todo, key) => <Todo data-id={todo.id} todo-completed={todo.completed === 'yes' ? 'checked': ''} description={todo.todo} category={todo.category} key={key} />)
        //if you're writing an application, always think about the empty state
        //toggleComplte passes the parent toggleComplete to the child.
        //key is assigning a unique id to this thing. essential for react whenever you're doing an array.
        //{...todo} spread operator. pulls all of the properties. so no longer need description or category.  need key and the spread operator, and that's it.
        let todos = this.state.todos.map((todo, key) => <Todo key={key} {...todo} toggleComplete={this.toggleComplete} />)

        if (todos.length === 0) {
            todos = <div className="alert alert-success text-center">Please start by adding a todo in the box above.</div>
        }

        return (
            <div>
                <div className="TodosList">
                    <AddTodo addTodo={this.addTodo} />
                        <ul className="list-group">
                            {todos}
                        </ul>
                </div>
            </div>
        )
    } 
}

//export the component 
export default Todos;

//how collin did the button in class
// <div className="well well-sm">
//                 <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/completed')}>Completed Todos</button>
//             </div>


// how I did it for D1 assignment, before it was interactive.
//     render () {
//         return (
//             <ul className="list-group Todos">
//                 <Todo description="Feed the pets"/>
//                 <Todo description="Take a shower"/>
//                 <Todo description="Put on makeup"/>
//                 <Todo description="Pack a lunch"/>
//                 <Todo description="Drive to The Iron Yard"/>
//             </ul>
//         )
//     } 
// }


// an attempt to add checkTheBox
//moved this here, even though Collin's homework specifically said to do this in Todo, because Jeff said so. 
    // checkTheBox(checked, unchecked) {
    //     if (this.state.description === false) {
    //         fetch('/api/v1/todos/:todoId/incomplete', {
    //             method: 'POST',
    //             headers: {
    //                     'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 completed: false
    //             })
    //         })

    //         .then(response => response.json())
    //         .then(todo => {
    //             this.setState({
    //                 completed: true
    //             })

    //             //3. reload list
    //             this.state.checked(response)
    //         })
    //     }

    // if (this.state.description === true) {
    //     fetch('/api/v1/todos/:todoId/complete', {
    //         method: 'POST',
    //         headers: {
    //                 'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             completed: true
    //         })
    //     })

    //     .then(response => response.json())
    //     .then(todo => {
    //         this.setState({
    //             completed: false
    //         })

    //         //3. reload list
    //         this.state.unchecked(response)
    //     }
    // }
    // }