
function Worksguide(props){

    return(
        <div className={` ${props.background == 'green' ? 'bg-[#35FAA099]' : 'bg-[#FFFFFF]'  } py-[15px] px-[20px] md:max-w-[540px] lg:max-w-[450px]
         2xl:max-w-[540px] shadow-[0px_0px_16px_rgba(0,0,0,0.04);] rounded-[5px] w-full md:w-[45%] lg:w-[46%]
          `} >
            <div className="flex justify-between w-full mb-[17px]  items-center  ">
                <h2 className="font-bold text-[22px] leading-[30px] -tracking-[0.41px] " >{props.step}</h2>
                <img src={props.icon} alt="article description icon" className="w-[32px] h-[36px]" />
            </div>
            <p className="text-[18px] text-[#525252] leading-6 mb-5 font-normal " >
                {props.description}
            </p>
        </div>
    )
}

export default Worksguide