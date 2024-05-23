import { useNavigate } from "react-router-dom";
import palbucks from '../../images/palbucks2.svg';
import applogo from '../../images/appLogo.svg';
import profilePlaceholder from "../../images/profileplaceholder.svg";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setprofilepageactive } from "../../actions/actions";
import Select from "react-select";
import { useMediaQuery } from "react-responsive";
import arrowdown from "../../images/arrowdown.svg";
import bankIcon from "../../images/wallet/bank.svg";
import flyIcon from "../../images/kyc/Group 841.svg"
import usdIcon from "../../images/cardDonation/usd.svg"


function FundWalletWithBank() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // Current problem with this is that when the user changes details on another browser, the details wont be updated on this browser
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    const onprofilepage = useSelector(state => state.onprofilepage)    
    const profilepage = () => {
        navigate('/profilepage')        
        dispatch(setprofilepageactive())
    }

    const[pageDisplay, setPageDisplay] = useState('bankFunding')


    return (
        <div>
            <header className = {`bg-[#FFFFFF] py-4 md:py-[25px] px-8 md:px-12 lg:px-[95px] flex justify-between items-center shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] `} >
                <div className={` flex gap-[18px] items-center `}
                    onClick={() => {
                        navigate('/home');
                }}>
                    <img src={applogo} alt="Palbucks logo" className = 'cursor-pointer w-5 md:w-6 ' />
                    {/* <h1 className = {` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } font-bold text-[#033F59] text-xl md:text-2xl leading-6 tracking-tighter `} >Palbucks</h1> */}
                    <img src={palbucks} alt="palbucks" className = {` w-[100px] h-[18px] `} />
                </div>
                <div className=" flex gap-[10px] items-center">
                    <img
                        src={userInfo?.dp ? userInfo.dp : profilePlaceholder}
                        onClick = {profilepage}
                        alt="user avatar"
                        className={` ${onprofilepage ? 'border-[3px] border-[#37BCF7]': '' } w-[28px] phones:w-[35px] md:w-[40px] cursor-pointer rounded-[50%]`}
                    />
                    <h2 className = 'hidden md:block text-base font-black'>{userInfo?.first_name? userInfo.first_name : ''} {userInfo?.last_name? userInfo.last_name:''}</h2>
                </div>
            </header>

            <main className="py-[72px] md:py-[94px] px-[35px] md:px-[142px] lg:px-[180px] 2xl:px-[284px] ">
            { pageDisplay == 'bankFunding' ? 
                <div className="">
                    <h1 className="text-center text-[16px] md:text-[32px] font-black mb-4 text-[#000000] " >
                        Fund wallet with debit/credit card
                    </h1>
                    <p className="mb-[56px] md:mb-[104px] text-[14px] md:text-[20px] text-[#000000] text-center " >
                        Withdrawals to the bank account will start arriving in 1-3 business days after request
                    </p>
                    <div className="mb-[72px] md:mb-[242px] flex flex-col gap-3 md:gap-5 mx-auto max-w-[800px] " >
                        <label htmlFor="amount" className="text-[14px] md:text-[20px] font-bold" >
                            How much do you intend to fund?
                        </label>
                        <div className="relative h-fit" >
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                placeholder="Enter the amount"
                                className="border-[1.5px] border-black bg-[#F9F9F9] w-full h-[50px] md:h-[62px]
                                px-3 md:px-[22px] py-[11px] rounded-[5px] "
                            />
                            <img src={usdIcon} alt="" className="absolute right-3 md:right-5 transform cursor-pointer top-1/2 -translate-y-1/2 w-3 md:w-4 " />
                        </div>
                    </div>
                    <div className="max-w-[800px] mx-auto" >
                        <p className="mb-6 text-[15px] text-[#525252] " >
                            In upholding the integrity and safety of organized campaigns, Palbucks is determined to combating financial crime and ensuring adherence to anti-money laundering measures.
                        </p>
                        <button className="w-full bg-black rounded-lg py-[10px] md:py-5 px-5 md:px-8 text-[15px] md:text-[28px] text-[#FFFFFF] font-bold "
                            onClick={()=> setPageDisplay('successfulFunding')}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
                : pageDisplay == 'successfulFunding' ? 
                        <div className="mt-[73px] md:mt-[120px] max-w-[820px] block mx-auto  " >
                            <img src={flyIcon} alt="success" className="mb-[34px] w-[49px] md:w-[71px] mx-auto " />
                            <h3 className="text-[16px] md:text-[35px] font-black mb-4 md:mb-2 text-center " >
                                    Wallet Funding in Progress
                            </h3>
                            <p className="text-[14px] md:text-[20px] mb-8 md:mb-10 text-center " >
                                Your transaction to fund your wallet is currently being processed. This may take a few minutes to complete.
                            </p>

                            <button className="py-[10px] md:py-5 px-6 md:px-10 bg-black text-[#FFFFFF] text-[16px] md:text-[28px] font-bold rounded-md md:rounded-lg mx-auto block  "
                            onClick={()=> navigate('/home') }>
                                Go back to homepage
                            </button>
                        </div>
                : null
            
            }
            </main>

        </div>
    )
}

export default FundWalletWithBank