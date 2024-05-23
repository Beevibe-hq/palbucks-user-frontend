import { useNavigate } from "react-router-dom";
import idIcon from "../../images/kyc/idIcon.svg"
import bankIcon from "../../images/wallet/bank.svg"
import tetherIcon from "../../images/wallet/tether.svg"

const FundingModal = ({ fundingModal, setFundingModal }) => {
    
    const navigate = useNavigate()
        

    return (
        <div className={`w-full fixed z-50 inset-0 overflow-y-auto ${fundingModal ? 'block' : 'hidden'}`}>
            <div className="w-full flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                
                    <div className={`w-[100%] xphones:w-[350px] md:w-[781px] 2xl:w-[900px] md:min-h-[300px] 
                    h-fit py-6 px-2 phones:px-4 md:p-10 bg-white rounded-md md:rounded-[10px]
                    shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] font-arial mx-auto`} >                        

                        <div className="flex flex-col">
                            <button className="mb-4 md:mb-8 text-[14px] md:text-[26px] font-bold ml-auto "
                            onClick={() => {
                                setFundingModal(false)
                            }}
                            >
                                Cancel
                            </button>
                            <div className="w-full flex flex-col items-center px-2 md:px-4 xl:px-6 " >
                                <h2 className="mb-[22px] md:mb-[62px] text-[16px] md:text-[35px] font-black text-center " >Select method of funding</h2>
                                <div className="mb-[22px] md:mb-[56px] w-full flex justify-between items-center " >
                                    <div className="flex gap-2 items-center " >
                                        <img src={bankIcon} alt="Bank" className="w-[29px] md:w-[48px]  " />
                                        <h3 className="text-[12px] md:text-[22px] font-bold text-[#011217] " >Fund using debit/credit card</h3>
                                    </div>
                                    <button className="py-[5px] md:py-3 px-[9px] md:px-5 rounded-sm md:rounded-md border-[1px] md:border-2 border-black text-[10px] md:text-[18px] font-bold "
                                        onClick={()=> navigate('/bankfunding')}
                                    >
                                        Fund wallet
                                    </button>
                                </div>
                                <div className="mb-[24px] md:mb-[65px] w-full flex justify-between items-center " >
                                    <div className="flex gap-2 items-center " >
                                        <img src={tetherIcon} alt="Bank" className="w-[29px] md:w-[48px]  " />
                                        <h3 className="text-[12px] md:text-[22px] font-bold text-[#011217] " >Fund using USDT(Crypto) </h3>
                                    </div>
                                    <button className="py-[5px] md:py-3 px-[9px] md:px-5 rounded-sm md:rounded-md border-[1px] md:border-2 border-black text-[10px] md:text-[18px] font-bold "
                                        onClick={()=> navigate('/cryptofunding')}
                                    >
                                        Fund wallet
                                    </button>
                                </div>
                                <p className="text-center text-[11px] md:text-[18px]  " >
                                    We utilize the latest encryption technology and adhere to strict industry standards to ensure that your payment information remains confidential and secure at all times.
                                </p>
                            </div>
                            
                                
                        </div>    
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FundingModal;