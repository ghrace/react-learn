import React, { Component } from 'react';
import TempratureInput from '../components/tempratureInput'
import {toCelsius,toFahrenheit,tryConvert} from '../utils/util'
export default class Pageb extends Component{
    constructor(){
        super()
        this.name='pageb';
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale:'c',
            temperature
        })
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale:'f',
            temperature
        })
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return(
            <div>
                <TempratureInput scale='c'
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange}
                />
                <TempratureInput scale='f'
                 temperature={fahrenheit}
                 onTemperatureChange={this.handleFahrenheitChange}
                />
            </div>
        )
    }
}