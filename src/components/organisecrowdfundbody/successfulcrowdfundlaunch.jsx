import { useState } from "react";
import likeIcon from "../../images/authpages/like.svg"
import { useNavigate } from "react-router-dom";
import copyIcon from "../../images/organiseCrowdfund/copy.svg"
import facebookIcon from "../../images/organiseCrowdfund/facebook.svg"
import xIcon from "../../images/organiseCrowdfund/x.svg"
import whatsappIcon from "../../images/organiseCrowdfund/whatsapp.svg"
import mailIcon from "../../images/organiseCrowdfund/mail.svg"
import messengerIcon from "../../images/organiseCrowdfund/messenger.svg"
import instagramIcon from "../../images/organiseCrowdfund/instagram.svg"

const SuccessfulCrowdfundLaunchModal = ({successfulLaunchModal, setSuccessfulLaunchModal}) => {
    
    const [currentDisplay, setCurrentDisplay] = useState('congrats')
    const navigate = useNavigate()

    return (
        <div className={`w-full fixed z-50 inset-0 overflow-y-auto ${successfulLaunchModal.display ? 'block' : 'hidden'}`}>
            <div className="w-full flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                
                    <div className={`w-[100%] xphones:w-[350px] md:w-[681px] 2xl:w-[881px] md:min-h-[300px] 
                    h-fit py-6 px-2 phones:px-4 md:p-10 bg-white rounded-md md:rounded-[10px]
                    shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] font-arial mx-auto`} >
                        {currentDisplay === 'congrats' ? 
                            <div className="flex flex-col">
                                <button className=" text-[14px] md:text-[26px] font-bold ml-auto "
                                    onClick={() => {
                                    navigate('/home')
                                }}
                                >
                                    Cancel
                                </button>
                                <div className="flex flex-col items-center" >
                                    <img
                                        src={likeIcon}
                                        alt="Like icon"
                                        className="w-[28px] md:w-[71px] mb-[10px] md:mb-[34px]"
                                    />
                                    <h5 className="mb-2 font-black text-[16px] md:text-[35px] text-center " >
                                        Congratulations!!
                                    </h5>
                                    <p className=" mb-[26px] md:mb-[59px] text-center text-[13px] md:text-[20px] leading-[32px]" >
                                        You have successfully launched your campaign
                                    </p>
                                    <button className="rounded md:rounded-lg bg-[#000000] py-3 md:py-5 px-4 md:px-8 text-[#FFFFFF] text-sm md:text-2xl font-bold "
                                    onClick={() => {setCurrentDisplay('share')}}
                                    >
                                        Share your campaign
                                    </button>
                                </div>
                            </div>
                        : currentDisplay === 'share' ?
                             <div className="flex flex-col">
                                <button className="mb-[28px] md:mb-8 text-[14px] md:text-[26px] font-bold ml-auto "
                                    onClick={() => {
                                    navigate('/home')
                                }}
                                >
                                    Cancel
                                </button>
                                <div className="flex flex-col" >                                    
                                    <h5 className="mb-2 font-black text-[16px] md:text-[28px]" >
                                        Share to potential donors
                                    </h5>
                                    <p className=" mb-8 md:mb-[36px] text-xs md:text-[18px] leading-6 md:leading-[32px] font-bold " >
                                        Encourage support by regularly sharing your campaign
                                    </p>
                                    <div className="flex items-start gap-3 mb-4 md:mb-10">
                                        <button className="" onClick={() => {
                                            const textToCopy = `https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`;
                                            navigator.clipboard.writeText(textToCopy)
                                            .then(() => {
                                                console.log('Text copied to clipboard:', textToCopy);
                                                alert('Text copied to clipboard!');
                                            })
                                            .catch(err => {
                                                console.error('Unable to copy text:', err);
                                                alert('Failed to copy text to clipboard. Please try again.');
                                            });        
                                        }} >
                                            <img src={copyIcon} alt="copy icon" className="w-[33px] md:w-[48px] h-full " />
                                        </button>

                                        <div className="flex flex-col relative -top-[2px]" >
                                            <span className="text-[13px] md:text-[18px] font-bold" >Copy link</span>        
                                            <span className="text-[12px] md:text-sm " >{`https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`}</span>    
                                        </div>    
                                    </div>
                                    <div className=" w-full md:w-fit mb-11 bg-[#35FAA01A] rounded-[10px] py-[10px] md:py-4 px-3 md:pl-6 md:pr-[93px] mx-auto " >
                                        <p className="text-[12px] xphones:text-[13px] md:text-[18px]" >Share to your social media using the links below</p>        
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-[24px] md:gap-[30%] " >
                                        
                                        <div className="flex flex-col gap-6 md:gap-11" >
                                            <div className="flex items-center gap-3 cursor-pointer " onClick={() => {                                                
                                                window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(`https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`));        
                                            } } >
                                                <img src={facebookIcon} alt="" className="w-[30px]" />        
                                                <span className="text-[18px] font-bold " >Facebook</span>
                                            </div>
                                            <div className="flex items-center gap-3 cursor-pointer " onClick={() => {                                                
                                                const text = "Check out this link: " + `https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`;
                                                window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text));
                                            } } >
                                                <img src={xIcon} alt="" className="w-[30px]" />        
                                                <span className="text-[18px] font-bold " >X</span>
                                            </div>
                                            <div className="flex items-center gap-3 cursor-pointer " onClick={() => {                                                
                                                window.open("fb-messenger://share/?link=" + encodeURIComponent(`https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`));

                                            } } >
                                                <img src={messengerIcon} alt="" className="w-[30px]" />        
                                                <span className="text-[18px] font-bold " >Messenger</span>
                                            </div>    
                                        </div>
                                        
                                        <div className="flex flex-col gap-6 md:gap-11" >
                                            <div className="flex items-center gap-3 cursor-pointer " onClick={() => {
                                                    /* const text = "Check out this link: " + `https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`;
                                                    window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(text)); */
                                                    
                                                    const text = "Check out this link: " + `https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`;
                                                    const imageUrl = "https://palbucks-bucket.s3.amazonaws.com/crowdfunding/banners/66a4b9eff63f4605807b0f081aa07caf_Screenshot_from_2024-04-16_04-39-23.png"
                                                    const encodedText = encodeURIComponent(text);
                                                    const encodedImageUrl = encodeURIComponent(imageUrl);
                                                    window.open(`https://wa.me/?text=${encodedText}&attachment=${encodedImageUrl}`);
                                            }} >
                                                <img src={whatsappIcon} alt="" className="w-[30px]" />        
                                                <span className="text-[18px] font-bold " >Whatsapp</span>
                                            </div>       
                                            <div className="flex items-center gap-3 cursor-pointer " onClick={() => {                                                
                                                window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(`https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`));        
                                            } } >
                                                <img src={instagramIcon} alt="" className="w-[30px]" />        
                                                <span className="text-[18px] font-bold " >Instagram</span>
                                            </div>
                                            <div className="flex items-center gap-3 cursor-pointer " onClick={() => {                                                
                                                const subject = "Check out this link";
                                                const body = "Check out this link: " + `https://www.palbucks.co/detailed/${successfulLaunchModal.crowdfundData.id}`;
                                                window.location.href = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
                                            } } >
                                                <img src={mailIcon} alt="" className="w-[30px]" />        
                                                <span className="text-[18px] font-bold " >Email</span>
                                            </div>        
                                        </div>    
                                                
                                    </div>        
                                </div>
                            </div> 
                            :null        
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SuccessfulCrowdfundLaunchModal;