
function Commentnotification(props){

    return(
        <div className="flex items-start gap-[10px] md:gap-4 bg-white border-[1px] border-[#F9F9F9] py-[10px] md:py-[15px] px-[20px] rounded-[5px] md:rounded-none " >
            <img src={`https://palbucks-bucket.s3.amazonaws.com/${props.userdp}`} alt="user profile" className=" w-12 md:w-[56px] rounded-full" />
            <div className="" >
                <h4 className="font-black text-base md:text-lg mb-1 md:mb-[6px]" >
                    {props.username}
                </h4>
                <p className="mb-[10px] md:mb-[15px] text-[13px] md:text-base  " >
                    {props.time}
                </p>
                <p className="text-sm md:text-lg" >
                    <span className="font-black" >Commented</span> on your crowdfunding campaign 
                    <span className="font-black" >“{props.comment}”</span>
                 </p>

            </div>
        </div>
    )
}

export default Commentnotification