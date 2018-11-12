import React, { Component } from 'react';
// import logo from './logo.svg';
import PropTypes from 'prop-types';
import LikeButton from '../components/LikeButton'
import Counter from '../components/Counter'
import InputRefs from '../components/InputRefs'
// import Hook from './components/Hook'
import { Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
            <li>
              <Link to="/Pagea">Pagea</Link>
            </li>
            <li>
              <Link to="/Pageb">Pageb</Link>
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
