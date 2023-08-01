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
import { checkAuthentication } from "../../auth/checkauthentication"
import { setLogoutLoading } from "../../actions/actions"
import emailPasswordValidation from "../../auth/inputValidation"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"

const Signin = () => {

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
        await emailPasswordValidation(setValidateInput,signinInfo.email,signinInfo.password)
        .then(async validationMessage => {
            if(validationMessage.email == 'correct' && validationMessage.password == 'Strong password' ){
                console.log(validationMessage)
                try {
            
                    console.log(signinInfo)
              
                    const signinRequest = await fetch('https://palbucks-api.onrender.com/users/api/login/', {
                    method: 'POST',
                    body: JSON.stringify(signinInfo),
                    headers: {
                        'Content-Type': 'application/json', // Specify the content type as JSON
                    },
                    });
              
                    const response = await signinRequest.json();
        
                    if(signinRequest.ok){
                        const {access_token, refresh_token, user} =  response
        
                        if(access_token && refresh_token && user){
                            localStorage.setItem('access_token',access_token)
                            localStorage.setItem('refresh_token',refresh_token);
                            localStorage.setItem('userInfo',JSON.stringify(user))                    
                        }
        
                        // Call checkauthentication to dispatch the actions
                        await checkAuthentication(dispatch)                
                        dispatch(setLogoutLoading(false))
        
                        navigate('/home')
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
    <div className="font-merriweather relative" >
      <header className="w-full z-50 py-[30px] px-[95px] flex justify-between shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] bg-white fixed top-0 " >
        <div className=" flex gap-[18px] items-center " >
            <img src={applogo} alt="Palbucks logo" className="w-[33.4px]" />
            <img src= {palbucks} alt="palbucks" className=" w-[138px] h-[24px] "  />
        </div>

        <div className="flex items-center gap-[35px] " >
            <Link to = '/signin' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                <span>Don’t have an account yet?</span>
            </Link>
            <Link to = '/signup' className="text-[#000000] text-lg font-bold tracking-[0.069px] py-[8px] px-[16px] bg-[#35FAA0] hover:bg-[#35EB98] leading-[22px] flex items-center rounded-[5px] "  >
                <span>Sign up</span>
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

      <main className="pt-[70px] pb-10 mt-[103px] " >
        <h2 className=" mb-[59px] text-center text-[48px] font-black leading-[73px] tracking-[0.069px] " >
            Sign in
        </h2>

        <form action="" className=" block mx-auto w-fit  " >
            <div className="mb-[56px] flex flex-col ">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email"                    
                    required
                    onChange={handleInputChange}
                    className={`mb-[43px] w-[700px] h-[82px] px-[29px] py-[10px] rounded-[6px] text-[#888888] text-lg bg-[#F9F9F9] border-[3px] 
                    ${validateInput.email && validateInput.email !== 'correct' ? 
                    'border-[#FD6150] outline-[#FD6150] focus:border-[#FD6150] focus:caret-[#FD6150] ' : 
                    'border-black outline-[#37BCF7] focus:border-[#37BCF7]' } 
                    outline-[3px] focus:caret-[#37BCF7] `}
                /> 
                {
                    validateInput.email && validateInput.email !== 'correct' ? (
                        <p className="-mt-[23px] mb-[43px] text-[#FD6150] text-2xl font-merriweather">
                            {validateInput.email}
                        </p>
                    ) : null
                }
                <PasswordInput onChange = {handlePasswordChange} validateInput = {validateInput} setValidateInput = {setValidateInput} />
                <button 
                    className="min-w-[228px] mt-[70px] px-[36px] hover:px-[56px] transition-all duration-500 py-[20.1px] 
                    font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto flex items-center justify-center  " 
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
            <p className=" mb-[32px] text-center text-2xl " > or signin using </p>
            <div className="flex flex-col gap-[36px] items-center mb-[37px] ">
                <button 
                    className= {` w-[600px] h-[80px] py-5 px-7 flex gap-7 items-center justify-center border-[3px] border-black
                        rounded-[8.5px] `} 
                >
                    <img src={googleicon} alt="Google icon"  className=" w-[50px] " />
                    <span className="text-3xl font-bold  " >
                        Sign in with Google
                    </span>
                </button>
                <button 
                    className= {` w-[600px] h-[80px] py-5 px-7 flex gap-7 items-center justify-center border-[3px] border-black
                        rounded-[8.5px] `} 
                >
                    <img src={facebookicon} alt="Facebook icon"  className=" w-[50px] " />
                    <span className="text-3xl font-bold  " >
                        Sign in with Facebook
                    </span>
                </button>
                <button 
                    className= {` w-[600px] h-[80px] py-5 px-7 flex gap-7 items-center justify-center border-[3px] border-black
                        rounded-[8.5px] `} 
                >
                    <img src={twittericon} alt="Twitter icon"  className=" w-[50px] " />
                    <span className="text-3xl font-bold  " >
                        Sign in with Twitter
                    </span>
                </button>

            </div>
            <p className="w-[580px] mx-auto text-lg text-center tracking-[0.552px] " >
                <Link to={'/termsofuse'} className = 'font-bold' >Terms of Service </Link> and <Link to={'/privacypolicy'} className = 'font-bold' >Privacy Policy</Link>
            </p>
        </form>

      </main>

    </div>
  )
}

export default Signin
