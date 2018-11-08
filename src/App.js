import React, { Component } from 'react';
// import logo from './logo.svg';
import LikeButton from './components/LikeButton.js'
import Counter from './components/Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>save</p>
          <LikeButton/>
          <Counter initialCount={11}/>
        </header>
      </div>
    );
  }
}

export default App;
