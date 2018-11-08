import React,{Component} from 'react'
class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state={liked:false}
    }
    handleClick(param,e){
        console.log(param);
        this.setState({liked:!this.state.liked})
    }

    render(){
        const text=this.state.liked?'like':'havent\'t liked';
        return (
            <p onClick={this.handleClick.bind(this,'extra param')}>
            you {text} this.click to toggle</p>
        )
    }
    componentWillMount(){
        console.log(this.state.liked);
        //可以在这个方法里面调用 setState 改变状态，并且不会导致额外调用一次 render
    }
    componentDidMount(){
        //开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点。
    }
    //方法不会在首次 render 组件的周期调用
    componentWillReceiveProps(){

    }
    // shouldComponentUpdate(){

    // }
    componentWillUpdate(){

    }

    componentDidUpdate(){

    }
    componentWillUnmount(){
        //卸载组件触发
    }
}

export default LikeButton