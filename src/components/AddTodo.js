import React from 'react';

class AddTodo extends React.Component {

    constructor(props) { 
        super(props)
        this.state = {
            description: '',
            category: '',
            getTodos: props.getTodos
        }
    }

    addTodo(getTodos) {
        //1. POST to /api/v1/todos
        if (this.state.description !== '' && this.state.category !== '') {
            // console.log('fetching')
            fetch('/api/v1/todos', {
                method: 'POST', //start object literal
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({ //turn object into a string
                    todo: this.state.description,
                    category: this.state.category,
                    completed: false
                })
            })

            .then(response => response.json())
            .then(todo => { // this is the object that came back from the server.
            //2. clear the form fields
                this.setState({
                    description: '',
                    category: ''
                })

                //3. reload list
                this.state.getTodos(todo) //this is also the object that came back from the server. the same thing. we're doing something to the state to it. 
            })
        }
    }
    
    render () {
        return <div>
        <div className="form-group">
                    <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                        <option value="">Select category...</option>
                        <option value="fun">Fun</option>
                        <option value="home">Home</option>
                        <option value="school">School</option>
                        <option value="work">Work</option>
                    </select>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={() => this.addTodo(this.props.getTodos)}>Add Todo</button>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default AddTodo;