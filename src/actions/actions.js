import { data } from "autoprefixer"

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
