import { Link,NavLink } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import palbuckslogo from '../../images/palbucks logo22.png'
import applogo from '../../images/appLogo.svg'
import enlargeicon from '../../images/Enlarge icon.svg'
import closeicon from '../../images/hamburger menu.svg'
import homeicon from '../../images/home.svg'
import activehomeicon from '../../images/home1.svg'
import organizeicon from '../../images/organize.svg'
import walleticon from '../../images/walleticon.svg'
import settingsicon from '../../images/settings.svg'
import activesettingsicon from '../../images/settings1.svg'
import logouticon from '../../images/logout.svg'

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
        brkpoint:w-[250px] lg:w-[280px] xl:w-[320px]` }  h-full fixed z-30 overflow-x-hidden top-0 border-orange-600 border-0 px-5 lg:px-[25px] 
         py-16 md:py-[35px] bg-white flex-shrink-0 transition-all duration-500 ease-in-out `} >
            
            <div className = 'mb-[60px] lg:mb-0'>
                
                <div className = {`absolute brkpoint:relative  brkpoint:float-none flex brkpoint:mx-auto gap-4 items-center justify-center mb-5 `} > 
                    <img src={applogo} alt="Palbucks logo" className = 'cursor-pointer w-5 md:w-6 ' />
                    <h1 className = {` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } font-bold text-[#2CA9F2] text-xl md:text-2xl leading-6 tracking-widest`} >Palbucks</h1>
                </div>

                <img src={isMobile ? closeicon : enlargeicon} alt="Enlarge sidebar icon" className = {`cursor-pointer 
                    ${isMobile ? 'w-[20px] absolute right-5 ' : 'w-[34px] h-[37px] float-right' } `}
                    onClick = {managesidebar}
                />                
                
            </div>

            <nav className={` ${sidebarslid ? '':'' } py-10 flex flex-col gap-[50px]`}>                
                
                <NavLink to = '/'
                    className={({ isActive }) =>
                    isActive ? 'text-[#2CA9F2] font-bold' : 'text-[#525252] font-medium'} 
                    onClick = { () => {
                            dispatch(setlinkcolor('home'))
                        }
                    }                   
                 >
                    {/* <Navelements image = { pagelinkcolor == 'home' ? homeicon : settingsicon } alt="Homepage icon" title = 'Home'
                     pagelinkcolor = {pagelinkcolor} /> */}
                     
                    <div className = {`flex gap-4 items-center text-xl cursor-pointer`}  >
                        <img src={ activepage == 'home' ? activehomeicon : homeicon } alt="homepage icon" className = 'w-[20px]' />
                        <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-[18px] minitablet:text-base leading-4 xl:text-lg`}>Home</h2>
                    </div>                     
                </NavLink>

                <NavLink to = '/wallet'
                    className={({ isActive }) =>
                    isActive ? 'text-[#2CA9F2] font-bold' : 'text-[#525252]'} 
                >
                    <Navelements image = {organizeicon} alt="Organize icon" title = 'Organize Crowdfund' />
                </NavLink>
            
                <NavLink to = '/wallet'
                    className={({ isActive }) =>
                    isActive ? 'text-[#2CA9F2] font-bold' : 'text-[#525252]'}                                    
                >
                    <Navelements image = {walleticon} alt="wallet icon" title = 'Wallet' />                
                </NavLink>
                
                <NavLink to = '/settings'
                    className={({ isActive }) =>
                    isActive ? 'text-[#2CA9F2] font-bold' : 'text-[#525252] font-medium'}                    
                    onClick = {() =>{                         
                        dispatch(setlinkcolor('settings'))
                        } } >
                    
                    <div className = {`flex gap-4 items-center text-xl cursor-pointer`}  >
                        <img src={ activepage == 'settings' ? activesettingsicon : settingsicon } alt="settings icon" className = 'w-[20px]' />
                        <h2 className={`${ isMobile? 'block': sidebarslid ? 'hidden' : 'block' } text-[18px] minitablet:text-base leading-4 xl:text-lg`}>Settings</h2>
                    </div>                     
                    {/* <Navelements image = {settingsicon} alt="settings icon" title = 'Settings & Privacy' /> */}
                </NavLink>

            </nav>

            <div className = 'absolute bottom-[5%] flex items-center gap-4 text-[#525252] text-base xl:text-lg font-medium cursor-pointer'>
                <img src={logouticon} alt="Logout icon" className="w-[24px]" />
                <h3 className={` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } `} >Logout</h3>
            </div>
            
        </div>
    )
}

export default Sidebar;