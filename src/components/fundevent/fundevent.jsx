import { useMediaQuery } from "react-responsive";

import eventimg from "../../images/eventimg.png";
import environmentimg from '../../images/environment label.svg'
import likeicon from '../../images/likeicon.svg'
import locateicon from '../../images/locateicon.svg'


function Fundevent(props){

    //a react package for responsiveness
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return(
        <div className = 'w-full sm:max-w-[290px] md:max-w-[320px] smlaptops:max-w-[310px] mdlaptops:max-w-[285px] lglaptops:max-w-[310px] h-[430px] min-w-[200px] inline-block mx-auto my-[35px]'>
            
            <div className = 'flex gap-2 mb-3'>
                
                <div className="flex shrink-0 -space-x-6">                    
                    {
                        props.accountimages.map((item,i)=>{
                            return(
                                <img src = {item} alt = 'Organizer profile picture' className=' fold:min-w-[40px] fold:h-[40px]  phones:min-w-[50px] phones:h-[50px]' key = {i} />                                
                            )
                        })
                    }
                </div>

                <div className="flex flex-col relative max-w-[100%] truncate">
                    <h3 className = "font-bold text-[15px] truncate">                        
                        {
                            props.organizeraccounts.map((item,i,arr)=>{
                                
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
                            })
                        }
                    </h3>
                    <p className = "text-[14px]">is organizing ...</p>
                </div>
            </div>

            <div className = 'relative w-full'>
                <img src={props.eventimg? props.eventimg:eventimg} alt="Fund event image" className = 'w-full phones:h-[200px] md:h-[180px]' />
                
                <div className = 'absolute top-4 left-5 bg-white flex gap-1 px-2 rounded-lg py-[0px] items-center'>
                    <img src={props.categoryimg} alt="Event category icon" className = 'w-[17px] h-[17px] ' />
                    <span className = 'text-sm' >{props.category}</span>
                </div>
            </div>
            
            <div className = 'bg-white pt-[17px] rounded-b-[20px] pb-2 px-[10px] mb-3 h-[198px] md:h-[205.5px] relative '>
                <div className = 'mb-6 mx-auto'>
                    <h5 className = "font-bold text-[18px] leading-6 mb-[11px] md:mb-2 " >
                        {props.title ? props.title: "This is the title of the main user's Crowdfunding"}
                    </h5>
                    <p className='text-[16px] md:text-sm mt-0'>
                        {
                            isMobile ? 'Click to know more about this campaign': props.description ? 
                            props.description : 
                            "This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read thir...."
                        }
                    </p>
                </div>

                <div className = 'md:absolute w-[100%] md:w-[93.5%] mx-auto md:bottom-2'>
                    <progress value={props.value ? props.value : '23543'} max={props.target ? props.target : '150000'}  className='progressbar w-full h-[5px] appearance-none rounded-[5px] mb-5 md:mb-[5px]' />
                    
                    <p className= 'text-[13px] font-bold mb-[5px]'>{props.value ? props.value.toLocaleString() : '23,543'} USDT raised
                    <span className='font-normal text-[#bba7a7] float-right' > {props.target ? props.target.toLocaleString() : '150,000'} USDT target</span>
                    </p>
                </div>
            </div>

            <div className='flex gap-[20px] justify-end'> 
                <button className = "flex items-center justify-center gap-[3px] h-[28px] bg-white rounded-md p-3" >
                    <img src={likeicon} alt = 'like icon' className = "w-[16px]" />
                    <span>Like</span>
                </button>
                <button className = "flex items-center justify-center gap-[3px] h-[28px] bg-white rounded-md p-3" >
                    <img src = {locateicon} alt = 'location icon' className = "w-[16px]" />
                    <span>{props.location}</span>
                </button>
            </div>
            

        </div>
    )
}

export default Fundevent;