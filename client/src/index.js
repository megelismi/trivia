import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './page/HomePage';
import TestPage from './page/TestPage';

import './index.css';

import store from './store/store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return (
        <Provider store={ store }>
            <Router>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/test" component={ TestPage } />
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
