import Likeicon from "../../images/likeicon"

function Likenotification(props){

    return(
        <div className="flex items-start gap-4 bg-white border-[1px] border-[#F9F9F9] py-[15px] px-[20px] " >
            <img src={props.userdp} alt="user profile" className="w-[56px] rounded-full" />
            <div className="" >
                <h4 className="font-black text-[17px] mb-[6px]" >{props.username}</h4>
                <p className="mb-[15px]" >{props.time}</p>
                <p className="text-[18px]" >
                    <Likeicon liked = {true} /> <span className="font-black " >Liked</span> your crowdfunding campaign
                 </p>

            </div>
        </div>
    )
}

export default Likenotification