import eventimg from "../../images/eventimg.png";
import environmentimg from '../../images/environment label.svg'

function Fundevent(props){

    return(
        <div className = 'max-w-[300px] xl:max-w-[310px] max-h-[430px] min-w-[200px] inline-block my-[35px] mx-auto border-red-100 border-2 relative'>
            
            <div className = 'flex gap-2 mb-3'>
                
                <div className="flex shrink-0 -space-x-6">                    
                    {
                        props.accountimages.map((item,i)=>{
                            return(
                                <img src = {item} alt = 'Organizer profile picture' className='min-w-[50px] h-[50px]' key = {i} />                                
                            )
                        })
                    }
                </div>

                <div className="flex flex-col relative max-w-[100%] truncate">
                    <h3 className = "font-semibold text-[15px] truncate">                        
                        {
                            props.organizeraccounts.map((item,i,arr)=>{
                                
                                return(
                                    i === arr.length - 1 ? (item) :
                                    i === arr.length - 2 ? item + ' and ' :
                                    item + ' ,'
                                )
                            })
                        }
                    </h3>
                    <p className = "text-[14px]">is organizing ...</p>
                </div>
            </div>

            <div className = 'relative'>
                <img src={eventimg} alt="Fund event image" className = 'w-full h-[160px]' />
                
                <div className = 'absolute top-4 left-5 bg-white flex gap-1 px-2 rounded-lg py-[0px] items-center'>
                    <img src={props.categoryimg} alt="Event category icon" className = 'w-[15px]' />
                    <span className = 'text-sm' >{props.category}</span>
                </div>
            </div>
            
            <div className = 'bg-white pt-[10px]'>
                <h5 className = "font-bold" >
                    {props.title ? props.title: "This is the title of the main user's Crowdfunding"}
                </h5>

                <p className='text-[14px]'>
                    {props.description ? props.description : "This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read thir...."}
                </p>
            </div>
            

        </div>
    )
}

export default Fundevent;