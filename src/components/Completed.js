import React from 'react';
import Todo from './Todo';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

class Completed extends React.Component {
    render() {
        let completedTodos = this.props.sharedTodos.filter((todos) => todos.completed === 'yes').map((todo, key) => <Todo key={key} {...todo} />)
        return (
            <div>
                <h1>Completed Todos</h1>
                    <div className="completedTodosList">
                        <div className="well well-sm">
                            <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>View All Todos</button>
                        </div>
                        <ul className="list-group">
                            {completedTodos}
                        </ul>
                    </div>
                
            </div>  
        )

    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Completed)

//how we used to export
// export default Completed;