import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import backarrow from "../../images/backarrow.svg"
import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import HelpArticles from "../../components/helparticles/helparticles"
import basicsicon from "../../images/basicsarticleicon.svg"
import reporticon from "../../images/reportarticleicon.svg"
import withdrawalicon from "../../images/withdrawalarticleicon.svg"
import manageaccicon from "../../images/manageaccountarticon.svg"
import supportedcountriesicon from "../../images/supportedcountriesart.svg"
import crowdfundicon from "../../images/crowdfundart.svg"
import walletconnecticon from "../../images/walletconnectart.svg"
import palbucksarticon from "../../images/palbucksart.svg"
import instagramicon from "../../images/instagramicon2.svg"
import mailicon from "../../images/emailicon.svg"
import Twittericon from "../../images/twittericon"

function Helpcenter(){

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
                <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[22px] lg:pr-[35px] pt-8 md:pt-[46px] pb-5 lg:pb-[30px] mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-10 w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black text-[32px] mb-4 " >Hi there, how can we help you?</h1>
                    <p className=" text-[18px] mb-8 " >Read helpful articles, and also report issues to us</p>

                    <div className="flex w-[96%] xl:w-[96%] mb-8 gap-0 ">
                        <input type="search" className=" w-full h-[30px] phones:h-[40px] xl:h-[44px]
                        text-base pl-10 md:pl-12 lg:pl-14 text-[#7A7575] bg-[length:20px] md:bg-[length:24px] bg-[image:url('./images/search.svg')] bg-[left_calc(5%)_top_calc(47%)] md:bg-[left_calc(2%)_top_calc(45%)] xl:bg-[left_calc(2%)_top_calc(48%)]
                        bg-no-repeat rounded-l-3xl shadow-[0px_0px_16px_rgba(0,0,0,0.04)] md:shadow-none font-merriweather font-normal outline-2 outline-[#37BCF7]
                        focus:caret-[#2CA9F2] "
                        placeholder= {isMobile ? 'Search Help':'Search the Palbucks Help Center'} />
                        <div className="bg-[#37BCF7] text-white flex items-center justify-center w-[90px] lg:w-[110px] xl:w-[120px] h-[30px] phones:h-[40px] xl:h-[44px]
                        rounded-r-3xl text-[18px] font-black cursor-pointer " >
                            Search
                        </div>
                    </div>

                    <h2 className="text-[24px] font-black mb-6 " >Articles by Topic</h2>
                    <div className="flex flex-wrap gap-[30px] mb-16 " >
                        {
                            article_data_bytopic.map((item,i)=> {
                                return(
                                    <HelpArticles topic = {item.topic} icon = {item.icon} description = {item.description} />
                                )
                            })
                        }
                    </div>

                    <h2 className="text-[24px] font-black mb-6 " >Most Frequent Articles </h2>
                    <div className="flex flex-wrap gap-[30px] mb-16 " >
                        {
                            article_data_byfrequency.map((item,i)=> {
                                return(
                                    <HelpArticles topic = {item.topic} icon = {item.icon} description = {item.description} />
                                )
                            })
                        }
                    </div>
                    
                    <div className="bg-white w-[80%] mx-auto rounded " >
                        
                        <div className="py-[25px] border-b-[2px] border-b-[#d1d1d5] ">
                            <h1 className="text-[22px] text-center font-black " >Contact Us</h1>
                        </div>
                        <div className="flex py-[30px] px-14 2xl:px-20 justify-around " >
                            <div className="flex items-center gap-4 bg-[#35FAA01A] py-[15px] px-[31px] rounded-[10px] " >
                                <Twittericon />
                                <h4 className="text-[22px]" >Twitter</h4>
                            </div>
                            <div className="flex items-center gap-4 bg-[#35FAA01A] py-[15px] px-[31px] rounded-[10px]" >
                                <img src={mailicon} alt="" />
                                <h4 className="text-[22px]" >Email</h4>
                            </div>
                            <div className="flex items-center gap-4 bg-[#35FAA01A] py-[15px] px-[31px]  rounded-[10px]" >
                                <img src={instagramicon} alt="" />
                                <h4 className="text-[22px]" >Instagram</h4>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Helpcenter




let article_data_bytopic = [
    {
        topic : 'Basics',
        icon  : basicsicon,
        description: 'This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read this and lorem ipsum the daya rkwme'
    },
    {
        topic : 'Withdrawals',
        icon  : withdrawalicon,
        description: 'This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read this and lorem ipsum the daya rkwme'
    },
    {
        topic : 'Manage account',
        icon  : manageaccicon,
        description: 'This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read this and lorem ipsum the daya rkwme'
    },
    {
        topic:'Report & security',
        icon : reporticon,
        description: 'This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read this and lorem ipsum the daya rkwme'
    }
]

let article_data_byfrequency = [
    {
        topic : 'Countries supported on Palbucks',
        icon  : supportedcountriesicon,
        description: 'This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read this and lorem ipsum the daya rkwme'
    },
    {
        topic : 'How to connect to external wallet',
        icon  : walletconnecticon,
        description: 'This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read this and lorem ipsum the daya rkwme'
    },
    {
        topic : 'Organise a crowdfund step by step',
        icon  : crowdfundicon,
        description: 'This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read this and lorem ipsum the daya rkwme'
    },
    {
        topic:'What is Palbucks wallet',
        icon : palbucksarticon,
        description: 'This a a complete description for the crowdfunding to aid others fund this particular crowdfunding. Users are allowed to read this and lorem ipsum the daya rkwme'
    }
]