import React, { Component } from 'react';
// import logo from './logo.svg';
import LikeButton from './components/LikeButton'
import Counter from './components/Counter'
import InputRefs from './components/InputRefs'
// import Routes from './router/routes'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <ul>
            <li>
              <Link to="/counter">counter</Link>
            </li>
            <li>
              <Link to="/button">button</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/counter" component={Counter} />
            <Route path="/button" component={LikeButton} />
          </Switch>
          {/* <Routes/> */}
          {/* <LikeButton/>
          <Counter initialCount={11}/> */}
          <InputRefs/>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
