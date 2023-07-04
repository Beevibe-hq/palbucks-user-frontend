import React from 'react'


const Landingcampaign = (props) => {
  return (
    <div className='shrink-0 max-w-[574px] ' >
        <img src={props.image} alt = {props.alt ? props.alt : 'Campaign image'} 
        className = ' mb-[31px] shrink-0 w-[574px] h-[376px] rounded-3xl ' />

        <div className="pr-[30px]">
            <h3 className='mb-[29px] text-[34px] font-bold tracking-[0.128px] leading-[42px] ' >
                The Fight for our Environment in Lagos Begins Today
            </h3>

            <p className=' mb-[30px] line-clamp-2 text-[#011217] text-[20px] font-arial leading-[35px] tracking-[-0.021px;] ' >
                This is a complete description of the crowdfunding to aid others fund this particular crowdfunding 
                that shows all that is coming up
            </p>

            <progress value={props.value ? props.value : '23543'} max={props.target ? props.target : '150000'}  
            className='landingpageprogressbar w-full h-[18px] appearance-none rounded-full  mb-2 phones:mb-4 xphones:mb-5 md:mb-[14px]' />        
            
            <p className='text-[22px] font-bold ' >{props.value} USDT raised </p>

        </div>
    </div>
  )
}

export default Landingcampaign
