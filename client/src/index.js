import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './page/HomePage';
import GamePage from './page/GamePage';

import './index.css';
import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadState, saveState } from './localStorage';
import registerServiceWorker from './registerServiceWorker';

store.subscribe(() => {
    saveState(store.getState())
});

const App = () => {
    return (
        <Provider store={ store }>
            <Router>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/game" component={ GamePage } />
                </Switch>
            </Router>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
