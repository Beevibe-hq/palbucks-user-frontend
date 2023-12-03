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
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeNotificationAlert, setnotificationspageactive, setnotificationspageinactive } from "../../actions/actions";
import Likenotification from "../../components/notifications/likenotification/likenotification";
import Commentnotification from "../../components/notifications/commentnotification/commentnotification";
import Campaignnotification from "../../components/notifications/campaignnotification/campaignnotification";
import Requestnotification from "../../components/notifications/requestnotification/requestnotification";
import Acceptnotification from "../../components/notifications/acceptnotification/acceptnotification";

function Notificationspage(){

    const dispatch = useDispatch()    
    const notificationsData = useSelector(state => state.notificationsData)
    const newNotificationsAlert = useSelector(state => state.newNotificationsAlert)

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
        window.scrollTo(0, 0)
        
        /* // Fetch notifications data from the server

        // Testing configuration here
        // Configure pusher for notifications and suscribe to the channel
        var pusher = new Pusher("a6fc775946470e47c0d0", {
            cluster: "eu",      
        })        

        // Subscribe to the notifications channel
        if (userInfo !== null) {
            var notificationsChannel = pusher.subscribe(userInfo.email)
        }


        // This might still be moved to the app.js page to be used and accessed globally immediately you login
        notificationsChannel.bind("crowdfund-like", (data) => {
            setNotificationsData([...notificationsData, data])
            console.log(data)
        })
        notificationsChannel.bind("crowdfund-comment", (data) => {
            setNotificationsData([...notificationsData, data])
            console.log(data)
        })
        notificationsChannel.bind("milestone", (data) => {
            setNotificationsData([...notificationsData, data])
            console.log(data)
        }) */        

        return () =>{
            dispatch(setnotificationspageinactive())
        }
    }, [])
    
    // Remove the notification alert when the user visits the notifications page
    useEffect(() => { 
        if (newNotificationsAlert) {
            dispatch(removeNotificationAlert())
        }
    },[newNotificationsAlert])

    return(
        <div className='bg-[#F9F9F9] min-h-full overflow-y-auto max-h-[100vh]'>
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />
                <div className = 'fold:px-2 phones:px-4 lg:pl-[25px] lg:pr-[27px] pt-6 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-[22px] md:mb-10 w-[25px] md:w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black text-2xl md:text-[32px] mb-[5px] md:mb-4 " >
                        Notifications
                    </h1>
                    <p className=" text-base md:text-lg mb-8 " >
                        See notifications about your crowdfunding campaigns
                    </p>

                    {   
                        /*  Map / Display the notifications data with necessary UI, 
                            note: the data will still be filtered into day, week and month
                         */
                        notificationsData.map((data, i) => {    
                            if (data !== null) {
                                return <h1 className="text-xl mb-4 text-[#37BCF7]" key={i} >{data.message}</h1>
                            }
                            if (data.type == 'like') {
                                return <Likenotification userdp={data.userdp} username={data.username} time={data.time} />
                            } else if (data.type == 'comment') {
                                return <Commentnotification userdp={data.userdp} username={data.username} time={data.time} />
                            }else if (data.type == 'campaign') {
                                return <Campaignnotification time={data.time} campaignstate={data.campaignstate} />
                            }else if (data.type == 'request') {
                                return <Requestnotification userdp={data.userdp} username={data.username} time={data.time} />
                            }else if (data.type == 'accept') {
                                return <Acceptnotification userdp={data.userdp} username={data.username} time={data.time} />
                            }
                        })
                    }
                    
                    <h2 className="text-base md:text-xl font-bold mb-[18px] md:mb-6 " >
                        Today
                    </h2>
                    <div className="mb-10 md:mb-[45px] flex flex-col gap-[15px] md:gap-0 ">
                        <Likenotification userdp = {useravatar} username = 'Carlos' time = '2 hours ago' />
                        <Commentnotification userdp = {useravatar3} username = 'Tochi' time = '5 hours ago' />
                        <Campaignnotification time = '12 hours ago' campaignstate = '100%' />
                        <Requestnotification userdp={useravatar2} username='Franca' time = '13 hours ago' />
                    </div>

                    <h2 className="text-base md:text-xl font-bold mb-[18px] md:mb-6 " >
                        This week
                    </h2>
                    <div className="mb-10 md:mb-[45px] flex flex-col gap-[15px] md:gap-0 ">
                        <Campaignnotification time = '1 day ago' campaignstate = '50%' />
                        <Acceptnotification username = 'Timothy' userdp={useravatar3} time = '2 days ago' />
                    </div>

                    <h2 className="text-base md:text-xl font-bold mb-[18px] md:mb-6 " >
                        This month
                    </h2>
                    <div>
                        <Likenotification userdp = {useravatar2} username = 'Tochi' time = '2 weeks ago' />
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Notificationspage;