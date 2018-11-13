import React, { Component } from 'react';
import {BoilingVerdict} from '../components/boiling.jsx'
export default class Pagea extends Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.state={temperature:''}
        this.name='pagea'
    }

    handleChange(e){
        this.setState({temperature:e.target.value})
    }

    render(){
        const temperature=this.state.temperature;

        return(
            <fieldset>
                <legend>输入温度</legend>
                <input 
                 value={temperature}
                 onChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)}/>

            </fieldset>

        )
    }
}