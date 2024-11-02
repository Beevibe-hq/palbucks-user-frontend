import applogo from "../../images/appLogo.svg"
import palbucks from "../../images/palbucks2.svg"
import googleicon from "../../images/authpages/googleicon.svg"
import twittericon from "../../images/twittericon.svg"
import facebookicon from "../../images/authpages/facebookicon.svg"
import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"


import { Link, useLocation, useNavigate } from "react-router-dom"
import PasswordInput from "../../components/password/password"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addOtp, setOtpVerified, setSignupInfo } from "../../actions/actions"
import emailPasswordValidation from "../../auth/inputValidation"
import { baseUrl } from "../../auth/checkauthentication"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"
import SignUpHeader from "../../components/signUpHeader/signUpHeader"

const Signup = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    //Check if the 'from' parameter is present in the URL showing it's coming from anonymouscrowdfund
    const params = new URLSearchParams(location.search);
    const fromFeature = params.get('from') === 'anonymouscrowdfund';

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
                        
                        dispatch(setOtpVerified(false)) // This isnt needed, I'm only setting it here cos the reducer is currently persisting the value so as to prevent falsely showing verified otp on the otp page until I remove the persisting of the value in the reducer
                        
                        const {access_token, refresh_token} = data
                        if(access_token && refresh_token){
                            localStorage.setItem('access_token',access_token)
                            localStorage.setItem('refresh_token',refresh_token);
                        }

                        // Navigate to otp page
                        if (fromFeature) {
                            navigate(`/otppage?from=anonymouscrowdfund`)                            
                        } else {
                            navigate(`/otppage`)    
                        }                        
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
    <div className="font-arial relative" >
        <SignUpHeader />

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
              <h2 className="mb-9 md:mb-[59px] text-center text-2xl md:text-[48px] font-black md:leading-[73px] tracking-[0.069px]
                font-merriweather" >
                { fromFeature ? 'Create an account to continue' : 'Sign up'}
            </h2>

            <form action="" className=" block mx-auto w-fit max-w-[270px] phones:max-w-[300px] md:max-w-none font-arial  " >
                <div className="mb-10 md:mb-[56px] flex flex-col ">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email"                    
                        required
                        onChange={handleInputChange}
                        className={`mb-5 md:mb-[43px] w-full md:w-[700px] md:h-[82px] px-3 md:px-[29px] py-[10px] rounded-[6px] placeholder-[#888888] text-base md:text-xl bg-[#F9F9F9] border-2 md:border-[3px] 
                        ${validateInput.email && validateInput.email !== 'correct' ? 
                        'border-[#FD6150] outline-[#FD6150] focus:border-[#FD6150] focus:caret-[#FD6150] ' : 
                        'border-black outline-[#37BCF7] focus:border-[#37BCF7]' } 
                        outline-[3px] focus:caret-[#37BCF7] `}
                    /> 
                    {
                        validateInput.email && validateInput.email !== 'correct' ? (
                            <p className="-mt-3 md:-mt-[23px] mb-5 md:mb-[43px] text-[#FD6150] text-sm md:text-lg font-merriweather">
                                {validateInput.email}
                            </p>
                        ) : null
                    }

                                
                    <PasswordInput onChange={handleInputChange} accountInfo={accountInfo} setAccountInfo={setAccountInfo} setValidateInput = {setValidateInput} validateInput = {validateInput} />

                    <button 
                        className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[70px] px-5 hover:px-[56px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center font-arial  " 
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
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-4 md:px-7 flex items-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={googleicon} alt="Google icon"  className="w-7 md:w-[50px] " />
                        <span className="text-lg md:text-3xl font-bold mx-auto " >
                            Sign up with Google
                        </span>
                    </button>
                    <button 
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-4 md:px-7 flex items-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={facebookicon} alt="Facebook icon"  className="w-7 md:w-[50px] " />
                        <span className="text-lg md:text-3xl font-bold  mx-auto " >
                            Sign up with Facebook
                        </span>
                    </button>
                    <button 
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-4 md:px-7 flex items-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={twittericon} alt="Twitter icon"  className="w-7 md:w-[50px] " />
                        <span className="text-lg md:text-3xl font-bold mx-auto  " >
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
