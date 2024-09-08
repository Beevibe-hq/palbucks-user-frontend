import SignUpHeader from "../../components/signUpHeader/signUpHeader"
import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"
import { useState} from "react"

import { useMediaQuery } from "react-responsive"
import { useDispatch, useSelector } from "react-redux"
import { updateAnonymousCrowdfundData } from "../../actions/actions"
import { useNavigate } from "react-router-dom"
import CropImage from "../../components/cropping/cropimage/cropimage";
import { infoicon } from "../../images";
import uploadSuccessIcon from "../../images/organiseCrowdfund/Information icon.png"
import likeIcon from "../../images/authpages/like.svg"
import { addCrowdfundEvent } from "../../actions/actions"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"
import { baseUrl } from "../../auth/checkauthentication"

function AnonymousCrowdfundFormBanner() {
    const isMobile = useMediaQuery({
        query:'(max-width: 767px)'   
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formdata, setformdata] = useState({
        banner:null,
    })
    const [pageDisplay, setPageDisplay] = useState('banner')
    const [isLoading, setIsLoading] = useState(false)
    const crowdfundData = useSelector(state => state.anonymousCrowdfundData.crowdfundData)
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 90);

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
                {
                    pageDisplay == 'banner' ?
                        <div className="bg-white w-full phones:w-[98%] md:w-[70%] lg:w-[950px] mx-auto flex flex-col gap-[2.5px] md:gap-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded md:rounded-[10px] ">                
                            <div className="py-4 md:py-[30px] px-6 md:pl-[50px] md:pr-[30px] ">
                                <h3 className="text-lg md:text-[30px] font-black md:leading-[39px] " >
                                    Add a captivating campaign cover image  
                                </h3>
                            </div>
                            <div className="p-5 md:p-7 border-t-[3px] md:border-t-[6px] border-[#F9F9F9] md:items-center ">                        
                                <div className="flex flex-col items-center relative " >
                                    <CropImage formdata = {formdata} setformdata = {setformdata}  />
                                    <div className={` ${ formdata.banner ? '' : 'mt-4 md:mt-5' } flex gap-3 items-center py-1 `} >
                                        <img src={formdata.banner ? uploadSuccessIcon:infoicon} alt="info icon" />
                                        <p className={` ${formdata.banner ? 'text-[#37BCF7]':'text-[#8E8E93]'} text-sm md:text-base`} >
                                            {
                                                formdata.banner ? 'Image uploaded successfully':'Click icon to upload campaign image' 
                                            }
                                            {/* Recommended size is 837px by 240px */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : pageDisplay == 'successfulcrowdfundlaunch' ? 
                        <div className="bg-white w-full phones:w-[98%] md:w-fit mx-auto 
                            flex flex-col items-center py-[40px] px-[106px] 
                            shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded md:rounded-[10px] ">
                                <img src={likeIcon} alt="Hearts Icon" className="md:w-[28px] w-[61.5px] mb-[15px]" />
                                <h5 className="mb-[25px] font-black text-[35px] " >Congratulations!!</h5>
                                <p className="text-center text-[26px] leading-[32px] " >You have successfully launched your <br /> campaign </p>
                        </div>
                    : null        
                }
                
                <button                     
                    className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[75px] mb-8 px-[50px] hover:px-[65px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-base md:text-[28px] mx-auto flex items-center justify-center  " 
                    onClick={async() => {
                        if(pageDisplay == 'banner'){
                            if (formdata.banner !== null) {                                
                                setIsLoading(true)

                                dispatch(updateAnonymousCrowdfundData({ crowdfundData: { banner: formdata.banner } }))                             
                                let newCrowdfundData = {
                                    ...crowdfundData,
                                    banner: formdata.banner,
                                    end_date: maxDate.toISOString(),
                                    date_posted: today.toISOString(),
                                    start_date: today.toISOString(),
                                    location: '',                                    
                                }
                                console.log(newCrowdfundData)
        
                                const form = new FormData();
                                // Iterate over the properties of the formdata object
                                for (const [key, value] of Object.entries(newCrowdfundData)) {
                                    form.append(key, value);
                                }
                                const access_token = localStorage.getItem('access_token')
                                console.log(form)
                                const sendCrowdfund = await fetch(`${baseUrl}/funding/api/`,{
                                    method:'POST',
                                    body: form,
                                    headers: {
                                        Authorization: `Bearer ${access_token}`,
                                        //"Content-Type": "multipart/form-data"
                                    }
                                })
                                
                                const resp = await sendCrowdfund.json();
                                console.log(resp)

                                if(sendCrowdfund.ok){
                                    console.log('success')            
                                    dispatch(addCrowdfundEvent(resp))
                                    setPageDisplay('successfulcrowdfundLaunch')
                                }
                                
                                setIsLoading(false)


                            } else {
                                alert('Please select an image')
                            }
                        } else if (pageDisplay == 'successfulcrowdfundlaunch') {
                            navigate('/completesignup')
                        }
                        
                    }}                 
                    >
                    <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                        <Loadingspinner width = '28px' height = '28px' />
                    </div>
                    <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                        { pageDisplay == 'banner' ?  'Launch your campaign' : pageDisplay == 'successfulcrowdfundlaunch'? 'Finish your signup' : null}
                    </span>
                </button> 
            </main>


        </div>
    )
}

export default AnonymousCrowdfundFormBanner;


