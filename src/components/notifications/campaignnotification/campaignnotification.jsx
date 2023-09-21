import palbuckslogo from "../../../images/palbuckslogo.svg"

function Campaignnotification(props){

    return(
        <div className="flex items-start gap-[10px] md:gap-4 bg-white border-[1px] border-[#F9F9F9] py-[10px] md:py-[15px] px-[20px] rounded-[5px] md:rounded-none " >
            <img src={palbuckslogo} alt="user profile" className=" w-12 md:w-[56px] rounded-full" />
            <div className="" >
                <h4 className="font-black text-base md:text-lg mb-1 md:mb-[6px]" >
                    Palbucks
                </h4>
                <p className="mb-[10px] md:mb-[15px] text-[13px] md:text-base  " >
                    {props.time}
                </p>
                <p className="text-sm md:text-lg mb-[10px] md:mb-[15px] " >
                    Your crowdfunding campaign has reached <span className="font-black" >{props.campaignstate}</span> of its goal.
                 </p>
                 <button className="border-2 border-[#E61B00] py-[6px] px-[13px] md:px-[15px] rounded-[5px] md:rounded-[10px] text-[#E61B00] text-xs md:text-base font-black " >
                    End campaign
                 </button>

            </div>
        </div>
    )
}

export default Campaignnotification