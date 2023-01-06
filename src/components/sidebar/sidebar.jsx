import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import palbuckslogo from '../../images/palbucks logo22.png'
import applogo from '../../images/applogo.svg'
import enlargeicon from '../../images/Enlarge icon.svg'
import closeicon from '../../images/hamburger menu.svg'
import homeicon from '../../images/home.svg'
import organizeicon from '../../images/organize.svg'
import walleticon from '../../images/walleticon.svg'
import settingsicon from '../../images/settings.svg'
import logouticon from '../../images/logout.svg'

import Navelements from '../navelements/navelements'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closesidebar, opensidebar } from '../../actions/actions'

function Sidebar(){

    const sidebaropen = useSelector(state => state.sidebarstate)
    const dispatch  = useDispatch()

    //This manages the whole sidebar state both for mobile and collapsed sidebar on desktop
    const managesidebar = () =>{        
        if(isMobile){
            if(sidebaropen == true)
                dispatch(closesidebar())                          
        }
    }

    //a react package for responsiveness
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    
    return(
        <div className = {` ${ isMobile ? sidebaropen ? 'left-0' : '-left-full' : 'left-0' }  md:block w-[80%] minitablet:w-[320px]
         md:w-[250px] lg:w-[280px] xl:w-[320px] h-full fixed z-30 overflow-x-hidden top-0 border-orange-600 border-0 px-[25px] 
         py-16 md:py-[35px] bg-white flex-shrink-0 transition-all duration-1000 ease-in-out `} >
            
            <div className = 'mb-[60px] md:mb-[40px]'>
                
                <div className = {`absolute md:relative  md:float-none flex md:mx-auto gap-4 items-center justify-center mb-5 `} > 
                    <img src={applogo} alt="Palbucks logo" className = 'cursor-pointer w-5 md:w-6 ' />
                    <h1 className = "font-bold text-[#2CA9F2] text-xl md:text-2xl leading-6 tracking-widest" >Palbucks</h1>
                </div>

                <img src={isMobile ? closeicon : enlargeicon} alt="Enlarge sidebar icon" className = {`cursor-pointer 
                    ${isMobile ? 'w-[20px] absolute right-5 ' : 'w-[34px] h-[37px] float-right' } `}
                    onClick = {managesidebar}
                />
                
            </div>
            <nav className='py-10 flex flex-col gap-[50px]'>
                {/* <div className = 'flex gap-4 items-center' >
                    <img src={homeicon} alt="Homepage icon" />
                    <h2>Home</h2>
                </div>                           
                <div className = 'flex gap-4 items-center'>
                    <img src={organizeicon} alt="Organize icon" />
                    <h2>Organize Crowdfund</h2>
                </div>
                <div className = 'flex gap-4 items-center'>
                    <img src={walleticon} alt="Wallet icon" />
                    <h2>Wallet</h2>
                </div>
                <div className = 'flex gap-4 items-center'>
                    <img src={settingsicon} alt="settings icon" />
                    <h2>Settings & Privacy</h2>
                </div>                 */}
                
                <Link to = '/' >
                    <Navelements image = {homeicon} alt="Homepage icon" title = 'Home' />
                </Link>

                <Navelements image = {organizeicon} alt="Organize icon" title = 'Organize Crowdfund' />
                <Navelements image = {walleticon} alt="wallet icon" title = 'Wallet' />
                
                <Link to = 'settings' >
                    <Navelements image = {settingsicon} alt="settings icon" title = 'Settings & Privacy' />
                </Link>
            </nav>

            <div className = 'absolute bottom-12 flex items-center gap-4 text-[#525252] text-base xl:text-lg font-medium cursor-pointer'>
                <img src={logouticon} alt="Logout icon" className="w-[24px]" />
                <h3>Logout</h3>
            </div>
            
        </div>
    )
}

export default Sidebar;