import { useDispatch, useSelector } from "react-redux"
import { sethomeorevent } from "../../actions/actions"
import backarrow from "../../images/backarrow.svg"
import date from "../../images/date.svg"
import share from "../../images/share.svg"
import likeicon from "../../images/likeicon.svg"
import locateicon from "../../images/locateicon.svg"
import Campaignorganizers from "../campaignorganizers/campaignorganizers"

function Detailedevent(props){

    const dispatch = useDispatch()

    /*
     This selects homebodydata from redux store so as to get the complete details of the selected funding event.
     When tje fundevent is clicked, an id is passed from the
     */
    const homebodydata = useSelector(state => state.managehomebodydata)

    let propdetails = props.details
    let eventid = propdetails.charAt(propdetails.length-1) //This cuts out the id of the selected fundevent from the props
    let eventdetails  = homebodydata[eventid] // Uses the above id to select the clicked event's details from redux store

    
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
    arrangeorganizerdetails()
    
    //console.log(eventdetails)
    
    //This converts the total number of people donated from normal numbers to formatted for space
    const formatnumber = n => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
      };
      
      let totaldonations = formatnumber(eventdetails.totaldonations);

    return(
        <div className = 'fold:px-2 phones:px-6 md:px-6 lg:px-10 pt-8 pb-16 md:pb-20 md:pt-14 mt-[90px] md:mt-[100px] w-full h-full'>
            
            <img src={backarrow} alt="back arrow" className = {`w-8 mb-8 cursor-pointer`} 
            onClick = { 
                () => {
                    dispatch(sethomeorevent('home'))
                }  
            }
            />
            
            <div className="bg-[#636363] mb-9 flex gap-2 px-4 w-56 h-9 rounded-2xl justify-center items-center   text-white ">
                <img src={date} alt="calendar icon" className = "w-4" />
                <span>{`${eventdetails.days} days remaining`}</span>
            </div>
            
            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-10 mb-8 ">
                
                <div className =" relative w-full md:w-[60%] " >
                    <img src={eventdetails.placeholder} alt="Fund event image" className = {` w-full h-[250px] md:h-[350px] rounded-xl `} />
                    <div className = 'absolute top-4 left-5 bg-white flex gap-2 px-4 rounded-lg py-1 items-center'>
                        <img src={eventdetails.categoryimg} alt="Event category icon" className = 'w-[17px] h-[17px] ' />
                        <span className = 'text-base font-medium ' >{eventdetails.category}</span>
                    </div>
                </div>

                <div className="w-full md:w-[300px] lg:w-[350px]">
                    <div className= {`bg-white mb-5 md:mt-4 px-5 py-7 h-fit rounded-xl shadow-[0px_0px_32px_rgba(0_0_0_0.04)] `} >
                    
                        <p className= 'text-[14px] font-bold mb-[5px]'>{eventdetails.value ? eventdetails.value.toLocaleString() : '23,543'} USDT raised
                        <span className='font-semibold text-[#bba7a7] float-right' > {eventdetails.target ? eventdetails.target.toLocaleString() : '150,000'} USDT target</span>
                        </p>
                        <progress value={eventdetails.value ? eventdetails.value : '23543'} max={eventdetails.target ? eventdetails.target : '150000'}
                        className='progressbar w-full h-[5px] appearance-none rounded-[5px] mb-2 phones:mb-4 xphones:mb-5 md:mb-[5px]' />
                        <p className = {`text-[#C5C5C5] font-medium text-sm mb-9 `} >{totaldonations} donations so far </p>
                        <button className = {`text-white mb-5 bg-[#2CA9F2] px-7 py-3 rounded-[20px] items-center mx-auto block`} >
                            Fund now
                        </button>
                        <p className = "text-center font-bold text-lg " >Connected,
                        <span className=  "text-[#2CA9F2] cursor-pointer" > disconnect your wallet</span>
                        </p>
                    
                    </div>

                    <p className = "text-center font-bold text-base text-[#C5C5C5] " >Don't have a USDT wallet? 
                    <span className="text-[#2CA9F2] cursor-pointer "> fund using card payment</span>
                    </p>                    
                </div>

            </div>

            <div className = "w-full md:w-[60%]  pb-10 " >

                <hr className = " border-[1px] border-[#888888] mb-8 " />
                
                <button className = "bg-[#2CA9F2] flex text-white gap-2 py-[7px] px-3 rounded-lg mb-8 font-semibold text-base " >
                    <img src={share} alt="share icon" />
                    <span>Share campaign</span>
                </button>

                <h1 className = "font-bold text-[22px] mb-3 " >
                    {eventdetails.title? eventdetails.title : 'This is the title of the main user’s crowdfunding'}
                </h1>
                <p className = "font-normal mb-5 " >This a  complete description for the crowdfunding to aid others fund this particular crowdfunding. 
                    Users are allowed to read the complete reason why this use is requesting for money from people. 
                    Why other users read this, if it is totally convincing enough then this user reading it can fund this project.
                     If not he will move elsewhere to search for where to put their money. This can go on and on and on till its stops.
                </p>

                
                <div className='flex gap-[20px] justify-start mb-10 '> 
                    <button className = "flex items-center justify-center gap-[8px] h-[28px] bg-white rounded-[9px] w-[82px] py-[5px] px-2 text-base text-[#525252] font-semibold " >
                        <img src={likeicon} alt = 'like icon' className = "w-[16px]" />
                        <span>Like</span>
                    </button>
                    <button className = "flex items-center justify-center gap-[3px] h-[28px] bg-white rounded-[9px] p-3 text-base font-semibold " >
                        <img src = {locateicon} alt = 'location icon' className = "w-[16px]" />
                        <span>{eventdetails.location}</span>
                    </button>
                </div>

                <hr className = " border-[1px] border-[#888888] mb-8 " />

                <Campaignorganizers organizerdetails = {organizerdetails}  />



            </div>

        </div>
    )
}

export default Detailedevent

/* let data = [
    {
      organizerimg:[userimg2],
      category:'Environment',
      categoryimg: environmentimg,
      placeholder: eventimg,
      organizeraccounts:['Username001'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      value: 10000,
      target:12000,
      location:'Cyprus',
      days:'30'
    }
] */