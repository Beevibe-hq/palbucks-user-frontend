

function Requestnotification(props){

    return(
        <div className="flex items-start gap-4 bg-white border-[1px] border-[#F9F9F9] py-[15px] px-[20px] " >
            <img src={props.userdp} alt="user profile" className="w-[56px] rounded-full" />
            <div className="" >
            <h4 className="font-black text-[17px] mb-[6px]" >{props.username}</h4>
                <p className="mb-[15px]" >{props.time}</p>
                <p className="text-[18px] mb-[15px]" >
                    is requesting you to <span className="font-black" >join</span> her crowdfunding campaign
                 </p>
                 <div className="flex gap-[15px] ">
                     <button className="py-[5px] px-[15px] rounded-[10px] bg-[#37BCF7] text-white text-[16px] font-black " >
                        Accept
                     </button>
                     <button className=" border-2 border-[#37BCF7] py-[5px] px-[15px] rounded-[10px] bg-white text-[#37BCF7] text-[16px] font-black " >
                        Decline
                     </button>
                 </div>

            </div>
        </div>
    )
}

export default Requestnotification