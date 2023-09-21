import applogo from "../../images/appLogo.svg"
import palbucks from "../../images/palbucks2.svg"
import googleicon from "../../images/authpages/googleicon.svg"
import twittericon from "../../images/twittericon.svg"
import facebookicon from "../../images/authpages/facebookicon.svg"
import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"
import backarrow from "../../images/backarrow.svg"
import verifiedicon from "../../images/authpages/verify.svg"

import { Link, useNavigate } from "react-router-dom"
import PasswordInput from "../../components/password/password"
//import OtpInput from "../../components/otpinput/otpinput"
import OtpInput from 'react-otp-input';
import { useEffect, useState } from "react"
import { baseUrl } from "../../auth/checkauthentication"
import { useSelector, useDispatch } from "react-redux"
import { setOtpVerified } from "../../actions/actions"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"
import { useMediaQuery } from "react-responsive"
import SignUpHeader from "../../components/signUpHeader/signUpHeader"

const Otppage = () => {

    const signupInfo = useSelector((state) => state.signupInfo)
    
    const navigate = useNavigate()
    const [otp, setOtp] = useState()
    let verified = useSelector((state) => state.otpVerified)
    const dispatch = useDispatch()

    const isMobile = useMediaQuery({
        query: '(max-width: 576px)'
    })

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log(verified)
    }, [])

    const handleOtpVerification = async() => {
        setIsLoading(true)
        console.log(signupInfo.otp)
        const response = await fetch (`${baseUrl}/users/api/verify-email/` , 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    otp: signupInfo.otp,
                    email: signupInfo.email
                })
            }
        )
        const data = await response.json()
        console.log(data)
        if(data.status == true){            
            dispatch(setOtpVerified(true))
            alert('Email verified successfully')            
        }
        else{
            alert('Email verification failed')
        }
        setIsLoading(false)
    }

  return (
    <div className="font-merriweather relative" >
        <SignUpHeader />
        {/* 
        <div className ="w-[400px] h-[800px] absolute -z-10 -right-[0px] -top-[200px] ">
            <img src={bgradient} alt="" className="w-full" />            
        </div>
        
        <div className ="w-[400px] h-[200px] absolute -z-10 -left-[0px] bottom-[900px] ">
            <img src={bgradient3} alt="" className="w-full" />                        
        </div> */}
        
        <div className ="w-24 md:w-[400px] md:h-[800px] absolute -z-10 -right-[0px] top-[100px] md:-top-[200px] ">
            <img src={bgradient} alt="" className="w-full" />            
        </div>
        
        <div className ="w-24 md:w-[200px] lg:w-[400px] md:h-[200px] absolute -z-10 -left-[10px] md:-left-0 top-[250px] md:bottom-0 lg:top-0 rotate-[12deg] md:rotate-0 ">
            <img src={bgradient3} alt="" className="w-full" />                        
        </div>

        
    
        {
            verified ? 
            (
                <main className="pt-[200px] md:pt-[250px] mt-[103px]px-3 " >
                    <div className="mb-9 md:mb-[80px] flex flex-col items-center gap-3 md:gap-[25px] py-5 md:py-[50px] px-7 md:px-[106px] w-full phones:w-[90%] md:w-[800px]
                        shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] mx-auto
                    ">
                        <img src={verifiedicon} alt="verified" className="w-[35px] md:w-[80px] " />
                        <h3 className="mb-1 md:mb-[10px] text-xl md:text-[35px] font-black md:leading-[39px] " >
                            Verified!!
                        </h3>
                        <p className="md:w-[591px] text-base md:text-[26px] text-center  " >
                            Hi there, you have successfully verified your email. 
                        </p>
                    </div>
                    <button 
                        className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[65px] mb-8 px-5 hover:px-[56px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center  " 
                        onClick={ () => 
                            {                                                                                                   
                                navigate('/completesignup')
                            } 
                        }
                        >
                        Continue your signup
                    </button>
                </main>
            ) : (
                <main className="pt-[48px] md:pt-[120px] mt-[103px] px-3 " >
                    <div className="mb-5 md:mb-[49px] flex items-center justify-center w-fit mx-auto gap-[10px] md:gap-[25px] cursor-pointer " 
                    onClick={ () => navigate('/signup') }
                    >
                        <img src={backarrow} alt="Back arrow" className="w-6 md:w-[36px]" />
                        <span className="text-base md:text-[30px] font-bold " >Entered a wrong email? Change email</span>
                    </div>

                    <div className="bg-white w-full phones:w-[90%] md:w-[750px] mx-auto flex flex-col gap-[2px] md:gap-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded md:rounded-[10px] ">                
                        <div className=" pt-[18px] md:pt-[41px] pb-3 md:pb-[21px] px-[20px] ">
                            <h3 className="text-xl md:text-[35px] font-black leading-4 md:leading-[39px] text-center " >
                                Verify your email
                            </h3>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-[45px] px-3 md:px-6 py-6 md:py-[50px] border-t-[2.5px] md:border-t-[5px] border-[#F9F9F9] items-center ">
                            <p className="text-base md:text-[30px] font-bold leading-4 md:leading-[39px] text-center " >
                                Enter the 6 digit code
                            </p>
                            <p className="mb-2 md:mb-0 text-sm md:text-2xl text-center ">
                                {`A 6-digit verification code has been sent to ${signupInfo.email ? signupInfo.email : 'your email'}`}
                            </p>
                            <OtpInput
                                value= {otp}
                                onChange = {setOtp}
                                numInputs = {6}
                                renderInput = {(props) => <input {...props} /> }
                                inputType = {"number"}
                                renderSeparator = {<span style={{ width: isMobile ? "10px":"15px" }}></span>}
                                inputStyle = {{
                                    marginBottom:"",
                                    width: isMobile ? "36px":"84px",
                                    //marginInline:'10px',
                                    height: isMobile ? "36px":"84px",
                                    border: isMobile ? "0.5px solid #000" : "1px solid #000",
                                    borderRadius:isMobile ? "2.3px":"5.3px",
                                    padding: isMobile ? "5px 10px" : "13px 20px",
                                    outline: "none",
                                    textAlign: "center",
                                    fontSize: isMobile ? "14px": "24px",
                                    fontWeight: "700",
                                    background: "#F9F9F9",
                                    caretColor: "#37BCF7"
                                    
                                }}
                                focusStyle={{
                                    border: '2px solid #37BCF7',
                                    outline: 'none',
                                }}
                            />

                            <p className=" text-center text-sm md:text-2xl " >
                                Your code will be active for 10 minutes
                            </p>                    
                        </div>
                    </div>
                    
                    <button 
                        className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[65px] mb-8 px-5 hover:px-[56px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center  " 
                        onClick={ handleOtpVerification }
                        >
                            <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                                <Loadingspinner width = '28px' height = '28px' />
                            </div>
                            <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                                Confirm your email
                            </span>                        
                    </button>

                    <p className="md:w-[630px] mx-auto text-sm md:text-lg text-center tracking-[0.552px] " >
                        By signing up, you agree to our <Link to={'/termsofuse'} className = 'font-bold' >Terms of Service </Link> and <Link to={'/privacypolicy'} className = 'font-bold' >Privacy Policy</Link>
                    </p>

                </main>
            )

        
        }

    </div>
  )
}

export default Otppage
