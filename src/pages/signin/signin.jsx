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
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { baseUrl, checkAuthentication } from "../../auth/checkauthentication"
import { setLogoutLoading } from "../../actions/actions"
import emailPasswordValidation from "../../auth/inputValidation"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"
import { useMediaQuery } from "react-responsive"

const Signin = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [signinInfo, setSigninInfo] = useState({})  
    
    const [isLoginLoading, setIsLoginLoading] = useState(false)
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
        setSigninInfo(prevInfo => ({...prevInfo, [e.target.name]:e.target.value}))
    }
    const handlePasswordChange = (e) => {
        setSigninInfo(prevInfo => ({...prevInfo, password: e.target.value}))
    }


    const handleSignin = async (e) => {        
        //dispatch(setLogoutLoading(true))
        setIsLoginLoading(true)
        e.preventDefault()        
        await emailPasswordValidation(setValidateInput,signinInfo.email,signinInfo.password,true)
        .then(async validationMessage => {
            console.log(validationMessage)
            if(validationMessage.email == 'correct'){                
                try {
            
                    console.log(signinInfo)
              
                    const signinRequest = await fetch(`${baseUrl}/users/api/login/`, {
                    method: 'POST',
                    body: JSON.stringify(signinInfo),
                    headers: {
                        'Content-Type': 'application/json', // Specify the content type as JSON
                    },
                    });
              
                    const response = await signinRequest.json();
                    console.log(response)
                    if(signinRequest.ok){
                        const {access_token, refresh_token, user} =  response
        
                        if(access_token && refresh_token && user){
                            localStorage.setItem('access_token',access_token)
                            localStorage.setItem('refresh_token',refresh_token);
                            localStorage.setItem('userInfo', JSON.stringify(user))  
                            console.log(user)
                        }
        
                        // Call checkauthentication to dispatch the actions
                        await checkAuthentication(dispatch)                
                        dispatch(setLogoutLoading(false))
        
                        navigate('/home', {replace:true})
                    }else if(response.non_field_errors[0] == 'Unable to log in with provided credentials.'){
                        setValidateInput(prevState => ({
                            ...prevState,                             
                            password: 'Password or email is incorrect'
                        }))
                    }else{
                        console.log(response)
                    }
                    
                    console.log(response);
                } catch (error) {
                    console.error('Error occurred during signin:', error);
                    // Handle the error gracefully (e.g., show an error message to the user)
                }
            }            
        })
        

        //dispatch(setLogoutLoading(false))
        setIsLoginLoading(false)
    };

  return (
    <div className="font-arial relative" >
        <header className="w-full z-50 py-4 md:py-6 lg:py-[30px] px-5 md:px-[60px] lg:px-[95px] flex justify-between shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] bg-white fixed top-0 " >
            <div className=" flex gap-[10px] items-center cursor-pointer " onClick={() => {
                navigate('/')      
            }} >
                <img src={applogo} alt="Palbucks logo" className="w-5 md:w-[33.4px]" />
                <img src= {palbucks} alt="palbucks" className="w-[77px] md:w-[138px] h-[14px] md:h-[24px] "  />
            </div>

            <div className="flex items-center gap-[35px]" >
                <Link to = '/signin' className="hidden md:flex items-center text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] hover:rounded-[5px] "  >
                    <span>Don’t have an account yet?</span>
                </Link>
                <Link to = '/signup' className="text-[#000000] text-lg font-bold tracking-[0.069px] py-[6px] md:py-[8px] px-3 md:px-4 bg-[#35FAA0] hover:bg-[#35EB98] leading-[22px] flex items-center rounded-[5px] "  >
                    <span>Sign up</span>
                </Link>
            </div>

        </header>

        <div className ="w-24 md:w-[400px] md:h-[800px] absolute -z-10 -right-[0px] top-[100px] md:-top-[200px] ">
            <img src={bgradient} alt="" className="w-full" />            
        </div>
        
        <div className ="w-24 md:w-[200px] lg:w-[400px] md:h-[200px] absolute -z-10 -left-[0px] top-[500px] md:bottom-0 lg:top-0 ">
            <img src={bgradient3} alt="" className="w-full" />                        
        </div>

        <main className="pt-[25px] lg:pt-[70px] md:pb-10 mt-[70px] md:mt-[90px] lg:mt-[103px] " >
            <h2 className="mb-9 md:mb-[59px] font-merriweather text-center text-2xl md:text-[48px] font-black md:leading-[73px] tracking-[0.069px] " >
                Sign in
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
                    <PasswordInput ignorePasswordVerifier = {true} onChange = {handlePasswordChange} validateInput = {validateInput} setValidateInput = {setValidateInput} />
                    <button 
                        className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[70px] px-5 hover:px-[56px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center  " 
                        onClick={handleSignin}
                        >
                        <div className={` ${isLoginLoading ? 'block' : 'hidden' } `}>
                            <Loadingspinner width = '28px' height = '28px' />
                        </div>
                        <span className={` ${isLoginLoading ? 'hidden' : 'block' } `}>
                            Sign in with email
                        </span>
                    </button>
                </div>
                <p className="mb-[32px] text-center text-base md:text-2xl" >
                    or signin using 
                </p>
                <div className="flex flex-col gap-[18px] md:gap-[36px] items-center mb-[37px] ">
                    <button 
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-4 md:px-7 flex items-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={googleicon} alt="Google icon"  className="w-7 md:w-[50px] " />
                        <span className="text-lg md:text-3xl font-bold mx-auto " >
                            Sign in with Google
                        </span>
                    </button>
                    <button 
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-4 md:px-7 flex items-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={facebookicon} alt="Facebook icon"  className="w-7 md:w-[50px] " />
                        <span className="text-lg md:text-3xl font-bold mx-auto " >
                            Sign in with Facebook
                        </span>
                    </button>
                    <button 
                        className= {`w-full md:w-[600px] md:h-[80px] py-[10px] md:py-5 px-4 md:px-7 flex items-center border-[1.5px] md:border-[3px] border-black
                            rounded md:rounded-[8.5px] `} 
                    >
                        <img src={twittericon} alt="Twitter icon"  className="w-7 md:w-[50px] " />
                        <span className="text-lg md:text-3xl font-bold mx-auto " >
                            Sign in with Twitter
                        </span>
                    </button>

                </div>
                <p className="mx-auto text-base md:text-lg text-center tracking-[0.552px] " >
                    <Link to={'/termsofuse'} className = 'font-bold' >Terms of Service </Link> and <Link to={'/privacypolicy'} className = 'font-bold' >Privacy Policy</Link>
                </p>
            </form>

        </main>

    </div>
  )
}

export default Signin
