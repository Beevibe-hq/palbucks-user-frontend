import { Link } from "react-router-dom"

function Emptycampaign(props){

    return(        
            <div className={`w-full flex gap-4 md:gap-5 h-[90px] md:h-[100px] items-center mb-12 bg-white pr-4`}>
                <div className="w-[3px] md:w-[5px] h-full bg-[#37BCF7] shadow-[0px_0px_16px_rgba(0,0,0,0.04);] " >                
                </div>
            
                <div className="w-full flex flex-col items-start gap-[10px] md:flex-row md:justify-between">
                    <h5 className="text-base md:text-lg font-black leading-5" >
                        {props.title ? props.title : 'You have no campaign to show here'}
                    </h5>
                    
                    {
                    <Link to='/organisecrowdfund' className="bg-[#37BCF7] max-h-[35px] md:max-h-[50px]
                        text-white rounded-[5px] md:rounded-[10px] py-[5px] px-3 md:px-[15px] font-black
                        text-xs md:text-base " >
                            Start a Campaign
                        </Link>
                    }
                </div>
                
            </div>
    )
}

export default Emptycampaign