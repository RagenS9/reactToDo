import React from 'react';

class AddTodo extends React.Component {
    render () {
        return (
            <div className="container AddTodo">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <select className="form-control">
                                <option>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Task description..."/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">Add Todo</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo;