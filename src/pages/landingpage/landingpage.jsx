import { Link, useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

import palbuckslogo from "../../images/landingpagelogo.svg"
import palbucksgroup from "../../images/palbucks2.svg"
import bgradient1 from "../../images/bgradient1.svg"
import bgradient2 from "../../images/bgradient2.svg"
import step1icon from "../../images/step1icon.png"
import step2icon from "../../images/step2icon.svg"
import step3icon from "../../images/step3icon.svg"
import stepdown from "../../images/stepdown.svg"
import stepleft from "../../images/stepleft.svg"
import landingcampaignimg from "../../images/landingpage/landingcampaignimg.jpg"
import landingcampaignimg2 from "../../images/landingpage/landingcampaignimg2.jpg"
import landingcampaignimg3 from "../../images/landingpage/landingcampaignimg3.jpg"
import backbtn from "../../images/backbtn.jpg"
import forwardbtn from "../../images/forwardbtn.jpg"
import leftscroll from "../../images/scrollindicatorleft.svg"
import rightscroll from "../../images/scrollindicatorright.svg"
import profileimage from "../../images/landingpage/profileimage.svg"
import profileimage2 from "../../images/landingpage/profileimage2.svg"
import profileimage3 from "../../images/landingpage/profileimage3.svg"
import profileimage4 from "../../images/landingpage/profileimage4.jpg"
import profileimage5 from "../../images/landingpage/profileimage5.jpg"
import profileimage6 from "../../images/landingpage/profileimage6.jpg"
import like from "../../images/landingpage/like.svg"
import like2 from "../../images/landingpage/like2.svg"
import like3 from "../../images/landingpage/like3.svg"
import joint from "../../images/landingpage/joint.svg"
import joint2 from "../../images/landingpage/joint2.svg"
import joint3 from "../../images/landingpage/joint3.svg"
import pointer from "../../images/landingpage/pointer.svg"
import plus from "../../images/landingpage/plus.svg"
import oneicon from "../../images/landingpage/oneicon.svg"
import twoicon from "../../images/landingpage/twoicon.svg"
import threeicon from "../../images/landingpage/threeicon.svg"
import twittericon from "../../images/landingpage/twittericon.svg"
import instagramicon from "../../images/landingpage/instagramicon.svg"
import copyrighticon from "../../images/landingpage/copyright.svg"

import Landingcampaign from "../../components/landingcampaign/landingcampaign"
import Landingnotification from "../../components/landingnotification/landingnotification"
import { useSelector } from "react-redux"

function LandingPage(){

    const navigate = useNavigate()
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)

    const containerRef = useRef(null);

    const [scrollState, setScrollState] = useState({
        isAtLeftEnd: true,
        isAtRightEnd: false,
    });

    const animateOnHover = (e) => {
        const element = e.target
        element.classList.add('animate__animated', 'animate__pulse')
        setTimeout(() => {
            element.classList.remove('animate__animated', 'animate__pulse')
        }, 1000)
    }

    /* const handleScroll = () => {
        const container = containerRef.current;
        setScrollState({
            isAtLeftEnd: container.scrollLeft === 0,
            isAtRightEnd: container.scrollLeft + container.clientWidth === container.scrollWidth,
        });
    }; */

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: containerRef.current.offsetWidth,
            behavior: 'smooth',
        });

        setScrollState({
            isAtLeftEnd: false,
            isAtRightEnd: true
        });
    };

    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -containerRef.current.offsetWidth,
            behavior: 'smooth',
        });

        setScrollState({
            isAtLeftEnd: true,
            isAtRightEnd: false
        });
    };

    useEffect(() => {
        isAuthenticated ? navigate('/home') : navigate('/')        
    },[])

    /* useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []); */

    return(
        <div className="font-merriweather" >
            <header className="w-full z-50 py-[30px] px-[95px] flex justify-between shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] bg-white fixed top-0 " >
                <div className="flex items-center gap-[18.2px] ">
                    <img src={palbuckslogo} alt="Palbucks logo" className="w-[33.4px] h-[33.4px]" />
                    {/* <span className="" >Palbucks</span> */}
                    <img src={palbucksgroup} alt="" className="h-[23px] w-[137px] " />
                </div>
                <nav className="flex items-center xl:gap-[46px] " >
                    <Link to = '/howitworks' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                        <span>How it works</span>
                    </Link>

                    <Link to = '/discover' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                        <span>Discover</span>
                    </Link>

                    <Link to = '/signin' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                        <span>Sign in</span>
                    </Link>

                    <Link to = '/signup' className="text-[#000000] text-lg font-bold tracking-[0.069px] py-[8px] px-[16px] bg-[#35FAA0] hover:bg-[#35EB98] leading-[22px] flex items-center rounded-[5px] "  >
                        <span>Sign up</span>
                    </Link>

                </nav>
            </header>

            <main className="pt-[140px] pb-10 mt-[103px] " >
                
                <h2 className=" mb-[49px] text-center text-[70px] font-black leading-[86px] tracking-[2.323px] " >
                    From your wallets to <br /> their hearts
                </h2>
                <p className=" mb-[60px] text-[33px] font-arial text-center leading-[45px] tracking-[0.5px] " >
                    Start your crowdfunding campaign. Make online donation <br/> by using your card or USDT
                </p>
                <button className="mb-[100px] px-[52px] hover:px-[72.5px] transition-all duration-500 py-[23.4px] font-bold bg-black text-white rounded-[10px] text-3xl mx-auto block " >
                    Start a crowdfund
                </button>

                <div className={`mb-[113px] w-[90%] max-w-[1306px] bg-[#033F59] block mx-auto pt-[77px] pb-[20px] pl-[120px] pr-[120px] 3xl:pr-[140px] rounded-[20px] 
                    shadow-[13px_7px_58px_-9px_rgba(3,63,89,0.25)] `} >

                    <h4 className="mb-[70px] text-[48px] font-black leading-[73px] tracking-[0.069px] text-center text-white " >
                        Fundraising in Palbucks takes just <br /> <span className="text-[#35FAA0]" > few minutes</span>
                    </h4>

                    <div className={` mr-[110px] 2xl:mr-[130px] 3xl:mr-[150px]  relative w-[620px] py-[15px] px-[25px] rounded-[6.4px] rounded-tr-[55px] 
                        bg-[#F9F9F9] inline-block shadow-[0px_0px_20.715068817138672px_0px_rgba(0,0,0,0.04)] `}>
                        <div className="">
                            <img src={step1icon} alt="Step one icon" className="absolute -top-[15%] -left-[3%]  w-[70.5px]" />
                        </div>

                        <h5 className="text-[25px] font-bold mb-3 ml-[40px] ">
                            Begin with the Basics
                        </h5>
                        <p className="text-[#525252] text-[20px] tracking-[1.036px]">
                            Start by laying out the basic details of your crowdfunding campaign. Make sure you have a perfectly descriptive title.
                        </p>
                    </div>

                    <img src={stepdown} alt="Step down icon pointing to next step" className=" mb-[75px] inline-block relative top-20 "  />

                    <div className={` mt-20 ml-auto mb-[90px]  relative w-[620px] py-[15px] px-[25px] rounded-[6.4px] 
                        rounded-tr-[55px] bg-[#35FAA0] border-4 border-black shadow-[0px_0px_20.715068817138672px_0px_rgba(0,0,0,0.04)] `}>
                        <div className="">
                            <img src={step2icon} alt="Step one icon" className="absolute -top-[15%] -left-[3%]  w-[70.5px]" />
                        </div>

                        <h5 className="text-[25px] font-bold mb-3 ml-[40px] ">
                            Tell them your Story
                        </h5>
                        <p className="text-[20px] tracking-[1.036px]">
                            Describe to the world your story, so they can feel and understand what your mission is and more importantly, why you need them.
                        </p>
                    </div>

                    <img src={stepleft} alt="Step down icon pointing to next step" className="ml-auto mr-20 2xl:mr-36 relative"  />

                    <div className={`relative w-[620px] -top-[110px] py-[15px] px-[25px] rounded-[6.4px] rounded-tr-[55px]
                         bg-[#F9F9F9] border-4 border-black shadow-[0px_0px_20.715068817138672px_0px_rgba(0,0,0,0.04)]   `}>
                        <div className="">
                            <img src={step3icon} alt="Step one icon" className="absolute -top-[15%] -left-[3%]  w-[70.5px]" />
                        </div>

                        <h5 className="text-[25px] font-bold mb-3 ml-[40px] ">
                            Launch, Share and Amplify
                        </h5>
                        <p className="text-[20px] text-[#525252] tracking-[1.036px]">
                            Seamlessly launch your campaign and leverage on our integrated social media features to amplify your campaign’s reach.
                        </p>
                    </div>

                </div>

                <div className ="w-[600px] h-screen absolute -z-10 right-0 top-[150px] ">
                    <img src={bgradient2} alt="" className="w-full " />
                    <img src={bgradient2} alt="" className="w-full relative -top-[350px] " />
                    <img src={bgradient2} alt="" className="w-full relative -top-[950px] " />
                </div>

                <div className ="w-[600px] h-screen absolute -z-10 left-0 top-[380px] ">
                    <img src={bgradient1} alt="" className="w-full " />
                    <img src={bgradient1} alt="" className="w-full relative -top-[350px] " />
                    <img src={bgradient1} alt="" className="w-full relative -top-[1000px] " />
                </div>

                <h3 className="mb-[60px] ml-[5%] 2xl:ml-[8%] text-[45px] text-[#000000] font-black leading-[73px] tracking-[0.069px]  " >
                    Featured Crowdfunding Campaign
                </h3>

                <div className={` ${scrollState.isAtRightEnd ? 'ml-[0] 2xl:ml-[0]' : 'ml-[5%] 2xl:ml-[8%]' }  flex gap-[43px] mb-[35px] overflow-x-auto pr-20 `} ref={containerRef} style={{ overflowX: 'hidden' }}>
                    {/* Campaign items */}
                    <Landingcampaign image={landingcampaignimg3} value="23543" target="100000" />
                    <Landingcampaign image={landingcampaignimg} value="1034" target="1500" />
                    <Landingcampaign image={landingcampaignimg2} value="54223" target="250000" />
                </div>


                <div className="mb-[178px] mx-[5%] 2xl:mx-[8%] flex justify-between">
                    <img src={backbtn} alt="" className={`w-[47px] h-[47px] ${scrollState.isAtLeftEnd ? 'opacity-50' : 'cursor-pointer'}`} onClick={scrollLeft} />
                    <img src={scrollState.isAtRightEnd ? rightscroll : leftscroll} alt="" className="w-[107px] h-[42px]" />
                    <img src={forwardbtn} alt="" className={`w-[47px] h-[47px] ${scrollState.isAtRightEnd ? 'opacity-50' : 'cursor-pointer'}`} onClick={scrollRight} />
                </div>

                <div className="mb-[113px] bg-[#024C2B] w-full pt-[68px] pb-[16px] " >
                    <h4 className="mb-[55px] text-[#D8D8D8] text-center text-[36px] font-bold leading-[73px] tracking-[0.069px] " >Features</h4>

                    <h5 className="mb-[54px] text-[74px] font-black text-white text-center font-merriweather leading-[113px] tracking-[0.08px] " >
                        Receive donations from <br/> Friends and Family in <span className="text-[#35FAA0]" >USDT</span>
                    </h5>

                    <p className="mb-[212px] text-white text-[36px] text-center leading-[70px] tracking-[0.55px] " >
                        You can receive crypto donations for your campaigns from <br/> your family and friends. We believe that location should not be a <br />barrier when it comes to raising funds for a cause
                    </p>
                    
                    <div className={`mx-auto mb-[300px] block w-fit 
                            `
                        }>
                        {/* <Landingnotification /> */}
                        <div className={`mb-[72px] w-[800px] h-[200px] bg-[#F9F9F9] -rotate-[5deg] rounded-[15px] py-[23px] px-[31px]
                                
                            `} >
                            <img src={like} alt="like icon" className="w-[54px] absolute -top-7 -left-7 " />
                            <img src={joint} alt="joint icon" className="w-[45px] h-[60px] absolute -top-10  -right-5 "  />
                            <div className="flex gap-5">
                                <img src={profileimage} alt="profile pic" className="w-[69px] h-[69px] "  />
                                <div className="flex flex-col gap-2 ">
                                    <h6 className="text-[27px] font-black leading-[25px] tracking-[0.119px] " >Davidflorin</h6>
                                    <p className="mb-[5px] text-[21px] leading-[35px] -tracking-[0.155px]  " >5 mins ago</p>   
                                    <p className=" text-[26px]  " >Made a donation of <span className="font-bold" >500USDT</span> to your crowdfund campaign </p>
                                </div>
                            </div>
                        </div>

                        <div className={`mb-[72px] w-[800px] h-[200px] bg-[#F9F9F9] rotate-[5deg] rounded-[15px] py-[23px] px-[31px] 
                            
                        `} >
                            <img src={joint2} alt="like icon" className="w-[45px] h-[60px] absolute -top-7 -left-2 " />
                            <img src={like2} alt="joint icon" className="w-[60px] absolute -top-7 -right-7"  />
                            <div className="flex gap-5">
                                <img src={profileimage2} alt="profile pic" className="w-[69px] h-[69px] "  />
                                <div className="flex flex-col gap-2 ">
                                    <h6 className="text-[27px] font-black leading-[25px] tracking-[0.119px] " >Anonymous</h6>
                                    <p className="mb-[5px] text-[21px] leading-[35px] -tracking-[0.155px]  " >20 hours ago</p>   
                                    <p className=" text-[26px]  " >Made a donation of <span className="font-bold" >5000USDT</span> to your crowdfund campaign </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[800px] h-[200px] bg-[#F9F9F9] -rotate-[5deg] rounded-[15px] py-[23px] px-[31px] ' >
                            <img src={like3} alt="like icon" className="w-[54px] absolute -top-7 -left-7 " />
                            <img src={joint3} alt="joint icon" className="w-[45px] h-[63px] absolute -top-9  -right-2 "  />
                            <div className="flex gap-5">
                                <img src={profileimage3} alt="profile pic" className="w-[69px] h-[69px] "  />
                                <div className="flex flex-col gap-2 ">
                                    <h6 className="text-[27px] font-black leading-[25px] tracking-[0.119px] " >MuabonjeRinga</h6>
                                    <p className="mb-[5px] text-[21px] leading-[35px] -tracking-[0.155px]  " >24 hours ago</p>   
                                    <p className=" text-[26px]  " >Made a donation of <span className="font-bold" >250USDT</span> to your crowdfund campaign </p>
                                </div>
                            </div>
                        </div>                

                    </div>

                    <h6 className="mb-[54px] text-[74px] font-black text-center text-white leading-[113px] tracking-[0.08px] " >
                        Amplify your Campaign by <br /> adding <span className="text-[#35FAA0]" >Co-organisers</span>
                    </h6>

                    <p className="mb-[133px] text-center text-[#FFFFFF] text-[36px] leading-[70px] tracking-[0.552px] " >
                        You can add  participants as co - organisers  to your <br/> crowdfunding campaign. Team up with friends 
                        around the <br /> world to get your campaign amplified, and your mission <br /> accomplished        
                    </p>

                    <div className="mx-auto z-[10] relative bg-white  py-3 px-[33px] rounded-full w-[350px] h-[64px] -rotate-[0.203deg] flex items-center justify-center " >
                        <span className="text-[28px] font-bold leading-[121px] tracking-[0.088px] " >Add Co-organisers</span>
                    </div>

                    <div className="mb-[78px] mx-auto relative -top-14 -right-2  bg-[#35FAA0]  py-3 px-[33px] rounded-full w-[350px] h-[64px] -rotate-[0.203deg] flex items-center justify-center " ></div>
                    
                    <div className="w-fit mx-auto mb-[301px] flex gap-[180px]">
                        <div className="mr-16 flex flex-col items-center gap-[23px] " >
                            <img src={profileimage4} alt="profile pic" className="w-[217px]" />
                            <span className="text-[43px] font-black text-white leading-[72px]  " >you</span>
                            <img src={pointer} alt="pointer" className="w-[94px] h-[42px] "  />
                        </div>
                        <img src={plus} alt="plus icon" className="w-[90px] h-[206px] " />
                        <div className="flex">
                            <img src={profileimage5} alt="" className="w-[217px] h-[217px] rounded-full" />
                            <img src={profileimage6} alt="" className="w-[217px] h-[217px] rounded-full relative -left-16 " />
                        </div>
                        
                    </div>
                    <h6 className="mb-[89px] text-center text-white text-[74px] font-black leading-[113px] tracking-[0.08px] " >
                        Withdraw Donations into <br /> your <span className="text-[#35FAA0]" >Crypto Wallet</span> or Directly <br /> into your <span className="text-[#35FAA0]" >Bank Account</span>
                    </h6>
                    <p className="mb-[100px] text-center text-[36px] text-white leading-[70px]  " >
                        All funds generated from your donation can be withdrawn <br /> immediately into your USDT cryptocurrency wallet or can be <br/>
                         sent directly into your local bank account
                    </p>
                    <div className="w-fit mx-auto">
                        <Landingnotification date = '13' amount = '5000' />
                        <Landingnotification date = '9' amount = '987' />
                        <Landingnotification date = '3' amount = '5783' />
                    </div>
                    
                </div>

                <h6 className="mb-[45px] ml-[5%] 2xl:ml-[8%] text-[45px] text-[#000000] font-black leading-[73px] tracking-[0.069px]  " >
                    Palbucks is for
                </h6>

                <div className="mb-[174px] mx-[5%] 2xl:mx-[8%]  flex justify-between ">
                    <div className="relative rounded-lg w-[380px] shadow-[0px_0px_4.016860485076904px_0px_rgba(0,0,0,0.20)] bg-[#F9F9F9] px-7 py-5 flex flex-col gap-[25px] items-center text-center  ">
                        <img src={oneicon} alt="" className="absolute -right-7 -top-5" />
                        <p className="text-[33px] font-bold leading-[45px] " >
                            Yourself
                        </p>
                        <p className=" text-[27px] text-[#525252] " > 
                            Start a crowdfunding campaign for yourself to meet up necessary need, or to fulfil a mission of yours. 
                        </p>
                    </div>

                    <div className="relative rounded-lg w-[380px] shadow-[0px_0px_4.016860485076904px_0px_rgba(0,0,0,0.20)] bg-[#35FAA0] px-7 py-5 flex flex-col gap-[25px] items-center text-center  ">
                        <img src={twoicon} alt="" className="absolute -right-7 -top-5" />
                        <p className="text-[33px] font-bold leading-[45px] " >
                            Family & Friends
                        </p>
                        <p className=" text-[27px] text-black " > 
                            You can also start a crowdfunding campaign on behalf of a family member or a friend. 
                        </p>
                    </div>

                    <div className="relative rounded-lg w-[380px] shadow-[0px_0px_4.016860485076904px_0px_rgba(0,0,0,0.20)] bg-[#F9F9F9] px-7 py-5 flex flex-col gap-[25px] items-center text-center  ">
                        <img src={threeicon} alt="" className="absolute -right-7 -top-5" />
                        <p className="text-[33px] font-bold leading-[45px] " >
                            Charity
                        </p>
                        <p className=" text-[27px] text-[#525252] " > 
                            Charity Institutions are allowed to raise funds for different causes or needs that might arise overtime.
                        </p>
                    </div>
                </div>

                <button className="mb-[33px] px-[52px] hover:px-[72.5px] transition-all duration-500 py-[23.4px] font-bold bg-black text-white rounded-[10px] text-3xl mx-auto block " >
                    Start a crowdfund
                </button>

                <p className=" mb-[123px] text-[33px] text-center leading-[55px] " >
                    Its totally free to get started
                </p>

                {/* <hr className="mx-[5%] 2xl:mx-[8%]" /> */}
                
                <footer className="mx-[5%] 2xl:mx-[8%] border-t-[#525252] border-t-[1px] py-[29px] ">
                    <nav className="flex items-center justify-between gap-7 xl:gap-[46px] " >
                        <div className="flex items-center gap-7 xl:gap-[46px] ">
                            <Link to = '/termsofuse' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                                <span>Terms of use</span>
                            </Link>
                            <Link to = '/privacypolicy' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                                <span>Privacy Policy</span>
                            </Link>
                            <Link to = '/helpcenter' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                                <span>Help Center</span>
                            </Link>
                            <Link to = '/communityguidelines' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                                <span>Community Guidelines</span>
                            </Link>
                        </div>
                        <div className=" flex gap-[38px] items-center ">
                            <div className="flex gap-[5px] ">
                                <img src={copyrighticon} alt="copyright icon" className="w-6" />
                                <span className=" text-[#525252] text-lg " >2023 Palbucks</span>
                            </div>
                            <img src={twittericon} alt="twitter icon" className="w-5 h-4" />
                            <img src={instagramicon} alt="instagram icon" className="w-5" />
                        </div>

                    </nav>
                </footer>




                {/* <div className="w-[full] h-[1028.758px] relative flex-shrink-0 overflow-hidden hidden ">
                    <div className="w-[743.5px]  h-[500px] transform rotate-[-19.313deg] flex-shrink-0 opacity-30 bg-gradient-to-b from-blue-400 to-teal-300">
                        
                    </div>

                    <div className="w-[743.5px] absolute top-0 -right-10 h-[500px] transform rotate-[-19.313deg] flex-shrink-0 opacity-30 bg-gradient-to-b from-green-500 to-yellow-300">
                    
                    </div>                                        
                </div> */}
               



            </main>
        </div>
    )
}

export default LandingPage