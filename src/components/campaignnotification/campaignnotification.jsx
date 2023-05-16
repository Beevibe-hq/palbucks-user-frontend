import palbuckslogo from "../../images/palbuckslogo.svg"

function Campaignnotification(props){

    return(
        <div className="flex items-start gap-4 bg-white border-[1px] border-[#F9F9F9] py-[15px] px-[20px] " >
            <img src={palbuckslogo} alt="user profile" className="w-[56px] rounded-full" />
            <div className="" >
                <h4 className="font-black text-[17px] mb-[6px]" >Palbucks</h4>
                <p className="mb-[15px]" >{props.time}</p>
                <p className="text-[18px] mb-[15px]" >
                    Your crowdfunding campaign has reached <span className="font-black" >{props.campaignstate}</span> of its goal.
                 </p>
                 <button className="border-2 border-[#E61B00] py-[5px] px-[15px] rounded-[10px] text-[#E61B00] text-[16px] font-black " >
                    End campaign
                 </button>

            </div>
        </div>
    )
}

export default Campaignnotification