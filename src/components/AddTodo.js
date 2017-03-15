import React from 'react';

class AddTodo extends React.Component {
    constructor(props) { 
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            description: '',
            category: '',
            // getTodos: props.getTodos // I think I had this here yesterday, and it was working? but he doesn't have anythig like this here.
        }
    }

    onClick(addTodo) {
//call parent addTodo method found on the Todos.js file.
        addTodo(this.state.description, this.state.category)

//sets state of fields, and triggers render() again
        this.setState({
            description: '',
            category: ''
        })
    }

    render () {
        return <div className="row">
            <div className="col-xs-3">
                <div className="form-group">
                    <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                        <option value="">Select category...</option>
                        <option value="fun">Fun</option>
                        <option value="home">Home</option>
                        <option value="school">School</option>
                        <option value="work">Work</option>
                    </select>
                </div>
            </div>

            <div className="col-xs-9">
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.addTodo)}>Add Todo</button>
                        </span>
                    </div>
            </div>
            
            </div>
        </div>
    }
}

// Enforce property requirements
// AddTodo.propTypes = {
//     addTodo: React.PropTypes.func.isRequired
// }

export default AddTodo;

//here's how we originally had it.
    // addTodo(getTodos) {
    //     //1. POST to /api/v1/todos
    //     if (this.state.description !== '' && this.state.category !== '') {
    //         // console.log('fetching')
    //         fetch('/api/v1/todos', {
    //             method: 'POST', //start object literal
    //             headers: {
    //                     'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ //turn object into a string
    //                 todo: this.state.description,
    //                 category: this.state.category,
    //                 completed: false
    //             })
    //         })

    //         .then(response => response.json())
    //         .then(todo => { // this is the object that came back from the server.
    //         //2. clear the form fields
    //             this.setState({
    //                 description: '',
    //                 category: ''
    //             })

    //             //3. reload list
    //             this.state.getTodos(todo) //this is also the object that came back from the server. the same thing. we're doing something to the state to it. 
    //         })
    //     }
    // }