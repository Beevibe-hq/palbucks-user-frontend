import applogo from "../../images/appLogo.svg"
import palbucks from "../../images/palbucks2.svg"
import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"

import checker from "../../images/authpages/checker.svg"
import checker2 from "../../images/authpages/checker2.svg"
import checker3 from "../../images/authpages/checker3.svg"



import { Link, useNavigate } from "react-router-dom"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkAuthentication } from "../../auth/checkauthentication"
import { setLogoutLoading } from "../../actions/actions"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"

const Completesignup = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLoginLoading, setIsLoginLoading] = useState(false)

    const signupInfo = useSelector( state => state.signupInfo)
    const [personalInfo, setPersonalInfo] = useState({
        first_name:'',
        last_name:'',
        dateOfBirth:'',
        username:'',
        gender:1,
        phone:'293',
        bio:'Humble man',
        password1:signupInfo.password,
        password2:signupInfo.password,                
    })

    const [responseDetail,setResponseDetail] = useState({
        username: '',
    })

    const handleInputChange = (e) => {
        setPersonalInfo(prevInfo => ({...prevInfo, [e.target.name]: e.target.value }) )
    }

    const finishSignup = async (e) => {
        //dispatch(setLogoutLoading(true))
        setIsLoginLoading(true)
        try {
            const updatedSignupInfo = { ...signupInfo, ...personalInfo };
            console.log(updatedSignupInfo)
      
            const signupRequest = await fetch('https://palbucks-api.onrender.com/users/api/register/', {
            method: 'POST',
            body: JSON.stringify(updatedSignupInfo),
            headers: {
                'Content-Type': 'application/json', // Specify the content type as JSON
            },
            });
      
            const response = await signupRequest.json();

            if(signupRequest.ok){
                const {access_token, refresh_token, user} = response

                if(access_token && refresh_token && user){
                    localStorage.setItem('access_token',access_token)
                    localStorage.setItem('refresh_token',refresh_token);
                    localStorage.setItem('userInfo',JSON.stringify(user))                    
                }

                // Call checkauthentication to dispatch the actions
                await checkAuthentication(dispatch)

                navigate('/home')
            }else if(response.username[0] == 'A user with that username already exists.'){
                setResponseDetail(prevInfo => ({...prevInfo, username: 'Username already exists'}))
            }

            console.log(response);
        } catch (error) {
            console.error('Error occurred during signup:', error);
            // Handle the error gracefully (e.g., show an error message to the user)
        }
        //dispatch(setLogoutLoading(false))
        setIsLoginLoading(false)
    };
      

  return (
    <div className="font-merriweather relative" >
      <header className="w-full z-50 py-[30px] px-[95px] flex justify-between shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] bg-white fixed top-0 " >
        <div className=" flex gap-[18px] items-center " >
            <img src={applogo} alt="Palbucks logo" className="w-[33.4px]" />
            <img src= {palbucks} alt="palbucks" className=" w-[138px] h-[24px] "  />
        </div>

        <div className="flex items-center gap-[35px] " >
            <Link to = '/signin' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                <span>Already have an account?</span>
            </Link>
            <Link to = '/signin' className="text-[#000000] text-lg font-bold tracking-[0.069px] py-[8px] px-[16px] bg-[#35FAA0] hover:bg-[#35EB98] leading-[22px] flex items-center rounded-[5px] "  >
                <span>Sign in</span>
            </Link>
        </div>

      </header>

        <div className ="w-[400px] h-[800px] absolute -z-10 -right-[0px] -top-[200px] ">
            <img src={bgradient} alt="" className="w-full" />            
        </div>
        
        <div className ="w-[400px] h-[200px] absolute -z-10 -left-[0px] bottom-[900px] ">
            <img src={bgradient3} alt="" className="w-full" />            
            {/* <img src={bgradient3} alt="" className="w-full relative -top-[0px] " /> */}
        </div>

        {/* <div className ="w-[600px] h-screen absolute -z-10 left-0 top-[380px] ">
            <img src={bgradient} alt="" className="w-full " />
            <img src={bgradient} alt="" className="w-full relative -top-[350px] " />
            <img src={bgradient} alt="" className="w-full relative -top-[1000px] " />
        </div> */}
    
        <main className="pt-[180px] pb-10 mt-[103px] " >
            
            <div className="bg-white w-[950px] mx-auto flex flex-col gap-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded-[10px] ">                
                <div className="py-[30px] pl-[50px] pr-[30px] ">
                    <h3 className="text-[35px] font-black leading-[39px] " >
                        Continue your signup process...
                    </h3>
                </div>
                <div className="flex flex-wrap gap-[50px] px-[50px] py-[47px] border-t-[6px] border-[#F9F9F9] items-center ">
                    <div className="flex flex-col items-start gap-5">
                        <label 
                            htmlFor="first_name"
                            className="text-[20px] font-bold "
                            >
                            First name
                        </label>
                        <input 
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            placeholder="Enter your first name"
                            onChange={handleInputChange}
                            className={` w-[390px] h-[60px] px-[22px] rounded border-[1.5px] border-black bg-[#F9F9F9] outline-none
                                focus:border-[#37BCF7] focus:border-[2px] focus:caret-[#37BCF7] text-lg   `}
                        />
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <label 
                            htmlFor="last_name"
                            className="text-[20px] font-bold "
                            >
                            Last name
                        </label>
                        <input 
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            placeholder="Enter your last name"
                            onChange={handleInputChange}
                            className={` w-[390px] h-[60px] px-[22px] rounded border-[1.5px] border-black bg-[#F9F9F9] outline-none
                                focus:border-[#37BCF7] focus:border-[2px] focus:caret-[#37BCF7] text-lg   `}
                        />
                    </div>

                    <div className="flex flex-col items-start gap-5">
                        <label 
                            htmlFor="dateOfBirth"
                            className="text-[20px] font-bold "
                            >
                            What is your date of birth?
                        </label>
                        <input                             
                            type = "date"
                            name="dateOfBirth" 
                            id="dateOfBirth"
                            onChange={handleInputChange}                    
                            className={` w-[390px] h-[60px] px-[22px] rounded border-[1.5px] border-black bg-[#F9F9F9] outline-none
                                focus:border-[#37BCF7] focus:border-[2px] focus:text-[#37BCF7] text-lg   `}
                        />
                    </div>

                    <div className="flex flex-col items-start gap-5">
                        <label 
                            htmlFor="userName"
                            className="text-[20px] font-bold "
                            >
                            What should we call you?
                        </label>
                        <div className="">
                            <div className="relative mb-[10px]">
                                <input
                                    type = "text"
                                    name="username"
                                    id="username"
                                    placeholder="Enter a username"
                                    onChange={handleInputChange}
                                    className={` w-[390px] h-[60px] px-[22px] rounded border-[1.5px] bg-[#F9F9F9] outline-none focus:border-[2px] text-lg
                                        ${responseDetail.username == 'Username already exists' ?
                                        'border-[#FD6150] border-[3px] focus:border-[#FD6150] focus:caret-[#FD6150] ' :
                                        'border-black focus:border-[#37BCF7]' }
                                     `}
                                />
                                {
                                    (
                                        <img src= { responseDetail.username == 'Username already exists' ? checker2 : checker}
                                            alt="checker"
                                            className="w-[13px] absolute top-[50%] right-4 transform -translate-y-1/2 cursor-pointer"
                                        />
                                    )
                                }
                            </div>
                            {
                                responseDetail.username == 'Username already exists' ? (
                                    <p className="text-[#FD6150] text-lg font-merriweather">
                                        {responseDetail.username}
                                    </p>
                                ) : null
                            }
                        </div>
                    </div>

                </div>
            </div>
            
            <button 
                className={`xl:min-w-[288px] mt-[75px] mb-[29px] px-[50px] hover:px-[65px] transition-all duration-500 py-[15.1px]                 
                font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto flex items-center justify-center ]                                 
                `}
                 onClick  = {finishSignup}                 
                >
                <div className={` ${isLoginLoading ? 'block' : 'hidden' } `}>
                    <Loadingspinner width = '28px' height = '28px' />
                </div>
                <span className={` ${isLoginLoading ? 'hidden' : 'block' } `}>
                    Finish signup
                </span>
            </button>            

        </main>

    </div>
  )
}

export default Completesignup
