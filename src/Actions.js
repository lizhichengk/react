import * as ActionTypes from './ActionTypes';

export const add = (counterCaption) =>{
    return {
        type : ActionTypes.ADD,
        counterCaption : counterCaption
    }
}
export const reduce = (counterCaption) => {
    return {
        type : ActionTypes.REDUCE,
        counterCaption : counterCaption
    }
}