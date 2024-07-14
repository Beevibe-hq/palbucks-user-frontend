import notificationsicon from '../../images/notifications2.svg'
import userimg from '../../images/user.png'
import moreicons from '../../images/more icon.svg'
import applogo from "../../images/appLogo.svg";
import menuicon from "../../images/Hamburger Menu.svg"
import arrowicon from "../../images/arrowright2.svg"
import outIcon from "../../images/Out.svg"
import Notificationsicon from '../../images/notificationsicon';
import Moreicons from '../../images/moreicons';
import Searchbar from "../searchbar/searchbar";
import profilePlaceholder from "../../images/profileplaceholder.svg"

import { useDispatch, useSelector } from 'react-redux';
import { opensidebar, setnotificationspageactive, setprofilepageactive, setprofilepageinactive } from '../../actions/actions';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props){

    // Current problem with this is that when the user changes details on another browser, the details wont be updated on this browser
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    const [moreIconsActive , setmoreIconsActive] = useState(false)

    const onprofilepage = useSelector(state => state.onprofilepage)
    const onnotificationspage = useSelector(state => state.onnotificationspage)

    const sidebaropen = useSelector(state => state.sidebarstate)
    const dispatch = useDispatch()

    const sidebarslid = useSelector(state => state.sidebarslid)

    const managesidebar = () =>{
        if(sidebaropen == false){
            dispatch(opensidebar())
        }
    }

    const navigate = useNavigate()
    const location = useLocation()

    const profilepage = () => {
        if (location.pathname === '/profilepage') {
            return
        }
        navigate('/profilepage')        
        dispatch(setprofilepageactive())
    }

    const notificationspage = () => {
        if (location.pathname === '/notificationspage') {
            return
        }
        navigate('/notificationspage')
        dispatch(setnotificationspageactive())
     }

     const handlemoreicons = () => {
        moreIconsActive ? setmoreIconsActive(false) : setmoreIconsActive(true)
     }

    const [onDonorPage, setOnDonorPage] = useState(false)
    useEffect(() => {
        if(props.onDonorPage){
            setOnDonorPage(true)
        }
    },[])

    useEffect(()=>{

        /* const handlebeforeunload = (e) =>{
            e.preventDefault()
            e.returnValue = '';
            dispatch(setprofilepageinactive())
        }
        
        //this ensures the function runs before the page is left
        window.addEventListener('beforeunload', handlebeforeunload)

        return () =>{
            window.removeEventListener('beforeunload', handlebeforeunload)
        } */
        
    },[])

    return(
        <div className = {`py-[10px] px-2 phones:px-5  md:px-10 h-[90px] md:h-[100px] fixed top-0 right-0
        ${props.sidebar === false ? 'left-0' : sidebarslid ? 'left-0 brkpoint:left-[100px]' : 'left-0 brkpoint:left-[250px] lg:left-[280px] xl:left-[320px]' } z-30 bg-[#F9F9F9] 
        shadow-[0px_0px_16px_rgba(0,0,0,0.04)] flex items-center justify-between font-arial
        
        `} >
            
            <div className = 'flex gap-[15px] max-w-[72%] phones:max-w-[75%] xphones:max-w-fit '>
                <img src={menuicon} alt="menu icon" className = 'block brkpoint:hidden w-[20px] phones:w-[24px]'
                    onClick = {managesidebar} />
                <Searchbar onDonorPage = {props.onDonorPage} />
            </div>

            <div className = 'flex items-center gap-3 xphones:gap-[15px] md:gap-4 lg:gap-8'>
                <Notificationsicon onClick = {notificationspage} active = {onnotificationspage ? true : false } />
                <div className=" flex gap-2 items-center">
                    <img 
                        src={userInfo?.dp ? userInfo.dp : profilePlaceholder}
                        onClick = {profilepage}
                        alt="user avatar" 
                        className={` ${onprofilepage ? 'border-[3px] border-[#37BCF7]': '' } w-[28px] phones:w-[35px] md:w-[40px] cursor-pointer rounded-[50%]`} 
                    />
                    {/* <img 
                        src={applogo} 
                        alt="Palbucks logo" 
                        className = "block w-[19px] phones:w-[22px] md:hidden" 
                    /> */}
                    <h2 className = 'hidden md:block text-base font-black'>{userInfo?.first_name? userInfo.first_name : ''} {userInfo?.last_name? userInfo.last_name:''}</h2>
                </div>                
                <Moreicons active = {moreIconsActive} onClick = {handlemoreicons} />
            </div>
            
            <div className={` ${moreIconsActive ? 'block' : 'hidden'}  bg-white absolute right-10 top-[80px] w-[300px] xl:w-[369px] `}>
                <ul className='w-full py-[10px] px-[15px] flex flex-col' >
                    <Link to= '/howitworks' >
                        <li  className='flex justify-between w-full bg-white cursor-pointer py-[15px] pl-[15px] pr-[22px] hover:bg-[#37BCF71A] '>
                            <span className='text-[17px] leading-4'>How it works</span>
                            <img src={arrowicon} alt="" className='w-[7px] h-[15px]' />
                        </li>
                    </Link>
                    
                    <Link to = '/helpcenter' >                        
                        <li  className='flex justify-between w-full bg-white cursor-pointer py-[15px] pl-[15px] pr-[22px] hover:bg-[#37BCF71A] mb-[10px] '>
                            <span className='text-[17px] leading-4' >Help center</span>
                            <img src={arrowicon} alt="" className='w-[7px] h-[15px]' />
                        </li>
                    </Link>
                    
                    <hr className='border-t-[1px] border-[#D8D8D8] w-full mb-5 '/>
                    
                    <Link to='/termsofuse' >
                        <li  className='flex justify-between w-full bg-white cursor-pointer py-[15px] pl-[15px] pr-[22px] hover:bg-[#37BCF71A] '>
                            <span className='text-[17px] leading-4'>Terms of use</span>
                            <img src={arrowicon} alt="" className='w-[7px] h-[15px]' />
                        </li>
                    </Link>

                    <Link to= '/privacypolicy' >
                        <li  className='flex justify-between w-full bg-white cursor-pointer py-[15px] pl-[15px] pr-[22px] hover:bg-[#37BCF71A] '>
                            <span className='text-[17px] leading-4'>Privacy policy</span>
                            <img src={arrowicon} alt="" className='w-[7px] h-[15px]' />
                        </li>
                    </Link>

                    <Link to= '/communityguidelines' >
                        <li  className='flex justify-between w-full bg-white cursor-pointer py-[15px] pl-[15px] pr-[22px] hover:bg-[#37BCF71A] mb-[10px] '>
                            <span className='text-[17px] leading-4'>Community guidelines</span>
                            <img src={arrowicon} alt="" className='w-[7px] h-[15px]' />
                        </li>
                    </Link>

                    <Link to= '/communityguidelines' >
                        <li  className='flex justify-between w-full bg-white cursor-pointer py-[15px] pl-[15px] pr-[22px] hover:bg-[#37BCF71A] mb-[10px] '>
                            <span className='text-[17px] leading-4'>AML policy</span>
                            <img src={outIcon} alt="" className='w-[22px] h-[22px]' />
                        </li>
                    </Link>

                    <Link to= '/communityguidelines' >
                        <li  className='flex justify-between w-full bg-white cursor-pointer py-[15px] pl-[15px] pr-[22px] hover:bg-[#37BCF71A] mb-[10px] '>
                            <span className='text-[17px] leading-4'>KYC guidelines</span>
                            <img src={outIcon} alt="" className='w-[22px] h-[22px]' />
                        </li>
                    </Link>

                    <hr className='border-t-[1px] border-[#D8D8D8] w-full mb-5 '/>

                    <li  className='flex justify-between w-full bg-white cursor-pointer py-[15px] pl-[15px] pr-[22px] hover:bg-[#37BCF71A] '>
                        <span className='text-[17px] leading-4'>Advertisements</span>
                        <img src={arrowicon} alt="" className='w-[7px] h-[15px]' />
                    </li>

                    

                </ul>

            </div>
        </div>
    )
}

export default Navbar;