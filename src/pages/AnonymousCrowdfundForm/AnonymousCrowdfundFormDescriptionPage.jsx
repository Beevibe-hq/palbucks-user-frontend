import SignUpHeader from "../../components/signUpHeader/signUpHeader"
import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"
import { useState, useEffect } from "react"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"
import Select from "react-select"
import { options } from "../../components/organisecrowdfundbody/organisecrowdfundbody"
import arrowdown2 from "../../images/organiseCrowdfund/arrowdown.svg"
import { useMediaQuery } from "react-responsive"
import { useDispatch, useSelector } from "react-redux"
import { updateAnonymousCrowdfundData } from "../../actions/actions"
import { useNavigate } from "react-router-dom"


function AnonymousCrowdfundFormDescription() {
    const isMobile = useMediaQuery({
        query:'(max-width: 767px)'   
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()    
    
    const [description, setDescription] = useState('')

    
    return (
        <div className="relative font-arial" >
            <SignUpHeader page='anonymouscrowdfund' />
            <div className ="w-24 md:w-[400px] md:h-[800px] absolute -z-10 -right-[0px] top-[100px] md:-top-[200px] ">
                <img src={bgradient} alt="" className="w-full" />            
            </div>
            
            <div className ="w-24 md:w-[400px] md:h-[200px] absolute -z-10 -left-[0px] top-[535px] md:-top-[100px] lg:-top-[200px] ">
                <img src={bgradient3} alt="" className="w-full" />                 
            </div>

            <main className="pt-5 md:pt-[150px] mt-[103px] px-3 " >


                <div className="bg-white w-full phones:w-[98%] md:w-[70%] lg:w-[950px] mx-auto flex flex-col gap-[2.5px] md:gap-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded md:rounded-[10px] ">                
                    <div className="py-4 md:py-[30px] px-6 md:pl-[50px] md:pr-[30px] ">
                        <h3 className="text-lg md:text-[30px] font-black md:leading-[39px] " >
                            A good story attracts donors
                        </h3>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-[50px] px-6 md:px-[50px] py-5 md:py-[47px] border-t-[3px] md:border-t-[6px] border-[#F9F9F9] md:items-center ">
                        <div className="flex flex-col items-start gap-3 md:gap-5 w-full ">
                            <label
                                htmlFor="description"
                                className="text-base md:text-xl font-bold "
                                >
                                Describe your campaign to your donors
                            </label>
                            <textarea 
                                name="description" 
                                id="description" 
                                rows="10" 
                                className={` mb-[10px] md:mb-5 w-full p-[10px] md:p-5 border-[1.5px] border-black bg-[#FFFFFF] outline-none focus:border-[#37BCF7] 
                                focus:border-[2px] md:focus:border-[2px] focus:caret-[#37BCF7] text-sm md:text-lg rounded-sm md:rounded `}                        
                                placeholder="Tell a bit about your campaign in other to make your donors understand your reason for your crowdfund." 
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                maxLength= "1500"
                            />
                        </div>
                                                
                    </div>
                </div>
                
                <button 
                    /* className={`xl:min-w-[288px] min-w-[228px] mt-[75px] mb-[29px] px-[50px] hover:px-[65px] transition-all duration-500 py-[15.1px]                 
                    font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto flex items-center justify-center ]                                 
                    `} */
                    className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[75px] mb-8 px-[50px] hover:px-[65px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center  " 
                    onClick={() => {
                        if (description !== '') {
                            console.log(description)
                            dispatch(updateAnonymousCrowdfundData({crowdfundData:{description}}))    
                            navigate('/anonymouscrowdfundformbanner')
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

export default AnonymousCrowdfundFormDescription;


