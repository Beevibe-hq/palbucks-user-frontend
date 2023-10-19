import user6 from "../../images/user6.svg"
import { useEffect, useState } from "react"

function Activity(props){

    // Calculate time of donation to ascertain whether to make it a new activity or not
    // If time is less than 24 hours, then it is a new activity
    const [newActivity, setNewActivity] = useState(false)

    useEffect(() => {
       if (props.time.includes('mins')) {
        setNewActivity(true)
    }  
    },[])

    return(
        <div className={` ${newActivity ?"bg-[#86FCC6]" : props.background == 'none' ? "bg-inherit": "bg-white md:bg-[#F9F9F9] "} flex gap-[9px] lg:gap-3 py-[10px] md:py-3 px-2 phones:px-5 items-start rounded-[5px]  `}>
            <img src={props.userdp ? props.userdp : user6} alt="user profile dp" className="w-12 md:w-[57px] rounded-full " />
            <section>
                <h3 className="font-black text-[15px] md:text-[17px] mb-[3px] md:mb-[6px] " >
                    {
                        props.username ? props.username : 'John Doe'
                    }
                </h3>
                <h4 className="text-[12px] md:text-[15px] mb-3" >
                    {
                        props.time ? props.time : '2 hours ago'
                    }
                </h4>
                <h4 className="text-sm md:text-lg" >
                    Made a donation of<span className="font-black" > {props.amt} USDT </span>to your crowdfund campaign
                </h4>
            </section>
        </div>
    )
}

export default Activity