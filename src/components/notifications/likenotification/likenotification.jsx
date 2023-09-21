import Likeicon from "../../../images/likeicon"
import likeIcon from "../../../images/notifications/likeIcon.svg"

function Likenotification(props){

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
                <p className="text-sm md:text-lg" >
                    {/* <Likeicon liked = {true} /> */}
                    <img src={likeIcon} alt="Like icon" className="inline w-4 md:w-5 h-4 md:h-5" /> <span className="font-bold md:font-black " >Liked</span> your crowdfunding campaign
                 </p>

            </div>
        </div>
    )
}

export default Likenotification