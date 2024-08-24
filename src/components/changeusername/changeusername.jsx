import { useState } from "react"
import { baseUrl } from "../../auth/checkauthentication"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import Loadingspinner from "../loadingspinner/loadingSpinner"

function Changeusername(){

    const [openusername, setopenusername] = useState('open')
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    

    const [username, setusername] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const manageUsernameToggle = () =>{
        if(openusername == 'open'){
            setopenusername('close')
        }else{
            setopenusername('open')
        }
    }

    const handleUsernameChange = async() =>{
        setIsLoading(true)
        if(username !== ''){
            const access_token = localStorage.getItem('access_token')
            const formdata = new FormData()
            formdata.append("username",username)
            const changeUsername = await fetch(`${baseUrl}/users/api/profile/`,{
                method:'PATCH',
                headers:{
                    Authorization: `Bearer ${access_token}`,
                },
                body:formdata
            })
            
            const response = await changeUsername.json()
            console.log(response)
            if(changeUsername.status == 200){
                //alert('Username changed successfully')
                localStorage.setItem('userInfo', JSON.stringify(response))
                userInfo = JSON.parse(localStorage.getItem('userInfo'))
                setIsLoading(false)
            }else{
                alert('Username change failed')
            }
        }

        setIsLoading(false)
    }


    return(
        <div className = "rounded-[5px] w-full md:w-[90%] lg:w-full xl:w-[75%] bg-white " >
            <div className = "flex justify-between items-center p-[15px] md:py-5 md:px-7 cursor-pointer " onClick = {manageUsernameToggle} >
                <h3 className = "text-sm md:text-lg font-bold" >Username</h3>
                <img 
                    src={arrowup} 
                    alt="down arrow" 
                    className = {` ${openusername == 'open'? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px]`}
                />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
            <div className = {` ${openusername == 'open' ? '' : 'hidden' } flex flex-col gap-3 px-[15px] md:px-7 py-3 md:py-6`} >
                
                <div className ={` ${openusername == 'open' ? 'flex flex-col md:flex-row md:items-center ' : 'hidden'} gap-5 md:gap-8 `} >
                    
                    <input 
                        type="text" 
                        placeholder = "What username do you want to change to?" 
                        className = {`w-full md:w-[53%] h-[46px] 
                        border-[0.5px] border-[#DDDDDD] text-sm md:text-base 
                        py-2 px-2 md:px-5 outline-0 rounded focus:border-[#2CA9F2] focus:border-2  `}
                        onChange = {(e)=>{
                            setusername(e.target.value)
                        }
                        }
                    />
                    <button 
                        className = {`bg-[#2CA9F2] md:min-w-[160px] w-fit hover:bg-blue-500 h-9 md:h-[42px] text-white rounded-[5px] md:rounded-[12px] px-[11px] md:px-[15px] py-[2px] md:py-[5px] 
                        font-black text-sm md:text-lg leading-7 `} 
                        onClick = {handleUsernameChange}    
                    >                        
                        <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                            <Loadingspinner width = '28px' height = '28px' />
                        </div>
                        <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                            Change username
                        </span>
                    </button>

                </div>
                <p className = "hidden md:block font-medium text-base leading-6 text-[#7D7D7D] " >@{userInfo.username}</p>
            </div>

        </div>

    )
}

export default Changeusername