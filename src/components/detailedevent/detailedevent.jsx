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


import Navbar from "../navbar/navbar"
import { useMediaQuery } from "react-responsive"
import Sidebar from "../sidebar/sidebar"
import { useNavigate, useParams } from "react-router-dom"
import Activities from "../activities/activities"
import CommentModal from "../commentModal/commentModal"

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
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const end_date = new Date(eventdetails.end_date);
    const today = new Date();
    

    // Calculate difference in milliseconds between the two dates and convert to days
    const daysLeft = Math.ceil((end_date - today) / (1000 * 60 * 60 * 24));
    
    // Determines number of comments to show
    const [commentsNumber, setCommentsNumber] = useState(Math.ceil(commentData.length/2))

    // Display comment or update modal
    const [displayCommentModal, setDisplayCommentModal] = useState(false)
    

        return(
            <div className=' bg-[#F9F9F9] min-h-full relative ' >
                <Sidebar />
                <div className = {`${sidebarslid ? 'brkpoint:ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' }
                `} >
                    <Navbar />
                    <div className = 'fold:px-1 phones:px-3 md:px-6 lg:px-10 pt-6 md:pt-8 pb-16 md:pb-20 mt-[90px] md:mt-[100px] w-full h-full'>
                
                        <img src={backarrow} alt="back arrow" className = {`w-8 mb-5 md:mb-[34px] cursor-pointer`}
                        onClick = {
                            () => {
                                //dispatch(sethomeorevent('home'))
                                navigate(-1)
                            }
                        }
                        />
                
                        <div className="bg-[#636363] mb-3 md:mb-[30px] flex gap-2 px-4 md:px-5 py-2 w-fit rounded-2xl justify-center items-center text-white ">
                            <img src={date} alt="calendar icon" className = "w-4" />
                            <span className="font-semibold text-sm md:text-base " >{`${eventdetails.end_date ? daysLeft : eventdetails.days } days remaining`}</span>
                        </div>
                
                        <div className="font-merriweather w-full flex flex-col md:flex-row gap-3 md:justify-between 2xl:gap-11 2xl:justify-start ">
                            <div className="w-full md:w-[60%] ">
                                <div className =" relative w-full shrink-0 mb-8 " >
                                    <img src={eventdetails.banner} alt="Fund event" className = {`w-full h-[215px] md:h-[350px] rounded-sm md:rounded-xl `} />
                                    <div className = 'absolute top-4 left-5 bg-white flex gap-2 px-2 md:px-4 rounded-lg py-1 items-center'>
                                        <img src={eventdetails.categoryimg ? eventdetails.categoryimg : environmentLabel } alt="Event category icon" className = 'w-[17px] h-[17px] ' />
                                        <span className = 'text-sm md:text-base font-black' >
                                            {eventdetails.tags}
                                        </span>
                                    </div>
                                </div>
                                <div className = "w-full pb-10 " >
                                    <div className="flex gap-5 md:gap-10 px-3 ">
                                        <button className = "bg-[#2CA9F2] flex flex-1 text-white gap-2 py-[10px] px-4 w-full sm:w-fit rounded-lg md:rounded-xl mb-8 font-black text-base justify-center items-center " >
                                            <img src={share} alt="share icon" className="w-[15px] sm:w-[20px]" />
                                            <span>Share Campaign</span>
                                        </button>
                                        <button 
                                            className = {` ${eventdetails.organiser.first_name == userInfo.first_name ? 
                                                'hidden ' : 
                                                'flex items-center flex-1 justify-center gap-[8px] border-[2px] border-black rounded-[10px] w-full py-[10px] max-h-[40px] px-4 text-base text-[#000000] font-semibold ' 
                                            } `}
                                            onClick={managelikes}
                                        >
                                            {/* <img src={likeicon} alt = 'like icon' className = "w-[16px]" /> */}
                                            <Likeicon liked = {liked} color = {liked ? '':'black'} />
                                            <span>{liked ? 'Liked Campaign' : 'Like Campaign '}</span>
                                        </button>

                                        <button 
                                            className = {` ${eventdetails.organiser.first_name == userInfo.first_name ? 
                                            'flex items-center flex-1 justify-center gap-[8px] border-[2px] border-[#37BCF7] rounded-[10px] w-full py-[10px] max-h-[40px] px-4 text-base text-[#37BCF7] font-black ' 
                                            : 'hidden' } `}
                                            >                                            
                                            <img src={editIcon} alt="Edit icon" className="w-5" />
                                            <span>Edit Campaign</span>
                                        </button>
                                    </div>
                                    <hr className = "-mx-3 sm:mx-0  border-[1px] border-[#dcdbdb] mb-3 md:mb-7 " />
                                    <h1 className = "font-bold text-[22px] mb-2 md:mb-4 leading-7 " >
                                        {eventdetails.title? eventdetails.title : 'This is the title of the main user’s crowdfunding'}
                                    </h1>
                                    <p className = "font-medium md:font-normal mb-7 md:mb-5 md:text-lg " >
                                        {
                                            eventdetails.description ? eventdetails.description :
                                            `This a  complete description for the crowdfunding to aid others fund this particular crowdfunding.
                                            Users are allowed to read the complete reason why this use is requesting for money from people.
                                            Why other users read this, if it is totally convincing enough then this user reading it can fund this project.
                                            If not he will move elsewhere to search for where to put their money. This can go on and on and on till its stops.`
                                        }
                                    </p>
                                    <button className = "mb-4 flex items-center justify-center gap-[3px] h-[28px] rounded-[9px] p-3 text-base font-semibold " >
                                        <img src = {locateicon} alt = 'location icon' className = "w-[16px]" />
                                        <span>{eventdetails.location ? eventdetails.location : 'NIGERIA' }</span>
                                    </button>
                                    <hr className = "-mx-3 sm:mx-0  border-[1px] border-[#dcdbdb] mb-3 md:mb-8 " />
                                    <Campaignorganizers organizerdetails = {organizerdetails} organiser = {eventdetails.organiser.first_name + ' ' + eventdetails.organiser.last_name} organiserimage = {eventdetails.organiser.dp ? eventdetails.organiser.dp : profileImgPlaceholder}  />
                                    <button className="mt-10 flex items-center justify-center gap-2 py-[5px] px-8 rounded-[20px] bg-[#FFFFFF]
                                        border-[2px] border-[#37BCF7] shadow-[0px_0px_15.786517143249512px_0px_rgba(0,0,0,0.04)]
                                        " 
                                        onClick={
                                            () => {
                                                setDisplayCommentModal(true)
                                            }
                                        }
                                        >
                                        <img 
                                            src={commentIcon} 
                                            alt="comment icon" 
                                            className="w-4 h-4 "    
                                        />
                                        <span className=" text-base " >
                                            Write a comment
                                        </span>
                                    </button>
                                    <CommentModal displayCommentModal={displayCommentModal} setDisplayCommentModal = {setDisplayCommentModal} eventid = {eventid} setCommentData = {setCommentData} />

                                    <h3 className="mt-6 mb-6 md:mb-7 text-lg font-bold " >
                                        Comments (105)
                                    </h3>
                                    <div className=" flex flex-col gap-8">
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
                            </div>
                            <Activities header = {eventdetails.organiser.first_name == userInfo.first_name ? 'personalCampaign' : 'campaign' } 
                                target_price = {eventdetails.target_price} 
                                amt_raised = {eventdetails.amt_raised} 
                                total_donors = {totaldonations}
                            />
                        </div>                       
                    </div>
                </div>
            </div>
        )
    //}
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
        <div className="flex items-start gap-4  " >
            <img src={props.image} alt="user 7 profile" className="w-[60px] rounded-full " />
            <div className="flex flex-col gap-3 ">
                <div className="flex flex-col gap-1 ">
                    <h3 className="font-black text-lg leading-4 " >{props.name}</h3>                    
                    <p>
                        {
                            timeDifference(props.time)
                        }
                    </p>
                </div>
                <p>{props.comment}</p>
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