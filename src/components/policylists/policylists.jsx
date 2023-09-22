
function Policylists(props){

    return(
        <div className={`flex gap-2 lg:gap-5 ${props.marginb ? 'mb-10 md:mb-20' : 'mb-4 md:mb-8' } `}>
            <div className="w-[6px] md:w-[10px] bg-[#37BCF7] rounded-[20px] " >                
            </div>

            <div className="w-full" >
                <h2 className="text-base md:text-[22px] font-black mb-[5px] md:mb-[15px] leading-7 tracking-[0.5px] " >
                    {props.title}
                </h2>
                <p className="text-sm md:text-lg tracking-[0.1px] md:tracking-[0.8px] md:leading-7" >
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Policylists