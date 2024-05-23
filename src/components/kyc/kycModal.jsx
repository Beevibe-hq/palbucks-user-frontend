import { useNavigate } from "react-router-dom";
import idIcon from "../../images/kyc/idIcon.svg"

const KycModal = ({ kycModal, setKycModal }) => {
    
    const navigate = useNavigate()
        

    return (
        <div className={`w-full fixed z-50 inset-0 overflow-y-auto ${kycModal ? 'block' : 'hidden'}`}>
            <div className="w-full flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                
                    <div className={`w-[100%] xphones:w-[350px] md:w-[681px] 2xl:w-[800px] md:min-h-[300px] 
                    h-fit py-6 px-2 phones:px-4 md:p-10 bg-white rounded-md md:rounded-[10px]
                    shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] font-arial mx-auto`} >                        
                            <div className="flex flex-col">
                                <button className="mb-4 md:mb-9 text-[14px] md:text-[26px] font-bold ml-auto "
                                onClick={() => {
                                    setKycModal(false)
                                }}
                                >
                                    Cancel
                                </button>
                                <div className="flex flex-col items-center" >
                                    <img
                                        src={idIcon}
                                        alt="Like icon"
                                        className="w-[40px] md:w-[130px] mb-2"
                                    />
                                    <h5 className="mb-1 md:mb-2 font-black text-[16px] md:text-[35px] text-center " >
                                        Let’s verify your identity
                                    </h5>
                                    <p className=" mb-6 md:mb-8 text-center text-[13px] md:text-[20px] md:leading-[32px]" >
                                        You are to upload and submit a government issued  ID and any bank document
                                    </p>                                    
                                    <button className="rounded md:rounded-lg bg-[#000000] py-3 md:py-5 px-[18px] md:px-9 text-[#FFFFFF] text-[14px] md:text-[28px] font-bold "
                                    onClick={() => {
                                        setKycModal(false)
                                        navigate('/kyc')
                                    }}
                                    >
                                        Begin KYC verification
                                    </button>
                                </div>
                                
                            </div>                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default KycModal;