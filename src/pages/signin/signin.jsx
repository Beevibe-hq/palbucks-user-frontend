import React from 'react'

const Signinpage = () => {
  return (
    <div>
      
    </div>
  )
}

export default Signinpage


import applogo from "../../images/appLogo.svg"
import palbucks from "../../images/palbucks2.svg"

import { Link } from "react-router-dom"
import PasswordInput from "../../components/password/password"

const Signup = () => {
  return (
    <div className="font-merriweather" >
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

      <main className="pt-[70px] pb-10 mt-[103px] " >
        <h2 className=" mb-[59px] text-center text-[48px] font-black leading-[73px] tracking-[0.069px] " >
            Sign up
        </h2>

        <form action="" className=" block mx-auto w-fit  " >
            <div className="flex flex-col ">
                <input type="email" name="email" id="email" placeholder="Email"
                    className= "mb-[43px] w-[700px] h-[82px] px-[29px] py-[10px] rounded-[6px] bg-[#F9F9F9] border-[3px] border-[#000000] text-[#888888] text-lg   "
                />
                <input type="password" name="password" id="password" placeholder="Password"
                    className= "mb-[43px] w-[700px] h-[82px] px-[29px] py-[10px] rounded-[6px] bg-[#F9F9F9] border-[3px] border-[#000000] text-[#888888] text-lg "
                />
                <PasswordInput />
            </div>
        </form>

      </main>

    </div>
  )
}

export{ Signup}
