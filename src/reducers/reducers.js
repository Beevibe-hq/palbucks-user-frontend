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

const managehomeorevent = (state = 'home', action) =>{
    switch(action.type){
        case 'sethomeorevent':
            return action.payload
        default:
            return state
    }
}

//This store the fundevents data immediately on render and supplies the rest of the pages from here
const managehomebodydata = (state = [], action) =>{
    switch(action.type){
        case 'sethomebodydata':
            return action.payload
        default:
            return state
    }
}

const allreducers = combineReducers({
    sidebarstate: sidebarstate,
    managelinkcolor,
    managehomeorevent,
    managehomebodydata
})

export default allreducers;