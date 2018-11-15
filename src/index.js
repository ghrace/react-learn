import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import Routes from './router/routes'
import store from './store/index'
import * as serviceWorker from './serviceWorker';
store.subscribe(() =>
    console.log(store.getState())
  );
  
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
/**
 * context是一个全局变量,像是一个大容器,在任何地方都可以访问到,我们可以把要通信的信息放在context上,然后在其他组件中可以随意取到;
但是React官方不建议使用大量context,尽管他可以减少逐层传递,但是当组件结构复杂的时候,我们并不知道context是从哪里传过来的;而且context是一个全局变量,全局变量正是导致应用走向混乱的罪魁祸首.
 *  父组件向子组件通信: props
    子组件向父组件通信: 回调函数/自定义事件
    跨级组件通信: 层层组件传递props/context 
    没有嵌套关系组件之间的通信: 自定义事件  events 包
 */