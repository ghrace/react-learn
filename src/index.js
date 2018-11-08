import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
// import Routes from './router/routes'
import store from './store/index'
import App from './App';

import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <Provider store={store}>
        {/* <Routes/> */}
        <App/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
