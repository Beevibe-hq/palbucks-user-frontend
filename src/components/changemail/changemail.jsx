import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import Loadingspinner from "../loadingspinner/loadingSpinner"

function Changemail(){

    const [openemail, setopenemail] = useState(true)
    const [email, setemail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const togglmaildisplay = () =>{
        if(openemail == true){
            setopenemail(false)
        }else{
            setopenemail(true)
        }
    }

    const handleEmailChange = async() =>{
        setIsLoading(true)
        if(email !== ''){
            const access_token = localStorage.getItem('access_token')
            const formdata = new FormData()
            formdata.append("email",email)
            const changeEmail = await fetch(`https://palbucks-api.onrender.com/users/api/profile/`,{
                method:'PATCH',
                headers:{
                    Authorization: `Bearer ${access_token}`,
                },
                body:formdata
            })

            const response = await changeEmail.json()
            console.log(response)
            if(changeEmail.status == 200){
                //alert('Email changed successfully')
                localStorage.setItem('userInfo', JSON.stringify(response))
            }else{
                alert('Email change failed')
            }
        }
        setIsLoading(false)
    }

    return(
        <div className = " w-[90%] lg:w-[80] xl:w-[75%] bg-white " >
            <div className = "flex justify-between items-center py-5 px-7 cursor-pointer " onClick = {togglmaildisplay} >
                <h3 className = "text-lg font-bold" >Email address</h3>
                <img src={openemail? arrowup : arrowdown} alt="down arrow" className = " cursor-pointer w-[30px] h-[14px] " />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
            <div className = "px-7 py-6 " >
                
                <div className ={` ${openemail ? 'flex' : 'hidden'} mb-3 gap-8 items-center `} >
                    
                    <input 
                        type="text" 
                        placeholder = "What email do you want to change to?" 
                        className = {`w-[53%] h-[46px] 
                        border-[0.5px] border-[#DDDDDD] py-2 px-5 outline-0  `}
                        onChange = {(e)=>setemail(e.target.value)}
                    />
                    <button 
                    onClick={handleEmailChange}
                    className = "bg-[#2CA9F2] hover:bg-blue-500 min-w-[140px] h-[42px] text-white rounded-[12px] px-[15px] py-[5px] font-semibold text-lg leading-7 " >                        
                        <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                            <Loadingspinner width = '28px' height = '28px' />
                        </div>
                        <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                            Change email
                        </span>
                    </button>

                </div>
                <p className = "font-medium text-base leading-6 text-[#7D7D7D] " >@youremailaddress@email.com</p>
            </div>

        </div>

    )
}

export default Changemail