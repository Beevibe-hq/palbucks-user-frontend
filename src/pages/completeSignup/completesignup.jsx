import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"

import checker from "../../images/authpages/checker.svg"
import checker2 from "../../images/authpages/checker2.svg"
import checker3 from "../../images/authpages/checker3.svg"



import { useNavigate } from "react-router-dom"

import { useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { baseUrl, checkAuthentication } from "../../auth/checkauthentication"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"
import SignUpHeader from "../../components/signUpHeader/signUpHeader"

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
        email:signupInfo.email,        
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
      
            const signupRequest = await fetch(`${baseUrl}/users/api/complete-signup/`, {
            method: 'POST',
            body: JSON.stringify(updatedSignupInfo),
            headers: {
                'Content-Type': 'application/json', // Specify the content type as JSON
            },
            });
      
            const response = await signupRequest.json();
            console.log(response)
            //console.log('made request')
            if(signupRequest.ok){
                const {access_token, refresh_token, user} = response

                if(access_token && refresh_token && user){
                    localStorage.setItem('access_token',access_token)
                    localStorage.setItem('refresh_token',refresh_token);
                    localStorage.setItem('userInfo',JSON.stringify(user))                    
                }

                console.log('request worked')

                // Call checkauthentication to dispatch the actions
                await checkAuthentication(dispatch)

                navigate('/home')
            }else if(response.username && response.username[0] == 'A user with that username already exists.'){
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

     // Calculate the max date (18 years ago)
     const maxDate = new Date();
     maxDate.setFullYear(maxDate.getFullYear() - 18);
     const maxDateStr = maxDate.toISOString().split("T")[0];
      

  return (
    <div className="font-arial relative" >
        <SignUpHeader />
          
        <div className ="w-24 md:w-[400px] md:h-[800px] absolute -z-10 -right-[0px] top-[100px] md:-top-[200px] ">
            <img src={bgradient} alt="" className="w-full" />            
        </div>
        
        <div className ="w-24 md:w-[200px] lg:w-[400px] md:h-[200px] absolute -z-10 -left-[10px] md:-left-0 top-[300px] md:top-[600px] md:bottom-0 lg:top-0 rotate-[12deg] md:rotate-0 ">
            <img src={bgradient3} alt="" className="w-full" />                        
        </div>
        
    
        <main className="pt-5 md:pt-[180px] mt-[103px] px-3 " >
            
            <div className="bg-white w-full phones:w-[98%] md:w-[75%] lg:w-[950px] mx-auto flex flex-col gap-[2.5px] md:gap-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded md:rounded-[10px] ">                
                <div className="py-4 md:py-[30px] px-8 md:pl-[50px] md:pr-[30px] ">
                    <h3 className="text-lg md:text-[30px] font-black md:leading-[39px] " >
                        Continue your signup process...
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-[50px] px-6 md:px-[50px] py-5 md:py-[47px] border-t-[3px] md:border-t-[6px] border-[#F9F9F9] md:items-center ">
                    <div className="flex flex-col items-start gap-3 md:gap-5">
                        <label
                            htmlFor="first_name"
                            className="text-base md:text-xl font-bold "
                            >
                            First name
                        </label>
                        <input 
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            placeholder="Enter your first name"
                            onChange={handleInputChange}
                            className={`w-full md:w-[390px] h-[38px] md:h-[60px] px-3 md:px-[22px] rounded-sm md:rounded border-[1.5px] border-black bg-[#F9F9F9] outline-none
                                focus:border-[#37BCF7] focus:border-[2px] md:focus:border-[2px] focus:caret-[#37BCF7] text-sm md:text-lg   `}
                        />
                    </div>
                    <div className="flex flex-col items-start gap-3 md:gap-5">
                        <label 
                            htmlFor="last_name"
                            className="text-base md:text-xl font-bold "
                            >
                            Last name
                        </label>
                        <input 
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            placeholder="Enter your last name"
                            onChange={handleInputChange}
                            className={`w-full md:w-[390px] h-[38px] md:h-[60px] px-3 md:px-[22px] rounded-sm md:rounded border-[1.5px] border-black bg-[#F9F9F9] outline-none
                                focus:border-[#37BCF7] focus:border-[2px] md:focus:border-[2px] focus:caret-[#37BCF7] text-sm md:text-lg   `}
                        />
                    </div>

                    <div className="flex flex-col items-start gap-3 md:gap-5">
                        <label 
                            htmlFor="dateOfBirth"
                            className="text-base md:text-xl font-bold "
                            >
                            What is your date of birth?
                        </label>
                        <input                             
                            type = "date"
                            name="dateOfBirth" 
                            id="dateOfBirth"
                            onChange={handleInputChange}                    
                            className={`w-full md:w-[390px] h-[38px] md:h-[60px] px-3 md:px-[22px] rounded-sm md:rounded border-[1.5px] border-black bg-[#F9F9F9] outline-none
                                focus:border-[#37BCF7] focus:border-[2px] md:focus:border-[2px] focus:caret-[#37BCF7] text-sm md:text-lg   `}
                            max={maxDateStr} // Set the max attribute to the calculated max date
                        />
                    </div>

                    <div className="flex flex-col items-start gap-3 md:gap-5">
                        <label 
                            htmlFor="userName"
                            className="text-base md:text-xl font-bold "
                            >
                            What should we call you?
                        </label>
                        <div className="w-full">
                            <div className="relative mb-[10px]">
                                <input
                                    type = "text"
                                    name="username"
                                    id="username"
                                    placeholder="Enter a username"
                                    onChange={handleInputChange}
                                    className={`w-full md:w-[390px] h-[38px] md:h-[60px] px-3 md:px-[22px] rounded-sm md:rounded border-[1.5px] bg-[#F9F9F9] outline-none focus:border-[1.5px] md:focus:border-[2px] text-sm md:text-lg
                                        ${responseDetail.username == 'Username already exists' ?
                                        'border-[#FD6150] border-2 md:border-[3px] focus:border-[#FD6150] focus:caret-[#FD6150] ' :
                                        'border-black focus:border-[#37BCF7]' }
                                     `}
                                />
                                {
                                    (
                                        <img src= { responseDetail.username == 'Username already exists' ? checker2 : checker}
                                            alt="checker"
                                            className="w-[9px] md:w-[13px] absolute top-[50%] right-3 md:right-4 transform -translate-y-1/2 cursor-pointer"
                                        />
                                    )
                                }
                            </div>
                            {
                                responseDetail.username == 'Username already exists' ? (
                                    <p className="text-[#FD6150] text-sm md:text-lg font-merriweather">
                                        {responseDetail.username}
                                    </p>
                                ) : null
                            }
                        </div>
                    </div>

                </div>
            </div>
            
            <button 
                /* className={`xl:min-w-[288px] min-w-[228px] mt-[75px] mb-[29px] px-[50px] hover:px-[65px] transition-all duration-500 py-[15.1px]                 
                font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto flex items-center justify-center ]                                 
                `} */
                className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[75px] mb-8 px-[50px] hover:px-[65px] py-[10px] md:py-[20.1px] transition-all duration-500 
                    font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center  " 
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
