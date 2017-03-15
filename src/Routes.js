// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import App from './components/App';
import Completed from './components/Completed';

//QQCollin, Ragen: not sure if we did the route paths right. 

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="/completed" component={Completed} />
            </Router>
        </Provider>
    }

    // render() {
    //     return <Provider store={store}>
    //         <Router history={history}>
    //             <Route path="/" component={Todos} />
    //         </Router>
    //     </Provider>
    // }
}

export default Routes
