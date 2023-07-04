import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"


function Changemail(){

    const [openemail, setopenemail] = useState(true)

    const managemailname = () =>{

        if(openemail == true){
            setopenemail(false)
        }else{
            setopenemail(true)
        }
    }

    return(
        <div className = " w-[90%] lg:w-[80] xl:w-[75%] bg-white " >
                    <div className = "flex justify-between items-center py-5 px-7 cursor-pointer " onClick = {managemailname} >
                        <h3 className = "text-lg font-bold" >Email address</h3>
                        <img src={openemail? arrowup : arrowdown} alt="down arrow" className = " cursor-pointer w-[30px] h-[14px] " />
                    </div>

                    <hr className = " border-[1px] border-[#C4C4C4] " />
                    <div className = "px-7 py-6 " >
                        
                        <div className ={` ${openemail ? 'flex' : 'hidden'} mb-3 gap-8 items-center `} >
                            
                            <input type="text" placeholder = "What email do you want to change to?" className = {`w-[53%] h-[46px] 
                            border-[0.5px] border-[#DDDDDD] py-2 px-5 outline-0  `} />
                            <button className = "bg-[#2CA9F2] hover:bg-blue-500  h-[42px] text-white rounded-[12px] px-[15px] py-[5px] font-semibold text-lg leading-7 " >
                                Change email
                            </button>

                        </div>
                        <p className = "font-medium text-base leading-6 text-[#7D7D7D] " >@youremailaddress@email.com</p>
                    </div>

                </div>

    )
}

export default Changemail