import React,{Component} from 'react'
import {connect} from 'react-redux'
const list=[1,3,4]

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:props.initialCount
        }
    }
    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <ul>
                    {
                        list.map((item)=>{
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Counter