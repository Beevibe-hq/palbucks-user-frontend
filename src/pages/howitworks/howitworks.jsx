import Sidebar from "../../components/sidebar/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/navbar/navbar";
import backarrow from "../../images/backarrow.svg"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import icon1 from "../../images/1icon.svg"
import icon2 from "../../images/2icon.svg"
import icon3 from "../../images/3icon.svg"
import icon4 from "../../images/4icon.svg"
import icon5 from "../../images/5icon.svg"
import icon6 from "../../images/6icon.svg"
import icon7 from "../../images/7icon.svg"
import icon8 from "../../images/8icon.svg"
import Worksguide from "../../components/worksguide/worksguide";

function Howitworks(){

    //const dispatch = useDispatch()
    
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
                <div className = 'fold:px-2 phones:px-5 md:px-10 lg:pl-[25px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-arial w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-[22px] md:mb-10 w-[25px] md:w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black font-merriweather text-[22px] md:text-[32px] mb-[5px] md:mb-4 " >
                        How does Palbucks crowdfunding work?
                    </h1>                    
                    <p className=" text-base md:text-lg mb-14 md:mb-16 " >
                        Palbucks is a platform that enables you crowdfund for a cause in USDT
                    </p>

                    <h2 className="text-lg md:text-2xl font-black mb-5 md:mb-6 " >
                        Setup Your Crowdfunding Campaign - Step by Step
                    </h2>
                    
                    <div className="flex flex-wrap gap-6" >
                        {
                            setup_crowdfunding_guide.map((item,i) => {
                                return(
                                    <Worksguide key={item.step} step = {item.step} icon = {item.icon} description = {item.description} background = {item.background} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Howitworks;

let setup_crowdfunding_guide = [
    {
        step:'Open Organise Crowdfund Page ',
        icon: icon1,
        description:'Head to the side menu at the left corner of your screen, and click on the “Organise Crowdfund Page”',
        background:'white'
    },
    {
        step:'Enter Crowdfunding details',
        icon:icon2,
        description: 'Type in your crowdfunding details, that is: (1) Title of the campaign, (2) Description  (3) Category of campaign',
        background:'white',
    },
    {
        step:'Enter Target Amount',
        icon:icon3,
        description:'Next you will have to enter your target amount (denomination value is USDT). This amount will be between 100 USDT to 1 million USDT. ',
        background:'white',
    },
    {
        step:'Add a Co-organiser (Optional) ',
        icon:icon4,
        description:'Although this is optional, you can choose to add a co-organiser to your campaign. This organiser must be an already existing user.',
        background:'white',
    },
    {
        step:'Enter Location & Campaign End Date',
        icon:icon5,
        description:'Next you will enter your present location (Country) and then you will have to set a date when your crowdfund campaign will come to an end. ',
        background:'white',
    },
    {
        step:'Upload a Campaign Image',
        icon:icon6,
        description:'Finally, you will have to upload an image that will be appropriate for your campaign. Your image should follow our Community Guidelines.',
        background:'white',
    },
    {
        step:'Let Everyone Know About your Campaign',
        icon:icon7,
        description:'Share your crowdfunding campaign on social media by either copying the generated link for your campaign or by using the share button.',
        background:'white',
    },
    {
        step:'Manage your Campaign',
        icon:icon8,
        description:'You can manage your campaign in the “For you” page. You can also withdraw your donated funds and at the end, thank your donors.',
        background:'white'
    }
]