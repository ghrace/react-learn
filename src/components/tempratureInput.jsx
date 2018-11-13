import React ,{Component} from 'react'
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
}
class TempratureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange (e) {
      this.props.onTemperatureChange(e.target.value)
    }
    render(){
    const temperature =this.props.temperature;
    const scale=this.props.scale;
      return(
        <fieldset>
        <legend>在 {scaleNames[scale]}:中输入的温度数值</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
      )
    }
}

export default TempratureInput