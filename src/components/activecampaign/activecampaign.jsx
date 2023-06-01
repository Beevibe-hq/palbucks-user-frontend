
function Activecampaign(props){

    return(
        <div className="" >
            <div className="flex items-center gap-2 w-fit mb-[15px] " >
                <div className="w-3 h-3 bg-[#35FAA0]  rounded-full" ></div>
                <h4 className=" relative top-[1px] " >Active</h4>
            </div>

            <div className={`flex h-[120px] items-center mb-12 bg-white pr-4`}>
                <div className="w-[5px] h-full bg-[#35FAA0] mr-5 shadow-[0px_0px_16px_rgba(0,0,0,0.04);] " >                
                </div>

                <div className="flex gap-[25px]" >
                    <img src={props.img} alt="user crowdfund img" className="w-[80px] h-[70px] rounded " />
                    <div className="flex flex-col w-[85%]" >
                        <h5 className="text-[18px] font-black leading-5 mb-2 " >{props.title}</h5>
                        <p className=" text-[#525252]  " >{props.daysleft} days left </p>
                    </div>                    
                </div>
                
                <button className="bg-[#37BCF7] text-white ml-auto rounded-[10px] py-[5px] px-[15px] max-h-[50px] font-black" >
                    View Campaign
                </button>
            </div>


        </div>
    )
}

export default Activecampaign