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
            const changeUsername = await fetch(`https://palbucks-api.onrender.com/users/api/profile/`,{
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
        <div className = " w-[90%] lg:w-[80] xl:w-[75%] bg-white " >
            <div className = "flex justify-between items-center py-5 px-7 cursor-pointer " onClick = {manageUsernameToggle} >
                <h3 className = "text-lg font-bold" >Username</h3>
                <img src={openusername == 'open' ? arrowup : arrowdown} alt="down arrow" className = " cursor-pointer w-[30px] h-[14px] "/>
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
            <div className = "px-7 py-6 " >
                
                <div className ={` ${openusername == 'open' ? 'flex' : 'hidden'} mb-3 gap-8 items-center `} >
                    
                    <input 
                        type="text" 
                        placeholder = "What username do you want to change to?" 
                        className = {`w-[53%] h-[46px] 
                        border-[0.5px] border-[#DDDDDD] py-2 px-5 outline-0  `}
                        onChange = {(e)=>{
                            setusername(e.target.value)
                        }
                        }
                    />
                    <button 
                        className = "bg-[#2CA9F2] min-w-[160px] hover:bg-blue-500 h-[42px] text-white rounded-[12px] px-[15px] py-[5px] font-semibold text-lg leading-7 " 
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
                <p className = "font-medium text-base leading-6 text-[#7D7D7D] " >@formalusername</p>
            </div>

        </div>

    )
}

export default Changeusername