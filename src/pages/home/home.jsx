import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setlinkcolor } from "../../actions/actions";
import Detailedevent from "../../components/detailedevent/detailedevent";
import Homebody from "../../components/homebody/homebody";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

function Home(){

    const dispatch = useDispatch()

    //This chooses if to render homebody or a particular fundevent's detailed page
    //const [homeorevent, sethomeorevent] = useState('home')
    const homeorevent = useSelector(state => state.managehomeorevent)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const sidebarslid = useSelector(state => state.sidebarslid)

    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    useEffect(()=>{
        dispatch(setlinkcolor('home'))
    }, [])

    return(
        <div className=' bg-[#F9F9F9] min-h-full relative' >
            <Sidebar />
            <div className = {`${sidebarslid ? 'brkpoint:ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } 
            `} >
                <Navbar />
                {/* { homeorevent == 'home' ? <Homebody /> : <Detailedevent details = {homeorevent} /> } */}
                <Homebody />
            </div>
        </div>
    )
}

export default Home