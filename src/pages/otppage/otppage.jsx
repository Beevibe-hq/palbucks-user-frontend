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

const Otppage = () => {

    const signupInfo = useSelector((state) => state.signupInfo)
    
    const navigate = useNavigate()
    const [otp, setOtp] = useState()
    let verified = useSelector((state) => state.otpVerified)
    const dispatch = useDispatch()

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
    
        {
            verified ? 
            (
                <main className="pt-[250px] pb-10 mt-[103px] " >
                    <div className="mb-[80px] flex flex-col items-center gap-[25px] py-[50px] px-[106px] w-[800px]
                        shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] mx-auto
                    ">
                        <img src={verifiedicon} alt="" className="w-[80px] " />
                        <h3 className="mb-[10px] text-[35px] font-black leading-[39px] " >Verified!!</h3>
                        <p className="w-[591px] text-[26px] text-center  " >
                            Hi there, you have successfully verified your email. 
                        </p>
                    </div>
                    <button 
                        className="mt-[65px] mb-[29px] px-[36px] hover:px-[56px] transition-all duration-500 py-[20.1px] font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto block " 
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
                <main className="pt-[120px] pb-10 mt-[103px] " >
                    <div className="mb-[49px] flex items-center justify-center w-fit mx-auto gap-[25px] cursor-pointer " 
                    onClick={ () => navigate('/signup') }
                    >
                        <img src={backarrow} alt="Back arrow" className="w-[36px]" />
                        <span className=" text-[30px] font-bold " >Entered a wrong email? Change email</span>
                    </div>

                    <div className="bg-white w-[750px] mx-auto flex flex-col gap-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded-[10px] ">                
                        <div className=" pt-[41px] pb-[21px] px-[20px] ">
                            <h3 className="text-[35px] font-black leading-[39px] text-center " >
                                Verify your email
                            </h3>
                        </div>
                        <div className="flex flex-col gap-[45px] px-6 py-[50px] border-t-[5px] border-[#F9F9F9] items-center ">
                            <p className="text-[30px] font-bold leading-[39px] text-center " >Enter the 6 digit code</p>
                            <p className="text-[24px] text-center ">
                                A 6-digit verification code has been sent to example@beevibe.com
                            </p>
                            <OtpInput
                                value= {otp}
                                onChange = {setOtp}
                                numInputs = {6}
                                renderInput = {(props) => <input {...props} /> }
                                inputType = {"number"}
                                renderSeparator = {<span style={{ width: "15px" }}></span>}
                                inputStyle = {{
                                    marginBottom:"",
                                    width: "84px",
                                    //marginInline:'10px',
                                    height: "84px",
                                    border: "1px solid #000",
                                    borderRadius: "5.3px",
                                    padding: "13px 20px",
                                    outline: "none",
                                    textAlign: "center",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    background: "#F9F9F9",
                                    caretColor:"#37BCF7"                                                              
                                }}
                                focusStyle={{
                                    border: '2px solid #37BCF7',
                                    outline: 'none',
                                }}
                            />

                            <p className=" text-center text-2xl " >
                                Your code will be active for 10 minutes
                            </p>                    
                        </div>
                    </div>
                    
                    <button 
                        className="mt-[65px] mb-[29px] px-[36px] hover:px-[56px] transition-all duration-500 py-[20.1px] font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto block " 
                        onClick={ handleOtpVerification }
                        >
                            <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                                <Loadingspinner width = '28px' height = '28px' />
                            </div>
                            <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                                Confirm your email
                            </span>                        
                    </button>

                    <p className="w-[630px] mx-auto text-lg text-center tracking-[0.552px] " >
                        By signing up, you agree to our <Link to={'/termsofuse'} className = 'font-bold' >Terms of Service </Link> and <Link to={'/privacypolicy'} className = 'font-bold' >Privacy Policy</Link>
                    </p>

                </main>
            )

        
        }

    </div>
  )
}

export default Otppage
