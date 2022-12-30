import eventimg from "../../images/eventimg.png";
import environmentimg from '../../images/environment label.svg'
import likeicon from '../../images/likeicon.svg'
import locateicon from '../../images/locateicon.svg'

function Fundevent(props){

    return(
        <div className = 'max-w-[280px] smlaptops:max-w-[325px] mdlaptops:max-w-[285px] xl:max-w-[315px] h-[430px] min-w-[200px] inline-block mx-auto my-[35px] '>
            
            <div className = 'flex gap-2 mb-3'>
                
                <div className="flex shrink-0 -space-x-6">                    
                    {
                        props.accountimages.map((item,i)=>{
                            return(
                                <img src = {item} alt = 'Organizer profile picture' className='min-w-[47px] h-[47px]' key = {i} />                                
                            )
                        })
                    }
                </div>

                <div className="flex flex-col relative max-w-[100%] truncate">
                    <h3 className = "font-semibold text-[15px] truncate">                        
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

            <div className = 'relative'>
                <img src={props.eventimg? props.eventimg:eventimg} alt="Fund event image" className = 'w-full h-[160px]' />
                
                <div className = 'absolute top-4 left-5 bg-white flex gap-1 px-2 rounded-lg py-[0px] items-center'>
                    <img src={props.categoryimg} alt="Event category icon" className = 'w-[15px]' />
                    <span className = 'text-sm' >{props.category}</span>
                </div>
            </div>
            
            <div className = 'bg-white pt-[10px] rounded-b-[20px] pb-2 px-[10px] mb-3 h-[200.5px] relative '>
                <div>
                    <h5 className = "font-bold" >
                        {props.title ? props.title: "This is the title of the main user's Crowdfunding"}
                    </h5>
                    <p className='text-[14px]'>
                        {props.description ? props.description : "This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read thir...."}
                    </p>
                </div>

                <div className = 'absolute w-[93%] bottom-2'>
                    <progress value={props.value ? props.value : '23543'} max={props.target ? props.target : '150000'}  className='progressbar w-full h-[5px] appearance-none rounded-[5px] mb-1' />
                    
                    <p className= 'text-[13px] font-bold mt-[2px] mb-[5px]'>{props.value ? props.value.toLocaleString() : '23,543'} USDT raised
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