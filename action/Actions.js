import * as ActionTypes from './src/ActionTypes.js';
import AppDispatcher from './src/Dispatcher.js';
export const increment = (counterCaption) =>{
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    })
}
export const decrement = (counterCaption) =>{
    AppDispatcher.dispatch({
        type:ActionTypes.DECREMENT, 
        counterCaption:counterCaption
    })
}