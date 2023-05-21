
function Policylists(props){

    return(
        <div className={`flex gap-2 lg:gap-5 ${props.marginb ? 'mb-20' : 'mb-8' } `}>
            <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
            </div>

            <div className="w-full" >
                <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >{props.title}</h2>
                <p className="text-[18px] tracking-[0.8px] leading-7" >
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Policylists