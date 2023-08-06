import Sidebar from "../sidebar/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Navbar from "../navbar/navbar";
import backarrow from "../../images/backarrow.svg"
import campaignimage from "../../images/campaign image.png"
import useravatar from "../../images/user3.svg"
import locateicon from "../../images/locateicon2.svg"
import twittericon from "../../images/twittericon.svg"
import facebookicon from "../../images/facebookicon.svg"
import instagramicon from "../../images/instagramicon.svg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setprofilepageactive, setprofilepageinactive } from "../../actions/actions";
import Twittericon from "../../images/twittericon";
import uploadIcon from "../../images/profile/upload.svg"
import {infoicon2, infoicon} from "../../images"
import removeicon from "../../images/removeicon.svg"
import arrowup from "../../images/arrowup.svg"
import arrowdown from "../../images/arrowdown.svg"
import facebookIcon from "../../images/facebookicon.svg"

function Profilepage(){

    const dispatch = useDispatch()
    //const activepage = useSelector(state => state.managelinkcolor)

    const sidebarslid = useSelector(state => state.sidebarslid)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const [display,setDisplay] = useState('displayProfile')

    const navigate = useNavigate()
    const goback = () =>{
        navigate(-1)
        dispatch(setprofilepageinactive())
    }

    useEffect(()=>{
        dispatch(setprofilepageactive())
        window.scrollTo(0,0)

        return () =>{
            dispatch(setprofilepageinactive())
        }
    },[])

    return(
        <div className='bg-[#F9F9F9] min-h-full overflow-y-auto max-h-[100vh]'>
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />
                {
                    display == 'displayProfile' ? <DisplayProfile goback={goback} setDisplay={setDisplay} /> : <EditProfile goback={goback} />
                }
            </div>

        </div>
    )
}

export default Profilepage;

const DisplayProfile = ({goback, setDisplay}) => {

    return(
        <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[19px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
                    
            <img src={backarrow} alt="backarrow" className="mb-10 w-[32px] inline-block cursor-pointer "  onClick={goback} />
            <h1 className="font-black text-[32px] mb-4 " >Profile</h1>
            <p className=" text-[18px] mb-8 " >Change your profile photo, cover photo, bio and more</p>

            <div className="bg-white p-5 w-full relative mb-[70px] " >
                <img src={campaignimage} alt="campaign" className=" rounded w-full " />
                <img src={useravatar} alt="user avatar" className="relative bottom-12 left-2 max-w-full w-[9%] rounded-full inline-block z-10 " />
                <button 
                    className="mb-4 text-[16px] font-black text-white bg-[#37BCF7] py-[5px] px-[15px] rounded-[10px] 
                    float-right relative top-5" 
                    onClick={ () => setDisplay('editProfile')}
                >
                    Edit profile                
                </button>

                <h1 className=" font-black text-[24px]" >Daniel Alba</h1>
                <p className="text-[#8E8E93] mb-4 text-[18px] " >
                    @therealdanielalba
                    
                    <div className="w-[2px] mx-[10px] h-4 bg-[#8E8E93] inline-block"></div>

                        <img src= {locateicon} alt="" className="inline-block w-[15px] relative bottom-[2px] "/>
                    
                    <span>{' USA'}</span>
                </p>
                <p className="text-[18px] 2xl:text-[20px]" >
                    Hi there! i am Daniel and i work with WHO to make the world a better place. 
                    I am here basically to raise more funds for the development of the next hybrid child. #HYBRIDCHILDREN
                </p>
            </div>
            <div className="bg-white w-[80%] mx-auto rounded " >
                
                <div className="py-[25px] border-b-[2px] border-b-[#d1d1d5] ">
                    <h1 className="text-[22px] text-center font-black " >My Social Links</h1>
                </div>
                <div className="flex py-[30px] px-14 2xl:px-20 justify-around " >
                    <div className="flex items-center gap-4 bg-[#F9F9F9] py-[15px] px-[31px] rounded-[10px] " >
                        <Twittericon color = 'blue' />
                        <h4 className="text-[22px]" >Twitter</h4>
                    </div>
                    <div className="flex items-center gap-4 bg-[#F9F9F9] py-[15px] px-[31px] rounded-[10px]" >
                        <img src={facebookicon} alt="" />
                        <h4 className="text-[22px]" >Facebook</h4>
                    </div>
                    <div className="flex items-center gap-4 bg-[#F9F9F9] py-[15px] px-[31px]  rounded-[10px]" >
                        <img src={instagramicon} alt="" />
                        <h4 className="text-[22px]" >Instagram</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

const EditProfile = ({goback}) => {

    let userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const [managetoggles, setmanagetoggles] = useState({
        fullname:false,
        bio:false,
        location:false,
        socialLinks:false,
    })

    const managetoggleclick = (e) =>{
        const currentevent = e.target.id
        
        let currenttogglevalue = managetoggles[currentevent]
        
        setmanagetoggles({...managetoggles, [currentevent]:!currenttogglevalue })
        console.log(managetoggles)
    }

    return(
        <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[19px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
            <h1 className="font-black text-[32px] mb-4 " >
                Edit your Profile
            </h1>
            <p className=" text-[18px] mb-8 " >
                Change your profile photo, cover photo, bio and more
            </p>

            <div className="w-full relative mb-[70px]">
                
                <div className="relative">
                    <img src={campaignimage} alt="campaign" className="rounded w-full" />
                    <img src={uploadIcon} alt="upload icon" className="absolute inset-0 w-[35px] lg:w-[41px] m-auto cursor-pointer " />
                </div>
                <div className="absolute bottom-0 left-10 transform translate-x-[-10%] translate-y-[30%]">
                    <div className="relative w-[60px] lg:w-[120px] h-[60px] lg:h-[120px] mx-auto cursor-pointer ">
                        <img src={useravatar} alt="user avatar" className="w-full h-full rounded-full" />
                        <img src={uploadIcon} alt="upload icon" className="absolute inset-0 w-[24px] lg:w-[35px] m-auto" />
                    </div>
                </div>
            </div>

            <div className="bg-white mb-[59px] " >
                <div className="bg-[#37BCF7] py-5 pl-[30px] pr-[10px] flex gap-5 items-center text-white  " >
                    <img src={infoicon2} alt="info icon" className="w-6 h-6"  />
                    <h3 className="text-[18px] leading-[20px] tracking-[0.5px] font-black" >
                        To change your username go to settings
                    </h3>
                </div>
                <div id="fullname" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#e5e2e2] items-center cursor-pointer "
                onClick={managetoggleclick}
                >
                    <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >Full name</h3>
                    <img src={managetoggles.fullname ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                </div>
                <div className={` ${managetoggles.fullname? 'block' : 'hidden' } p-[30px]`} >
                    <input 
                        type="text" 
                        defaultValue={
                            userInfo.first_name ? 
                            userInfo.first_name + ' ' + userInfo.last_name:
                            'Daniel Alba'
                        }
                        className = {`w-[70%] max-w-[894px] h-[56px] rounded-[4px] border-[1px] border-[#D8D8D8] 
                        py-2 px-5 outline-0  `} 
                    />
                </div>
            </div>

            <div className="bg-white mb-[59px] " >            
                <div id="bio" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#e5e2e2] items-center cursor-pointer "
                onClick={managetoggleclick}
                >
                    <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >Bio</h3>
                    <img src={managetoggles.bio ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                </div>
                <div className={` ${managetoggles.bio? 'block' : 'hidden' } p-[30px]`} >
                    <textarea                        
                        defaultValue={
                            userInfo.bio ? 
                            userInfo.bio:
                            'Hi there! i am Daniel and i work with WHO to make the world a better place. I am here basically to raise more funds for the development of the next hybrid child. #HYBRIDCHILDREN'
                        }
                        rows="8"
                        className = {`w-full rounded-[4px] border-[1px] border-[#D8D8D8] 
                        py-2 px-5 outline-0  `} 
                    />
                </div>
            </div>

            <div className="bg-white mb-[59px] " >
                <div id="location" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#e5e2e2] items-center cursor-pointer "
                onClick={managetoggleclick}>
                    <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >Location</h3>
                    <img src={managetoggles.location ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                </div>
                <div className={` ${managetoggles.location? 'block' : 'hidden' } p-[30px]`} >
                    <button className="flex justify-between mb-5 rounded-r-[24px] rounded-l-lg  py-1 px-4 items-center h-14 min-w-[183px] border-[1px] border-[#8E8E93] bg-[#F9F9F9]   " >
                        <span>Nigeria</span>
                        <img src={removeicon} alt="remove icon" />
                    </button>                    
                </div>
            </div>

            <div className="bg-white mb-[59px] " >            
                <div id="socialLinks" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#e5e2e2] items-center cursor-pointer "
                onClick={managetoggleclick}
                >
                    <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >Social links </h3>
                    <img src={managetoggles.socialLinks ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                </div>
                <div className={` ${managetoggles.socialLinks? 'flex flex-col gap-14' : 'hidden' } p-[30px]`} >
                    <div className="flex flex-col gap-5">
                        <label htmlFor="facebookLink" className="flex items-center gap-[10px]" >
                            <img src = {facebookIcon} alt="facebook icon" className="w-[25px] inline-block" />
                            <span className="text-xl font-bold " >Facebook Link</span>
                        </label>
                        <input
                            placeholder="Enter your facebook links here"
                            className = {`w-[70%] max-w-[894px] h-14 rounded-[4px] border-[1px] border-[#D8D8D8]
                            py-2 px-5 outline-0  `}
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="twitterLink" className="flex items-center gap-[10px]" >
                            <img src = {twittericon} alt="twitter icon" className="w-[25px] inline-block" />
                            <span className="text-xl font-bold " >Twitter Link</span>
                        </label>
                        <input
                            placeholder="Enter your twitter links here"
                            className = {`w-[70%] max-w-[894px] h-14 rounded-[4px] border-[1px] border-[#D8D8D8]
                            py-2 px-5 outline-0  `}
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="instagramLink" className="flex items-center gap-[10px]" >
                            <img src = {instagramicon} alt="instagram icon" className="w-[25px] inline-block" />
                            <span className="text-xl font-bold " >Instagram Link</span>
                        </label>
                        <input
                            placeholder="Enter your instagram links here"
                            className = {`w-[70%] max-w-[894px] h-14 rounded-[4px] border-[1px] border-[#D8D8D8]
                            py-2 px-5 outline-0  `}
                        />
                    </div>
                </div>
            </div>

            <button className="bg-[#37BCF7] mb-4 mx-auto px-5  w-1/2 max-w-[400px] md:max-w-[460px] h-[48px] rounded-[10px] text-white font-bold text-[18px] block  " >
                save profile changes
            </button>
            <button className="text-[#37BCF7] mx-auto px-5  w-1/2 max-w-[400px] xl:max-w-[460px] h-[48px] rounded-[10px] hover:bg-white font-bold text-[18px] block " >
                cancel changes
            </button>



        </div>
    )
}

