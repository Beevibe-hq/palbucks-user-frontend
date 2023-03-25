import { Link,NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import palbuckslogo from '../../images/palbucks logo22.png'
import palbucks from '../../images/palbucks.svg'
import applogo from '../../images/appLogo.svg'
import enlargeicon from '../../images/Enlarge icon.svg'
import closeicon from '../../images/hamburger menu.svg'
import homeicon from '../../images/home.svg'
import activehomeicon from '../../images/homeicon.svg'
import crowdfundicon from '../../images/crowdfundicon.svg'
import crowdfundicon2 from '../../images/crowdfundicon2.svg'
import walleticon from '../../images/walleticon2.svg'
import settingsicon from '../../images/settingsicon.svg'
import settingsicon2 from '../../images/settingsicon2.svg'
import activesettingsicon from '../../images/settings1.svg'
import logouticon from '../../images/logout.svg'
import arrowright from '../../images/arrowright.svg'
import arrowwhite from '../../images/arrowwhite.svg'

import Navelements from '../navelements/navelements'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closesidebar, increasesidebar, opensidebar, reducesidebar, setlinkcolor } from '../../actions/actions'

function Sidebar(){

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

    
    return(
        <div className = {` ${ isMobile ? sidebaropen ? 'left-0 w-[80%] minitablet:w-[60%] ' : '-left-full' : sidebarslid ? 'w-[100px] flex flex-col items-center' : `md:block w-[90%] minitablet:w-[60%]
        brkpoint:w-[250px] lg:w-[280px] xl:w-[320px]` }  h-full fixed z-30 overflow-x-hidden top-0 border-orange-600 border-0  py-16 md:py-[35px]
        bg-white flex-shrink-0 transition-all duration-500 ease-in-out `} >
            
            <div className = 'mb-[60px] lg:mb-0'>
                
                <div className = {`absolute left-[5px]  brkpoint:relative  brkpoint:float-none flex brkpoint:mx-auto gap-2 items-center justify-center mb-5 `} > 
                    <img src={applogo} alt="Palbucks logo" className = 'cursor-pointer w-5 md:w-6 ' />
                    {/* <h1 className = {` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } font-bold text-[#033F59] text-xl md:text-2xl leading-6 tracking-tighter `} >Palbucks</h1> */}
                    <img src={palbucks} alt="palbucks" className = {` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } w-[100px] h-[18px] `} />
                </div>

                <img src={isMobile ? closeicon : enlargeicon} alt="Enlarge sidebar icon" className = {`cursor-pointer 
                    ${isMobile ? 'w-[20px] absolute right-5 ' : `w-[34px] h-[37px] absolute ${sidebarslid ? 'float-right' :'right-5' }` } `}
                    onClick = {managesidebar}
                />                
                
            </div>

            <nav className={` ${sidebarslid ? '':'' } w-full brkpoint:mt-[50px] brkpoint:py-10 flex flex-col gap-0 font-merriweather `}>                
                
                <NavLink to = '/'
                    className={` ${activepage == 'home' ? 'text-[#FFFFFF] font-black bg-[#37BCF7] ' : 'text-[#525252] font-medium'} } `}
                    onClick = { () => { dispatch(setlinkcolor('home')) } }                   
                 >                       
                    <div className="h-[82px] flex items-center justify-between px-[10px] md:px-5 ">
                        <div className = {`flex gap-[10px] items-center text-xl cursor-pointer`}  >
                            <img src={ activepage == 'home' ? activehomeicon : homeicon } alt="homepage icon" className = 'w-[20px]' />
                            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-[16px] minitablet:text-base leading-4 xl:text-base`}>Home</h2>
                        </div>
                        <img src={activepage == 'home' ? arrowwhite : arrowright} alt="right arrow" className='w-[7px] h-[12px]' />

                    </div>
                </NavLink>
            
                <NavLink to = '/organisecrowdfund'
                    className={` ${activepage == 'organisecrowdfund' ? 'text-[#FFFFFF] font-black bg-[#37BCF7]' : 'text-[#525252] font-medium'} } `}
                    onClick = { () => { dispatch(setlinkcolor('organisecrowdfund')) } }                   
                 >                       
                    <div className="h-[82px] flex items-center justify-between px-[10px] md:px-5 ">
                        <div className = {`flex gap-[10px] items-center text-xl cursor-pointer`}  >
                            <img src={ activepage == 'organisecrowdfund' ? crowdfundicon : crowdfundicon2 } alt="organise crowdfund icon" className = 'w-[20px]' />
                            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-[16px] minitablet:text-base leading-4 xl:text-base`}>Organise Crowdfund</h2>
                        </div>
                        <img src={activepage == 'organisecrowdfund' ? arrowwhite : arrowright} alt="right arrow" className='w-[7px] h-[12px]' />

                    </div>
                </NavLink>

                <NavLink to = '/wallet'
                    className={` ${activepage == 'wallet' ? 'text-[#FFFFFF] font-black bg-[#37BCF7]' : 'text-[#525252] font-medium'} } `}
                    onClick = { () => { dispatch(setlinkcolor('wallet')) } }                   
                 >                       
                    <div className="h-[82px] flex items-center justify-between px-[10px] md:px-5 ">
                        <div className = {`flex gap-[10px] items-center text-xl cursor-pointer`}  >
                            <img src={ activepage == 'wallet' ? walleticon : walleticon } alt="wallet icon" className = 'w-[20px]' />
                            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-[16px] minitablet:text-base leading-4 xl:text-base`}>Wallet</h2>
                        </div>
                        <img src={activepage == 'wallet' ? arrowwhite : arrowright} alt="right arrow" className='w-[7px] h-[12px]' />

                    </div>
                </NavLink>
                
                <NavLink to = '/settings'
                    className={` ${activepage == 'settings' ? 'text-[#FFFFFF] font-black bg-[#37BCF7]' : 'text-[#525252] font-medium'} } `}
                    onClick = { () => { dispatch(setlinkcolor('settings')) } }                   
                 >                       
                    <div className="h-[82px] flex items-center justify-between px-[10px] md:px-5 ">
                        <div className = {`flex gap-[10px] items-center text-xl cursor-pointer`}  >
                            <img src={ activepage == 'settings' ? settingsicon : settingsicon2 } alt="settings crowdfund icon" className = 'w-[20px]' />
                            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-[16px] minitablet:text-base leading-4 xl:text-base`}>Settings & Privacy</h2>
                        </div>
                        <img src={activepage == 'settings' ? arrowwhite : arrowright} alt="right arrow" className='w-[7px] h-[12px]' />

                    </div>
                </NavLink>

            </nav>

            <div className = 'absolute bottom-[5%] left-[10px] md:left-5 flex items-center gap-4 text-[#525252] text-base xl:text-lg font-normal cursor-pointer'>
                <img src={logouticon} alt="Logout icon" className="w-[24px]" />
                <h3 className={` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } font-merriweather `} >Logout</h3>
            </div>
            
        </div>
    )
}

export default Sidebar;