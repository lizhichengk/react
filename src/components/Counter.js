import './css/counter.css';
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as Actions from '../Actions';

function Counter({caption,add,reduce,value}){
    return (
        <div className='ControlPanel'>
                <button onClick = {add}>+</button>
                <button onClick = {reduce}>-</button>
                <span>
                    {caption}: {value}
                </span>
            </div>
    )
}
function mapStateToProps(state,ownProps){
    return {
        value : state[ownProps.caption]
    }
}
function mapDispatchToProps(dispatch,ownProps){
    return {
        add : ()=>{
            dispatch(Actions.add(ownProps.caption))
        },
        reduce:()=>{
            dispatch(Actions.reduce(ownProps.caption))
        }
    }
}
Counter.propTypes = {
    caption:PropTypes.string.isRequired,
    add:PropTypes.func.isRequired,
    reduce:PropTypes.func.isRequired,
    value:PropTypes.number.isRequired,
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter); 
