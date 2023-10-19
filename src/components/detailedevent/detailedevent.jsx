import { useDispatch, useSelector } from "react-redux"
import { sethomebodydata, sethomeorevent, setlinkcolor, editEventData } from "../../actions/actions"
import backarrow from "../../images/backarrow.svg"
import date from "../../images/date.svg"
import share from "../../images/share.svg"
import likeicon from "../../images/likeicon.svg"
import locateicon from "../../images/locateicon.svg"
import user9 from "../../images/user9.svg"
import user8 from "../../images/user8.svg"
import user7 from "../../images/user7.svg"
import environmentLabel from "../../images/categoryImages/environment label.svg"
import profileImgPlaceholder from "../../images/profileplaceholder.svg"
import blackdot from "../../images/blackdot.svg"
import Campaignorganizers from "../campaignorganizers/campaignorganizers"
import { useEffect, useState } from "react"
import Likeicon from "../../images/likeicon"
import editIcon from "../../images/crowdfunds/editIcon.svg"
import commentIcon from "../../images/crowdfunds/commentIcon.svg"

import {options} from "../../components/organisecrowdfundbody/organisecrowdfundbody"
import Navbar from "../navbar/navbar"
import { useMediaQuery } from "react-responsive"
import Sidebar from "../sidebar/sidebar"
import { useNavigate, useParams } from "react-router-dom"
import Activities from "../activities/activities"
import CommentModal from "../commentModal/commentModal"
import Activity from "../../components/activity/activity"
import { activityData } from "../activities/activities"
import DonationModal from "../donationModal/donationModal"

function Detailedevent(props){
    
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) 
    /*
     This selects homebodydata from redux store so as to get the complete details of the selected funding event.
     When the fundevent is clicked, an id is passed from the url params to select particular event.
     */
    let homebodydata = useSelector(state => state.crowdfundEvents)

    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    //This selects the particular event from the homebodydata array
    let eventid = params.id
    let eventdetails = homebodydata.filter(item => item.id == eventid)[0]
    
    var organizerdetails = []
    function arrangeorganizerdetails(){
        
        /* organizerdetails = [
            {
                image: eventdetails.organizeraccounts[0],
                name:eventdetails.organizeraccounts[0],
            },
            {
                image: eventdetails.organizeraccounts[1],
                name:eventdetails.organizeraccounts[1],
            }
        ] */
        
        //Puts organizerdetails in the above structure so it can be accessed easily in campaignorganizers component
        if(eventdetails.organizeraccounts){
            for(let i = 0; i<eventdetails.organizeraccounts.length; i++ ){
            
                let organizer = {
                    name:eventdetails.organizeraccounts[i],
                    image:eventdetails.org ? eventdetails.organizerimg[i] : null
                }
                organizerdetails.push(organizer)
            }
        }else{
            let organizer = {
                name:eventdetails.user_name,
                image: eventdetails.user_img ? eventdetails.user_img : profileImgPlaceholder 
            }
            organizerdetails.push(organizer)
        }
    }    
    
    //This converts the total number of people donated from normal numbers to formatted for space
    const formatnumber = n => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };
      
    arrangeorganizerdetails()

    let totaldonations = formatnumber(eventdetails.totaldonations);

    //This manages the like button
    const [liked,setliked] = useState(eventdetails.is_liked)
    const access_token = localStorage.getItem('access_token')
    const managelikes = async(event) =>{         
        //prevent the parent div's onclick from trigerring        
        event.stopPropagation();
        
        const likeOrUnlikeCrowdfund = async(status) => {
            const response = await fetch(`https://palbucks-api.onrender.com/funding/api/${eventid}/like/`,{
                method:'POST',
                body:JSON.stringify({status:status}),
                headers:{
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                }
            })
            return response
        }

        if(liked){
            const response = await likeOrUnlikeCrowdfund(0)
            //console.log(await response.json())
            if(response.status == 200){
                //alert('Crowdfund liked successfully')
                setliked(false)
                dispatch(editEventData({
                    id:eventid,
                    is_liked: false
                })
            )
            }else{
                alert('Crowdfund like failed')
            }
        }else{
            const response = await likeOrUnlikeCrowdfund(1)
            //console.log(await response.json())
            if(response.status == 200){
                //alert('Crowdfund liked successfully')
                setliked(true)
                dispatch(editEventData({
                    id:eventid,
                    is_liked: true
                })
            )
            }else if(response.data == 'You cannot like the same funding more than once'){
                const resp = await likeOrUnlikeCrowdfund(0)
                console.log(resp)
            }else{
                alert('Crowdfund like failed')
            }
        }        
        //setliked(!liked)
    }
    
    
    useEffect(()=>{            
            window.scrollTo(0,0)
            setliked(eventdetails.is_liked)
                        
            //Fetch the comments for this event from the backend
            const getComments = async() => {
                const response = await fetch(`https://palbucks-api.onrender.com/funding/api/${eventid}/comments/`,{
                    headers:{
                        Authorization: `Bearer ${access_token}`
                    }
                })
                const data = await response.json()
                
                if(response.ok){
                    // Sort data in descending order of timestamp before storing
                    data.sort((a,b) => {
                        return new Date(b.timestamp) - new Date(a.timestamp)
                    })
                    setCommentData(data)
                }else{
                    alert('Failed to get comments')
                }
            }
            getComments()
    },[])

    //Comment data
    const [commentData, setCommentData] = useState([])

    // Update number of comments to display when comments change
    useEffect(()=>{
        setCommentsNumber(Math.ceil(commentData.length/2 < 3 ? 3 : commentData.length/2))
    },[commentData])

    const sidebaropen = useSelector(state => state.sidebarstate)
    const sidebarslid = useSelector(state => state.sidebarslid)
    const isTablet = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    const end_date = new Date(eventdetails.end_date);
    const today = new Date();
    

    // Calculate difference in milliseconds between the two dates and convert to days
    const daysLeft = Math.ceil((end_date - today) / (1000 * 60 * 60 * 24));
    
    // Determines number of comments to show
    const [commentsNumber, setCommentsNumber] = useState(Math.ceil(commentData.length/2))

    // Display modals
    const [displayModals, setDisplayModals] = useState({
        commentModal: false,
        updateModal: false,
        donateModal: false
    })
    
    const [readMore, setReadMore] = useState(false)
    const [commentsActivitiesView, setCommentsActivitiesView] = useState('comments')
    
    // Loop through the options array, check if the category matches the option and return the image
    const categoryImg = options.filter(item => item.value === eventdetails.tags).map(item => item.icon) 
    

        return(
            <div className=' bg-[#F9F9F9] min-h-full relative ' >
                <Sidebar />
                <div className = {`${sidebarslid ? 'brkpoint:ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isTablet && sidebaropen ? 'blur-sm' : '' }
                `} >
                    <Navbar />
                    <div className = 'fold:px-1 phones:px-3 md:px-6 lg:px-10 pt-6 md:pt-8 pb-16 md:pb-20 mt-[90px] md:mt-[100px] w-full h-full'>
                
                        <img src={backarrow} alt="back arrow" className = {`w-[22px] md:w-8 mb-5 md:mb-[34px] cursor-pointer`}
                        onClick = {
                            () => {
                                //dispatch(sethomeorevent('home'))
                                //navigate(-1) This is navigating back to the campaign image page so I'm taking it to home for now
                                navigate('/home')
                            }
                        }
                        />
                
                        <div className="bg-[#636363] mb-4 md:mb-[30px] flex gap-2 px-3 md:px-5 py-2 w-fit rounded-[14px] md:rounded-2xl justify-center items-center text-white ">
                            <img src={date} alt="calendar icon" className = "w-4 hidden md:block " />
                            <span className="font-semibold text-sm md:text-base " >{`${eventdetails.end_date ? daysLeft : eventdetails.days } days remaining`}</span>
                        </div>
                
                        <div className="font-merriweather w-full flex flex-col md:flex-row gap-3 md:justify-between 2xl:gap-11 2xl:justify-start ">
                            <div className="w-full md:w-[60%] ">
                                <div className =" relative w-full shrink-0 mb-4 md:mb-8 " >
                                    <img src={eventdetails.banner} alt="Fund event" className = {`w-full h-[200px] xphones:h-[215px] md:h-[350px] rounded-sm md:rounded-xl `} />
                                    <div className = 'absolute top-4 left-5 bg-white flex gap-1 md:gap-2 px-2 md:px-4 rounded-lg py-1 items-center'>
                                        <img src={categoryImg.length !== 0 ? categoryImg : options.slice(-1)[0].icon } alt="Event category icon" className = 'w-3 md:w-[17px] md:h-[17px] ' />
                                        <span className = 'text-xs md:text-base font-black' >
                                            {eventdetails.tags ? eventdetails.tags : 'Others'}
                                        </span>
                                    </div>
                                </div>
                                <div className = "w-full" >
                                    <div className="flex gap-3 md:gap-10 px-1 md:px-3 mb-7 md:mb-8 ">

                                        {/* Share campaign button  */}
                                        <button className={` ${isMobile && eventdetails.organiser.username !== userInfo.username ? 'border-[2px] border-black order-2':'bg-[#58cdff] text-white '} 
                                            flex flex-1 gap-2 py-2 md:py-[10px] px-3 md:px-4 w-full sm:w-fit 
                                            rounded-lg md:rounded-xl font-black text-sm md:text-base justify-center items-center `} >
                                            <img src={share} alt="share icon" className="w-[15px] sm:w-[20px] hidden md:block " />
                                            <span>Share Campaign</span>
                                        </button>

                                        {/* Like campaign button for desktop */}
                                        <button 
                                            className = {` ${eventdetails.organiser.username !== null && eventdetails.organiser.username == userInfo.username ? 
                                                'hidden ' : 
                                                isMobile ? 'hidden':'flex items-center flex-1 justify-center gap-[8px] border-[2px] border-black rounded-[10px] w-full py-[10px] max-h-[40px] px-4 text-base text-[#000000] font-semibold ' 
                                            } `}
                                            onClick={managelikes}
                                        >
                                            {/* <img src={likeicon} alt = 'like icon' className = "w-[16px]" /> */}
                                            <Likeicon liked = {liked} color = {liked ? '':'black'} />
                                            <span>{liked ? 'Liked Campaign' : 'Like Campaign '}</span>
                                        </button>

                                        {/* Donate button */}
                                        <button
                                            className={` ${isMobile && eventdetails.organiser.username !== userInfo.username ? '' : 'hidden'}
                                            bg-[#58cdff] text-white flex flex-1 gap-2 py-2 md:py-[10px] px-3 md:px-4 w-full sm:w-fit 
                                            rounded-lg md:rounded-xl font-black text-sm md:text-base justify-center items-center `}
                                            onClick={() => {
                                                setDisplayModals((prev) => (
                                                    {
                                                        ...prev,
                                                        donateModal: true
                                                    }
                                                ))
                                            }}
                                        >                                            
                                            Donate now
                                        </button>

                                        {/* Edit button for personal host view */}
                                        <button 
                                            className = {` ${eventdetails.organiser.username !== null && eventdetails.organiser.username == userInfo.username ? 
                                            'flex items-center flex-1 justify-center gap-[8px] border-[2px] border-[#37BCF7] rounded-lg md:rounded-[10px] w-full py-[7px] md:py-[10px] md:max-h-[40px] px-3 md:px-4 text-sm md:text-base text-[#37BCF7] h-fit font-black ' 
                                            : 'hidden' } `}
                                            >                                            
                                            <img src={editIcon} alt="Edit icon" className="w-5 hidden md:block " />
                                            <span>Edit Campaign</span>
                                        </button>
                                    </div>

                                    <DonationModal                                        
                                        displayModals={displayModals}
                                        setDisplayModals={setDisplayModals}
                                        eventid = {eventid}
                                    />
                                    
                                    <div className={` md:hidden `}>
                                        <p className={`text-sm md:text-lg font-black md:leading-4 mb-4`} >
                                            {
                                                eventdetails.amt_raised + ' USDT raised'
                                            }
                                            <span className="tracking-[0.06px] text-xs md:text-base text-[#8E8E93] leading-5 " >
                                                {
                                                    ' of ' + eventdetails.target_price + ' USDT'
                                                }
                                            </span>
                                        </p>
                                        <progress value={eventdetails.amt_raised ? eventdetails.amt_raised : '23543'} max={eventdetails.target_price ? eventdetails.target_price : '150000'}
                                            className='progressbar w-full h-[10px] appearance-none rounded-[5px] mb-2 phones:mb-3 md:mb-4' 
                                        />
                                        <p className="text-sm md:text-lg text-[#C5C5C5] font-medium mb-4 " >
                                            {
                                                totaldonations == null ? '2.2k donations so far' : totaldonations + ' donations so far'
                                            } 
                                        </p>

                                        {/* <button className="mx-auto block px-[30px] py-[15px] rounded-[10px] bg-[#37BCF7] text-lg font-black leading-6 tracking-[0.073px] text-[#FFFFFF] " >
                                            Donate using USDT wallet
                                        </button>

                                        <button 
                                            className="mx-auto block px-[30px] pt-[15px] rounded-[10px] text-lg font-black leading-6 tracking-[0.073px] text-[#37BCF7] " 
                                                onClick={() => {
                                                    console.log(props.eventid)
                                                    navigate(`/${props.eventid}/donate`)
                                                }
                                            }
                                            >
                                            Donate using card payment
                                        </button> */}
                                    </div>



                                    <hr className = "border-[1px] border-[#dcdbdb] mb-[14px] md:mb-7 " />
                                    <h1 className = "font-black text-base md:text-[22px] mb-3 md:mb-4 md:leading-7 " >
                                        {eventdetails.title? eventdetails.title : 'This is the title of the main user’s crowdfunding'}
                                    </h1>
                                    <p className ={` font-medium md:font-normal mb-1 md:mb-2 text-sm md:text-lg ${readMore ? 'line-clamp-4 md:line-clamp-[7]': ''} `} >
                                        {
                                            eventdetails.description ? eventdetails.description :
                                            `This a  complete description for the crowdfunding to aid others fund this particular crowdfunding.
                                            Users are allowed to read the complete reason why this use is requesting for money from people.
                                            Why other users read this, if it is totally convincing enough then this user reading it can fund this project.
                                            If not he will move elsewhere to search for where to put their money. This can go on and on and on till its stops.`
                                        }
                                    </p>
                                    <button
                                        className="text-sm md:text-base mb-4 md:mb-5 border-b-2 border-black"
                                        onClick={() => {
                                            setReadMore(!readMore)
                                        }}    
                                        >
                                        {
                                            readMore ? 'Read more' : 'Read less'
                                        }
                                    </button>
                                    <button className = "mb-4 flex items-center justify-center gap-[3px] h-[28px] rounded-[9px] md:p-3 text-base font-semibold " >
                                        <img src = {locateicon} alt = 'location icon' className = "w-[16px] relative bottom-[2px] " />
                                        <span>{eventdetails.location ? eventdetails.location : 'NIGERIA' }</span>
                                    </button>
                                    <hr className = "border-[1px] border-[#dcdbdb] mb-5 md:mb-8 " />
                                    <Campaignorganizers co_organisers={eventdetails.co_organisers} organiser={eventdetails.organiser.first_name + ' ' + eventdetails.organiser.last_name} organiserimage={eventdetails.organiser.dp ? eventdetails.organiser.dp : profileImgPlaceholder} />
                                    
                                    <div className= {`flex  md:hidden mt-[35px]`} >
                                        <button className={` ${commentsActivitiesView == 'comments' ? 'bg-[#000000] rounded-[5px] text-white  text-sm  ' :
                                            'text-[#8E8E93]'} py-[10px] px-[15px] font-black `}
                                            onClick = {()=>setCommentsActivitiesView('comments')}
                                        >
                                            Comments
                                        </button>
                                        <button className={` ${commentsActivitiesView == 'activities' ? 'bg-[#000000] rounded-[5px] text-white text-sm  ' :
                                            'text-[#8E8E93]'} py-[10px] px-[15px] font-black `}
                                            onClick = {()=>setCommentsActivitiesView('activities')}
                                        >
                                            Activities
                                        </button>
                                    </div>
                                    
                                    <div className={` ${isMobile && commentsActivitiesView !== 'comments' ? 'hidden' : 'block'} `} >
                                        <button className={`mt-[25px] md:mt-10 items-center flex justify-center gap-2 py-[3px] md:py-[5px] px-3 md:px-8 
                                            rounded-[20px] bg-[#FFFFFF]
                                            border-[2px] border-[#37BCF7] shadow-[0px_0px_15.786517143249512px_0px_rgba(0,0,0,0.04)]
                                        `}
                                            onClick={
                                                () => {
                                                    setDisplayModals((prev) => ({
                                                        ...prev,
                                                        commentModal: true
                                                    }))
                                                }
                                            }
                                            >
                                            <img 
                                                src={commentIcon} 
                                                alt="comment icon" 
                                                className="w-4"    
                                            />
                                            <span className="text-sm md:text-base " >
                                                Write a comment
                                            </span>
                                        </button>
                                        <CommentModal
                                            displayModals={displayModals}
                                            setDisplayModals={setDisplayModals}
                                            eventid={eventid}
                                            setCommentData={setCommentData}
                                        />

                                        <h3 className="mt-6 mb-6 md:mb-7 text-base md:text-lg font-bold " >
                                            Comments (105)
                                        </h3>
                                        <div className=" flex flex-col gap-5 md:gap-8">
                                            {
                                                commentData.slice(0,commentsNumber).map((item,i) =>{
                                                    return(
                                                        <Comment key={i} image={item.user.dp ? item.user.dp : profileImgPlaceholder} name={item.user.first_name} time={item.timestamp} comment={item.comment} />
                                                    )
                                                })
                                            }
                                        </div>
                                        <button className={ ` ${commentData.length == 0 ? 'hidden' : ''} bg-[#D8D8D8] py-[5px] px-4 block mx-auto mt-10
                                        rounded-[10px] font-black text-base tracking-[0.06px] `} 
                                        onClick = {()=>setCommentsNumber(commentData.length)}
                                        >
                                            See more
                                        </button>
                                    </div>
                                    <div className={` ${isMobile && commentsActivitiesView == 'activities' ? 'block' : 'hidden'} `} >
                                        <h3 className="mt-6 mb-6 md:mb-7 text-base md:text-lg font-bold " >
                                            Activities
                                        </h3>
                                        <div className={`flex flex-col gap-5 md:gap-8`} >                            
                                            {
                                                activityData.map((item, i) => {
                                                    return (
                                                        <Activity key={i} userdp={item.userdp} time={item.time} amt={item.amt} username={item.username}
                                                        background = "none"
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                        <button className={ ` ${commentData.length == 0 ? 'hidden' : ''} bg-[#D8D8D8] py-[5px] px-4 block mx-auto mt-10
                                        rounded-[10px] font-black text-base tracking-[0.06px] `}                                         
                                        >
                                            See more
                                        </button>
                                    </div>
                                </div>                                
                            </div>
                            <div className="hidden md:block" >
                                <Activities
                                    header={eventdetails.organiser.username !== null && eventdetails.organiser.username == userInfo.username ? 'personalCampaign' : 'campaign'} 
                                    target_price = {eventdetails.target_price} 
                                    amt_raised = {eventdetails.amt_raised}
                                    total_donors = {totaldonations}
                                    eventid = {eventid}
                                />
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        )
}

export default Detailedevent



//This is the component for each comment
function Comment(props){
    
    //  Calculate time difference between now and the time the comment was made
    const timeDifference = (timestamp) => {
        const now = new Date();
        const commentTime = new Date(timestamp);
        const difference = now - commentTime;
        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) {
            return `${years} years ago`;
        }
        if (months > 0) {
            return `${months} months ago`;
        }
        if (weeks > 0) {
            return `${weeks} weeks ago`;
        }        
        if (days > 0) {
            return `${days} days ago`;
        }
        if (hours > 0) {
            return `${hours} hours ago`;
        }
        if (minutes > 0) {
            return `${minutes} mins ago`;
        }
        if (seconds > 0) {
            return `${seconds} secs ago`;
        }

        return "Just now";    
    }

    return(
        <div className="flex items-start gap-3 md:gap-4  " >
            <img src={props.image} alt="user 7 profile" className="w-12 md:w-[60px] rounded-full " />
            <div className="flex flex-col gap-3 ">
                <div className="flex flex-col gap-[2px] md:gap-1 ">
                    <h3 className="font-black text-base md:text-lg" >{props.name}</h3>                    
                    <p className="text-xs md:text-base" >
                        {
                            timeDifference(props.time)
                        }
                    </p>
                </div>
                <p className="text-sm md:text-base" >{props.comment}</p>
            </div>
        </div>        
    )
}



//Comments data carrying the necessary detail in each comment
/* let commentdata = [
    {
        img:user7,
        name:'Amanda',
        time:'10m ago',
        comment:`I really hope this issue is solved asap, love from Tanzania. I am glad to help`
    },
    {
        img:user8,
        name:'Doggy',
        time:'15h ago',
        comment:`The environment really deserve better, and i am glad someone like you have taken it upon yourself to do something really good. KEEP IT UP!!!`
    },
    {
        img:user9,
        name:'Goldberg',
        time:'2 days ago',
        comment:`In the US actually nobody cares about the environment. 
        Around where I live ita actually the worst i think i will start a crowdfund to at 
        least save what is left. Miami is hellish at the moment.`
    },
    {
        img:user8,
        name:'Carlos',
        time:'2 days ago',
        comment:`I just sent you 500usdt, go save the environment boy. Climate change got no friends.`
    },
    {
        img:user7,
        name:'Salima',
        time:'This week',
        comment:`The environs in places especially cities like New York is filled with crap. 
        The only places that are actually looking good are those areas where the rich stay in. 
        Good job dude. `
    }
] */