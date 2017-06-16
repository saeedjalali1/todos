import React from 'react';
import TodoApp from '../components/TodoApp';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
const Routes = () => (
    <Router>
        <Route exact path="/" component={TodoApp}/>
    </Router>
);
export default Routes;