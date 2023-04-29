import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Organisecrowdfundbody from "../../components/organisecrowdfundbody/organisecrowdfundbody"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setlinkcolor } from "../../actions/actions"
import { useMediaQuery } from "react-responsive"

function Organisecrowdfund(){

    const dispatch = useDispatch()
    //const activepage = useSelector(state => state.managelinkcolor)

    const sidebarslid = useSelector(state => state.sidebarslid)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })
    
    useEffect(()=>{
        dispatch(setlinkcolor('organisecrowdfund'))
        window.scrollTo(0,0)
    },[])

    return(
        <div className=' bg-[#F9F9F9] min-h-full' >
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />   
                <Organisecrowdfundbody />
                
            </div>
        </div>
    )
}

export default Organisecrowdfund