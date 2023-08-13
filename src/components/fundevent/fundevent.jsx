import { useMediaQuery } from "react-responsive";

import eventimg from "../../images/eventimg.png";
import environmentimg from '../../images/categoryImages/environment label.svg'
import likeicon from '../../images/likeicon.svg'
import locateicon from '../../images/locateicon.svg'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sethomebodydata, sethomeorevent } from "../../actions/actions";
import Likeicon from "../../images/likeicon";

import { useState } from "react";

//Fallbacks for the props
import userimg from '../../images/user2.svg'
import profileImgPlaceholder from "../../images/profileplaceholder.svg"



function Fundevent(props){

    const dispatch = useDispatch()
    const homebodydata = useSelector(state => state.managehomebodydata)

    const [liked, setliked] = useState(props.liked)

    //a react package for responsiveness
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })


    /* This will navigate each event to its particular detailed page with its own id*/
    /*  or second method of rendering between homebody and Detailedevent of each eventpage */
    const navigate  = useNavigate()    
    

    function detailedevent(){
        navigate(`/detailed/${props.id}`)
        //dispatch(sethomeorevent(`event${props.id}`))

    }

    const managelikes = (event) =>{

        event.stopPropagation(); //prevent the parent div's onclick from trigerring        
        
        let currentstatus = homebodydata[props.id].liked
        homebodydata[props.id].liked = !currentstatus
        
        dispatch(sethomebodydata(homebodydata))
        //console.log(homebodydata[props.id].liked)

        setliked(!liked)
    }

    return(
        <div className = {`w-full sm:max-w-[380px] md:max-w-[360px] smlaptops:max-w-[280px] mdlaptops:max-w-[300px]
         lglaptops:max-w-[280px]  min-w-[200px] cursor-pointer inline-block font-merriweather `
         /* `sm:max-w-[290px] md:max-w-[320px] smlaptops:max-w-[310px] mdlaptops:max-w-[285px]
         lglaptops:max-w-[310px] mx-auto ` */ }         
        >
            <div className="" onClick = {detailedevent} >
                <div className = 'flex gap-2 mb-3'>
                
                    <div className="flex shrink-0 -space-x-6">
                        {
                            props.accountimages ? props.accountimages.map((item,i)=>{
                                return(
                                    <img src = {item} alt = 'Organizer profile' className='rounded-full fold:min-w-[40px] fold:h-[40px]  phones:min-w-[45px] phones:h-[45px]' key = {i} />
                                )
                            })  :
                            <img src={props.organiser.dp !== null ? props.organiser.dp :profileImgPlaceholder} alt = 'Organizer profile' className=' rounded-full fold:min-w-[40px] fold:h-[40px]  phones:min-w-[45px] phones:h-[45px]' />
                        }
                    </div>
                    <div className="flex flex-col relative max-w-[100%] truncate">
                        <h3 className = "font-black text-[14px] tracking-[0.06px] truncate">
                            {
                                props.organizeraccounts ? props.organizeraccounts.map((item,i,arr)=>{
                
                                    return(
                                        /* i === arr.length - 1 ? (item) :
                                        i === arr.length - 2 ? item + ' and ' :
                                        item + ' ,' */
                                        arr.length === 1 ? item:
                                        arr.length >= 2 && i === 0 ? item + ' and ':
                                        arr.length == 2 && i ===1  ?  item :
                                        arr.length > 2 && i > 1 ? arr.length -1 + ' others' :
                                        ''
                                    )
                                }) :
                                props.organiser.first_name
                            }
                        </h3>
                        <p className = "text-[14px]">is organizing ...</p>
                    </div>
                </div>
                <div className = 'relative w-full rounded-t-[10px]'>
                    <img src={props.crowdfundImage? props.crowdfundImage:eventimg} alt="Fund event" className = ' rounded-t-[10px] w-full phones:h-[175px] xphones:h-[150px] md:h-[135px]' />
                
                    <div className = 'absolute top-4 left-5 bg-white flex gap-[5px] px-[8px] rounded-lg py-[4px]'>
                        <img src={props.categoryimg ? props.categoryimg:environmentimg } alt="Event category icon" className = 'w-[15px] h-[15px] ' />
                        <span className = 'text-sm font-black' >{props.category}</span>
                    </div>
                </div>
                
                <div className = {`bg-white pt-2 phones:pt-3 xphones:pt-[17px] brkpoint:py-3 rounded-b-[10px] pb-2 px-[10px] xphones:px-[15px] md:px-[10px] h-fit md:h-[205.5px] 
                    relative shadow-[0px_0px_35.2294px_rgba(0,0,0,0.04)] hover:bg-[#033F591A] hover:border-[0.1px] hover:border-[#D2D2D4]  `}>

                    <div className="flex justify-between items-center mb-[15px] ">
                            <h3 className="text-[#8E8E93] text-base leading-5" >{props.location ? props.location.toUpperCase() : 'Lagos'}</h3>
                        
                            <button onClick={managelikes} >
                                <Likeicon liked = {liked} />
                            </button>                                
                    </div>

                    <div className = 'mb-3 phones:mb-5 xphones:mb-6 brkpoint:mb-5 mx-auto'>
                        <h5 className = "font-black text-base phones:text-[18px] brkpoint:text-[16px] leading-5 tracking-[0.06px] mb-[5px] phones:mb-[8px] xphones:mb-[11px] md:mb-[15px] line-clamp-2 " >
                            {props.title ? props.title: "This is the title of the main user's Crowdfunding"}
                        </h5>
                        <p className='text-sm leading-[18px] -tracking-[0.01px] phones:text-[16px] md:text-[15px] mt-0 line-clamp-2 '>
                            {
                                isMobile ? 'Click to know more about this campaign': props.description ?
                                props.description :
                                "This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read theories and project outcomes."
                            }
                        </p>
                    </div>
                    <div className = 'md:absolute w-full md:w-[93.5%] mx-auto  md:bottom-2'>
                        <progress value={props.amt_raised ? props.amt_raised : '23543'} max={props.target_price ? props.target_price : '150000'}  className='progressbar w-full h-[8.5px] appearance-none rounded-[5px] mb-2 phones:mb-4 xphones:mb-5 md:mb-[8px]' />
                
                        <p className= 'fold:text-[11px] phones:text-[13px] brkpoint:text-[11px] leading-[18px] -tracking-[0.08px] font-black'>{props.amt_raised ? props.amt_raised.toLocaleString() : '23,543'} USDT raised
                        <span className='text-[#8E8E93]' > of {props.target_price ? props.target_price.toLocaleString() : '150,000'} USDT</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className='flex gap-[20px] justify-end'> 
                <button className = "flex items-center justify-center gap-[8px] h-[28px] bg-white rounded-[9px] w-[82px] px-2 text-base text-[#525252] font-semibold "
                onClick={managelikes} >
                    //<img src={Likeicon} alt = 'like icon' className = "w-[16px]" />
                    <Likeicon liked = {liked} />
                    <span>{liked ? 'Liked' : 'Like'}</span>
                </button>
                <button className = "flex items-center justify-center gap-[3px] h-[28px] bg-white rounded-[9px] p-3 text-base font-semibold " >
                    <img src = {locateicon} alt = 'location icon' className = "w-[16px]" />
                    <span>{props.location}</span>
                </button>
            </div> */}
            

        </div>
    )
}

export default Fundevent;