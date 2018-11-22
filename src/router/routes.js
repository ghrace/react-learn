import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Pagea from '../pages/pagea'
import Pageb from '../pages/pageb'
import App from '../pages/app'
import Game from '../pages/game'
import Todo from '../pages/todo'
import Download from '../pages/downLoad'
export default class RouteConfig extends Component {
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/Pagea' exact component={Pagea}/>
                    <Route path='/Pageb' exact component={Pageb}/>
                    <Route path='/game' exact component={Game}/>
                    <Route path='/todo' exact component={Todo}/>
                    <Route path='/down' exact component={Download}/>
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}