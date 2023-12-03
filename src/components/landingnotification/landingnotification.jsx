import React from 'react'
import profileimage7 from "../../images/landingpage/profileimage7.svg"
import withdrawalicon from "../../images/landingpage/withdrawalicon.svg"

const Landingnotification = (props) => {
  return (
    <div className="w-fit font-arial ">
        <div className='max-w-full phones:w-[300px] lg:w-[800px] bg-[#F9F9F9] rounded lg:rounded-[10px] py-[10px] lg:py-[30px] px-3 lg:px-[38px] relative z-10 ' >
            <img src= {profileimage7} alt="profile pic" className='absolute -top-5 lg:-top-12 -left-5 lg:-left-12 rounded-full w-[40px] lg:w-[90px] ' />
            <div className="flex gap-[10px] lg:gap-6 items-center ">
                <img src={withdrawalicon} alt="withdrawal icon" className='w-[26px] lg:w-[79px] h-[24px] lg:h-[71px]  ' />
                <div className="flex flex-col gap-[5px] lg:gap-2">
                    <p className='text-xs lg:text-2xl font-black ' >Withdrawal into external wallet</p>
                    <p className='text-[10px] lg:text-xl '> March {props.date}, 2023</p>
                </div>
                <p className='ml-auto text-sm lg:text-[28px] font-black ' >{props.amount} USDT</p>
            </div>
        </div>

        <div className="max-w-full phones:w-[300px] lg:w-[800px] h-[70px] lg:h-[130px] bg-[#35FAA0] rounded lg:rounded-[10px] relative -top-[64px] lg:-top-[115px] -right-[10px] lg:-right-[25px] "></div>
    </div>
  )
}

export default Landingnotification
