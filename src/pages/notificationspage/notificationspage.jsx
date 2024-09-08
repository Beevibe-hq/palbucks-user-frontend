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
import infoicon2  from "../../images/info icon.png";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeNotificationAlert, setnotificationspageactive, setnotificationspageinactive } from "../../actions/actions";
import Likenotification from "../../components/notifications/likenotification/likenotification";
import Commentnotification from "../../components/notifications/commentnotification/commentnotification";
import Campaignnotification from "../../components/notifications/campaignnotification/campaignnotification";
import Requestnotification from "../../components/notifications/requestnotification/requestnotification";
import Acceptnotification from "../../components/notifications/acceptnotification/acceptnotification";
import { timeDifference } from "../../components/detailedevent/detailedevent";

function Notificationspage(){

    const dispatch = useDispatch()    
    const notificationsData = useSelector(state => state.notificationsData)
    console.log(notificationsData)
    
    // Convert notificationData timestamp to time ago format
    notificationsData.forEach((data) => {          
        data.time = timeDifference(data.timestamp)     
        //console.log(data.time)
    })

    // Split my notifications data into three groups for display in today, this week and this month
    let todayNotifications = notificationsData.filter(data => data.time.includes('hour') || data.time.includes('min') || data.time.includes('sec'))
    let weekNotifications = notificationsData.filter(data => data.time.includes('day'))
    let monthNotifications = notificationsData.filter(data => data.time.includes('week'))
    let yearNotifications = notificationsData.filter(data => data.time.includes('month') || data.time.includes('year') )
    
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

    console.log(notificationsData.length)
    return(
        <div className='bg-[#F9F9F9] min-h-full overflow-y-auto max-h-[100vh]'>
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />
                <div className = 'fold:px-2 phones:px-5 md:px-10 lg:pl-[25px] lg:pr-[27px] pt-6 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-arial w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-[22px] md:mb-10 w-[25px] md:w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black font-merriweather text-2xl md:text-[32px] mb-[5px] md:mb-4 " >
                        Notifications
                    </h1>
                    <p className=" text-base md:text-lg mb-8 " >
                        See notifications about your crowdfunding campaigns
                    </p>                   
                    
                    <h2 className={` ${todayNotifications.length == 0 ? 'hidden' : 'block'} text-base md:text-xl font-bold mb-[18px] md:mb-6 `} >
                        Today
                    </h2>
                    <div className="mb-10 md:mb-[45px] flex flex-col gap-[15px] md:gap-0 ">
                        {/* <Likenotification userdp = {'users/display_pictures/680649c3a91e4c649c930766f3d1bb2b_2023-03-13-154301.jpg'} username = 'Carlos' time = '2 hours ago' />
                        <Commentnotification userdp = {'users/display_pictures/680649c3a91e4c649c930766f3d1bb2b_2023-03-13-154301.jpg'} username = 'Tochi' time = '5 hours ago' />
                        <Campaignnotification time = '12 hours ago' campaignstate = '100%' />
                        <Requestnotification userdp={useravatar2} username='Franca' time = '13 hours ago' /> */}
                        {
                            todayNotifications.reverse().map((data, i) => {
                            if (data.type == 'like') {
                                return <Likenotification userdp={data.dp} username={data.name} time={data.time} key = {i} />
                            } else if (data.type == 'comment') {
                                return <Commentnotification userdp={data.dp} username={data.name} time={data.time} comment = {data.comment} key = {i} />
                            }else if (data.type == 'milestone') {
                                return <Campaignnotification timestamp={data.time} percentage_reached={data.percentage_reached} key = {i} />
                            }else if (data.type == 'co-organiser-request') {
                                return <Requestnotification userdp={data.userdp} username={data.invited_by} time={data.time} key = {i} />
                            }else if (data.type == 'accept') {
                                return <Acceptnotification userdp={data.userdp} username={data.username} time={data.time} key = {i} />
                            }
                        }) 
                        }
                    </div>



                    <h2 className={` ${weekNotifications.length == 0 ? 'hidden' : 'block'} text-base md:text-xl font-bold mb-[18px] md:mb-6`} >
                        This week
                    </h2>
                    <div className="mb-10 md:mb-[45px] flex flex-col gap-[15px] md:gap-0 ">
                        {/* <Campaignnotification timestamp = '1 day ago' percentage_reached = '50' />
                        <Acceptnotification username = 'Timothy' userdp={useravatar3} time = '2 days ago' /> */}
                        {
                           weekNotifications.reverse().map((data, i) => {
                            if (data.type == 'like') {
                                return <Likenotification userdp={data.dp} username={data.name} time={data.time} key = {i} />
                            } else if (data.type == 'comment') {
                                return <Commentnotification userdp={data.dp} username={data.name} time={data.time} comment = {data.comment} key = {i} />
                            }else if (data.type == 'milestone') {
                                return <Campaignnotification timestamp={data.time} percentage_reached={data.percentage_reached} key = {i} />
                            }else if (data.type == 'co-organiser-request') {
                                return <Requestnotification userdp={data.userdp} username={data.username} time={data.time} key = {i} />
                            }else if (data.type == 'accept') {
                                return <Acceptnotification userdp={data.userdp} username={data.username} time={data.time} key = {i} />
                            }
                        }) 
                        }
                    </div>

                    <h2 className={` ${monthNotifications.length == 0 ? 'hidden' : 'block'} text-base md:text-xl font-bold mb-[18px] md:mb-6 `} >
                        This month
                    </h2>
                    <div>
                        {/* <Likenotification userdp = {'users/display_pictures/680649c3a91e4c649c930766f3d1bb2b_2023-03-13-154301.jpg'} username = 'Tochi' time = '2 weeks ago' /> */}
                        {
                           monthNotifications.reverse().map((data, i) => {
                            if (data.type == 'like') {
                                return <Likenotification userdp={data.dp} username={data.name} time={data.time} key = {i} />
                            } else if (data.type == 'comment') {
                                return <Commentnotification userdp={data.dp} username={data.name} time={data.time} comment = {data.comment} key = {i} />
                            }else if (data.type == 'milestone') {
                                return <Campaignnotification timestamp={data.time} percentage_reached={data.percentage_reached} key = {i} />
                            }else if (data.type == 'co-organiser-request') {
                                return <Requestnotification userdp={data.userdp} username={data.username} time={data.time} key = {i} />
                            }else if (data.type == 'accept') {
                                return <Acceptnotification userdp={data.userdp} username={data.username} time={data.time} key = {i} />
                            }
                        }) 
                        }
                    </div>

                    <div className={` ${notificationsData.length == 0 ? 'flex mr-auto w-fit items-center justify-center gap-5 px-20 xl:px-40': 'hidden' }  `} >
                        <img src={infoicon2} alt="info icon" className="w-6" />
                        <p className="text-lg font-arial text-[#8E8E93]" >No notification to show</p>
                    </div>
                    
                    {/* No year notification code yet */}

                </div>
            </div>

        </div>
    )
}

export default Notificationspage;