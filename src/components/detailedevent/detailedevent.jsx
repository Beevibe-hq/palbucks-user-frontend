import { useDispatch, useSelector } from "react-redux"
import { sethomebodydata, sethomeorevent } from "../../actions/actions"
import backarrow from "../../images/backarrow.svg"
import date from "../../images/date.svg"
import share from "../../images/share.svg"
import likeicon from "../../images/likeicon.svg"
import locateicon from "../../images/locateicon.svg"
import user9 from "../../images/user9.svg"
import user8 from "../../images/user8.svg"
import user7 from "../../images/user7.svg"
import blackdot from "../../images/blackdot.svg"
import Campaignorganizers from "../campaignorganizers/campaignorganizers"
import { useEffect, useState } from "react"
import Likeicon from "../../images/likeicon"
import Navbar from "../navbar/navbar"
import { useMediaQuery } from "react-responsive"
import Sidebar from "../sidebar/sidebar"
import { useNavigate, useParams } from "react-router-dom"

function Detailedevent(props){

    /*
     This selects homebodydata from redux store so as to get the complete details of the selected funding event.
     When the fundevent is clicked, an id is passed from the url params to select particular event.
     */
    let homebodydata = useSelector(state => state.managehomebodydata)

    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    let eventid = params.id
    let eventdetails = homebodydata[eventid]
    
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
        for(let i = 0; i<eventdetails.organizeraccounts.length; i++ ){
            
            let organizer = {
                name:eventdetails.organizeraccounts[i],
                image:eventdetails.organizerimg[i]
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

    const [liked,setliked] = useState('')
    const managelikes = () =>{
        let currentstatus = homebodydata[eventid].liked
        homebodydata[eventid].liked = !currentstatus
        dispatch(sethomebodydata(homebodydata))
        setliked(!liked)
        console.log(eventdetails.liked)
    }
    
    useEffect(()=>{
            //To scroll page to the top on mount of component
            window.scrollTo(0,0)
            setliked(eventdetails.liked)
    },[])


    const sidebaropen = useSelector(state => state.sidebarstate)
    const sidebarslid = useSelector(state => state.sidebarslid)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    /* if(typeof eventdetails == 'undefined' ){
        return <div>Loading ... </div>
    }else{ */
        return(
            <div className=' bg-[#F9F9F9] min-h-full relative' >
                <Sidebar />
                <div className = {`${sidebarslid ? 'brkpoint:ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' }
                `} >
                    <Navbar />
                    <div className = 'fold:px-1 phones:px-3 md:px-6 lg:px-10 pt-6 md:pt-8 pb-16 md:pb-20 mt-[90px] md:mt-[100px] w-full h-full'>
                
                        <img src={backarrow} alt="back arrow" className = {`w-8 mb-5 md:mb-[34px] cursor-pointer`}
                        onClick = {
                            () => {
                                //dispatch(sethomeorevent('home'))
                                navigate('/')
                            }
                        }
                        />
                
                        <div className="bg-[#636363] mb-3 md:mb-[30px] flex gap-2 px-4 md:px-5 py-2 w-fit rounded-2xl justify-center items-center text-white ">
                            <img src={date} alt="calendar icon" className = "w-4" />
                            <span className="font-semibold text-sm md:text-base " >{`${eventdetails.days} days remaining`}</span>
                        </div>
                
                        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-10 mb-8 ">
                
                            <div className =" relative w-full md:w-[60%] shrink-0 " >
                                <img src={eventdetails.placeholder} alt="Fund event" className = {` w-full h-[215px] md:h-[350px] rounded-sm md:rounded-xl `} />
                                <div className = 'absolute top-4 left-5 bg-white flex gap-2 px-2 md:px-4 rounded-lg py-1 items-center'>
                                    <img src={eventdetails.categoryimg} alt="Event category icon" className = 'w-[17px] h-[17px] ' />
                                    <span className = 'text-sm md:text-base font-medium ' >{eventdetails.category}</span>
                                </div>
                            </div>
                            <div className="w-full md:w-[330px] lg:w-[360px]">
                                <div className= {`bg-white mb-5 md:mt-4 px-4 md:px-5 py-7 h-fit rounded-[5px] md:rounded-xl shadow-[0px_0px_32px_rgba(0_0_0_0.04)] `} >
                
                                    <p className= 'text-[14px] font-bold mb-[5px]'>{eventdetails.value ? eventdetails.value.toLocaleString() : '23,543'} USDT raised
                                    <span className='font-semibold text-[#bba7a7] float-right' > {eventdetails.target ? eventdetails.target.toLocaleString() : '150,000'} USDT target</span>
                                    </p>
                                    <progress value={eventdetails.value ? eventdetails.value : '23543'} max={eventdetails.target ? eventdetails.target : '150000'}
                                    className='progressbar w-full h-[5px] appearance-none rounded-[5px] mb-2 phones:mb-3 md:mb-[5px]' />
                                    <p className = {`text-[#C5C5C5] font-medium text-sm mb-9 `} >{totaldonations} donations so far </p>
                                    <button className = {`font-bold text-white mb-5 bg-[#2CA9F2] px-6 md:px-7 py-3 rounded-[14px] md:rounded-[20px] items-center mx-auto block`} >
                                        Fund now
                                    </button>
                                    <p className = "text-center font-medium text-lg " >Connected,
                                    <span className=  "text-[#2CA9F2] cursor-pointer font-bold" > disconnect your wallet</span>
                                    </p>
                
                                </div>
                                <p className = "text-center font-medium text-[15px] md:text-base text-[#C5C5C5] " >Don't have a USDT wallet?
                                <span className="text-[#2CA9F2] cursor-pointer font-bold "> fund using card payment</span>
                                </p>
                            </div>
                        </div>
                        <div className = "w-full md:w-[60%]  pb-10 " >
                            <hr className = "hidden md:block border-[1px] border-[#888888] mb-8" />
                
                            <button className = "bg-[#2CA9F2] flex text-white gap-2 py-[7px] px-3 w-full sm:w-fit rounded-lg md:rounded-xl mb-8 font-bold md:font-semibold text-base md:text-lg justify-center md:justify-start items-center " >
                                <img src={share} alt="share icon" className="w-[15px] sm:w-[20px]" />
                                <span>Share campaign</span>
                            </button>
                            <h1 className = "font-bold text-[22px] mb-2 md:mb-4 leading-7 " >
                                {eventdetails.title? eventdetails.title : 'This is the title of the main user’s crowdfunding'}
                            </h1>
                            <p className = "font-medium md:font-normal mb-7 md:mb-5 md:text-lg " >This a  complete description for the crowdfunding to aid others fund this particular crowdfunding.
                                Users are allowed to read the complete reason why this use is requesting for money from people.
                                Why other users read this, if it is totally convincing enough then this user reading it can fund this project.
                                If not he will move elsewhere to search for where to put their money. This can go on and on and on till its stops.
                            </p>
                
                            <div className='flex gap-[20px] justify-start mb-7 md:mb-10 '>
                                <button className = "flex items-center justify-center gap-[8px] font-sans h-[28px] bg-white rounded-[9px] w-[82px] py-[5px] px-2 text-base text-[#525252] font-semibold "
                                onClick={managelikes}>
                                    {/* <img src={likeicon} alt = 'like icon' className = "w-[16px]" /> */}
                                    <Likeicon liked = {eventdetails.liked} />
                                    <span>{liked ? 'Liked' : 'Like'}</span>
                                </button>
                                <button className = "flex items-center justify-center gap-[3px] h-[28px] bg-white rounded-[9px] p-3 text-base font-semibold " >
                                    <img src = {locateicon} alt = 'location icon' className = "w-[16px]" />
                                    <span>{eventdetails.location}</span>
                                </button>
                            </div>
                            <hr className = "-mx-3 sm:mx-0  border-[1px] border-[#dcdbdb] mb-3 md:mb-8 " />
                            <Campaignorganizers organizerdetails = {organizerdetails}  />
                            <h3 className="mt-10 md:mt-14 mb-6 md:mb-7 text-lg font-bold " >105 comments</h3>
                
                            <div className=" flex flex-col gap-8">
                                {
                                    commentdata.map((item,i) =>{
                                        return(
                                            <Comment key={i} image={item.img} name={item.name} time={item.time} comment={item.comment} />
                                        )
                
                                    })
                                }
                            </div>
                
                            <button className={`bg-[#FFFFFF] py-3 px-5 block mx-auto mt-9 border-[1px] border-[#C5C5C5]
                            rounded-lg shadow-[0px_0px_32px_rgba(0_0_0_0.04)] font-medium text-lg `} >
                                Show more
                            </button>
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

    return(
        <div className="flex items-start gap-4  " >
            <img src={props.image} alt="user 7 profile" className="w-[60px]" />
            <div className="flex-col gap-3 ">
                <div className="flex gap-2 items-center ">
                    <h3 className="font-bold text-lg " >{props.name}</h3>
                    <img src={blackdot} alt="black dot" className="w-2" />
                    <p>{props.time}</p>
                </div>
                <p>{props.comment}</p>
            </div>
        </div>        
    )
}



//Comments data carrying the necessary detail in each comment
let commentdata = [
    {
        img:user7,
        name:'Amanda susan',
        time:'10m ago',
        comment:`This a  complete description for the crowdfunding to aid others fund this particular crowdfunding.
        Users are allowed to read the complete reason why this use is requesting for money from people.
        Why other users read this, if it is totally convincing enough then this user reading it can fund
        this project. If not he will move elsewhere to search for where to put their money. This can go on and
        on and on till its stops.`
    },
    {
        img:user8,
        name:'Andrey Santos',
        time:'15h ago',
        comment:`This a  complete description for the crowdfunding to aid others fund this particular crowdfunding.
        Users are allowed to read the complete reason why this use is requesting for money from people.
        Why other users read this, if it is totally convincing enough then this user reading it can fund
        this project. If not he will move elsewhere to search for where to put their money. This can go on and
        on and on till its stops.`
    },
    {
        img:user9,
        name:'Alisha Goldberg',
        time:'1d ago',
        comment:`This a  complete description for the crowdfunding to aid others fund this particular crowdfunding.
        Users are allowed to read the complete reason why this use is requesting for money from people.
        Why other users read this, if it is totally convincing enough then this user reading it can fund
        this project. If not he will move elsewhere to search for where to put their money. This can go on and
        on and on till its stops.`
    },
]