import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"


function Changeusername(){

    const [openusername, setopenusername] = useState('close')

    const manageusername = () =>{

        if(openusername == 'open'){
            setopenusername('close')
        }else{
            setopenusername('open')
        }
    }

    return(
        <div className = " w-[90%] lg:w-[80] xl:w-[75%] bg-white " >
                    <div className = "flex justify-between items-center py-5 px-7" >
                        <h3 className = "text-lg font-bold" >Username</h3>
                        <img src={openusername == 'open' ? arrowup : arrowdown} alt="down arrow" className = " cursor-pointer w-[30px] h-[14px] "
                            onClick = {manageusername}  />
                    </div>

                    <hr className = " border-[1px] border-[#C4C4C4] " />
                    <div className = "px-7 py-6 " >
                        
                        <div className ={` ${openusername == 'open' ? 'flex' : 'hidden'} mb-3 gap-8 items-center `} >
                            
                            <input type="text" placeholder = "What username do you want to change to?" className = {`w-[53%] h-[46px] 
                            border-[0.5px] border-[#DDDDDD] py-2 px-5 outline-0  `} />
                            <button className = "bg-[#2CA9F2] hover:bg-blue-500  h-[42px] text-white rounded-[12px] px-[15px] py-[5px] font-semibold text-lg leading-7 " >
                                Change username
                            </button>

                        </div>
                        <p className = "font-medium text-base leading-6 text-[#7D7D7D] " >@formalusername</p>
                    </div>

                </div>

    )
}

export default Changeusername