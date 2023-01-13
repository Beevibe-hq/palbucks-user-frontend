import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import Changecountry from "../changecountry/changecountry"
import Changemail from "../changemail/changemail"
import Changepassword from "../changepassword/changepassword"
import Changeusername from "../changeusername/changeusername"

function Settingsbody(){


    return(
        <div className = 'mt-[90px] md:mt-[100px] w-full h-full py-16 px-[50px] bg-[#F9F9F9]'>

            <h1 className = "font-bold text-4xl leading-[24px] mb-16 " > Personalize your experience</h1>

            <div className = 'flex gap-[15px] mb-14'>                
                <button className = "bg-[#2CA9F2] w-[160px] h-[42px] text-white rounded-[5px] px-[15px] py-[5px] font-semibold text-lg leading-7 " >
                    My accounts
                </button>

                <button className = "w-[190px] h-[42px]  rounded-[5px] px-[15px] py-[5px] font-medium text-lg text-[#7D7D7D] leading-7 " >
                    Privacy & Safety
                </button>
            </div>

            <div className = "mb-11">
                <h2 className=" font-bold text-xl leading-7 mb-2" >Account information</h2>
                <p className = "font-normal leading-6 text-base " >Update your account information such as your username, phone number, email address and country at any time.</p>
            </div>

            <div className = "w-full flex flex-col gap-11 mb-20" >
                <Changeusername />
                <Changeusername />        
                <Changemail />
                <Changecountry />                          
            </div>

            <Changepassword />            
        </div>
    )
}

export default Settingsbody