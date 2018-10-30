import * as AtionTypes from './ActionTypes';

export default (state,action) =>{
    const {counterCaption} = action;

    switch (action.type){
        case AtionTypes.ADD :
        return {...state,[counterCaption]:state[counterCaption]+1};
        case AtionTypes.REDUCE:
        return {...state,[counterCaption]:state[counterCaption]-1};
        default:
        return state
    }

}