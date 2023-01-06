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

const allreducers = combineReducers({
    sidebarstate: sidebarstate,
})

export default allreducers;