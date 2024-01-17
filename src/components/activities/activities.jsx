import Activity from "../activity/activity";
import downButton from "../../images/wallet/downbutton.svg"
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import user8 from "../../images/user8.svg"
import user12 from "../../images/user12.svg"
import user10 from "../../images/user10.svg"

function Activities(props) {

    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    useEffect(()=>{
        /* console.log(props.amt_raised)
        console.log(props.target_price) */
    },[])
  
    return (
        <section className="font-arial flex-1 w-1/3 md:min-w-[320px] 2xl:min-w-[370px] lg:min-w-[350px] lg:max-w-[370px] bg-white h-fit rounded-[10px] " >
            {
                props.header === 'personalCampaign' ?  (
                    <div className={`py-[35px] px-[23px] border-b-[0.5px] border-[#D8D8D8]`}>                
                        <p className={`text-lg font-black leading-4 mb-4`} >
                            {
                                props.amt_raised + ' USDT raised'
                            }
                            <span className="tracking-[0.06px] text-base text-[#8E8E93] leading-5 " >
                                {
                                    ' of ' + props.target_price + ' USDT'
                                }
                            </span>
                        </p>
                        <progress value={props.amt_raised ? props.amt_raised : '23543'} max={props.target ? props.target : '150000'}
                            className='progressbar w-full h-[10px] appearance-none rounded-[5px] mb-2 phones:mb-3 md:mb-4' 
                        />
                        <p className="text-lg text-[#C5C5C5] font-medium " >
                            {
                                props.total_donors == null ? '2.2k donations so far' : props.total_donors + ' donations so far'
                            } 
                        </p>
                    </div>
                ) :
                props.header == 'wallet' ? (
                    <div className={`py-[35px] px-[23px] border-b-[0.5px] border-[#D8D8D8]`}>                
                        <h3 className="text-[22px] font-black mb-3 " >Activites</h3>
                        <p className="text-[16px]" >See  your donation activites for your campaign. </p>
                    </div>
                ):
                props.header === 'campaign' ? (
                    <div className={`py-[35px] px-[23px] border-b-[0.5px] border-[#D8D8D8]`}>                
                        <p className={`text-lg font-black leading-4 mb-4`} >
                            {
                                props.amt_raised + ' USDT raised'
                            }
                            <span className="tracking-[0.06px] text-base text-[#8E8E93] leading-5 " >
                                {
                                    ' of ' + props.target_price + ' USDT'
                                }
                            </span>
                        </p>
                        <progress value={props.amt_raised ? props.amt_raised : '23543'} max={props.target_price ? props.target_price : '150000'}
                            className='landingpageprogressbar w-full h-[10px] appearance-none rounded-[5px] mb-2 phones:mb-3 md:mb-4' 
                        />
                        <p className="text-lg text-[#C5C5C5] font-medium mb-6 " >
                            {
                                props.total_donors == null ? '2.2k donations so far' : props.total_donors + ' donations so far'
                            } 
                        </p>

                        <button className="mx-auto block px-[30px] py-[15px] rounded-[10px] bg-[#37BCF7] text-lg font-black leading-6 tracking-[0.073px] text-[#FFFFFF] " >
                            Donate using USDT wallet
                        </button>

                        <button 
                            className="mx-auto block px-[30px] pt-[15px] rounded-[10px] text-lg font-black leading-6 tracking-[0.073px] text-[#37BCF7] " 
                            onClick={() => {
                                console.log(props.eventid)
                                navigate(`/${props.eventid}/donate`)
                            }
                            }
                            >
                            Donate using card payment
                        </button>
                    </div>
                ) : null

            }
            <div className={`md:py-2 md:px-5 flex flex-col gap-4 ${expanded ? 'h-[450px] overflow-scroll activitiesScrollBar' : ''}`} >                            
                {
                    activityData.map((item, i) => {
                        return (
                            <Activity key={i} userdp={item.userdp} time={item.time} amt={item.amt} username={item.username} />
                        )
                    })
                }
            </div>
            <div className="flex flex-col items-center justify-center rounded-b-[10px] py-3 gap-2 " >
                <span className="text-xs font-black text-center " >
                    Click on button to go down
                </span>
                <img 
                    src={downButton} 
                    alt="down button" 
                    className={`w-8 cursor-pointer transform ${expanded ? 'duration-slow' : 'rotate-180 duration-slow'}`}
                    onClick={toggleExpansion} 
                />
            </div>
        </section>
  );
}


export default Activities;


export let activityData = [
    {
        userdp: user12,
        username: 'Doggo',
        time: '5 mins ago',
        amt: '5000',
        activity: 'Made a donation of 500USDT to your crowdfund campaign'
    },
    {
        userdp: user8,
        username: 'EricatheBoss',
        time: '1 hour ago',
        amt: '100',
        activity: 'Made a donation of 500USDT to your crowdfund campaign'
    },
    {
        userdp: user10,
        username: 'Anonymous',
        time: '1 hour ago',
        amt: '10',
        activity: 'Made a donation of 500USDT to your crowdfund campaign'
    },
    {
        userdp: user8,
        username: 'Sir Bob',
        time: '7 hours ago',
        amt: '200',
        activity: 'Made a donation of 500USDT to your crowdfund campaign'
    },
    {
        userdp: user12,
        username: 'Micheal',
        time: '20 hours ago',
        amt: '120000',
        activity: 'Made a donation of 500USDT to your crowdfund campaign'
    },
    
]