

export const opensidebar = () =>{

    return {
        type : 'open sidebar'
    }
}

export const closesidebar = () =>{

    return {
        type : 'close sidebar'
    }
}

export const reducesidebar = () =>{

    return {
        type : 'reduce sidebar'
    }
}

export const increasesidebar = () =>{

    return {
        type : 'increase sidebar'
    }
}



export const setlinkcolor = (data) =>{

    return{
        type: 'set link color',
        payload:data
    }
}

//Action to render between homebody or detailedevent in home
export const sethomeorevent = (data) =>{

    return{
        type: 'sethomeorevent',
        payload:data
    }
}

//Action to set all data that will be displayed on homepage. This data should come from backend.
export const sethomebodydata = (data) =>{

    return {
        type:'sethomebodydata',
        payload:data
    }
}

//Action to set profilepage active
export const setprofilepageactive = () => {

    return{
        type: 'set profilepage active'
    }
}

//Action to set profilepage inactive
export const setprofilepageinactive = () => {

    return{
        type: 'set profilepage inactive'
    }
}



// Define an action to update the scroll position
export const setScrollPosition = (scrollPosition) => ({
    type: "SET_SCROLL_POSITION",
    payload: scrollPosition,
  });
  