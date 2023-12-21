import { useMediaQuery } from "react-responsive";

import eventimg from "../../images/eventimg.png";
import environmentimg from '../../images/categoryImages/environment label.svg'
import likeicon from '../../images/likeicon.svg'
import locateicon from '../../images/locateicon.svg'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editEventData, sethomebodydata, sethomeorevent } from "../../actions/actions";
import Likeicon from "../../images/likeicon";

import { useState } from "react";
import {options} from "../../components/organisecrowdfundbody/organisecrowdfundbody.jsx"

//Fallbacks for the props
import userimg from '../../images/user2.svg'
import profileImgPlaceholder from "../../images/profileplaceholder.svg"



function Fundevent(props){
    
    const access_token = localStorage.getItem('access_token')
    const dispatch = useDispatch()
    const homebodydata = useSelector(state => state.managehomebodydata)

    const [liked, setliked] = useState(props.is_liked)

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

    async function managelikes(event) {
        //prevent the parent div's onclick from trigerring        
        event.stopPropagation();

        const likeOrUnlikeCrowdfund = async (status) => {
            const response = await fetch(`https://palbucks-api.onrender.com/funding/api/${props.id}/like/`, {
                method: 'POST',
                body: JSON.stringify({ status: status }),
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-Type': 'application/json'
                }
            });
            return response;
        };

        if (liked) {
            const response = await likeOrUnlikeCrowdfund(0)
            console.log(await response.json());
            if (response.status == 200) {
                //alert('Crowdfund liked successfully')
                setliked(false);
                dispatch(editEventData({
                    id: props.id,
                    is_liked: false
                })
                );
            } else {
                alert('Crowdfund like failed');
            }
        } else {
            const response = await likeOrUnlikeCrowdfund(1)
            console.log(await response.json());
            if (response.status == 200) {
                //alert('Crowdfund liked successfully')
                setliked(true);
                dispatch(editEventData({
                    id: props.id,
                    is_liked: true
                })
                );
            } else if (response.data == 'You cannot like the same funding more than once') {
                const resp = await likeOrUnlikeCrowdfund(0);
                console.log(resp);
            } else {
                alert('Crowdfund like failed');
            }
        }
        //setliked(!liked)
    }

    // Loop through the options array, check if the category matches the option and return the image
    const categoryImg = options.filter(item => item.value === props.category).map(item => item.icon)        

    return(
        <div className = {`w-full sm:max-w-[380px] md:max-w-[360px] smlaptops:max-w-[280px] mdlaptops:max-w-[300px]
         lglaptops:max-w-[280px]  min-w-[200px] cursor-pointer inline-block font-arial `
         /* `sm:max-w-[290px] md:max-w-[320px] smlaptops:max-w-[310px] mdlaptops:max-w-[285px]
         lglaptops:max-w-[310px] mx-auto ` */ }         
        >
            <div className="" onClick = {detailedevent} >
                <div className = 'flex gap-2 mb-3'>                
                    <div className="flex shrink-0 -space-x-5">
                            <img 
                                src={props.organiser.dp !== null ? props.organiser.dp :profileImgPlaceholder} 
                                alt = 'Organizer profile' 
                                className='z-20 rounded-full fold:min-w-[40px] fold:h-[40px] phones:min-w-[48px] phones:h-[48px] md:min-w-[45px] md:h-[45px] '
                            />
                        {   
                            // Display the co-organizers profile images while giving the second image a higher index to be on top of the last
                            props.co_organisers ? props.co_organisers.map((item,i)=>
                                i === 0 ? (                                    
                                    <img 
                                        key={i}
                                        src={item.dp !== null ? item.dp :profileImgPlaceholder} 
                                        alt = 'co-organizer profile img' 
                                        className='z-10 rounded-full fold:min-w-[40px] fold:h-[40px] phones:min-w-[48px] phones:h-[48px] md:w-[45px] md:h-[45px] '
                                    />
                                ):
                                (
                                    <img 
                                        key={i}
                                        src={item.dp !== null ? item.dp :profileImgPlaceholder} 
                                        alt = 'co-organizer profile img' 
                                        className='z-0 rounded-full fold:min-w-[40px] fold:h-[40px] phones:min-w-[48px] phones:h-[48px] md:w-[45px] md:h-[45px]'
                                    />
                                )
                            
                            ) : ''
                        }
                    </div>
                    <div className="flex flex-col relative max-w-[100%] truncate">
                        <h3 className = "font-black text-[14px] tracking-[0.06px] truncate">
                            {props.organiser.first_name}        
                              
                            {
                                props.co_organisers ? props.co_organisers.map((item,i,arr)=>{
                                                                        
                                        return(                                        
                                            arr.length === 1 ? ' and ' +  item.first_name :
                                            arr.length > 1 && i == 1 ? ' and ' + arr.length + ' others' :                                            
                                            ''
                                        ) 
                                }
                                ) : null
                            }
                        </h3>
                        <p className = "text-[13px] md:text-sm ">is organizing ...</p>
                    </div>
                </div>
                <div className = 'relative w-full rounded-t-[10px]'>
                    <img src={props.crowdfundImage? props.crowdfundImage:eventimg} alt="Fund event" className = 'rounded-t-[10px] w-full h-[196px] phones:h-[196px] xphones:h-[196px] lg:h-[135px] object-cover ' />
                
                    {/* <div className = 'absolute top-4 left-5 bg-white flex items-center justify-center gap-[5px] px-[8px] rounded-lg py-[4px]'>
                        <img src={categoryImg.length !== 0 ? categoryImg : options.slice(-1)[0].icon } alt="Event category icon" className = 'w-[15px] h-[15px] ' />
                        <span className = 'text-sm font-black' >{props.category ? props.category : 'Others'}</span>
                    </div> */}
                </div>
                
                <div className = {`bg-white pt-2 phones:pt-3 xphones:pt-[17px] brkpoint:py-3 rounded-b-[10px] pb-2 px-[10px] xphones:px-[15px] md:px-[10px] h-fit  lg:h-[205.5px] 
                    relative shadow-[0px_0px_35.2294px_rgba(0,0,0,0.04)] hover:bg-[#033F591A] hover:border-[0.1px] hover:border-[#D2D2D4]  `}>

                    <div className="flex justify-between items-center mb-[10px] ">
                        <h3 className="text-[#8E8E93] text-base leading-5" >
                            {props.location ? props.location.toUpperCase() : 'LAGOS'}
                        </h3>
                    
                        <button onClick={managelikes} >
                            <Likeicon liked = {liked} />
                        </button>                                
                    </div>

                    <div className = 'mb-3 phones:mb-5 xphones:mb-6 brkpoint:mb-5 mx-auto'>
                        <h5 className = "font-black text-base brkpoint:text-base leading-5 tracking-[0.06px] mb-[5px] phones:mb-[8px] xphones:mb-[11px] lg:mb-[15px] line-clamp-2 " >
                            {props.title ? props.title: "This is the title of the main user's Crowdfunding"}
                        </h5>
                        <p className='leading-[18px] -tracking-[0.01px] text-sm lg:text-[15px] line-clamp-2 '>
                            {
                                isMobile ? 'Click to know more about this campaign': props.description ?
                                props.description :
                                "This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read theories and project outcomes."
                            }
                        </p>
                    </div>
                    <div className = 'lg:absolute w-full lg:w-[93.5%] mx-auto lg:bottom-2'>
                        <progress 
                            value={props.amt_raised ? props.amt_raised : '23543'} 
                            max={props.target_price ? props.target_price : '150000'}  
                            className='progressbar w-full h-[8.5px] appearance-none rounded-[5px] mb-2 phones:mb-[15px] xphones:mb-4 md:mb-[8px]' 
                        />
                
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