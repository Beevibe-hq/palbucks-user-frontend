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

const sidebarslid = (state = false , action) =>{
    switch(action.type){
        case 'increase sidebar':
            return true
        case 'reduce sidebar':
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

const homepagedisplay = (state = 'others', action) => {
    switch(action.type){
        case 'setothers':
            return 'others'
        case 'setforyou':
            return 'foryou'
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


//Set the position of homebody before rerendering so it can return there after viewing detailed event.
const homescrollposition = (state = 0, action) => {
    switch (action.type) {
      case "SET_SCROLL_POSITION":
        return action.payload
      default:
        return state;
    }
};

//set profilepage active for animations and effects to take place
const onprofilepage = (state = false, action) =>{
    switch(action.type){
        case "set profilepage active":
            return true
        case "set profilepage inactive":
            return false
        default:
            return state;
    }
}

//set notificationspage active for animations and effects to take place
const onnotificationspage = (state = false, action) =>{
    switch(action.type){
        case "set notificationspage active":
            return true
        case "set notificationspage inactive":
            return false
        default:
            return state;
    }
}

const signupInfo = (state = {email:'',password:''}, action) => {
    switch(action.type){
        case "updateSignupInfo":
            return action.payload
        default:
            return state;
    }
}

const authReducer = (state = { isAuthenticated:false , isLoading:false }, action) => {
    switch(action.type){
        case "setisauthenticated":
            return{
                ...state,
                isAuthenticated:action.payload
            }
        case "setlogoutloading":
            return{
                ...state,
                isLoading:action.payload
            }
        default:
            return state;
    }
}

const allreducers = combineReducers({
    sidebarstate: sidebarstate,
    managelinkcolor,
    managehomeorevent,
    homepagedisplay,
    managehomebodydata,
    homescrollposition,
    sidebarslid,
    onprofilepage,
    onnotificationspage,
    signupInfo,
    authReducer,
})

export default allreducers;