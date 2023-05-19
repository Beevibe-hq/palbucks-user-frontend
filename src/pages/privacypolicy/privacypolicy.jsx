import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";
import backarrow from "../../images/backarrow.svg"
import Sidebar from "../../components/sidebar/sidebar";

function Privacypolicy(){

    const dispatch = useDispatch()
    
    const sidebarslid = useSelector(state => state.sidebarslid)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const navigate = useNavigate()
    const goback = () =>{
        navigate(-1)
    }

    useEffect(()=>{

        window.scrollTo(0,0)
    },[])

    return(
        <div className='bg-[#F9F9F9] min-h-full overflow-y-auto max-h-[100vh]'>
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />
                <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[25px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-10 w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black text-[32px] mb-4 " >Learn About our Privacy Policy</h1>
                    <p className=" text-[18px] mb-16 " >Updated: March 30, 2022</p>

                    <h2 className="text-[24px] font-black mb-[15px] " >Palbucks Privacy Policy</h2>
                    <p className="text-[18px] tracking-[0.8px] " >
                        At Palbucks we take the protection of Personal Data seriously. In this Privacy Notice we will explain what 
                        Personal Data we collect from you, how we use and share that data, how we keep your Personal Data safe, and 
                        how long we keep it for. We will also explain how we Process your data (and the Legal Basis for doing so) 
                        and help you to understand your Personal Data Rights.
                    </p>
                    
                </div>
            </div>

        </div>
    )
}

export default Privacypolicy;