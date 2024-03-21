import React from 'react'


const Landingcampaign = (props) => {
  return (
    <div className='shrink-0 max-w-[235px] lg:max-w-[525px] font-arial ' >
        <img src={props.image} alt = {props.alt ? props.alt : 'Campaign image'} 
          className = 'mb-3 lg:mb-[20px] shrink-0 w-[235px] lg:w-[525px] h-[153px] lg:h-[350px] rounded-md lg:rounded-3xl'
        />

        <div className="pr-3 lg:pr-[30px]">
            <h3 className='mb-[11px] lg:mb-[12px] text-sm leading-5 lg:text-[34px] lg:leading-[40px] font-bold lg:tracking-[0.128px]' >
                The Fight for our Environment in Lagos Begins Today
            </h3>

            <p className='mb-0 lg:mb-[16px] line-clamp-2 text-[#011217] text-xs lg:text-[20px] leading-5 lg:leading-[30px] font-arial tracking-[-0.021px;] ' >
                This is a complete description of the crowdfunding to aid others fund this particular crowdfunding 
                that shows all that is coming up
            </p>

            <progress value={props.value ? props.value : '23543'} max={props.target ? props.target : '150000'}  
            className='landingpageprogressbar w-full h-[9px] lg:h-[18px] appearance-none rounded-full  mb-0 md:mb-[12px]' />        
            
            <p className='text-xs lg:text-[22px] font-bold ' >${props.value} raised </p>

        </div>
    </div>
  )
}

export default Landingcampaign
