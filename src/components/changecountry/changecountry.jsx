import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"


function Changecountry(){

    const [opencountry, setopencountry] = useState(true)

    const managecountry = () =>{

        if(opencountry == true){
            setopencountry(false)
        }else{
            setopencountry(true)
        }
    }

    return(
        <div className = " rounded-[5px] w-full md:w-[90%] lg:w-[80%] xl:w-[75%] bg-white " >
            <div className = "flex justify-between items-center p-[15px] md:py-5 md:px-7 cursor-pointer " onClick = {managecountry} >
                <h3 className = "text-sm md:text-lg font-bold" >
                    Location
                </h3>
                <img 
                    src={arrowup} alt="down arrow" 
                    className = {` ${opencountry ? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px]`}
                />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
            
            <div className = {` ${opencountry ? '': 'hidden'} flex flex-col gap-3 px-[15px] md:px-7 py-3 md:py-6`} >                  
            <div className ={` ${opencountry ? 'flex flex-col md:flex-row md:items-center ' : 'hidden'} gap-5 md:gap-8 `} >
                    
                    <input 
                        type="text" 
                        placeholder = "Search your country" 
                        className = {`
                            w-[250px] h-[46px] border-[0.5px] border-[#DDDDDD] 
                            text-sm md:text-base py-2 px-2 md:px-5 outline-0 rounded-lg  `} 
                    />
                    <button 
                        className = {`bg-[#2CA9F2] min-w-[102px] md:min-w-[160px] w-fit hover:bg-blue-500 h-[42px] text-white rounded-[5px] md:rounded-[12px] px-[11px] md:px-[15px] py-1 md:py-[5px] 
                        font-black text-sm md:text-lg leading-7 `} 
                    >
                        Change location
                    </button>

                </div>
                <p className = "hidden md:block font-medium text-base leading-6 text-[#7D7D7D] " >Nigeria</p>
            </div>

        </div>

    )
}

export default Changecountry