import { Link, useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

import palbuckslogo from "../../images/appLogo.svg"
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
import menuicon from "../../images/Hamburger Menu.svg"
import cancelMenuIcon from "../../images/hamburger menu.svg"

import Landingcampaign from "../../components/landingcampaign/landingcampaign"
import Landingnotification from "../../components/landingnotification/landingnotification"
import { useSelector } from "react-redux"

function LandingPage(){


    const animateOnHover = (e) => {
        const element = e.target
        element.classList.add('animate__animated', 'animate__pulse')
        setTimeout(() => {
            element.classList.remove('animate__animated', 'animate__pulse')
        }, 1000)
    }

    const navigate = useNavigate()
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)

    const containerRef = useRef(null);

    const [scrollState, setScrollState] = useState({
        isAtLeftEnd: true,
        isAtRightEnd: false,
    });
    

    const handleScroll = (direction) => {
        const scrollContainer = containerRef.current;

        if (scrollContainer) {
            const scrollItemWidth = (scrollContainer?.firstChild).offsetWidth;
            const visibleItemCount = Math.floor(scrollContainer.offsetWidth / scrollItemWidth);
            const scrollAmount = scrollItemWidth * visibleItemCount;

            if (direction === 'left') {
                scrollContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                })
            } else {
                scrollContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }

            handleScrollCheck(containerRef)
        }
    };

    const handleScrollCheck = () => {
        const scrollContainer = containerRef.current;

        if (scrollContainer) {
            // first check if there's no scroll and display all the arrows
            if (scrollContainer.scrollWidth <= scrollContainer.offsetWidth) {  
                //alert('no scroll')
                setScrollState((prevScrollState) => ({
                    ...prevScrollState,
                    isAtLeftEnd: false,
                    isAtRightEnd:false
                }))
                return;
            }

            if (Math.ceil(scrollContainer.scrollLeft + scrollContainer.offsetWidth) >= Math.floor(scrollContainer.scrollWidth)) {                
                setScrollState((prevScrollState) => ({
                    ...prevScrollState,                
                    isAtRightEnd: true ,
                    isAtLeftEnd: false                
                }));
                //alert('right')
            }else if (scrollContainer.scrollLeft <= 0) {
                setScrollState((prevScrollState) => ({
                    ...prevScrollState,                
                    isAtRightEnd:false,
                    isAtLeftEnd: true            
                }));
                //alert('left')
            } else {
                setScrollState((prevScrollState) => ({
                    ...prevScrollState,
                    isAtRightEnd: false,
                    isAtLeftEnd: false
                }));
                //alert('middle')
            }
        }

        
    }

    useEffect(() => {
        isAuthenticated ? navigate('/home') : navigate('/')        
    },[])    

    const [mobileMenu, setMobileMenu] = useState('close')
    const handleMobileMenu = () => {
        if(mobileMenu == 'open'){
            setMobileMenu('close')
        }else{
            setMobileMenu('open')
        }
    }

    return(
        <div className="font-merriweather" >
            <header className="w-full z-50 py-4 md:py-6 lg:py-[30px] px-5 md:px-10 lg:px-[95px] flex justify-between shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] bg-white fixed top-0 " >
                <div className=" flex gap-[10px] items-center cursor-pointer " onClick={() => {
                    navigate('/')
                }}  >
                    <img src={palbuckslogo} alt="Palbucks logo" className="w-5 md:w-7 lg:w-[33.4px]" />                    
                    <img src={palbucksgroup} alt="palbucks" className="w-[77px] md:w-[108px] lg:w-[138px] h-[14px] md:h-5 lg:h-[24px] "  />
                </div>
                <nav className="hidden md:flex items-center xl:gap-[46px] font-arial " >
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
                <img src={menuicon} alt="menu icon" className="w-5 h-5 md:hidden" onClick={handleMobileMenu} />
            </header>

            <div className={` ${mobileMenu == 'open' ? '' : 'hidden'} md:hidden font-arial h-full w-full z-50 bg-white fixed top-0 pt-4 px-5`}>
                <div className="mb-6 flex justify-between items-center ">
                    <div className=" flex gap-[10px] md:gap-4 items-center " >
                        <img src={palbuckslogo} alt="Palbucks logo" className="w-5 md:w-7 lg:w-[33.4px]" />
                        <img src={palbucksgroup} alt="palbucks" className="w-[77px] md:w-[108px] lg:w-[138px] h-[14px] md:h-5 lg:h-[24px] "  />
                    </div>
                    <img src={cancelMenuIcon} alt="cancel menu icon" className="w-6" onClick={handleMobileMenu} />
                </div>
                <nav className="mb-8 flex flex-col gap-2">
                    <Link to = '/howitworks' className="py-3"  >
                        <span>How it works</span>
                    </Link>
                    <Link to = '/discover' className="py-3"  >
                        <span>Discover campaigns</span>
                    </Link>
                    <Link to = '/helpcenter' className="py-3"  >
                        <span>Help center</span>
                    </Link>
                    <Link to = '/communityguidelines' className="py-3"  >
                        <span>Community guidelines</span>
                    </Link>
                </nav>

                <button className="mb-5 bg-[#000] rounded w-full py-[10px] px-5 font-bold text-[#FFF]" 
                    onClick={()=>{navigate('/anonymouscrowdfund')}} 
                >
                    Start a crowdfund
                </button>
                <button className="border-[1px] border-[#8E8E93] rounded w-full py-[10px] px-5 font-bold text-[#000]" 
                    onClick={()=> {navigate('/signin')}}
                >
                    Sign in
                </button>
            </div>

            <main className="pt-3 md:pt-[70px] lg:pt-[140px] pb-10 mt-[103px] " >
                
                <h2 className="max-w-[80%] mx-auto mb-5 md:mb-7 lg:mb-[49px] 
                    font-black text-center text-2xl md:text-5xl lg:text-[70px] lg:leading-[86px]
                    tracking-[2.323px] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] " >
                    From your wallet to <br className="hidden md:block" /> their hearts
                </h2>
                <p className="mb-5 md:mb-7 lg:mb-[60px] text-sm md:text-xl lg:text-[33px] font-merriweather md:font-arial text-center lg:leading-[45px] tracking-[0.5px] " >
                    Start your crowdfunding campaign. Make online donation <br className="hidden md:block" /> by using your bank card or USDT
                </p>
                <button className="max-w-[85%] mb-7 md:mb-14 lg:mb-[100px] 
                    px-8 md:px-12 lg:px-[52px] hover:md:px-12 hover:lg:px-[72.5px]
                    transition-all duration-500 py-3 md:py-5 lg:py-[23.4px]
                    font-bold bg-black text-white rounded md:rounded-[10px]
                    text-base md:text-2xl lg:text-3xl mx-auto block font-arial"
                    onClick={()=>{navigate('/anonymouscrowdfund')}} 
                     >
                    Start a crowdfund
                </button>

                <div className={`mb-8 lg:mb-[113px] w-[90%] max-w-[1306px] bg-[#033F59] mx-auto pt-[30px] md:pt-10 lg:pt-[77px] pb-[30px] md:pb-10 lg:pb-[20px] 
                    px-8 lg:pl-[120px] lg:pr-[120px] 3xl:pr-[140px] flex flex-col items-center justify-between lg:block
                    rounded-md md:rounded-xl lg:rounded-[20px] shadow-[13px_7px_58px_-9px_rgba(3,63,89,0.25)]
                    font-arial
                    `} >

                    <h4 className="mb-9 md:mb-14 lg:mb-[70px] text-xl md:text-3xl md:leading-[48px] lg:text-[48px] font-black lg:leading-[73px] tracking-[0.069px] text-center text-white
                    font-merriweather " >
                        Fundraising in Palbucks takes just <br className="hidden lg:block" /> <span className="text-[#35FAA0]" > few minutes</span>
                    </h4>

                    <div className={` lg:mr-[110px] 2xl:mr-[130px] 3xl:mr-[150px]  relative max-w-[620px] py-2 lg:py-[15px] px-3 lg:px-[25px] rounded lg:rounded-[6.4px] rounded-tr-[21px] lg:rounded-tr-[55px] 
                        bg-[#F9F9F9] inline-block shadow-[0px_0px_20.715068817138672px_0px_rgba(0,0,0,0.04)] `}>
                        <div className="">
                            <img src={step1icon} alt="Step one icon" className="absolute -top-3 phones:-top-[15%] -left-[3%] w-8 xphones:w-10 lg:w-[70.5px]" />
                        </div>

                        <h5 className="text-sm xphones:text-base lg:text-[25px] font-bold mb-2 lg:mb-3 ml-6 lg:ml-[40px] ">
                            Begin with the Basics
                        </h5>
                        <p className="text-[#525252] text-xs xphones:text-sm lg:text-xl tracking-[1.036px]">
                            Start by laying out the basic details of your crowdfunding campaign. Make sure you have a perfectly descriptive title.
                        </p>
                    </div>

                    <img src={stepdown} alt="Step down icon pointing to next step" className="mb-10 lg:mb-[75px] inline-block relative top-5 lg:top-20 rotate-45 lg:rotate-0 w-9 lg:w-[183px] "  />

                    <div className={` lg:mt-20 lg:ml-auto mb-5 lg:mb-[90px]  relative max-w-[620px] py-2 lg:py-[15px] px-3 lg:px-[25px] rounded lg:rounded-[6.4px] 
                        rounded-tr-[21px] lg:rounded-tr-[55px] bg-[#35FAA0] shadow-[0px_0px_20.715068817138672px_0px_rgba(0,0,0,0.04)] `}>
                        <div className="">
                            <img src={step2icon} alt="Step one icon" className="absolute -top-3 phones:-top-[15%] -left-[3%] w-8 xphones:w-10 lg:w-[70.5px]" />
                        </div>

                        <h5 className="text-sm xphones:text-base lg:text-[25px] font-bold mb-2 lg:mb-3 ml-6 lg:ml-[40px] ">
                            Tell them your Story
                        </h5>
                        <p className="text-xs xphones:text-sm lg:text-xl tracking-[1.036px]">
                            Describe to the world your story, so they can feel and understand what your mission is and more importantly, why you need them.
                        </p>
                    </div>

                    <img src={stepleft} alt="Step down icon pointing to next step" className="mb-10 lg:mb-0 lg:ml-auto lg:mr-20 2xl:mr-36 relative -rotate-[25.8deg] lg:rotate-0 w-9 lg:w-[183px] "  />

                    <div className={`relative max-w-[620px] lg:-top-[110px] py-2 lg:py-[15px] px-3 lg:px-[25px] rounded lg:rounded-[6.4px] rounded-tr-[21px] lg:rounded-tr-[55px]
                         bg-[#F9F9F9] shadow-[0px_0px_20.715068817138672px_0px_rgba(0,0,0,0.04)]   `}>
                        <div className="">
                            <img src={step3icon} alt="Step one icon" className="absolute -top-3 phones:-top-[15%] -left-[3%] w-8 xphones:w-10 lg:w-[70.5px]" />    
                        </div>

                        <h5 className="text-sm xphones:text-base lg:text-[25px] font-bold mb-2 lg:mb-3 ml-6 lg:ml-[40px] ">
                            Launch, Share and Amplify
                        </h5>
                        <p className="text-xs xphones:text-sm lg:text-xl text-[#525252] tracking-[1.036px]">
                            Seamlessly launch your campaign and leverage on our integrated social media features to amplify your campaign’s reach.
                        </p>
                    </div>

                </div>

                <div className ="w-[200px] md:w-[600px] h-screen absolute -z-10 right-0 top-[250px] md:top-[150px] ">
                    <img src={bgradient2} alt="" className="w-full " />
                    <img src={bgradient2} alt="" className=" w-full relative -top-[350px] " />
                    <img src={bgradient2} alt="" className="hidden md:block w-full relative -top-[950px] " />
                </div>

                <div className ="w-[200px] md:w-[600px] h-screen absolute -z-10 left-0 top-[480px] md:top-[380px] ">
                    <img src={bgradient1} alt="" className="w-full " />
                    <img src={bgradient1} alt="" className="w-full relative -top-[350px] " />
                    <img src={bgradient1} alt="" className="hidden md:block w-full relative -top-[1000px] " />
                </div>

                <h3 className="mb-4 lg:mb-[60px] ml-[5%] 2xl:ml-[8%] text-lg lg:text-[45px] text-[#000000] font-black lg:leading-[73px] tracking-[0.069px]  " >
                    Featured Crowdfunding Campaign
                </h3>

                <div className={` ${scrollState.isAtRightEnd ? 'ml-[0] 2xl:ml-[0]' : 'ml-[5%] 2xl:ml-[8%]'}  flex gap-5 lg:gap-[43px] mb-[25px] lg:mb-[35px] overflow-x-auto overflow-y-hidden pr-5 lg:pr-20 scrollContainer `}
                    ref={containerRef}
                    onScroll={() => {
                        handleScrollCheck()
                    }}
                >                    
                    <Landingcampaign image={landingcampaignimg3} value="23,543" target="100000" />
                    <Landingcampaign image={landingcampaignimg} value="1034" target="1500" />
                    <Landingcampaign image={landingcampaignimg2} value="54,223" target="250000" />
                </div>


                <div className="mb-[53px] lg:mb-[178px] mx-[5%] 2xl:mx-[8%] flex justify-between">
                    <img
                        src={backbtn}
                        alt=""
                        className={`w-[28px] lg:w-[44px] h-[28px] lg:h-[44px] rounded-full 
                        ${scrollState.isAtLeftEnd ? 'opacity-50' : 'cursor-pointer'}`}
                        onClick={() => {
                            handleScroll('left')
                        }}
                    />
                    <img
                        src={forwardbtn}
                        alt=""
                        className={`w-[28px] lg:w-[44px] h-[28px] lg:h-[44px] rounded-full 
                        ${scrollState.isAtRightEnd ? 'opacity-50' : 'cursor-pointer'}`}
                        onClick={() => {
                            handleScroll('right')
                        }}
                    />
                </div>

                <div className="mb-[30px] lg:mb-[113px] bg-[#024C2B] w-full pt-5 lg:pt-[68px] pb-[16px] px-2 phones:px-6 " >
                    <h4 className="mb-6 lg:mb-[55px] font-arial text-[#D8D8D8] text-center text-sm lg:text-[36px] font-bold lg:leading-[73px] tracking-[0.069px] " >
                        Features
                    </h4>

                    <h5 className="mb-5 lg:mb-[54px] text-xl lg:text-[74px] leading-8 lg:leading-[113px] tracking-[0.08px] font-black text-white text-center font-merriweather" >
                        Receive kind donations in <br className="hidden lg:block" /> <span className="text-[#35FAA0]" > Different Currencies</span>
                    </h5>

                    <p className="mb-14 lg:mb-[212px] font-arial text-white text-base lg:text-[36px] text-center lg:leading-[70px] tracking-[0.55px] " >
                        You can receive donations for your campaigns from anyone, <br className="hidden lg:block" /> anywhere around the world. We believe that location should <br className="hidden lg:block" />not be a barrier when it comes to raising funds for a cause
                    </p>
                    {/* I commented this part out cause it hinders my mobile view up, uncomment when mobile gets to this stage */}
                    <div className={`mx-auto mb-[86px] lg:mb-[300px] block w-fit font-arial ` }>                        
                        <div className={`mb-[22px] lg:mb-[72px] w-[250px] phones:w-[270px] lg:w-[800px] lg:h-[200px] bg-[#F9F9F9] -rotate-[5deg] rounded-md lg:rounded-[15px] py-2 lg:py-[23px] px-3 lg:px-[31px]`} >
                            <img src={like} alt="like icon" className="w-6 lg:w-[54px] absolute -top-3 lg:-top-7 -left-2 lg:-left-7 " />
                            <img src={joint} alt="joint icon" className="w-[14px] lg:w-[45px] h-5 lg:h-[60px] absolute -top-3 lg:-top-10 -right-1 lg:-right-5 "  />
                            <div className="flex gap-2 lg:gap-5">
                                <img src={profileimage} alt="profile pic" className="w-8 lg:w-[69px] h-8 lg:h-[69px] "  />
                                <div className="flex flex-col gap-[2px] lg:gap-2 ">
                                    <h6 className=" text-xs lg:text-[27px] font-black lg:leading-[25px] tracking-[0.119px] " >
                                        Davidflorin
                                    </h6>
                                    <p className="mb-[5px] text-[10px] lg:text-[21px] lg:leading-[35px] -tracking-[0.155px]  " >
                                        5 mins ago
                                    </p>   
                                    <p className="text-xs lg:text-[26px] lg:leading-8  " >
                                        Made a donation of $<span className="font-bold" >500</span> to your crowdfund campaign 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`mb-[22px] lg:mb-[72px] w-[250px] phones:w-[270px] lg:w-[800px] lg:h-[200px] bg-[#F9F9F9] rotate-[5deg] rounded-md lg:rounded-[15px] py-2 lg:py-[23px] px-3 lg:px-[31px]`} >
                            <img src={joint2} alt="like icon" className="w-5 lg:w-[45px] h-5 lg:h-[60px] absolute -top-3 lg:-top-7 -left-1 lg:-left-2 " />
                            <img src={like2} alt="joint icon" className="w-7 lg:w-[60px] absolute -top-3 lg:-top-7 -right-4 lg:-right-7"  />
                            <div className="flex gap-2 lg:gap-5">
                                <img src={profileimage2} alt="profile pic" className="w-8 lg:w-[69px] h-8 lg:h-[69px] "  />
                                <div className="flex flex-col gap-[2px] lg:gap-2 ">
                                    <h6 className="text-xs lg:text-[27px] font-black lg:leading-[25px] tracking-[0.119px] " >
                                        Anonymous
                                    </h6>
                                    <p className="mb-[5px] text-[10px] lg:text-[21px] lg:leading-[35px] -tracking-[0.155px]  " >
                                        20 hours ago
                                    </p>   
                                    <p className="text-xs lg:text-[26px] lg:leading-8  " >
                                        Made a donation of <span className="font-bold" >5000USDT</span> to your crowdfund campaign 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[250px] phones:w-[270px] lg:w-[800px] lg:h-[200px] bg-[#F9F9F9] -rotate-[5deg] rounded-md lg:rounded-[15px] py-2 lg:py-[23px] px-3 lg:px-[31px] ' >
                            <img src={like3} alt="like icon" className="w-6 lg:w-[54px] absolute -top-3 lg:-top-7 -left-2 lg:-left-7 " />
                            <img src={joint3} alt="joint icon" className="w-5 lg:w-[45px] h-5 lg:h-[63px] absolute -top-3 lg:-top-9 -right-1  lg:-right-2 "  />
                            <div className="flex gap-2 lg:gap-5">
                                <img src={profileimage3} alt="profile pic" className="w-7 lg:w-[69px] h-7 lg:h-[69px] "  />
                                <div className="flex flex-col gap-[2px] lg:gap-2 ">
                                    <h6 className=" text-xs lg:text-[27px] font-black lg:leading-[25px] tracking-[0.119px] " >
                                        MuabonjeRinga
                                    </h6>
                                    <p className="mb-[5px] text-[10px] lg:text-[21px] lg:leading-[35px] -tracking-[0.155px]  " >
                                        24 hours ago
                                    </p>   
                                    <p className="text-xs lg:text-[26px] lg:leading-8 " >
                                        Made a donation of $<span className="font-bold" >250</span> to your crowdfund campaign 
                                    </p>
                                </div>
                            </div>
                        </div>                

                    </div>

                    <h6 className="mb-6 lg:mb-[54px] text-xl lg:text-[74px] leading-8 lg:leading-[113px] font-black text-center text-white lg:tracking-[0.08px] " >
                        Amplify your Campaign by <br className="hidden lg:block" /> adding <span className="text-[#35FAA0]" >Co-organisers</span>
                    </h6>

                    <p className="mb-12 lg:mb-[133px] font-arial text-center text-[#FFFFFF] text-base lg:text-[36px] lg:leading-[70px] tracking-[0.552px] " >
                        You can add  participants as co - organisers  to your <br className="hidden lg:block" /> crowdfunding campaign. Team up with friends 
                        around the <br className="hidden lg:block" /> world to get your campaign amplified, and your mission <br className="hidden lg:block" /> accomplished        
                    </p>

                    <div className="mx-auto z-[10] relative bg-white  py-[5px] lg:py-3 px-3 lg:px-[33px] rounded-full w-[175px] lg:w-[350px] h-[35px] lg:h-[64px] -rotate-[0.203deg] flex items-center justify-center " >
                        <span className="text-base lg:text-[28px] font-arial font-bold leading-[50px] lg:leading-[121px] tracking-[0.088px] " >Add Co-organisers</span>
                    </div>

                    <div className="mb-[42px] lg:mb-[78px] mx-auto relative -top-[26px] lg:-top-14 -right-1 lg:-right-2  bg-[#35FAA0] py-[5px] lg:py-3 px-3 lg:px-[33px] rounded-full w-[175px] lg:w-[350px] h-[30px] lg:h-[64px] -rotate-[0.203deg] flex items-center justify-center " >
                    </div>
                    
                    {/* I commented this part out cause it hinders my mobile view up, uncomment when mobile gets to this stage */}
                    <div className="w-fit mx-auto mb-[84px] lg:mb-[301px] flex gap-[47px] lg:gap-[150px] xl:gap-[180px]">
                        <div className="lg:mr-16 flex flex-col items-center gap-[6.12pxy] lg:gap-[23px] " >
                            <img src={profileimage4} alt="profile pic" className="w-[60px] lg:w-[180px] xl:w-[217px]" />
                            <span className="text-base lg:text-[43px] lg:leading-[72px] font-black text-white" >
                                you
                            </span>
                            <img src={pointer} alt="pointer" className="w-[25px] lg:w-[94px] h-[11px] lg:h-[42px] "  />
                        </div>
                        <img src={plus} alt="plus icon" className="w-[24px] lg:w-[90px] h-[55px] lg:h-[206px] " />
                        <div className="flex">
                            <img src={profileimage5} alt="" className="w-[60px] lg:w-[180px] xl:w-[217px] h-[60px] lg:h-[180px] xl:h-[217px] rounded-full" />
                            <img src={profileimage6} alt="" className="w-[60px] lg:w-[180px] xl:w-[217px] h-[60px] lg:h-[180px] xl::h-[217px] rounded-full relative -left-4 lg:-left-16 " />
                        </div>
                        
                    </div>

                    <h6 className="mb-5 lg:mb-[89px] text-center text-white text-xl lg:text-[74px] font-black leading-8 lg:leading-[113px] tracking-[0.08px] " >
                        Withdraw Donations into <br className="hidden lg:block" /> your <span className="text-[#35FAA0]" >Crypto Wallet</span> or Directly <br className="hidden lg:block" /> into your <span className="text-[#35FAA0]" >Bank Account</span>
                    </h6>
                    <p className="mb-[50px] lg:mb-[100px] font-arial text-center text-lg lg:text-[36px] text-white lg:leading-[70px]  " >
                        All funds generated from your donation can be withdrawn <br className="hidden lg:block" /> immediately into your USDT cryptocurrency wallet or can be <br className="hidden lg:block" />
                         sent directly into your local bank account
                    </p>
                    {/* I commented this part out cause it hinders my mobile view up, uncomment when mobile gets to this stage */}
                    <div className="w-fit max-w-[90%] mx-auto">
                        <Landingnotification date = '13' amount = '5000 USDT' />
                        <Landingnotification date = '9' amount = '$987' />
                        <Landingnotification date = '3' amount = '$5783' />
                    </div>
                    
                </div>

                <h6 className="mb-[22px] lg:mb-[45px] ml-[5%] 2xl:ml-[8%] text-xl lg:text-[45px] lg:leading-[73px] tracking-[0.069px]  text-[#000000] font-black " >
                    Palbucks is for
                </h6>
                
                {/* I commented this part out cause it hinders my mobile view up, uncomment when mobile gets to this stage */}
                <div className="mb-[54px] lg:mb-[174px] font-arial mx-[5%] 2xl:mx-[8%]  flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-1 ">
                    <div className="relative rounded-md lg:rounded-lg w-full md:w-[380px] lg:w-[280px] xl:w-[380px] shadow-[0px_0px_4.016860485076904px_0px_rgba(0,0,0,0.20)]
                     bg-[#F9F9F9] px-6 xl:px-7 py-4 xl:py-5 flex flex-col gap-1 lg:gap-4 xl:gap-[25px]
                     items-center text-center  ">
                        <img src={oneicon} alt="" className="w-8 lg:w-[50px] absolute -right-3 lg:-right-7 -top-3 lg:-top-5" />
                        <p className="text-lg lg:text-[25px] xl:text-[33px] leading-9 lg:leading-[45px] font-bold " >
                            Yourself
                        </p>
                        <p className="text-[16px] lg:text-[18px] xl:text-[26px] text-[#525252] " > 
                            Start a crowdfunding campaign for yourself to meet up necessary need, or to fulfil a mission of yours. 
                        </p>
                    </div>

                    <div className="relative rounded-md lg:rounded-lg w-full md:w-[380px] lg:w-[270px] xl:w-[380px] 
                    shadow-[0px_0px_4.016860485076904px_0px_rgba(0,0,0,0.20)] bg-[#35FAA0]
                    px-6 xl:px-7 py-4 xl:py-5 flex flex-col gap-1 lg:gap-4 xl:gap-[25px] items-center text-center  ">
                        <img src={twoicon} alt="" className="w-8 lg:w-[50px] absolute -right-3 lg:-right-7 -top-3 lg:-top-5" />
                        <p className="text-lg lg:text-[25px] xl:text-[33px] leading-9 lg:leading-[45px] font-bold " >
                            Family & Friends
                        </p>
                        <p className="text-[16px] lg:text-[18px] xl:text-[27px] text-black " > 
                            You can also start a crowdfunding campaign on behalf of a family member or a friend. 
                        </p>
                    </div>

                    <div className="relative rounded-md lg:rounded-lg w-full md:w-[380px] lg:w-[270px] xl:w-[380px] 
                    shadow-[0px_0px_4.016860485076904px_0px_rgba(0,0,0,0.20)] bg-[#F9F9F9]
                    px-6 xl:px-7 py-4 xl:py-5 flex flex-col gap-1 lg:gap-4 xl:gap-[25px] items-center text-center  ">
                        <img src={threeicon} alt="" className="w-8 lg:w-[50px] absolute -right-3 lg:-right-7 -top-3 lg:-top-5" />
                        <p className="text-lg lg:text-[25px] xl:text-[33px] leading-9 lg:leading-[45px] font-bold " >
                            Charity
                        </p>
                        <p className="text-[16px] lg:text-[18px] xl:text-[27px] text-[#525252] " > 
                            Charity Institutions are allowed to raise funds for different causes or needs that might arise overtime.
                        </p>
                    </div>
                </div>

                <button className="mb-[15px] lg:mb-[33px] font-arial px-[26px] lg:px-[52px] hover:px-[72.5px] py-[10.4px] lg:py-[23.4px] transition-all duration-500 font-bold bg-black text-white rounded lg:rounded-[10px] text-base lg:text-3xl mx-auto block " 
                    onClick={()=>{navigate('/anonymouscrowdfund')}} 
                >
                    Start a crowdfund
                </button>

                <p className="mb-10 lg:mb-[123px] font-arial text-base lg:text-[33px] text-center lg:leading-[55px] " >
                    Its totally free to get started
                </p>

                {/* <hr className="mx-[5%] 2xl:mx-[8%]" /> */}
                
                <footer className="lg:mx-[5%] 2xl:mx-[8%] font-arial border-t-[#D8D8D8] lg:border-t-[#525252] border-t-[1px] py-[29px] ">
                    <nav className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-[46px] " >
                        <div className="order-2 lg:order-1 flex flex-col lg:flex-row items-center gap-5 lg:gap-7 xl:gap-[46px] ">
                            <Link to = '/termsofuse' className="text-[#525252] text-base lg:text-lg py-[5px] px-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                                <span>Terms of use</span>
                            </Link>
                            <Link to = '/privacypolicy' className="text-[#525252] text-base lg:text-lg py-[5px] px-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                                <span>Privacy Policy</span>
                            </Link>
                            <Link to = '/helpcenter' className="text-[#525252] text-base lg:text-lg py-[5px] px-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                                <span>Help Center</span>
                            </Link>
                            <Link to = '/communityguidelines' className="text-[#525252] text-base lg:text-lg py-[5px] px-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                                <span>Community Guidelines</span>
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col lg:flex-row gap-[15px] lg:gap-[38px] items-center ">
                            <div className="order-2 lg:order-1 flex gap-[5px] ">
                                <img src={copyrighticon} alt="copyright icon" className="w-[18px] lg:w-6" />
                                <span className=" text-[#525252] text-base lg:text-lg " >2023 Palbucks</span>
                            </div>
                            <div className=" order-1 lg:order-2 flex gap-[30px] lg:gap-[38px] items-center">
                                <img src={twittericon} alt="twitter icon" className="w-[15px] lg:w-5 h-3 lg:h-4" />
                                <img src={instagramicon} alt="instagram icon" className="w-[15px] lg:w-5" />
                            </div>
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