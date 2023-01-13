import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"

function Changepassword(){

    const [openpassword, setopenpassword] = useState(false)

    const managepasswordbody = () =>{

        if(openpassword == true){
            setopenpassword(false)
        }else{
            setopenpassword(true)
        }
    }

    return(
        <div>
                <h3 className = "text-xl font-bold mb-8 " >Change Your Password</h3>

                <div className = " w-[90%] lg:w-[80] xl:w-[75%] bg-white " >
                    <div className = "flex justify-between items-center py-5 px-7" >
                        <h3 className = "text-lg font-bold" >Password </h3>
                        <img src={openpassword? arrowup : arrowdown} alt="down arrow" className = " cursor-pointer w-[30px] h-[14px] "
                            onClick = {managepasswordbody}  />
                    </div>

                    <hr className = " border-[1px] border-[#C4C4C4] " />

                    <div className = {` ${openpassword ? 'block' : 'hidden' } w-full py-6 px-7 `} >
                                                
                            <h4 className = "font-semibold text-base mb-4" >Current password</h4>
                            <div className = "flex gap-4 items-center mb-9 ">
                                <input type="text" id="currentpassword" placeholder = "What is your current password?" className = "w-[370px] h-[46px] border-[0.5px] border-[#DDDDDD] py-2 px-5 outline-0 " />
                                <label htmlFor="currentpassword" className = "text-[#2CA9F2] font-semibold text-base " >Forgot password?</label>
                            </div>
                        
                            <div className = 'flex w-full mb-8 ' >
                                <section className = "w-full mr-6" >
                                    <h4 className = "font-semibold text-base mb-4" >New password</h4>
                                    <input type="text" id="newpassword" placeholder = "What is your new password?" className = "w-[100%] h-[46px] border-[0.5px] border-[#DDDDDD] py-2 px-5 outline-0 " />
                                </section>

                                <section className = "w-full" >
                                    <h4 className = "font-semibold text-base mb-4" >Confirm new password</h4>
                                    <input type="text" id="newpassword" placeholder = "Repeat your new password?" className = "w-[100%] h-[46px] border-[0.5px] border-[#DDDDDD] py-2 px-5 outline-0 " />
                                </section>
                            </div>

                            <button className = " bg-[#2CA9F2] border-[2px] border-[#2CA9F2] py-2 px-4 rounded-[10px] text-white font-semibold text-base leading-5 " >
                                Change password
                            </button>

                    </div>

                </div>

            </div>

    )
}

export default Changepassword