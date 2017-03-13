import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
    render () {
        return (
            <ul className="list-group Todos">
                <Todo description="Feed the pets"/>
                <Todo description="Take a shower"/>
                <Todo description="Put on makeup"/>
                <Todo description="Pack a lunch"/>
                <Todo description="Drive to The Iron Yard"/>
            </ul>
        )
    } 
}

export default Todos;