import React,{Component} from 'react';
import List from '../components/list'

class Home extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }
    change = (data)=>{
        console.log(data)
    }
    render(){
        return (
            <div>
                <div>Home</div>
                <List
                    ref={this.change}
                    leftText = "左边点击"
                    rightText = "右边点击"
                />
            </div>
        )
    }
}
export default Home;
