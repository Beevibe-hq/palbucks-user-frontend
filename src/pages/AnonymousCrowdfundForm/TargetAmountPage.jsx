import SignUpHeader from "../../components/signUpHeader/signUpHeader"
import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"
import { useState, useEffect } from "react"

import arrowdown2 from "../../images/organiseCrowdfund/arrowdown.svg"
import { useMediaQuery } from "react-responsive"
import { useDispatch, useSelector } from "react-redux"
import { updateAnonymousCrowdfundData } from "../../actions/actions"
import { useNavigate } from "react-router-dom"
import usdIcon from "../../images/cardDonation/usd.svg"

const AnonymousCrowdfundFormTargetAmountPage = () => {
    const isMobile = useMediaQuery({
        query:'(max-width: 767px)'   
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
                    
    const CustomDropdownIndicator = () => (
        <img src = {arrowdown2} alt = 'down arrow' className="w-[15px] h-[14px] " />
    )

    const prevTargetPrice = useSelector(state => state.anonymousCrowdfundData.crowdfundData.target_price)
    //console.log(prevTargetPrice)
    const [target_price, setTargetPrice] = useState(null)
    
    return (
        <div className="relative font-arial" >
            <SignUpHeader page='anonymouscrowdfund' />
            <div className ="w-24 md:w-[400px] md:h-[800px] absolute -z-10 -right-[0px] top-[100px] md:-top-[200px] ">
                <img src={bgradient} alt="" className="w-full" />            
            </div>
            
            <div className ="w-24 md:w-[400px] md:h-[200px] absolute -z-10 -left-[0px] top-[535px] md:-top-[100px] lg:-top-[280px] ">
                <img src={bgradient3} alt="" className="w-full" />                 
            </div>

            <main className="pt-10 md:pt-[150px] mt-[103px] px-3 " >


                <div className="bg-white w-full phones:w-[98%] md:w-[70%] lg:w-[950px] mx-auto flex flex-col gap-[2.5px] md:gap-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded md:rounded-[10px] ">                
                    <div className="py-4 md:py-[30px] px-6 md:pl-[50px] md:pr-[30px] ">
                        <h3 className="text-lg md:text-[30px] font-black md:leading-[39px] " >
                            What is your target amount?
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5 px-6 md:px-[50px] py-5 md:py-[47px] border-t-[3px] md:border-t-[6px] border-[#F9F9F9]">
                        <div className="relative h-12 md:h-[70px] flex items-center ">
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                min={1}
                                placeholder="Enter your donation (in USD)"
                                /* value={target_price} */
                                onChange={(e) => {
                                    setTargetPrice(e.target.value)
                                } }
                                className={`w-full md:min-w-[390px] h-[38px] md:h-[60px] px-3 md:px-[22px] rounded-sm md:rounded border-[1.5px] border-black bg-[#F9F9F9] outline-none
                                    focus:border-[#37BCF7] focus:border-[2px] md:focus:border-[2px] focus:caret-[#37BCF7] text-sm md:text-lg   `}
                            />
                            <img src={usdIcon} alt="Usd Icon" className="absolute right-5 top-1/2 -translate-y-1/2 w-3 md:w-5 h-3 md:h-6 " />
                        </div>
                        <p className=" text-[#525252] text-sm  " >
                            At the end of your crowdfund, you will get 98% of total raised.
                        </p>
                                                                        
                    </div>
                </div>
                
                <button 
                    /* className={`xl:min-w-[288px] min-w-[228px] mt-[75px] mb-[29px] px-[50px] hover:px-[65px] transition-all duration-500 py-[15.1px]                 
                    font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto flex items-center justify-center ]                                 
                    `} */
                    className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[75px] mb-8 px-[50px] hover:px-[65px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center  " 
                    onClick={() => {
                        if (target_price !== null && target_price !== 0) {
                            dispatch(updateAnonymousCrowdfundData({ crowdfundData: { target_price:target_price } }))    
                            navigate('/signup?from=anonymouscrowdfund')
                        } else {
                            alert('Fill all inputs')
                        }
                        
                    }}                 
                    >
                    <span className={` block`}>
                        Continue
                    </span>
                </button> 

            </main>
        </div>
    )
}

export default AnonymousCrowdfundFormTargetAmountPage
