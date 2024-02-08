import { useNavigate } from "react-router-dom";
import CountdownTimer from "../countdownTimer/countdownTimer";

function CryptoDonationModal({ displayModals, setDisplayModals, eventid}) {
    
    const navigate = useNavigate()
    
    return (
        <div className={`w-full fixed z-50 inset-0 overflow-y-auto ${displayModals.cryptoDonationModal ? 'block' : 'hidden'}`}>
            <div className="w-full flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                
                    <div className={`w-[265px] phones:w-[350px] md:w-[681px] 2xl:w-[881px] h-fit py-4 bg-white rounded-md md:rounded-[10px] shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] font-arial `} >
                        <div className="border-b-2 border-[#D8D8D8] relative flex justify-center items-center py-2 px-4" >
                            <h1 className="text-center text-xs md:text-base xl:text-xl font-bold " >
                                Make your crypto payment
                            </h1>
                            <button className="text-[#37BCF7] text-xs md:text-base font-bold absolute right-2 phones:right-6 xphones:right-4 md:right-8 "
                                onClick={() => {
                                    setDisplayModals((prev) => ({...prev, cryptoDonationModal: false}))                                    
                                }
                            } >
                                Cancel
                            </button>
                        </div>
                        
                        <div className="py-9 px-5 flex flex-col gap-3" >
                            <h2>
                                Pay into this wallet: {displayModals.cryptoDonationData.pay_address}                                
                            </h2>
                            <h2>Payment amount: {displayModals.cryptoDonationData.pay_amount}</h2>
                            <p>Currency: {displayModals.cryptoDonationData.pay_currency}</p>
                            {/* <p>Expiration time : {displayModals.cryptoDonationData.expiration_estimate_date}</p> */}
                            <CountdownTimer targetTime={displayModals.cryptoDonationData.expiration_estimate_date} />
                        </div>                        
                    
                        <p className="block text-center mb-3" >Click the button below after payment to verify</p>

                        <button className="mx-auto w-fit block py-[10px] px-10 rounded md:rounded-lg bg-[#000000] 
                        text-white text-lg font-bold md:leading-[43px] md:-tracking-[0.188px] " >
                            Verify Payment
                        </button>
                        
                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default CryptoDonationModal;