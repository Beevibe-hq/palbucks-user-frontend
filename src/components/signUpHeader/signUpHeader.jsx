import applogo from "../../images/appLogo.svg"
import palbucks from "../../images/palbucks2.svg"
import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"

function SignUpHeader() {

    const navigate = useNavigate()

    return (
        <header className="w-full z-50 py-4 md:py-6 lg:py-[30px] px-5 md:px-[60px] lg:px-[95px] flex justify-between shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] bg-white fixed top-0 " >
            <div className=" flex gap-[10px] items-center cursor-pointer " onClick={() => {
                navigate('/')
            }} >
                <img src={applogo} alt="Palbucks logo" className="w-5 md:w-[33.4px]" />
                <img src= {palbucks} alt="palbucks" className="w-[77px] md:w-[138px] h-[14px] md:h-[24px] "  />
            </div>

            <div className="flex items-center gap-[35px] font-arial " >
                <Link to = '/signin' className="hidden md:flex items-center text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] hover:rounded-[5px] "  >
                    <span>Already have an account?</span>
                </Link>
                <Link to = '/signin' className="text-[#000000] text-lg font-bold tracking-[0.069px] py-[6px] md:py-[8px] px-3 md:px-4 bg-[#35FAA0] hover:bg-[#35EB98] leading-[22px] flex items-center rounded-[5px] "  >
                    <span>Sign in</span>
                </Link>
            </div>

        </header>
    )
}

export default SignUpHeader