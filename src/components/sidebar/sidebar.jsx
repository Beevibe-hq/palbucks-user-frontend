import { Link,NavLink, useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


import palbucks from '../../images/palbucks2.svg'
import applogo from '../../images/appLogo.svg'
import enlargeicon from '../../images/Enlarge icon.svg'
import closeicon from '../../images/hamburger menu.svg'
import homeicon from '../../images/home.svg'
import activehomeicon from '../../images/homeicon.svg'
import crowdfundicon from '../../images/crowdfundicon.svg'
import crowdfundicon2 from '../../images/crowdfundicon2.svg'
import walleticon from '../../images/walleticon2.svg'
import walleticon2 from '../../images/wallet/walleticon.svg'
import settingsicon from '../../images/settingsicon.svg'
import settingsicon2 from '../../images/settingsicon2.svg'
import activesettingsicon from '../../images/settings1.svg'
import logouticon from '../../images/logout.svg'
import arrowright from '../../images/arrowright.svg'
import arrowwhite from '../../images/arrowwhite.svg'
import arrowDown from "../../images/Front arrow icon.svg"
import outIcon from "../../images/Out.svg"

import Navelements from '../navelements/navelements'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closesidebar, increasesidebar, opensidebar, reducesidebar, setIsAuthenticated, setlinkcolor, setLogoutLoading } from '../../actions/actions'
import { baseUrl, checkAuthentication } from '../../auth/checkauthentication'
import { persistor } from '../..'

function Sidebar(){

    const navigate = useNavigate()

    const logoutLoading = useSelector(state=> state.authReducer.isLoading)

    //const [sidebarslid, setsidebarslid] = useState(true)
    const sidebarslid = useSelector(state => state.sidebarslid)
    
    const sidebaropen = useSelector(state => state.sidebarstate)
    const dispatch  = useDispatch()

    const activepage = useSelector(state => state.managelinkcolor)
    
    //This manages the whole sidebar state both for mobile and collapsed sidebar on desktop
    const managesidebar = () =>{        
        if(isMobile){
            if(sidebaropen == true)
                dispatch(closesidebar())                          
        }else{
            sidebarslid ? dispatch(reducesidebar()) : dispatch(increasesidebar())
        }
    }

    //a react package for responsiveness
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const handleLogout = async () => {
        dispatch(setLogoutLoading(true));
        console.log('starting Log out');

        // Close the sidebar
        if (isMobile) {
            managesidebar();
        }

        try {
            const logout = await fetch(`${baseUrl}/users/api/logout/`, {
                method: 'POST',
            });

            const logoutResponse = await logout.json();
            console.log(logoutResponse);

            if (logout.ok) {
                // Clear all data from localStorage
                await persistor.purge();
                localStorage.clear()

                // check authentication again to logout everything
                await checkAuthentication(dispatch);

                dispatch(setLogoutLoading(false));

                // Navigate to login page
                navigate('/signin');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const [supportView, setSupportView] = useState(false)
      
    
    return(
        <div className={`${
            isMobile ? 
            (sidebaropen ? 'left-0 w-[80%] minitablet:w-[60%] overflow-y-auto scrollContainer' : '-left-full') : 
            (sidebarslid ? 'w-[100px] flex flex-col items-center' : 'md:block w-[90%] minitablet:w-[60%] overflow-y-auto brkpoint:w-[250px] lg:w-[280px] xl:w-[320px]')
        } h-full fixed z-30 top-0 bottom-0 border-orange-600 border-0 py-16 md:py-[35px] bg-white flex-shrink-0 transition-all duration-500 ease-in-out font-arial`}
        >
            
            <div className = 'mb-[60px] lg:mb-0'>
                
                <div className={`absolute left-[15px] md:left-0  brkpoint:relative brkpoint:float-none flex gap-2 items-center justify-start md:px-5 mb-5 cursor-pointer `}
                    onClick={() => {
                        navigate('/home');
                }}> 
                    <img src={applogo} alt="Palbucks logo" className = 'cursor-pointer w-5 md:w-6 ' />
                    {/* <h1 className = {` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } font-bold text-[#033F59] text-xl md:text-2xl leading-6 tracking-tighter `} >Palbucks</h1> */}
                    <img src={palbucks} alt="palbucks" className = {` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } w-[100px] h-[18px] `} />
                </div>

                <img src={isMobile ? closeicon : enlargeicon} alt="Enlarge sidebar icon" className = {`cursor-pointer 
                    ${isMobile ? 'w-[20px] absolute right-5 ' : `w-[34px] h-[37px] absolute ${sidebarslid ? 'float-right' :'right-5' }` } `}
                    onClick = {managesidebar}
                />                
                
            </div>

            <nav className={` ${sidebarslid ? '':'' } w-full brkpoint:mt-[50px] brkpoint:py-10 flex flex-col gap-0 `}>                
                
                <NavLink to = '/home'
                    className={` ${activepage == 'home' ? 'text-[#FFFFFF] font-black bg-[#37BCF7] ' : 'hover:bg-[#37BCF71A] text-[#525252] font-medium'} } `}
                    onClick = { () => { 
                        dispatch(setlinkcolor('home'))
                        dispatch(closesidebar())
                        
                    } }                   
                 >                       
                    <div className="h-[82px] flex items-center justify-between px-[15px] md:px-5 ">
                        <div className = {`flex gap-[10px] items-center text-xl cursor-pointer`}  >
                            <img src={ activepage == 'home' ? activehomeicon : homeicon } alt="homepage icon" className = 'w-[20px]' />
                            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-base leading-4 ${activepage == 'home' ? 'font-black':'font-normal' } `}>Home</h2>
                        </div>
                        <img src={activepage == 'home' ? arrowwhite : arrowright} alt="right arrow" className='w-[7px] h-[12px]' />

                    </div>
                </NavLink>
            
                <NavLink to = '/organisecrowdfund'
                    className={` ${activepage == 'organisecrowdfund' ? 'text-[#FFFFFF] font-black bg-[#37BCF7]' : 'hover:bg-[#37BCF71A] text-[#525252] font-medium'} } `}
                    onClick = { () => { 
                        dispatch(setlinkcolor('organisecrowdfund')) 
                        dispatch(closesidebar())
                    } }                   
                 >                       
                    <div className="h-[82px] flex items-center justify-between px-[15px] md:px-5 ">
                        <div className = {`flex gap-[10px] items-center text-xl cursor-pointer`}  >
                            <img src={ activepage == 'organisecrowdfund' ? crowdfundicon : crowdfundicon2 } alt="organise crowdfund icon" className = 'w-[20px]' />
                            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-base leading-4 ${activepage == 'organisecrowdfund' ? 'font-semibold':'font-normal' } `}>Organise Crowdfund</h2>
                        </div>
                        <img src={activepage == 'organisecrowdfund' ? arrowwhite : arrowright} alt="right arrow" className='w-[7px] h-[12px]' />

                    </div>
                </NavLink>

                <NavLink to = '/wallet'
                    className={` ${activepage == 'wallet' ? 'text-[#FFFFFF] font-black bg-[#37BCF7]' : 'hover:bg-[#37BCF71A] text-[#525252] font-medium'} } `}
                    onClick = { () => { 
                        dispatch(setlinkcolor('wallet')) 
                        dispatch(closesidebar())
                    } }                   
                 >                       
                    <div className="h-[82px] flex items-center justify-between px-[15px] md:px-5 ">
                        <div className = {`flex gap-[10px] items-center text-xl cursor-pointer`}  >
                            <img src={ activepage == 'wallet' ? walleticon2 : walleticon } alt="wallet icon" className = 'w-[20px]' />
                            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-base leading-4 ${activepage == 'wallet' ? 'font-semibold':'font-normal' } `}>Wallet</h2>
                        </div>
                        <img src={activepage == 'wallet' ? arrowwhite : arrowright} alt="right arrow" className='w-[7px] h-[12px]' />

                    </div>
                </NavLink>
                
                <NavLink to = '/settings'
                    className={` ${activepage == 'settings' ? 'text-[#FFFFFF] font-black bg-[#37BCF7]' : 'hover:bg-[#37BCF71A] text-[#525252] font-medium'} } `}
                    onClick = { () => { 
                        dispatch(setlinkcolor('settings')) 
                        dispatch(closesidebar())
                    } }                   
                 >                       
                    <div className={` h-[82px] flex items-center justify-between px-[15px] md:px-5 `}>
                        <div className = {`flex gap-[10px] items-center text-xl cursor-pointer`}  >
                            <img src={ activepage == 'settings' ? settingsicon : settingsicon2 } alt="settings crowdfund icon" className = 'w-[20px]' />
                            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-base leading-4 ${activepage == 'settings' ? 'font-semibold':'font-normal' } `}>Settings & Privacy</h2>
                        </div>
                        <img src={activepage == 'settings' ? arrowwhite : arrowright} alt="right arrow" className='w-[7px] h-[12px]' />

                    </div>
                </NavLink>

                <div className="px-[15px] py-[30px]">
                    <div className={` md:hidden border-t-[#888888] border-t-[0.5px] `} >                        
                        <div
                            onClick={() => {
                                setSupportView(!supportView)
                            }}
                            className={`flex gap-[10px] items-center justify-between cursor-pointer py-6 `}
                        >
                            <h2 className='text-base leading-4 text-[#525252] ' >
                                Support & Legal
                            </h2>
                            <img src={arrowDown} alt="down arrow" className={`w-[18px] ${supportView? 'rotate-180' : ''} `} />
                        </div>
                        <ul className={` ${supportView ? '' : 'hidden'} text-[#525252] text-sm border-l-[1px] border-l-[#37BCF7] pl-2 flex flex-col gap-1 `} >
                            <Link to='/howitworks'
                                onClick={() => {
                                    dispatch(closesidebar())
                                }}
                            >
                                <li className='pb-2' >
                                    How it works
                                </li>
                            </Link>
                            
                            <Link to='/helpcenter'
                                onClick={() => {
                                    dispatch(closesidebar())
                                }}
                            >
                                <li className='py-2' >
                                    Help center
                                </li>
                            </Link>
                            
                            <Link to='/termsofuse'
                                onClick={() => {
                                    dispatch(closesidebar())
                                }}
                            >
                                <li className='py-2' >
                                    Terms of use
                                </li>
                            </Link>
                            
                            <Link to='/termsofuse'
                                onClick={() => {
                                    dispatch(closesidebar())
                                }}
                            >
                                <li className='py-2' >
                                    Terms of use
                                </li>
                            </Link>
                            
                            <Link to='/privacypolicy'
                                onClick={() => {
                                    dispatch(closesidebar())
                                }}
                            >
                                <li className='py-2' >
                                    Privacy policy
                                </li>
                            </Link>

                            <Link to='/communityguidelines'
                                onClick={() => {
                                    dispatch(closesidebar())
                                }}
                            >
                                <li className='py-2' >
                                    Community guidelines
                                </li>
                            </Link>

                            <Link to='/communityguidelines'
                                onClick={() => {
                                    dispatch(closesidebar())
                                }}
                            >
                                <li className='py-2 flex justify-between w-full' >
                                    <span className=''>AML policy</span>
                                    <img src={outIcon} alt="" className='w-[14px]' />
                                </li>
                            </Link>

                            <Link to='/communityguidelines'
                                onClick={() => {
                                    dispatch(closesidebar())
                                }}
                            >
                                <li className='pt-2 flex justify-between w-full' >
                                    <span className=''>KYC guidelines</span>
                                    <img src={outIcon} alt="" className='w-[14px]' />
                                </li>
                            </Link>

                        </ul>

                    </div>
                </div>

            </nav>

            <div 
                className={`md:absolute md:bottom-[5%] md:left-5 flex items-center gap-4 text-[#525252] text-base xl:text-lg font-normal cursor-pointer
                px-[15px] md:px-0
                `}
                onClick={handleLogout}
            >
                <img src={logouticon} alt="Logout icon" className="w-[24px]" />
                <h3 className={` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } `} >Logout</h3>
            </div>
            
        </div>
    )
}

export default Sidebar;