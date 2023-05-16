import Sidebar from "../../components/sidebar/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/navbar/navbar";
import backarrow from "../../images/backarrow.svg"
import campaignimage from "../../images/campaign image.png"
import useravatar from "../../images/user3.svg"
import useravatar2 from "../../images/user4.svg"
import useravatar3 from "../../images/user5.svg"
import locateicon from "../../images/locateicon2.svg"
import twittericon from "../../images/twittericon.svg"
import facebookicon from "../../images/facebookicon.svg"
import instagramicon from "../../images/instagramicon.svg"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setnotificationspageactive, setnotificationspageinactive } from "../../actions/actions";
import Likenotification from "../../components/likenotification/likenotification";
import Commentnotification from "../../components/commentnotification/commentnotification";
import Campaignnotification from "../../components/campaignnotification/campaignnotification";
import Requestnotification from "../../components/requestnotification/requestnotification";
import Acceptnotification from "../../components/acceptnotification/acceptnotification";

function Notificationspage(){

    const dispatch = useDispatch()
    
    const sidebarslid = useSelector(state => state.sidebarslid)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const navigate = useNavigate()
    const goback = () =>{
        navigate(-1)
        dispatch(setnotificationspageinactive())
    }

    useEffect(()=>{
        dispatch(setnotificationspageactive())
        window.scrollTo(0,0)

        return () =>{
            dispatch(setnotificationspageinactive())
        }
    },[])

    return(
        <div className='bg-[#F9F9F9] min-h-full overflow-y-auto max-h-[100vh]'>
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />
                <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[25px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-10 w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black text-[32px] mb-4 " >Notifications</h1>
                    <p className=" text-[18px] mb-8 " >See notifications about your crowdfunding campaigns</p>

                    <h2 className="text-[20px] font-bold mb-6 " >Today</h2>
                    <div className="mb-[45px]">
                        <Likenotification userdp = {useravatar} username = 'Carlos' time = '2 hours ago' />
                        <Commentnotification userdp = {useravatar3} username = 'Tochi' time = '5 hours ago' />
                        <Campaignnotification time = '12 hours ago' campaignstate = '100%' />
                        <Requestnotification userdp={useravatar2} username='Franca' time = '13 hours ago' />
                    </div>

                    <h2 className="text-[20px] font-bold mb-6 " >This week</h2>
                    <div className="mb-[45px]" >
                        <Campaignnotification time = '1 day ago' campaignstate = '50%' />
                        <Acceptnotification username = 'Timothy' userdp={useravatar3} time = '2 days ago' />
                    </div>

                    <h2 className="text-[20px] font-bold mb-6 " >This month</h2>
                    <div>
                        <Likenotification userdp = {useravatar2} username = 'Tochi' time = '2 weeks ago' />
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Notificationspage;