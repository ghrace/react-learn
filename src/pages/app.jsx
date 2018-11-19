import React, { Component } from 'react';
// import logo from './logo.svg';
import PropTypes from 'prop-types';
import LikeButton from '../components/likeButton'
import Counter from '../components/counter'
import InputRefs from '../components/inputRefs'
// import Hook from './components/Hook'
import { Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul className='links'>
            <li>
              <Link to="/Pagea">Pagea</Link>
            </li>
            <li>
              <Link to="/Pageb">Pageb</Link>
            </li>
            <li>
              <Link to="/game">game</Link>
            </li>
            <li>
              <Link to="/todo">todo</Link>
            </li>
          </ul>
          <LikeButton/>
          <Counter/>
          <InputRefs/>
          {/* <Hook/> */}
        </header>
      </div>
    );
  }
}
App.propTypes ={
  name:PropTypes.string
}
export default App;
