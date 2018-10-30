import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

    function Summary ({value}){
        return(
            <div>Total Count : {value}</div>
        )
    }
    function mapStateToProps(state){
        let sum = 0;
        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum +=state[key];
            }
        }
        return { value:sum }
    }
    Summary.propTypes = {
        value: PropTypes.number.isRequired
    };
      
export default connect(mapStateToProps)(Summary);