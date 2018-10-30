import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            leftNum:0,
            rightNum:0
        }
    }
    leftAdd = ()=>{
        let {leftNum} = this.state;
        leftNum++
        this.setState({
            leftNum
        })
    }
    rightAdd = ()=>{
        let {rightNum} = this.state;
        rightNum++
        this.setState({
            rightNum
        })
    }
    render(){
        const {leftText,rightText,ref} = this.props;
        const {leftNum,rightNum} = this.state;
        return(
            <div  style={{height:'45px',lineHeight:'45px',borderBottom:'1px solid #eee'}}>
                <span style={{float:'left'}} onClick={this.leftAdd}>{leftText}</span>
                <span style={{float:'right'}} onClick={this.rightAdd}>{rightText}</span>
                <div style={{clear:'both'}}>leftNum:{leftNum}</div>
                <div style={{clear:'both'}}>rightNum:{rightNum}</div>
                <input text="text" />
            </div>
        )
    }
}
export default List;
