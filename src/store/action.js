import * as home from './action-type'

export const increment=(value)=>{
    return {
        type:home.INCREMENT,
        value,
    }
}

export const decrement=(value)=>{
    return {
        type:home.DECREMENT,
        value,
    }
}

export const reset=(value)=>{
    return {
        type:home.RESET,
        value,
    }
}