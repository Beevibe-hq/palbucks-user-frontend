import { useNavigate } from "react-router-dom";

function DonationModal({ displayModals, setDisplayModals, eventid }) {
    
    const navigate = useNavigate()
    
    return (
        <div className={`w-full fixed z-50 inset-0 overflow-y-auto ${displayModals.donateModal ? 'block' : 'hidden'}`}>
            <div className="w-full flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                
                    <div className={`w-[265px] phones:w-[350px] md:w-[681px] 2xl:w-[881px] md:min-h-[300px] h-fit py-4 bg-white rounded-md md:rounded-[10px] shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] font-merriweather `} >
                        <div className="border-b-2 border-[#D8D8D8] flex justify-between phones:justify-end py-2 px-4 gap-1 phones:gap-7 " >
                            <h1 className="text-center text-xs md:text-sm md:text-[28px] font-bold " >
                                Select your donation method
                            </h1>
                            <button className="text-[#37BCF7] text-sm md:text-2xl font-bold "
                                onClick={() => {
                                    setDisplayModals((prev) => ({...prev, donateModal: false}))                                    
                                }
                            } >
                                Cancel
                            </button>
                        </div>
                        <div className="py-9" >
                            <button className="mx-auto block px-[15px] py-[5px] rounded-md md:rounded-[10px] bg-[#37BCF7] text-sm md:text-lg font-black leading-6 tracking-[0.073px] text-[#FFFFFF] " >
                                Donate using USDT wallet
                            </button>

                            <button 
                                className="mx-auto block px-[15px] pt-[5px] rounded-md md:rounded-[10px] text-sm md:text-lg font-black leading-6 tracking-[0.073px] text-[#37BCF7] " 
                                onClick={() => {
                                    //console.log(eventid)
                                    navigate(`/${eventid}/donate`)
                                }
                                }
                                >
                                Donate using card payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationModal;