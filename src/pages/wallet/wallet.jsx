import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { useEffect } from "react"
import { setlinkcolor } from "../../actions/actions"
import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Walletbody from "../../components/walletbody/walletbody"

function Wallet(){
    const dispatch = useDispatch()
    //const activepage = useSelector(state => state.managelinkcolor)

    const sidebarslid = useSelector(state => state.sidebarslid)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })
    
    useEffect(()=>{
        dispatch(setlinkcolor('wallet'))
        window.scrollTo(0,0)
    },[])

    return(
        <div className=' bg-[#F9F9F9] min-h-full' >
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />   
                <Walletbody />
                
            </div>
        </div>
    )
}

export default Wallet