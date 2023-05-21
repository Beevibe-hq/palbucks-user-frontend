
function Policyheads(props){

    return(
        <div className={`w-full pr-5 flex justify-between bg-[#37BCF733] rounded-[10px] mb-[25px] `} >
            
            <div className="flex" >
                <div className="h-full w-5 bg-[#37BCF7] rounded-[10px] " >
                </div>
                <div className="w-[404px] m-[15px]" >
                    <h3 className="text-[#000000] font-black text-[40px] " >
                        {props.title}
                    </h3>
                </div>
            </div>
            
            <img src={props.icon} alt={props.alt} className = 'w-[144px]' />
            
        </div>
    )
}

export default Policyheads;