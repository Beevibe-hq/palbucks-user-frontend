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
import { setSignupInfo } from "../../actions/actions"

const Signup = () => {

    const signupInfo = useSelector((state) => state.signupInfo)
    
    const [accountInfo,setAccountInfo] = useState({})

    const handleInputChange = (e) => {
        setAccountInfo( prevState => ({...prevState, [e.target.name]: e.target.value }) )
    }

    const handleSignup = (e) => {
        e.preventDefault()    
        navigate('/otppage')
        
        const updatedSignupInfo = {...signupInfo, ...accountInfo}
        dispatch(setSignupInfo(updatedSignupInfo))
    }

    /* useEffect(()=>{
        console.log(signupInfo)
    }) */

    /* useEffect(()=>{
        console.log(accountInfo)
    },[accountInfo]) */

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
    
      <main className="pt-[70px] pb-10 mt-[103px] " >
        <h2 className=" mb-[59px] text-center text-[48px] font-black leading-[73px] tracking-[0.069px] " >
            Sign up
        </h2>

        <form action="" className=" block mx-auto w-fit  " >
            <div className="mb-[56px] flex flex-col ">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email"
                    onChange={handleInputChange}
                    className={`mb-[43px] w-[700px] h-[82px] px-[29px] py-[10px] rounded-[6px] bg-[#F9F9F9] border-[3px] border-[#000000]
                    outline-[3px] outline-[#37BCF7] focus:border-[#37BCF7] focus:text-[#37BCF7] text-[#888888] text-lg`}
                />                
                <PasswordInput onChange={handleInputChange} accountInfo={accountInfo} setAccountInfo={setAccountInfo} />

                <button 
                    className="mt-[70px] px-[36px] hover:px-[56px] transition-all duration-500 py-[20.1px] font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto block " 
                    onClick={ handleSignup }
                    
                >
                    Sign up with email
                </button>
            </div>
            <p className=" mb-[32px] text-center text-2xl " > or signup using </p>
            <div className="flex flex-col gap-[36px] items-center mb-[37px] ">
                <button 
                    className= {` w-[600px] h-[80px] py-5 px-7 flex gap-7 items-center justify-center border-[3px] border-black
                        rounded-[8.5px] `} 
                >
                    <img src={googleicon} alt="Google icon"  className=" w-[50px] " />
                    <span className="text-3xl font-bold  " >
                        Sign up with Google
                    </span>
                </button>
                <button 
                    className= {` w-[600px] h-[80px] py-5 px-7 flex gap-7 items-center justify-center border-[3px] border-black
                        rounded-[8.5px] `} 
                >
                    <img src={facebookicon} alt="Facebook icon"  className=" w-[50px] " />
                    <span className="text-3xl font-bold  " >
                        Sign up with Facebook
                    </span>
                </button>
                <button 
                    className= {` w-[600px] h-[80px] py-5 px-7 flex gap-7 items-center justify-center border-[3px] border-black
                        rounded-[8.5px] `} 
                >
                    <img src={twittericon} alt="Twitter icon"  className=" w-[50px] " />
                    <span className="text-3xl font-bold  " >
                        Sign up with Twitter
                    </span>
                </button>

            </div>
            <p className="w-[580px] mx-auto text-lg text-center tracking-[0.552px] " >
                By signing up, you agree to our <Link to={'/termsofuse'} className = 'font-bold' >Terms of Service </Link> and <Link to={'/privacypolicy'} className = 'font-bold' >Privacy Policy</Link>
            </p>
        </form>

      </main>

    </div>
  )
}

export default Signup
