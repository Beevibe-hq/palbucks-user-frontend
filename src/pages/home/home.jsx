import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Detailedevent from "../../components/detailedevent/detailedevent";
import Homebody from "../../components/homebody/homebody";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

function Home(){


    //This chooses if to render homebody or a particular fundevent's detailed page
    //const [homeorevent, sethomeorevent] = useState('home')
    const homeorevent = useSelector(state => state.managehomeorevent)
    const sidebaropen = useSelector(state => state.sidebarstate)

    const isMobile = useMediaQuery({
        query: '(max-width: 767px)'
    })

    return(
        <div className=' bg-[#F9F9F9] min-h-full relative' >
            <Sidebar />
            <div className = {`md:ml-[250px] lg:ml-[280px] xl:ml-[320px] ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />
                { homeorevent == 'home' ? <Homebody /> : <Detailedevent details = {homeorevent} /> }
            </div>
        </div>
    )
}

export default Home