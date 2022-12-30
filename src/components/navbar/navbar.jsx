import notificationsicon from '../../images/notifications.svg'
import userimg from '../../images/user.png'
import moreicons from '../../images/more icon.svg'
import Searchbar from "../searchbar/searchbar";

function Navbar(){

    return(
        <div className = 'py-[10px] px-10 h-[100px] fixed top-0 right-0 left-[250px] lg:left-[280px] xl:left-[320px] z-20 bg-[#F9F9F9] shadow-[0px_0px_16px_rgba(0,0,0,0.04)] flex items-center justify-between' >
            <Searchbar />

            <div className = 'flex items-center gap-8'>
                <img src={notificationsicon} alt="notifications icon" className = 'w-[23px]' />
                <img src={userimg} alt="user avatar" className='w-[40px]' />
                <h2 className = 'text-lg'>Daniel Aliba</h2>
                <img src={moreicons} alt="More icons" className = 'w-[30px]' />
            </div>
        </div>
    )
}

export default Navbar;