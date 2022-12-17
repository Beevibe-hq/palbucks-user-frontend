import notificationsicon from '../../images/notifications.svg'
import userimg from '../../images/user.png'
import moreicons from '../../images/more icon.svg'
import Searchbar from "../searchbar/searchbar";

function Navbar(){

    return(
        <div className = 'py-[10px] px-10 h-[100px] shadow-[0_0px_16px_rgba(0,0,0,0.04)] w-full flex items-center justify-between' >
            <Searchbar />

            <div className = 'flex items-center gap-8'>
                <img src={notificationsicon} alt="notifications icon" className = 'w-[20px]' />
                <img src={userimg} alt="user avatar" className='w-[25px]' />
                <h2>Daniel Aliba</h2>
                <img src={moreicons} alt="More icons" className = 'w-[30px]' />
            </div>
        </div>
    )
}

export default Navbar;