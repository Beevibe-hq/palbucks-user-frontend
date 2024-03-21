import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import Loadingspinner from "../loadingspinner/loadingSpinner"

function Changepassword(){

    const [openpassword, setopenpassword] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })

    const managepasswordbody = () =>{
        if(openpassword == true){
            setopenpassword(false)
        }else{
            setopenpassword(true)
        }
    }

    const handlePasswordChange = async() =>{
        setIsLoading(true)
        
        setTimeout(() => {
            alert(' Password change is coming soon ');
            setIsLoading(false)
        }, 3000)

        //setIsLoading(false)
    }
    
    

    return(
        <div>
            <h3 className = "text-base md:text-xl font-bold mb-7 md:mb-8 " >Change Your Password</h3>

            <div className = " rounded-[5px] w-full md:w-[90%] lg:w-full xl:w-[75%] bg-white " >
                <div className = "flex justify-between items-center p-[15px] md:py-5 md:px-7 cursor-pointer " onClick = {managepasswordbody} >
                    <h3 className = "text-sm md:text-lg font-bold" >
                        Password 
                    </h3>
                    <img 
                        src={arrowup} alt="down arrow" 
                        className = {` ${openpassword ? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px]`}
                    />
                </div>

                <hr className = " border-[1px] border-[#C4C4C4] " />

                <div className = {` ${openpassword ? 'block' : 'hidden' } w-full py-3 md:py-6 px-[15px] md:px-7 `} >
                                            
                        <h4 className = "font-bold text-sm md:text-base mb-[10px] md:mb-4" >Current password</h4>
                        <div className = "flex flex-col md:flex-row gap-[10px] md:gap-4 md:items-center mb-5 md:mb-9 ">
                            <input 
                                type="text" 
                                id="currentpassword" 
                                placeholder = "What is your current password?" 
                                className = {`w-full md:w-[370px] h-[46px] border-[0.5px] border-[#DDDDDD] 
                                py-2 px-[10px] md:px-5 outline-0 text-sm md:text-base rounded focus:border-[#2CA9F2] focus:border-2 `}
                                onChange={(e) => setPassword({
                                    ...password, currentPassword: e.target.value
                                })}
                                />
                            <label 
                                htmlFor="currentpassword" 
                                className = "text-[#2CA9F2] font-bold text-sm md:text-base cursor-pointer " >
                                    Forgot password?
                            </label>
                        </div>
                    
                        <div className = 'flex flex-col md:flex-row gap-5 w-full mb-5 md:mb-8 ' >
                            <section className = "w-full" >
                                <h4 className = "font-bold text-sm md:text-base mb-[10px] md:mb-4" >New password</h4>
                                <input 
                                    type="text" 
                                    id="newpassword" 
                                    placeholder = "What is your new password?" 
                                    className = {`w-[100%] h-[46px] border-[0.5px] border-[#DDDDDD] 
                                    py-2 px-[10px] md:px-5 rounded text-sm md:text-base outline-0 focus:border-[#2CA9F2] focus:border-2 `} 
                                    onChange={(e) => setPassword({
                                        ...password, newPassword: e.target.value
                                    })}
                                />
                            </section>

                            <section className = "w-full" >
                                <h4 className = "font-bold text-sm md:text-base mb-[10px] md:mb-4" >Confirm new password</h4>
                                <input 
                                    type="text" 
                                    id="newpassword" 
                                    placeholder = "Repeat your new password?" 
                                    className = {`w-[100%] h-[46px] border-[0.5px] border-[#DDDDDD] 
                                    py-2 px-[10px] md:px-5 rounded text-sm md:text-base outline-0 focus:border-[#2CA9F2] focus:border-2 `}     
                                    onChange={(e) => setPassword({
                                        ...password, confirmNewPassword: e.target.value
                                    })}
                                />
                            </section>
                        </div>

                        <button 
                        onClick = {handlePasswordChange}
                            className = {`bg-[#2CA9F2] min-w-[102px] md:min-w-[160px] w-fit hover:bg-blue-500 h-9 md:h-[42px] text-white rounded-[5px] md:rounded-[12px] px-[11px] md:px-[15px] py-[2px] md:py-[5px] 
                            font-black text-sm md:text-lg leading-7 `}
                        >                        
                            <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                                <Loadingspinner width = '28px' height = '28px' />
                            </div>
                            <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                                Change password
                            </span>
                        </button>

                </div>

            </div>

        
        </div>

    )
}

export default Changepassword