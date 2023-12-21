import { infoicon } from "../../images";
import successfulCommentIcon from "../../images/crowdfunds/successfulCommentIcon.svg"

import { useState } from "react";
import Loadingspinner from "../loadingspinner/loadingSpinner";
import { baseUrl } from "../../auth/checkauthentication";

function CommentModal({displayModals, setDisplayModals, eventid,setCommentData}){

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [isLoading, setIsLoading] = useState(false)
    const [comment, setComment] = useState('')
    
    const access_token = localStorage.getItem('access_token')
    const [displaySuccessfulComment, setDisplaySuccessfulComment] = useState(false)

    const handleComment = async() => {
        setIsLoading(true)
        /* setTimeout(() => {
            setIsLoading(false)
            setDisplaySuccessfulComment(true)
        }, 2000) */

        const response = await fetch (`${baseUrl}/funding/api/${eventid}/comments/` ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`
            },
            body: JSON.stringify({
                comment
            })
        })
        const data = await response.json()
        console.log(data)        
        if(response.status == 200){
            setDisplaySuccessfulComment(true);            
            setCommentData((prev) => [data,...prev])
        }else{
            alert('Comment failed')
        }        

        setIsLoading(false)
    }
    

    return(
        <div className={`w-full fixed z-50 inset-0 overflow-y-auto ${displayModals.commentModal ? 'block' : 'hidden'}`}>
            <div className="w-full flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                
                <div className={`w-[280px] phones:w-[350px] md:w-[681px] 2xl:w-[881px] md:min-h-[300px] h-fit py-6 px-2 phones:px-4 md:p-9 bg-white rounded-md md:rounded-[10px] shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] font-arial `} >
                    <div className={`${displaySuccessfulComment ? 'hidden' : 'block md:pt-5 ' }`}>
                        <div className="mb-4 md:mb-8 relative flex justify-center items-center md:px-4 xl:px-8 ">
                            <h1 className="text-center text-xs phones:text-sm md:text-2xl font-bold relative right-5 phones:right-0 " >
                                Write in your comment
                            </h1>
                            <button className="text-[#37BCF7] text-xs phones:text-sm md:text-base lg:text-xl font-bold absolute right-10 phones:right-1 "
                                onClick={() => {
                                    setDisplayModals((prev) => ({...prev, commentModal: false}))                                    
                                }
                            } >
                                Cancel
                            </button>
                        </div>
                        <textarea
                            name="comment"
                            id="comment"
                            className="mb-2 md:mb-4 border-[1px] border-[#8E8E93] h-[100px] phones:h-[140px] md:h-[280px] fold:w-[90%] phones:w-full rounded resize-none
                                p-2 md:p-5 outline-none placeholder-[#888888] text-xs phones:text-sm md:text-base tracking-[0.8px] focus:border-2 focus:border-[#37BCF7] "
                            placeholder="Write in words of support to this campaign"
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </textarea>
                        <div className="flex gap-2 items-center mb-4 md:mb-6 ">
                            <img src={infoicon} alt="info icon" className="w-3 md:w-5" />
                            <p className="text-[#8E8E93] text-xs md:text-base leading-5 tracking-[0.1px]" >
                                Limited to 400 characters
                            </p>
                        </div>
                        <button className = "bg-[#37BCF7] rounded-md md:rounded-[10px] py-[5px] md:py-2 px-[15px] w-1/2 min-w-[150px] md:min-w-[230px] block mx-auto "
                            onClick={handleComment}
                        >
                            <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                                <Loadingspinner width = '28px' height = '28px' />
                            </div>
                            <span className={` ${isLoading ? 'hidden' : 'block' } text-[#FFFFFF] text-xs phones:text-sm md:text-lg font-bold  `} >
                                Send comment
                            </span>
                        </button>
                    </div>
                    <div className={`${displaySuccessfulComment ? 'flex flex-col justify-center items-center pb-4 md:pb-8 px-5 md:px-10 xl:px-[80px]' : 'hidden'} `}>
                        <img 
                            src={successfulCommentIcon} 
                            alt="comment successful" 
                            className="w-[84px] md:w-[168px]"
                        />
                        <h3 className="mb-2 md:mb-4 text-center font-black text-base md:text-[28px] tracking-[0.069px]" >
                            Comment sent successfully
                        </h3>
                        <p className="mb-3 md:mb-5 text-center text-sm md:text-xl " >
                            It is always a good habit to always give words of support to those who needs it 
                        </p>
                        <button className="py-3 md:py-5 px-4 md:px-9 bg-black rounded-[5px] md:rounded-lg text-base md:text-[28px] font-bold text-white "
                            onClick={() => {
                                    setDisplayModals((prev) => ({...prev, commentModal: false}))
                                    setDisplaySuccessfulComment(false)
                                }
                            }
                        >
                            Go back to campaign
                        </button>
                    </div>
                </div>


                </div>
            </div>
        </div>

    )
}

export default CommentModal;