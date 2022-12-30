import palbuckslogo from '../../images/palbucks logo22.png'
import enlargeicon from '../../images/Enlarge icon.svg'
import homeicon from '../../images/home.svg'
import organizeicon from '../../images/organize.svg'
import walleticon from '../../images/walleticon.svg'
import settingsicon from '../../images/settings.svg'
import logouticon from '../../images/logout.svg'

import Navelements from '../navelements/navelements'

function Sidebar(){

    return(
        <div className = 'hidden md:block w-[250px] lg:w-[280px] xl:w-[320px] h-full fixed z-10 overflow-x-hidden top-0 border-orange-600 border-0 px-[25px] py-[35px] bg-white flex-shrink-0'>
            
            <div className = 'mb-[40px]'>
                <img src={palbuckslogo} alt="Palbucks logo" className = 'mx-auto cursor-pointer' />
                <img src={enlargeicon} alt="Enlarge sidebar icon" className = 'float-right w-[34px] h-[37px] cursor-pointer ' />
                
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
                <Navelements image = {homeicon} alt="Homepage icon" title = 'Home' />
                <Navelements image = {organizeicon} alt="Organize icon" title = 'Organize Crowdfund' />
                <Navelements image = {walleticon} alt="wallet icon" title = 'Wallet' />
                <Navelements image = {settingsicon} alt="settings icon" title = 'Settings & Privacy' />
            </nav>

            <div className = 'absolute bottom-8 flex items-center gap-4 text-[#525252] text-base xl:text-lg font-medium cursor-pointer'>
                <img src={logouticon} alt="Logout icon" className="w-[24px]" />
                <h3>Logout</h3>
            </div>
            
        </div>
    )
}

export default Sidebar;