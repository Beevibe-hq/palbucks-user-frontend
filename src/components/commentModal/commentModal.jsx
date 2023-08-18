import { infoicon } from "../../images";
import successfulCommentIcon from "../../images/crowdfunds/successfulCommentIcon.svg"

import { useState } from "react";
import Loadingspinner from "../loadingspinner/loadingSpinner";
import { baseUrl } from "../../auth/checkauthentication";

function CommentModal({displayCommentModal, setDisplayCommentModal, eventid,setCommentData}){

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
        <div className={`fixed z-50 inset-0 overflow-y-auto ${displayCommentModal ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                
                <div className={`w-[681px] 2xl:w-[881px] min-h-[300px] h-fit p-9 bg-white rounded-[10px] shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] font-merriweather `} >
                    <div className={`${displaySuccessfulComment ? 'hidden' : 'block pt-5 ' }`}>
                        <div className="mb-8 flex justify-end gap-14 xl:gap-28 items-center px-4 xl:px-8 ">
                            <h1 className="text-center text-[28px] font-bold " >
                                Write in your comment
                            </h1>
                            <button className="text-[#37BCF7] text-2xl font-bold " onClick={
                                () => {
                                    setDisplayCommentModal(false)
                                }
                            } >
                                Cancel
                            </button>
                        </div>
                        <textarea
                            name="comment"
                            id="comment"
                            className="mb-4 border-[1px] border-[#8E8E93] h-[280px] w-full rounded resize-none
                                p-5 outline-none text-[#888888] text-lg tracking-[0.8px] "
                            placeholder="Write in words of support to this campaign"
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </textarea>
                        <div className="flex gap-2 items-center mb-6 ">
                            <img src={infoicon} alt="info icon" />
                            <p className="text-[#8E8E93] text-base leading-5 tracking-[0.1px]" >
                                Limited to 400 characters
                            </p>
                        </div>
                        <button className = "bg-[#37BCF7] rounded-[10px] py-2 px-[15px] w-1/2 min-w-[230px] block mx-auto "
                            onClick={handleComment}
                        >
                            <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                                <Loadingspinner width = '28px' height = '28px' />
                            </div>
                            <span className={` ${isLoading ? 'hidden' : 'block' } text-[#FFFFFF] text-lg font-bold  `} >
                                Send comment
                            </span>
                        </button>
                    </div>
                    <div className={`${displaySuccessfulComment ? 'flex flex-col justify-center items-center pb-8 px-10 xl:px-[80px]' : 'hidden'} `}>
                        <img 
                            src={successfulCommentIcon} 
                            alt="comment successful" 
                            className=""
                        />
                        <h3 className="mb-4 text-center font-black text-[28px] tracking-[0.069px]" >
                            Comment sent successfully
                        </h3>
                        <p className="mb-5 text-center text-xl " >
                            It is always a good habit to always give words of support to those who needs it 
                        </p>
                        <button className="py-5 px-9 bg-black rounded-lg text-[28px] font-bold text-white "
                            onClick={() => {
                                    setDisplayCommentModal(false)
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