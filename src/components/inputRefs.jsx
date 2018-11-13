import React,{Component} from 'react'
class InputRefs extends Component {
    constructor() {
      super()
      this.state={
          userInput:''
      }
    }
    handelChange(e){
        this.setState({userInput:e.target.value})
    }

    clearAndFoucut(){
        this.setState({
            userInput:''
        },()=>{
            this.refs.theInput.focus()
        })
    }
    
    render(){
        return(
            <div>
                <div onClick={this.clearAndFoucut.bind(this)}>
                    click to focus and reset
                </div>
                <input ref='theInput'
                 value={this.state.userInput} 
                 onChange={this.handelChange.bind(this)}
                 />
                 <p>
                 <span>{this.state.userInput}</span>
                 </p>
            </div>
        )
    }
}

export default InputRefs