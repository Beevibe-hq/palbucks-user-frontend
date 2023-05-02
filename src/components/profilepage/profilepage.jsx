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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setprofilepageactive, setprofilepageinactive } from "../../actions/actions";

function Profilepage(){

    const dispatch = useDispatch()
    //const activepage = useSelector(state => state.managelinkcolor)

    const sidebarslid = useSelector(state => state.sidebarslid)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

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
                <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[19px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-10 w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black text-[32px] mb-4 " >Profile</h1>
                    <p className=" text-[18px] mb-8 " >Change your profile photo, cover photo, bio and more</p>

                    <div className="bg-white p-5 w-full relative mb-[70px] " >
                        <img src={campaignimage} alt="campaign" className=" rounded w-full " />
                        <img src={useravatar} alt="user avatar" className="relative bottom-12 left-2 max-w-full w-[9%] rounded-full inline-block z-10 " />
                        <button className="mb-4 text-[16px] font-black text-white bg-[#37BCF7] py-[5px] px-[15px] rounded-[10px] float-right relative top-5" >Edit profile</button>

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
                                <img src={twittericon} alt="" />
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
            </div>

        </div>
    )
}

export default Profilepage;