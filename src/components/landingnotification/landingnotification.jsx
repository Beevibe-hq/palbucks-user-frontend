import React from 'react'
import profileimage7 from "../../images/landingpage/profileimage7.svg"
import withdrawalicon from "../../images/landingpage/withdrawalicon.svg"

const Landingnotification = (props) => {
  return (
    <div className="w-fit">
        <div className='w-[800px] bg-[#F9F9F9] rounded-[10px] py-[30px] px-[38px] relative z-10 ' >
            <img src= {profileimage7} alt="profile pic" className='absolute -top-12 -left-12 rounded-full w-[90px] ' />
            <div className="flex gap-6 items-center ">
                <img src={withdrawalicon} alt="withdrawal icon" className='w-[79px] h-[71px]  ' />
                <div className="flex flex-col gap-2">
                    <p className=' text-2xl font-black ' >Withdrawal into external wallet</p>
                    <p className=' text-xl '> March {props.date}, 2023</p>
                </div>
                <p className='ml-auto text-[28px] font-black ' >{props.amount} USDT</p>
            </div>
        </div>

        <div className="w-[800px] h-[130px] bg-[#35FAA0] rounded-[10px] relative -top-[115px] -right-[25px] "></div>
    </div>
  )
}

export default Landingnotification
