
function HelpArticles(props){

    return(
        <div className="
         bg-[#FFFFFF] py-[15px] px-[20px] md:max-w-[540px] lg:max-w-[450px] 2xl:max-w-[540px] 
            shadow-[0px_0px_16px_rgba(0,0,0,0.04);] rounded-[5px] w-full md:w-[45%] lg:w-[46%] " >
            <div className="flex justify-between gap-2 w-full mb-[17px] items-center  ">
                <h2 className="font-bold text-lg md:text-[22px] md:leading-[30px] -tracking-[0.41px] " >
                    {props.topic}
                </h2>
                <img src={props.icon} alt="article description icon" className="w-7 md:w-[32px] h-8 md:h-9" />
            </div>
            <p className="text-sm md:text-lg text-[#525252] md:leading-6 mb-[15px] md:mb-5 line-clamp-3 " >
                {props.description}
            </p>
            <button className="text-white text-xs md:text-base bg-[#37BCF7] py-[5px] px-[13px] md:px-[15px] font-black rounded-[5px] md:rounded-[10px] " >
                Read Article
            </button>
        </div>
    )
}

export default HelpArticles