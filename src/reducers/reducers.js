import { combineReducers } from "redux";

const sidebarstate = (state = false , action) =>{
    switch(action.type){
        case 'open sidebar':
            return true
        case 'close sidebar':
            return false
        default:
            return state
    }
}

const managelinkcolor = (state = 'home' , action) =>{
    switch(action.type){
        case 'set link color':
            return action.payload
        default:
            return state
    }
}

const allreducers = combineReducers({
    sidebarstate: sidebarstate,
    managelinkcolor
})

export default allreducers;