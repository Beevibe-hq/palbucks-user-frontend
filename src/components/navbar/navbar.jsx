import notificationsicon from '../../images/notifications2.svg'
import userimg from '../../images/user.png'
import moreicons from '../../images/more icon.svg'
import applogo from "../../images/applogo.svg";
import menuicon from "../../images/Hamburger Menu.svg"

import Searchbar from "../searchbar/searchbar";
import { useDispatch, useSelector } from 'react-redux';
import { opensidebar } from '../../actions/actions';


function Navbar(){

    const sidebaropen = useSelector(state => state.sidebarstate)
    const dispatch = useDispatch()

    const sidebarslid = useSelector(state => state.sidebarslid)

    const managesidebar = () =>{
        if(sidebaropen == false){
            dispatch(opensidebar())
        }
    }

    return(
        <div className = {`py-[10px] px-2 phones:px-5  md:px-10 h-[90px] md:h-[100px] fixed top-0 right-0
        ${sidebarslid ? 'left-0 brkpoint:left-[100px]' : 'left-0 brkpoint:left-[250px] lg:left-[280px] xl:left-[320px]' } z-20 bg-[#F9F9F9] 
        shadow-[0px_0px_16px_rgba(0,0,0,0.04)] flex items-center justify-between xphones:justify-between 
        `} >
            
            <div className = 'flex gap-[15px] max-w-[72%] phones:max-w-[75%] xphones:max-w-fit '>
                <img src={menuicon} alt="menu icon" className = 'block brkpoint:hidden w-[20px] phones:w-[25px]'
                    onClick = {managesidebar} />
                <Searchbar />
            </div>

            <div className = 'flex items-center gap-3 xphones:gap-[15px] md:gap-4 lg:gap-8'>
                <img src={notificationsicon} alt="notifications icon" className = 'hidden md:block w-[21px]' />
                <div className=" flex gap-2 items-center">
                    <img src={userimg} alt="user avatar" className='w-[28px] phones:w-[35px] md:w-[40px]' />
                    <img src={applogo} alt="Palbucks logo" className = "block w-[19px] phones:w-[22px] md:hidden" />
                    <h2 className = 'hidden md:block text-lg font-black font-merriweather'>Daniel Aliba</h2>
                </div>
                <img src={moreicons} alt="More icons" className = 'hidden md:block w-[35px] h-[10px] ' />
            </div>
        </div>
    )
}

export default Navbar;