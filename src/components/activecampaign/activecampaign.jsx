import { useNavigate } from "react-router-dom"
import deleteicon from "../../images/deleteicon.svg"

function Activecampaign(props){

    const navigate  = useNavigate()

    return(
        <div className="" >
            <div className="flex items-center gap-1 md:gap-2 w-fit mb-[11px] md:mb-[15px] " >
                <div className="w-3 h-3 bg-[#35FAA0]  rounded-full" ></div>
                <h4 className=" relative top-[1px] " >Active</h4>
            </div>

            <div className={`flex gap-[15px] md:gap-[20px] h-[125px] items-center mb-12 bg-white pr-3 xphones:pr-4`}>
                <div className="w-[3px] md:w-[5px] h-full bg-[#35FAA0] shadow-[0px_0px_16px_rgba(0,0,0,0.04);] " >                
                </div>
                
                <div className="flex gap-[15px]  md:gap-[25px] w-full md:items-center " >  
                    
                    <img src={props.img} alt="user crowdfund img" className="w-[55px] md:w-[80px] h-[49px] md:h-[70px] rounded object-cover " />                        
                    <div className="w-full flex flex-col items-start md:items-center gap-[10px] md:flex-row md:justify-between">
                        <div className="flex flex-col gap-1 " >
                            <h5 className="text-base md:text-lg font-black leading-5" >
                                {props.title}
                            </h5>
                            <p className=" text-black md:text-[#525252] text-sm md:text-base " >
                                {props.daysleft} days left
                            </p>
                        </div>
                        <div className="flex gap-1 phones:gap-[10px] md:gap-9 phones:max-h-[35px] md:max-h-[50px] " >
                            <button className="flex gap-2 items-center py-[2px] px-3 xl:py-[5px] xl:px-[15px] md:min-w-[104px] 
                                border-2 border-[#E61B00] rounded-[5px] md:rounded-[10px]
                                text-xs md:text-base "> 
                                <img src={deleteicon} alt="delete img" className="w-3 md:w-[20px] h-[14px] md:h-[24px]" />
                                <span className="text-[#E61B00] font-black" >Delete</span>
                            </button>
                            <button className="bg-[#37BCF7] max-h-[35px] md:max-h-[50px]
                            text-white rounded-[5px] md:rounded-[10px] py-[5px] px-3 md:px-[15px] font-black
                            text-xs md:text-base "
                                onClick={ () => navigate(`/detailed/${props.id}`) }
                            >
                                View Campaign
                            </button>
                        </div>
                    </div>

                </div>
                
                
            </div>


        </div>
    )
}

export default Activecampaign