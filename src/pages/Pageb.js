import React, { Component } from 'react';
import TempratureInput from '../components/TempratureInput'
export default class Pageb extends Component{
    constructor(){
        super()
        this.name='pageb'
    }
    render(){
        return(
            <div>
                <TempratureInput scale='c'/>
                <TempratureInput scale='f'/>
            </div>
        )
    }
}