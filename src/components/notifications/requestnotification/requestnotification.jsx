

function Requestnotification(props){

    return(
        <div className="flex items-start gap-[10px] md:gap-4 bg-white border-[1px] border-[#F9F9F9] py-[10px] md:py-[15px] px-[20px] rounded-[5px] md:rounded-none " >
            <img src={props.userdp} alt="user profile" className=" w-12 md:w-[56px] rounded-full" />
            <div className="" >
                <h4 className="font-black text-base md:text-lg mb-1 md:mb-[6px]" >
                    {props.username}
                </h4>
                <p className="mb-[10px] md:mb-[15px] text-[13px] md:text-base  " >
                    {props.time}
                </p>
                <p className="text-sm md:text-lg mb-[10px] md:mb-[15px] " >
                    is requesting you to <span className="font-black" >join</span> her crowdfunding campaign
                 </p>
                 <div className="flex gap-[15px] ">
                     <button className="py-[6px] px-[13px] md:px-[15px] rounded-[5px] md:rounded-[10px] bg-[#37BCF7] text-white text-xs md:text-base font-black " >
                        Accept
                     </button>
                     <button className=" border-2 border-[#37BCF7] py-[6px] px-[13px] md:px-[15px] rounded-[5px] md:rounded-[10px] bg-white text-[#37BCF7] text-xs md:text-base font-black " >
                        Decline
                     </button>
                 </div>

            </div>
        </div>
    )
}

export default Requestnotification