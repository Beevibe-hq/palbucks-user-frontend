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
const crowdfundEvents = (state = [], action) =>{
    switch(action.type){
        case 'sethomebodydata':
            return action.payload
        case 'addCrowdfundEvent':
            return [...state,action.payload]
        case 'loadCrowdfundEvents':
            return /* state.concat(action.payload) */ action.payload
        case 'editEventData':            
            return state.map((event)=>{
                if(event.id == action.payload.id){                  
                    return {
                        ...event,
                        ...action.payload
                    }
                }else{
                    return event
                }
            })
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

const signupInfo = (state = {email:'',password:'',otp:''}, action) => {
    switch(action.type){
        case "updateSignupInfo":
            return action.payload
        case "addOtp":
            return {
                ...state,
                otp:action.payload
            }
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

const otpVerified = (state = false, action) => {
    switch(action.type){
        case "setotpverified":
            return action.payload
        default:
            return state;
    }
}

const notificationsData = (state = [], action) => {
    switch(action.type){
        case "loadNotifications":
            return action.payload
        case "addNotification":
            return [...state,action.payload]
        default:
            return state;
    }
}

const newNotificationsAlert = (state = false, action) => {
    switch(action.type){
        case "addNotification":
            return true
        case "removeNotificationAlert":
            return false
        default:
            return state;
    }
}

const paymentMode = (state = 'fiat', action) => {
    switch (action.type) {
        case "setPaymentMode":
            return action.payload
        default:
            return state;
    }
}

const homePageSearchField = (state = '', action) => {
    switch (action.type) {
        case "addSearchValue":
            return action.payload
        default:
            return state;
    }
}

const countryOptions = (state = [], action) => {
    switch (action.type) {
        case "addCountryOptions":
            return action.payload
        default:
            return state;
    }
}

const initialState = {
    crowdfundData: {
        title: '',
        date_posted:'',        
        end_date: "", 
        banner: null,
        description: '',
        start_date: '',
        target_price:0,
        amt_raised:0,
        tags:'',
        location:'',
        co_organisers:[],
    },
    personalInfo: {
        first_name:'',
        last_name:'',
        dateOfBirth:'',
        username:'',
        gender:0,
        phone:'29334234',
        bio:'Humble man',
        email: '',            
        password: '',
        otp:''
    }
}
const anonymousCrowdfundData = ( state = initialState, action) => {
    switch (action.type) {
        case "updateAnonymousCrowdfundData":
            return {
                ...state,
                crowdfundData: {
                    ...state.crowdfundData,
                    ...action.payload.crowdfundData,
                },
                personalInfo: {
                    ...state.personalInfo,
                    ...action.payload.personalInfo,
                }
            };
        default:
            return state;
    }
}


const allreducers = combineReducers({
    sidebarstate: sidebarstate,
    managelinkcolor,
    managehomeorevent,
    homepagedisplay,
    crowdfundEvents,
    homescrollposition,
    sidebarslid,
    onprofilepage,
    onnotificationspage,
    signupInfo,
    authReducer,
    otpVerified,
    notificationsData,
    newNotificationsAlert,
    paymentMode,
    homePageSearchField,
    countryOptions,
    anonymousCrowdfundData
})

export default allreducers;