import { Link } from "react-router-dom"

function Emptycampaign(props){

    return(        
            <div className={`flex h-[88px] items-center mb-12 bg-white pr-4`}>
                <div className="w-[5px] h-full bg-[#37BCF7] mr-5 shadow-[0px_0px_16px_rgba(0,0,0,0.04);] " >                
                </div>
            
                <h5 className="text-[18px] font-black leading-5 mb-2 " >{props.title ? props.title : 'You have no campaign to show here' }</h5>
                                
                {
                    <Link to = '/organisecrowdfund' className="bg-[#37BCF7] max-h-[50px] text-white ml-auto  rounded-[10px] py-[5px] px-[15px] font-black" >
                        Start a Campaign
                    </Link>
                }
                
            </div>
    )
}

export default Emptycampaign