import React,{Component} from 'react'


class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:props.initialCount
        }
    }
    render(){
        return (
            <p>{this.state.count}</p>
        )
    }
}

export default Counter