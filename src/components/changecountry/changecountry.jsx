import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"


function Changecountry(){

    const [opencountry, setopencountry] = useState(false)

    const managecountry = () =>{

        if(opencountry == true){
            setopencountry(false)
        }else{
            setopencountry(true)
        }
    }

    return(
        <div className = " w-[90%] lg:w-[80] xl:w-[75%] bg-white " >
                    <div className = "flex justify-between py-5 px-7" >
                        <h3 className = "text-lg font-bold" >Country</h3>
                        <img src={opencountry? arrowup : arrowdown} alt="down arrow" className = " cursor-pointer w-[30px] h-[14px] "
                            onClick = {managecountry}  />
                    </div>

                    <hr className = " border-[1px] border-[#C4C4C4] " />
                    <div className = "px-7 py-5 " >
                        
                        <div className ={` ${opencountry ? 'flex' : 'hidden'} mb-3 gap-8 items-center `} >
                            
                            <input type="text" placeholder = "Search your country?" className = {`w-[250px] h-[46px] 
                            border-[0.5px] border-[#DDDDDD] py-2 px-5 outline-0 rounded-xl  `} />
                            <button className = "bg-[#2CA9F2] hover:bg-blue-500  h-[42px] text-white rounded-[12px] px-[15px] py-[5px] font-semibold text-lg leading-7 " >
                                Change country
                            </button>

                        </div>
                        <p className = "font-medium text-base leading-6 text-[#7D7D7D] " >Nigeria</p>
                    </div>

                </div>

    )
}

export default Changecountry