import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class Todos extends React.Component {
    constructor(props) {
        super(props)

        // this.addTodo = this.addTodo.bind(this) //have to do this when you make your own method on a react component
        this.getTodos = this.getTodos.bind(this)

        this.state = {
            todos: [] //initially, we have an empty array. no todos.

        }
    }

    componentWillMount() { //lifecycle method
        this.getTodos() //method
        // this.checkTheBox()
    }

    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json()) //parse the response back
        .then(todos => this.setState({todos: todos})) // take the parsed response and modify the state and put in the new value--the new state. Get a bunch of todos from the database and put that in as the new state. 
    }

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

    render () {
        let todos = this.state.todos.map((todo, key) => <Todo data-id={todo.id} todo-completed={todo.completed === 'yes' ? 'checked': ''} description={todo.todo} category={todo.category} key={key} />)
        return (
            <div className="TodosList">
                <AddTodo getTodos={this.getTodos} />
                <ul className="list-group">
                    {todos}
                </ul>
            </div>
        )
    } 
}

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

export default Todos;