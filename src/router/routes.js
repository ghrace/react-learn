import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Pagea from '../pages/Pagea'
import Pageb from '../pages/Pageb'
import App from '../pages/App';

export default class RouteConfig extends Component {
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/Pagea' exact component={Pagea}/>
                    <Route path='/Pageb' exact component={Pageb}/>
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}