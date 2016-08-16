import data from './full.json';
import React, { Component } from 'react';
import Tree from './tree';
import logo from './logo.svg';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Inspire Tree React Demo</h2>
                </div>
                <p>This is a basic proof-of-concept which implements a native React renderer for InspireTree.</p>
                <Tree data={data} />
            </div>
        );
    }
}

export default App;
