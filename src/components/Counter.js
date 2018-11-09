import React,{Component} from 'react'
import {connect} from 'react-redux'
import {increment,decrement,reset} from '../store/action'

class Counters extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        const {count,add,del,reset}=this.props;
        const list=[1,3,4]

        return (
            <div>
                <p>count: { count }</p>
                <ul>
                    {
                        list.map((item)=>{
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={reset}>reset</button>
                <br/>
                <button onClick={add}>increment</button>
                <button onClick={del}>decrement</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function mapDispatchToprops(dispatch) {
    return {
        add: () => dispatch(increment()),
        del: () => dispatch(decrement()),
        reset:() => dispatch(reset())
    };
}
export default connect(mapStateToProps,mapDispatchToprops)(Counters)