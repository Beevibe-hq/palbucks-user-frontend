import Sidebar from "../../components/sidebar/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/navbar/navbar";
import backarrow from "../../images/backarrow.svg"
import campaignimage from "../../images/Campaign image.png"
import useravatar from "../../images/user3.svg"
import locateicon from "../../images/locateicon2.svg"
import twittericon from "../../images/twittericon.svg"
import facebookicon from "../../images/facebookicon.svg"
import instagramicon from "../../images/instagramicon.svg"
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setprofilepageactive, setprofilepageinactive } from "../../actions/actions";
import Twittericon from "../../images/twittericon";
import uploadIcon from "../../images/profile/upload.svg"
import {infoicon2, infoicon} from "../../images"
import removeicon from "../../images/removeicon.svg"
import arrowup from "../../images/arrowup.svg"
import arrowdown from "../../images/arrowdown.svg"
import facebookIcon from "../../images/facebookicon.svg"
import profilePlaceholder from "../../images/profileplaceholder.svg"

import Cropper from "react-easy-crop";
import { readFile } from "../../components/cropping/cropimage/cropimage";
import { urltoFile } from "../../components/cropping/cropimage/cropimage";
import { getCroppedImg } from "../../components/cropping/canvasUtils";
import { baseUrl } from "../../auth/checkauthentication";
import { Link } from "react-router-dom";
import Loadingspinner from "../../components/loadingspinner/loadingSpinner";

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

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))    

    return(
        <div className = 'fold:px-2 phones:px-5 md:px-10 lg:pl-[19px] lg:pr-[27px] pt-5 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-arial w-full h-full '>
                    
            <img src={backarrow} alt="backarrow" className="mb-6 md:mb-10 w-[22px] md:w-[32px] inline-block cursor-pointer "  onClick={goback} />            
            <h1 className = 'font-black font-merriweather text-xl phones:text-xl md:text-3xl leading-7 tracking-[0.5px] mb-2 md:mb-4' >
                Profile
            </h1>
            <p className="text-sm md:text-[18px] mb-8 " >
                Change your profile photo, cover photo, bio and more
            </p>

            <div className="bg-white p-[10px] md:p-5 w-full xl:w-[80%] relative mb-10 md:mb-[70px] " >
                <img src={userInfo.background_image ? userInfo.background_image : campaignimage} alt="campaign" className=" rounded w-full max-h-[150px] md:max-h-[250px] 2xl:max-h-[300px] object-cover " />
                <img 
                    src={userInfo.dp ? userInfo.dp : profilePlaceholder}
                    alt="user avatar" 
                    className="relative bottom-9 lg:bottom-12 left-2 max-w-full min-w-[55px] w-[9%] rounded-full inline-block z-10 " 
                />
                <button 
                    className="hidden md:block mb-4 text-[16px] font-black text-white bg-[#37BCF7] py-[5px] px-[15px] rounded-[10px] 
                    float-right relative top-5" 
                    onClick={ () => setDisplay('editProfile')}
                >
                    Edit profile
                </button>

                <h1 className=" font-black text-base md:text-[24px] mb-1 md:mb-2 -mt-5 md:-mt-0 " >
                    {userInfo.first_name ? userInfo.first_name + ' ' + userInfo.last_name : 'Daniel Alba'}
                </h1>
                <p className="text-[#8E8E93] mb-3 md:mb-5 text-sm md:text-[18px] flex items-center " >
                    @{
                        userInfo.username? userInfo.username :'therealdanielalba'
                    }
                    
                    <span className="w-[2px] mx-[10px] h-4 bg-[#8E8E93] inline-block"></span>

                    <img src= {locateicon} alt="" className="inline-block w-[15px] relative bottom-[2px] pt-1 "/>
                    
                    <span>
                        {userInfo.location && userInfo.location}
                    </span>
                </p>
                <p className="mb-5 md:mb-0 text-sm leading-6 md:text-[18px] md:leading-[30px] " >
                    {
                        userInfo.bio ? userInfo.bio : 'No bio yet!'
                    }
                </p>
                <button 
                    className=" md:hidden mb-1 text-sm md:text-[16px] font-black text-white bg-[#37BCF7] py-[4px] px-[11px] rounded-[5px] " 
                    onClick={ () => setDisplay('editProfile')}
                >
                    Edit profile
                </button>
            </div>
            
            <div className="bg-white w-full xl:w-[80%] rounded " >
                
                <div className="p-[15px] md:py-[25px] border-b-[2px] border-b-[#d1d1d5] ">
                    <h1 className="text-base md:text-[22px] text-center font-black " >My Social Links</h1>
                </div>
                <div className="flex gap-2 justify-around p-3 md:py-[30px] md:px-14 2xl:px-20 " >
                    <div className={` ${userInfo.social_links.twitter ? 'flex' : 'hidden'} cursor-pointer  items-center justify-center gap-2 md:gap-4 bg-[#F9F9F9] py-[5px] md:py-[15px] px-[14px] md:px-[31px] rounded md:rounded-[10px] `}
                        onClick={
                            () => {
                                if(userInfo.social_links.twitter !== null){
                                    window.open(userInfo.social_links.twitter)
                                }
                            }
                        }
                    >                                                
                        <img src={twittericon} alt="twitter icon" className="w-4 md:w-6 lg:w-8 " />
                        <h4 className="text-xs md:text-[22px]" >Twitter</h4>                
                    </div>
                    <div className={` ${userInfo.social_links.facebook ? 'flex' : 'hidden'} cursor-pointer  items-center justify-center gap-2 md:gap-4 bg-[#F9F9F9] py-[5px] md:py-[15px] px-[14px] md:px-[31px] rounded md:rounded-[10px] `}
                        onClick={() => {
                            if(userInfo.social_links.facebook !== null){
                                window.open(userInfo.social_links.facebook)
                            }
                        }}
                    >
                        <img src={facebookicon} alt="facebook icon" className=" w-4 md:w-6 lg:w-8" />
                        <h4 className="text-xs md:text-[22px]" >Facebook</h4>
                    </div>
                    <div className={` ${userInfo.social_links.instagram ? 'flex' : 'hidden'} cursor-pointer  items-center justify-center gap-2 md:gap-4 bg-[#F9F9F9] py-[5px] md:py-[15px] px-[14px] md:px-[31px] rounded md:rounded-[10px] `}
                        onClick={() => {
                            if(userInfo.social_links.instagram !== null){
                                window.open(userInfo.social_links.instagram)
                            }
                        } }
                    >
                        <img src={instagramicon} alt="Instagram icon" className="w-4 md:w-6 lg:w-8" />
                        <h4 className="text-xs md:text-[22px]" >Instagram</h4>
                    </div>
                    {
                        !userInfo.social_links.twitter &&
                        !userInfo.social_links.facebook &&
                        !userInfo.social_links.instagram && (
                        <p className="text-[#8E8E93] text-[14px]  md:text-[17px] " >
                            No link to show here
                        </p>
                    )}                    
                </div>
            </div>

        </div>
    )
}

const EditProfile = ({goback}) => {

    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [managetoggles, setmanagetoggles] = useState({
        fullname:true,
        bio:true,
        location:true,
        socialLinks:true,
    })

    const managetoggleclick = (e) =>{
        const currentevent = e.target.id        
        let currenttogglevalue = managetoggles[currentevent]        
        setmanagetoggles({...managetoggles, [currentevent]:!currenttogglevalue })        
    }

    const [isLoading, setIsLoading] = useState(false)

    const [userImages, setUserImages] = useState({
        dp:userInfo.dp ? userInfo.dp : profilePlaceholder,
        background_image:userInfo.background_image ? userInfo.background_image : campaignimage
    })

    // Store profile data to update in state
    const [profileData, setProfileData] = useState({})

    const [imageforCrop, setImageforCrop] = useState(null)

    const handleImageUpload = (e) =>{
        const {name, value} = e.target
        setUserImages({...userImages, [name]:URL.createObjectURL(e.target.files[0])})        
        setProfileData({...profileData, [name]:e.target.files[0]})
        if(name== 'dp' ){
            setImageforCrop(e.target.files[0])
        }
    }

    let handleInputChange = (e) =>{
        const {name, value} = e.target
        if(name === 'fullName'){
            let fullName = value.split(' ')
            let firstName = fullName[0]
            let lastName = fullName[1] ? fullName[1] : ''
            setProfileData({...profileData, first_name:firstName, last_name:lastName})            
            return
        }
        setProfileData({...profileData, [name]:value})        
    }

    const handleProfileUpdate = async() =>{        
        setIsLoading(true)
        console.log(profileData)
        const access_token = localStorage.getItem('access_token')
        console.log(access_token)
        const formData = new FormData()
        // Iterate over the properties of the profileData object and append to formData
        for (const [key, value] of Object.entries(profileData)) {
            formData.append(key, value);
        }

        const updateProfile = await fetch(`https://palbucks-api.onrender.com/users/api/profile/`,{
            method:'PATCH',
            headers:{
                Authorization: `Bearer ${access_token}`
            },
            body:formData
        })

        const response = await updateProfile.json()
        console.log(response)

        if(updateProfile.status === 200){
            localStorage.setItem('userInfo', JSON.stringify(response))
            userInfo = JSON.parse(localStorage.getItem('userInfo'))
            setIsLoading(false)
            // Reload the page and reset user data
            window.location.reload(true)
        }else{
            alert('An error occured while updating your profile')
            setIsLoading(false)
        }

        setIsLoading(false)
    }

    return(
        <div className = 'fold:px-2 phones:px-5 md:px-10 lg:pl-[19px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-arial w-full h-full '>
            <h1 className = 'font-black font-merriweather text-xl phones:text-xl md:text-3xl leading-7 tracking-[0.5px] mb-2 md:mb-4' >
                Edit your Profile
            </h1>
            <p className="text-sm md:text-[18px] mb-8 " >
                Change your profile photo, cover photo, bio and more
            </p>

            {   imageforCrop !== null &&
                <CropProfileImage 
                    image = {imageforCrop} 
                    profileData = {profileData} 
                    setProfileData = {setProfileData} 
                    userImages = {userImages}
                    setUserImages = {setUserImages}
                    setImageforCrop = {setImageforCrop}
                />
            }

            <div className="w-full relative xl:w-[80%] mb-[70px]">
                
                <div className="relative">
                    <label htmlFor="background_image">
                        <div className="w-fit"><img src={userImages.background_image} alt="campaign" className="rounded w-full max-h-[150px] md:max-h-[250px] 2xl:max-h-[300px] object-cover" /></div>
                        
                    </label>
                    <label htmlFor="background_image">
                        <img
                            src={uploadIcon}
                            alt="upload icon"
                            className="absolute inset-0 w-[27px] md:w-[35px] lg:w-[41px] m-auto cursor-pointer "
                        />
                    </label>
                    <input type="file" accept="image/*" name="background_image" id="background_image" className="hidden" onChange={handleImageUpload} />
                </div>
                <div className="absolute bottom-0 left-4 md:left-7 lg:left-10 transform translate-x-[-10%] translate-y-[30%]">
                    <label htmlFor="dp">
                        <div className="relative w-[60px] md:w-[80px] lg:w-[120px] h-[60px] md:h-[80px] lg:h-[120px] mx-auto cursor-pointer ">
                            <img src={userImages.dp} alt="user avatar" className="w-full h-full rounded-full" />
                            <div className="w-fit">
                                <label htmlFor="dp" className="cursor-pointer" >
                                    <img src={uploadIcon} alt="upload icon" className="absolute inset-0 w-[18px] md:w-[24px] lg:w-[35px] m-auto" />
                                </label>
                                <input type="file" name="dp" id="dp" className="hidden" onChange={handleImageUpload} />
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            <div className="bg-white mb-6 md:mb-[59px] xl:w-[80%] " >                
                <div className="bg-[#37BCF7] rounded-t md:rounded-t-none py-5 px-[15px] md:pl-[30px] md:pr-[10px] flex gap-2 md:gap-5 items-center text-white  " >
                    <img src={infoicon2} alt="info icon" className="w-4 h-4 md:w-6 md:h-6"  />                    
                    <h3 className="text-sm md:text-[18px] leading-[20px] tracking-[0.5px] font-black" >
                        To change your username go to settings
                    </h3>
                </div>                
                <div 
                    id="fullname" 
                    className=" p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                    onClick={managetoggleclick}
                >
                    <h3 className="text-base md:text-[22px] leading-[22px] tracking-[0.5px] font-black pointer-events-none" >
                        Full name
                    </h3>

                    <img 
                        src={arrowup} 
                        alt="down arrow" 
                        className = {` ${managetoggles.fullname? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                    />
                </div>
                <div className={` ${managetoggles.fullname? 'block' : 'hidden' } py-3 px-4 md:p-[30px]`} >
                    <input 
                        id="fullName"
                        name="fullName"
                        type="text" 
                        defaultValue={
                            userInfo.first_name ? 
                            userInfo.first_name + ' ' + userInfo.last_name:
                            'Daniel Alba'
                        }
                        onChange = {handleInputChange}
                        className = {`w-full md:w-[70%] max-w-[894px] md:h-[56px] rounded-[4px] border-[1px] border-[#D8D8D8] 
                        py-3 px-[10px] md:px-5 text-sm md:text-base outline-0
                        focus:border-2 focus:border-[#37BCF7] focus:caret-[#2CA9F2]
                        `} 
                    />
                </div>
            </div>

            <div className="bg-white mb-6 md:mb-[59px] xl:w-[80%] " >                            
                <div 
                    id="bio" 
                    className="  p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                    onClick={managetoggleclick}
                >
                    <h3 className="text-base md:text-[22px] leading-[22px] tracking-[0.5px] font-black pointer-events-none" >
                        Bio
                    </h3>

                    <img 
                        src={arrowup} 
                        alt="down arrow" 
                        className = {` ${managetoggles.bio? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                    />
                </div>
                <div className={` ${managetoggles.bio? 'block' : 'hidden' } py-3 px-4 md:p-[30px]`} >
                    <textarea
                        type="text"
                        name="bio"
                        onChange={
                            handleInputChange
                        }                        
                        defaultValue={
                            userInfo.bio ? 
                            userInfo.bio:
                            'Hi there! i am Daniel and i work with WHO to make the world a better place. I am here basically to raise more funds for the development of the next hybrid child. #HYBRIDCHILDREN'
                        }
                        rows="7"
                        className = {`w-full rounded border-[1px] border-[#D8D8D8] 
                        py-3 px-[10px] md:px-5 text-sm md:text-base outline-0 focus:border-2 focus:border-[#37BCF7] focus:caret-[#2CA9F2] `} 
                    />
                </div>
            </div>

            <div className="bg-white mb-6 md:mb-[59px] xl:w-[80%] " >
                <div 
                    id="location" 
                    className="  p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                    onClick={managetoggleclick}
                >
                    <h3 className="text-base md:text-[22px] leading-[22px] tracking-[0.5px] font-black pointer-events-none" >
                        Location
                    </h3>

                    <img 
                        src={arrowup} 
                        alt="down arrow" 
                        className = {` ${managetoggles.location? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                    />
                </div>
                <div className={` ${managetoggles.location? 'block' : 'hidden' } py-3 px-4 md:p-[30px]`} >                    
                    <button className="flex justify-between rounded-r-[14px] md:rounded-r-[24px] rounded-l-[5px] md:rounded-l-lg py-[2px] md:py-1 px-[10px] md:px-4 items-center h-[34px] md:h-14 min-w-[106px] md:min-w-[183px] border-[1px] border-[#8E8E93] bg-[#F9F9F9]   " >
                        <span className="text-xs md:text-base" >
                            Nigeria
                        </span>
                        <img src={removeicon} alt="remove icon" className="w-[18px] md:w-6 " />
                    </button>            
                </div>
            </div>

            <div className="bg-white mb-[47px] md:mb-[59px] xl:w-[80%] " >                            
                <div 
                    id="socialLinks" 
                    className="  p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                    onClick={managetoggleclick} 
                >
                    <h3 className="text-base md:text-[22px] leading-[22px] tracking-[0.5px] font-black pointer-events-none" >
                        Social links
                    </h3>

                    <img 
                        src={arrowup} 
                        alt="down arrow" 
                        className = {` ${managetoggles.socialLinks? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                    />
                </div>
                <div className={` ${managetoggles.socialLinks? 'flex flex-col gap-5 md:gap-14' : 'hidden' } py-3 px-4 md:p-[30px]`} >
                    <div className="flex flex-col gap-[10px] md:gap-5">
                        <label htmlFor="facebookLink" className="flex items-start gap-[10px]" >
                            <img src = {facebookIcon} alt="facebook icon" className="w-4 md:w-6 inline-block" />
                            <span className="text-sm md:text-xl font-bold " >Facebook Link</span>
                        </label>
                        <input
                            type="url"
                            name="facebook"
                            defaultValue={
                                userInfo.social_links?.facebook ?
                                userInfo.social_links.facebook :
                                '' 
                            }
                            onChange={
                                handleInputChange
                            }
                            placeholder="Enter your facebook link here"
                            className = {`w-full md:w-[70%] max-w-[894px] md:h-14 rounded-[4px] border-[1px] border-[#D8D8D8]
                            py-3 px-[10px] md:px-5 text-sm md:text-base outline-0 focus:border-2 focus:border-[#37BCF7] focus:caret-[#2CA9F2] `}
                        />
                    </div>
                    <div className="flex flex-col gap-[10px] md:gap-5">
                        <label htmlFor="twitterLink" className="flex items-center gap-[10px]" >
                            {/* <img src = {twittericon} alt="twitter icon" className="w-[25px] inline-block" /> */}
                            <img src={twittericon} alt="twitter icon" className="w-4 md:w-6" />
                            <span className="text-sm md:text-xl font-bold " >Twitter Link</span>
                        </label>
                        <input
                            type="url"
                            name="twitter"
                            defaultValue={
                                userInfo.social_links?.twitter ?
                                userInfo.social_links.twitter :
                                ''
                            }
                            onChange={
                                handleInputChange
                            }
                            placeholder="Enter your twitter link here"
                            className = {` w-full md:w-[70%] max-w-[894px] h-14 rounded-[4px] border-[1px] border-[#D8D8D8]
                            py-3 px-[10px] md:px-5 text-sm md:text-base outline-0 focus:border-2 focus:border-[#37BCF7] focus:caret-[#2CA9F2] `}
                        />
                    </div>
                    <div className="flex flex-col gap-[10px] md:gap-5">
                        <label htmlFor="instagramLink" className="flex items-center gap-[10px]" >
                            <img src = {instagramicon} alt="instagram icon" className="w-4 md:w-6 inline-block" />
                            <span className="text-sm md:text-xl font-bold " >Instagram Link</span>
                        </label>
                        <input
                            type="url"
                            name="instagram"
                            onChange={
                                handleInputChange
                            }
                            defaultValue={
                                userInfo.social_links?.instagram ?
                                userInfo.social_links.instagram :
                                ''
                            }                            
                            placeholder="Enter your instagram link here"
                            className = {`w-full md:w-[70%] max-w-[894px] h-14 rounded-[4px] border-[1px] border-[#D8D8D8]
                            py-3 px-[10px] md:px-5 text-sm md:text-base outline-0 focus:border-2 focus:border-[#37BCF7] focus:caret-[#2CA9F2] `}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full xl:w-[80%] ">
                
                <button className="bg-[#37BCF7] mb-3 md:mb-4 mx-auto py-[10px] px-5 w-fit min-w-full phones:min-w-[300px] md:w-1/2 max-w-[400px] md:max-w-[460px] md:h-[48px] rounded md:rounded-[10px] text-white font-bold text-base md:text-[18px] block "
                    onClick = {handleProfileUpdate}
                >
                    {/* {isLoading ? <Loadingspinner /> : 'Save profile changes'} */}
                    <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                            <Loadingspinner width = '28px' height = '28px' />
                    </div>
                    <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                        Save profile changes
                    </span>
                </button>
                <button className="text-[#37BCF7] mb-3 md:mb-4 mx-auto py-[10px] px-5 min-w-full w-fit phones:min-w-[300px] md:w-1/2 max-w-[400px] md:max-w-[460px] md:h-[48px] rounded md:rounded-[10px] hover:bg-white font-bold text-base md:text-[18px] block " >
                    Cancel changes
                </button>
            </div>



        </div>
    )
}



export const CropProfileImage = ({image, setImageforCrop , userImages, setUserImages, profileData, setProfileData}) => {

    let [profileImageUrl,setProfileImageUrl] = useState(null)
    const [fileName, setFileName] = useState(null)

    
    //Easy crop package code
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)    

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {        
        try {
          const croppedImage = await getCroppedImg(
            profileImageUrl,
            croppedAreaPixels,            
          );
          
          setUserImages((previousdata) => ({
            ...previousdata,
            dp: croppedImage,
            }));            
    
          // Convert the image URL to a file for the server          
          const convertedImage = await urltoFile(croppedImage, fileName);
          
          // store the image file in the profileData state
          setProfileData((previousdata) => ({
            ...previousdata,
            dp: convertedImage,
          }));
          

        } catch (e) {
          console.error(e);
        }
    }, [profileImageUrl, croppedAreaPixels]);
    
    

    useEffect(()=>{
        async function readImage(){
            setFileName(image.name)
            let ImageUrl = await readFile(image)
            setProfileImageUrl(ImageUrl)
            //console.log(profileImageUrl)   
        }
        readImage()
    },[])

    return (
        <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex flex-col gap-5 items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
                <div className="w-full max-w-[550px] h-[280px] md:h-[400px] inline-block align-bottom bg-gray-900 rounded-lg overflow-hidden shadow-xl transform transition-all relative">
                    <Cropper
                        image={profileImageUrl}
                        crop={crop}
                        aspect={1}
                        cropShape="round"
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        zoom={1} // Set a fixed zoom level to maintain the same circular cropping area
                        restrictPosition={false}
                    />
                    <button
                        className="bg-[#37BCF7] px-5 md:px-8 py-2 text-white text-sm md:text-base font-semibold absolute bottom-4 left-4 shadow-md rounded hover:bg-[#0baef4]"
                        onClick={() => {
                            showCroppedImage();
                            setImageforCrop(null)                            
                        }}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
    
}


