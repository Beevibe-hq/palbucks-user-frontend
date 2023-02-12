import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Settingsbody from "../../components/settingsbody/settingsbody"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setlinkcolor } from "../../actions/actions"
import { useMediaQuery } from "react-responsive"

function Settings(){

    const dispatch = useDispatch()
    //const activepage = useSelector(state => state.managelinkcolor)

    const sidebaropen = useSelector(state => state.sidebarstate)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })
    
    useEffect(()=>{
        dispatch(setlinkcolor('settings'))
    },[])

    return(
        <div className=' bg-[#F9F9F9] min-h-full' >
            <Sidebar />
            <div className =  {`brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px] ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />   
                <Settingsbody />
                
            </div>
        </div>
    )
}

export default Settings