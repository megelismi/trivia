import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        response: ''
    };

    handleClick() {
        this.callApi()
            .then(res => this.setState({ response: res.response }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/questions');
        const body     = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                <button onClick={ this.handleClick.bind(this) }>Get questions</button>

                { this.state.response !== '' && this.state.response.map(question => <div>{ question.question }</div> )}
            </p>
          </div>
        );
    }
}

export default App;
