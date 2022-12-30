import notificationsicon from '../../images/notifications.svg'
import userimg from '../../images/user.png'
import moreicons from '../../images/more icon.svg'
import applogo from "../../images/applogo.svg";
import menuicon from "../../images/Hamburger Menu.svg"

import Searchbar from "../searchbar/searchbar";


function Navbar(){

    return(
        <div className = 'py-[10px] px-5 md:px-10 h-[100px] fixed top-0 right-0 left-0 md:left-[250px] lg:left-[280px] xl:left-[320px] z-20 bg-[#F9F9F9] shadow-[0px_0px_16px_rgba(0,0,0,0.04)] flex items-center justify-between' >
            
            <div className = 'flex gap-[15px]'>
                <img src={menuicon} alt="menu icon" className = 'block md:hidden' />
                <Searchbar />
            </div>

            <div className = 'flex items-center gap-[15px] md:gap-8'>
                <img src={notificationsicon} alt="notifications icon" className = 'hidden md:block w-[23px]' />
                <img src={userimg} alt="user avatar" className='w-[40px]' />
                <img src={applogo} alt="Palbucks logo" className = "block md:hidden" />
                <h2 className = 'hidden md:block text-lg'>Daniel Aliba</h2>
                <img src={moreicons} alt="More icons" className = 'hidden md:block w-[30px]' />
            </div>
        </div>
    )
}

export default Navbar;