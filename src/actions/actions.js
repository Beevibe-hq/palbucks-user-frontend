

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


// Define an action to update the scroll position
export const setScrollPosition = (scrollPosition) => ({
    type: "SET_SCROLL_POSITION",
    payload: scrollPosition,
  });
  