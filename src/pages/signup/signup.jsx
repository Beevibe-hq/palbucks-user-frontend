import applogo from "../../images/appLogo.svg"
import palbucks from "../../images/palbucks2.svg"
import googleicon from "../../images/authpages/googleicon.svg"
import twittericon from "../../images/twittericon.svg"
import facebookicon from "../../images/authpages/facebookicon.svg"
import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"


import { Link, useNavigate } from "react-router-dom"
import PasswordInput from "../../components/password/password"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addOtp, setSignupInfo } from "../../actions/actions"
import emailPasswordValidation from "../../auth/inputValidation"
import { baseUrl } from "../../auth/checkauthentication"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"

const Signup = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const signupInfo = useSelector((state) => state.signupInfo)
    const verified = useSelector((state) => state.otpVerified)
    const [accountInfo,setAccountInfo] = useState({
        email:'',
        password:''
    })
    
    const [validateInput, setValidateInput] = useState({
        email: '',
        password: '',
        passwordtest: {
            testStage:'preRun' ,
            upperCase: false, 
            lowerCase: false, 
            number: false, 
            specialCharacter: false, 
            length: 0 
        }
    });

    const handleInputChange = (e) => {
        setAccountInfo( prevState => ({...prevState, [e.target.name]: e.target.value }) )
    }

    const handleSignup = async (e) => {
        setIsLoading(true)
        //console.log(verified)
        e.preventDefault()
        console.log(isLoading)
        //alert(isLoading)
        // Input validations
        await emailPasswordValidation(setValidateInput,accountInfo.email,accountInfo.password)
        .then(async(validationMessage)=> {            
            if(validationMessage.email == 'correct' && validationMessage.password == 'Strong password' ){                
                console.log(validationMessage)                
                

                // Make an api call to send the email and password to the backend
                const registerUser = async () => {
                    const response  = await fetch(`${baseUrl}/users/api/register/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: accountInfo.email,
                            password: accountInfo.password
                        })
                    })
                    const data = await response.json()
                    return data
                }
                await registerUser()
                .then(async(data) => {
                    console.log(data)
                    if(data.status == true){
                        
                        console.log(data.otp)
                        
                        // Dispatch the sign up info to redux store                        
                        const updatedSignupInfo = {email: accountInfo.email, password: accountInfo.password, otp: data.otp}
                        dispatch(setSignupInfo(updatedSignupInfo))
                        dispatch(addOtp(data.otp))                        

                        // Navigate to otp page
                        navigate(`/otppage`)        
                    }
                    else{
                        // Display error message                        
                        setValidateInput(prevState => ({...prevState, email: data.email[0]}))
                    }
                })
                .catch((err) => {
                    console.log(err)
                })         
            }
        })

        setIsLoading(false)

        /* Note: Include an api call above to check if the email has been registered before(if it has: set validateInput.email to Email is already registered),
         and to initiate the otp getting process */
    }

    /* useEffect(()=>{
        console.log(validateInput.passwordtest.testStage)
    },[validateInput.passwordtest.testStage]) */
        

  return (
    <div className="font-merriweather relative" >
        <header className="w-full z-50 py-4 md:py-6 lg:py-[30px] px-5 md:px-[60px] lg:px-[95px] flex justify-between shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] bg-white fixed top-0 " >
            <div className=" flex gap-[10px] md:gap-[18px] items-center " >
                <img src={applogo} alt="Palbucks logo" className="w-5 md:w-[33.4px]" />
                <img src= {palbucks} alt="palbucks" className="w-[77px] md:w-[138px] h-[14px] md:h-[24px] "  />
            </div>

            <div className="flex items-center gap-[35px] " >
                <Link to = '/signin' className="hidden md:flex items-center text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] hover:rounded-[5px] "  >
                    <span>Already have an account?</span>
                </Link>
                <Link to = '/signin' className="text-[#000000] text-lg font-bold tracking-[0.069px] py-[6px] md:py-[8px] px-3 md:px-4 bg-[#35FAA0] hover:bg-[#35EB98] leading-[22px] flex items-center rounded-[5px] "  >
                    <span>Sign in</span>
                </Link>
            </div>

        </header>

        <div className ="w-24 md:w-[400px] md:h-[800px] absolute -z-10 -right-[0px] top-[100px] md:-top-[200px] ">
            <img src={bgradient} alt="" className="w-full" />            
        </div>
        
        <div className ="w-24 md:w-[400px] md:h-[200px] absolute -z-10 -left-[0px] bottom-0 md:bottom-[900px] ">
            <img src={bgradient3} alt="" className="w-full" />            
            {/* <img src={bgradient3} alt="" className="w-full relative -top-[0px] " /> */}
        </div>

        {/* <div className ="w-[600px] h-screen absolute -z-10 left-0 top-[380px] ">
            <img src={bgradient} alt="" className="w-full " />
            <img src={bgradient} alt="" className="w-full relative -top-[350px] " />
            <img src={bgradient} alt="" className="w-full relative -top-[1000px] " />
        </div> */}
    
        <main className="pt-[25px] lg:pt-[70px] pb-5 md:pb-10 mt-[70px] md:mt-[90px] lg:mt-[103px] " >
            <h2 className="mb-9 md:mb-[59px] text-center text-2xl md:text-[48px] font-black md:leading-[73px] tracking-[0.069px] " >
                Sign up
            </h2>

            <form action="" className=" block mx-auto w-fit max-w-[270px] phones:max-w-[300px] md:max-w-none  " >
                <div className="mb-10 md:mb-[56px] flex flex-col ">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"                    
                        required
                        onChange={handleInputChange}
                        className={`mb-5 md:mb-[43px] w-full md:w-[700px] md:h-[82px] px-3 md:px-[29px] py-[10px] rounded-[6px] text-[#888888] text-base md:text-lg bg-[#F9F9F9] border-2 md:border-[3px] 
                        ${validateInput.email && validateInput.email !== 'correct' ? 
                        'border-[#FD6150] outline-[#FD6150] focus:border-[#FD6150] focus:caret-[#FD6150] ' : 
                        'border-black outline-[#37BCF7] focus:border-[#37BCF7]' } 
                        outline-[3px] focus:caret-[#37BCF7] `}
                    /> 
                    {
                        validateInput.email && validateInput.email !== 'correct' ? (
                            <p className="-mt-3 md:-mt-[23px] mb-5 md:mb-[43px] text-[#FD6150] text-lg md:text-2xl font-merriweather">
                                {validateInput.email}
                            </p>
                        ) : null
                    }

                                
                    <PasswordInput onChange={handleInputChange} accountInfo={accountInfo} setAccountInfo={setAccountInfo} setValidateInput = {setValidateInput} validateInput = {validateInput} />

                    <button 
                        className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[70px] px-5 hover:px-[56px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center  " 
                        onClick={ handleSignup }
                        
                    >
                        <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                            <Loadingspinner width = '28px' height = '28px' />
                        </div>
                        <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                            Sign up with email
                        </span>                    
                    </button>
                </div>
                <p className="mb-[32px] text-center text-base md:text-2xl" >
                    or signup using 
                </p>
                <div className="flex flex-col gap-[18px] md:gap-[36px] items-center mb-[37px] ">
                    <button 
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-1 md:px-7 flex gap-2 md:gap-7 items-center justify-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={googleicon} alt="Google icon"  className="w-7 md:w-[50px] " />
                        <span className="text-xl md:text-3xl font-bold  " >
                            Sign up with Google
                        </span>
                    </button>
                    <button 
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-1 md:px-7 flex gap-2 md:gap-7 items-center justify-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={facebookicon} alt="Facebook icon"  className="w-7 md:w-[50px] " />
                        <span className="text-xl md:text-3xl font-bold  " >
                            Sign up with Facebook
                        </span>
                    </button>
                    <button 
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-1 md:px-7 flex gap-2 md:gap-7 items-center justify-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={twittericon} alt="Twitter icon"  className="w-7 md:w-[50px] " />
                        <span className="text-xl md:text-3xl font-bold  " >
                            Sign up with Twitter
                        </span>
                    </button>

                </div>
                <p className="md:w-[580px] mx-auto text-base md:text-lg text-center tracking-[0.552px] " >
                    By signing up, you agree to our <Link to={'/termsofuse'} className = 'font-bold' >Terms of Service </Link> and <Link to={'/privacypolicy'} className = 'font-bold' >Privacy Policy</Link>
                </p>
            </form>

        </main>

    </div>
  )
}

export default Signup
