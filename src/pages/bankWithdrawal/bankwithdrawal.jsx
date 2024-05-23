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

function BankWithdrawal() {

    const navigate = useNavigate()
    const [pageDisplay, setPageDisplay] = useState('connectAccount')

    const dispatch = useDispatch()

    const onprofilepage = useSelector(state => state.onprofilepage)    
    const profilepage = () => {
        navigate('/profilepage')        
        dispatch(setprofilepageactive())
    }

    const isMobile = useMediaQuery({
        query:'(max-width:768px)'
    })

    //custom dropdown indicator for Select tag/component
    const CustomDropdownIndicator = () => (
        <img src = {arrowdown} alt = 'down arrow' className="w-[15px] h-[14px] " />
    )

    const [withdrawalDetails, setWithdrawalDetails] = useState({
        bank_name: '',
        account_type: '',
        account_number: '',
        amount:'',
    })

    const bankOptions = [        
        { value: 'gtbank', label: 'Guaranty Trust Bank (GTBank) ' },
        { value: 'accessbank', label: 'Access Bank' },
        { value: 'zenithbank', label: 'Zenith Bank' },
        { value: 'ubabank', label: 'United Bank for Africa (UBA)' },
        { value: 'firstbank', label: 'First Bank' },
        { value: 'sterlingbank', label: 'Sterling Bank' },
        { value: 'stanbicbank', label: 'Stanbic IBTC Bank' },
        { value: 'ecobank', label: 'EcoBank Nigeria' },
        {value:'unionbank', label:'Union Bank of Nigeria' }
    ]
    
    const accountOptions = [
        { value: 'savings', label: 'Savings account' },
        { value: 'current', label: 'Current account' },
    ]

    // Prevent account number input from scrolling
    const numberInputRef = useRef(null);
    /* useEffect(() => {
        const handleWheel = (event) => {
            if (document.activeElement === numberInputRef.current) {
                event.preventDefault();
            }
        };

        const inputElement = numberInputRef.current;
        inputElement.addEventListener('wheel', handleWheel);

        // Clean up the event listener
        return () => {
            inputElement.removeEventListener('wheel', handleWheel);
        };
    }, []); */



    // Current problem with this is that when the user changes details on another browser, the details wont be updated on this browser
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

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
                
                <div className="mb-[63px] md:mb-[56px] mx-auto w-fit flex gap-[5px] items-center" >
                    <div 
                        className="w-8 md:w-10 h-8 md:h-10 bg-[#35FAA0] rounded-full flex items-center justify-center text-base md:text-lg font-bold " >
                        1
                    </div>
                    <hr className=" w-[30px] md:w-[103px] bg-[#D2F9E7] h-[6px] " />
                    <div
                        className={` ${pageDisplay !== 'connectAccount'? 'bg-[#35FAA0]' : 'bg-[#35FAA033]' }
                        w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center text-base md:text-lg font-bold
                        `}
                    >
                        2
                    </div>
                    <hr className=" w-[30px] md:w-[103px] bg-[#D2F9E7] h-[6px] " />
                    <div
                        className={` ${pageDisplay == 'successfulWithdrawal' ? 'bg-[#35FAA0]' : 'bg-[#35FAA033]' }
                        w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center text-base md:text-lg font-bold
                        `}
                    >
                        3
                    </div>
                </div>

                {
                    pageDisplay == 'connectAccount' ?
                        <div className="">
                            <h1 className="text-center text-[16px] md:text-[32px] font-black mb-4 text-[#000000] " >
                                Connect your  bank account
                            </h1>
                            <p className="mb-[56px] md:mb-[104px] text-[14px] md:text-[20px] text-[#000000] text-center " >
                                Withdrawals to the bank account will start arriving in 1-3 business days after request
                            </p>
                            <div className="mb-[72px] md:mb-[104px] flex flex-col gap-8 md:gap-12 mx-auto max-w-[800px] " >

                                <div className="flex flex-col gap-3 md:gap-5 flex-1  " >
                                    <label htmlFor="bank_name" className="text-[14px] md:text-[20px] font-bold" >
                                        What is your bank name?
                                    </label>
                                    <Select
                                        options={bankOptions}
                                        placeholder="Select bank"
                                        onChange={(e) => {
                                            setWithdrawalDetails({...withdrawalDetails, bank_name: e.value})
                                        }}
                                        components={{
                                            DropdownIndicator: CustomDropdownIndicator,
                                            IndicatorSeparator : () => null
                                        }}
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                width: '100%',
                                                height: isMobile ? '50px' : '62px',
                                                border: state.isFocused ? '1px solid #2CA9F2' : '1.5px solid #000000',
                                                "&:hover": {
                                                border: state.isFocused ? '1px solid #2CA9F2' : '1.5px solid #000000',
                                                },
                                                boxShadow: state.isFocused ? 0 : 0,
                                                cursor:'pointer',
                                                caretColor:'transparent',
                                                paddingRight: isMobile ? '12px' : '22px',
                                                paddingLeft: isMobile ? '4px' : '22px',
                                                paddingTop: isMobile ? '4px' : '11px',
                                                paddingBottom:isMobile ? '4px' : '11px',
                                                borderTopLeftRadius:'5px',
                                                borderBottomLeftRadius:'5px',
                                                borderTopRightRadius:'5px',
                                                borderBottomRightRadius: '5px',
                                                backgroundColor:'#F9F9F9',
                                                color: 'black',
                                                z:'10'
                                            }),
                                            menu: base => ({
                                                ...base,
                                                width: '100%',
                                                zIndex: '30',
                                                color: 'black',
                                            }),
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col gap-3 md:gap-5 flex-1  " >
                                    <label htmlFor="account_type" className="text-[14px] md:text-[20px] font-bold" >
                                        What is your account type?
                                    </label>
                                    <Select
                                        options={accountOptions}
                                        placeholder="Select account type"
                                        onChange={(e) => {
                                            setWithdrawalDetails({...withdrawalDetails, account_type: e.value})
                                        }}
                                        components={{
                                            DropdownIndicator: CustomDropdownIndicator,
                                            IndicatorSeparator : () => null
                                        }}
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                width: '100%',
                                                height: isMobile ? '50px' : '62px',
                                                border: state.isFocused ? '1px solid #2CA9F2' : '1.5px solid #000000',
                                                "&:hover": {
                                                border: state.isFocused ? '1px solid #2CA9F2' : '1.5px solid #000000',
                                                },
                                                boxShadow: state.isFocused ? 0 : 0,
                                                cursor:'pointer',
                                                caretColor:'transparent',
                                                paddingRight: isMobile ? '12px' : '22px',
                                                paddingLeft: isMobile ? '4px' : '22px',
                                                paddingTop: isMobile ? '4px' : '11px',
                                                paddingBottom:isMobile ? '4px' : '11px',
                                                borderTopLeftRadius:'5px',
                                                borderBottomLeftRadius:'5px',
                                                borderTopRightRadius:'5px',
                                                borderBottomRightRadius: '5px',
                                                backgroundColor:'#F9F9F9',
                                                color: 'black',
                                                z:'10'
                                            }),
                                            menu: base => ({
                                                ...base,
                                                width: '100%',
                                                zIndex: '30',
                                                color: 'black',
                                            }),
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col gap-3 md:gap-5 flex-1  " >
                                    <label htmlFor="account" className="text-[14px] md:text-[20px] font-bold" >
                                        What is your account number?
                                    </label>
                                    <input
                                        type="number"
                                        name="account"
                                        id="account"
                                        placeholder="Enter your account number"
                                        className="border-[1.5px] border-black bg-[#F9F9F9] w-full h-[50px] md:h-[62px] 
                                        px-3 md:px-[22px] py-[11px] rounded-[5px] "
                                        ref={numberInputRef}
                                    />
                                </div>
                            </div>

                            <div className="max-w-[800px] mx-auto" >
                                <p className="mb-6 text-[15px] text-[#525252] text-center " >
                                    Your banking information will never be shared with any 3rd parties
                                </p>
                                <button className="w-full bg-black rounded-lg py-[10px] md:py-5 px-5 md:px-8 text-[15px] md:text-[28px] text-[#FFFFFF] font-bold "
                                    onClick={()=> setPageDisplay('bankWithdrawal')}
                                >
                                    Connect bank account
                                </button>
                            </div>

                        </div>    
                    : pageDisplay == 'bankWithdrawal' ?
                            <div>
                                <h1 className="text-center text-[16px] md:text-[32px] font-black mb-4 text-[#000000] " >
                                    Withdrawal into bank account
                                </h1>
                                <p className="mb-[36px] md:mb-[64px] text-[14px] md:text-[20px] text-[#000000] text-center " >
                                    Withdrawals to the bank account will start arriving in 1-3 business days after request
                                </p>
                                <div className="max-w-[880px] mx-auto " >
                                    
                                    <div className="mb-12 md:mb-[88px] border-dashed border-[1.5px] border-black bg-white flex flex-col gap-4 md:flex-row justify-between items-center
                                        px-4 md:px-8 py-6 md:py-[37px] rounded-[10px]">
                                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6" >
                                            <img src={bankIcon} alt="bank Icon" className="w-12" />
                                            <div className="flex flex-col gap-2 items-center md:items-start" >
                                                <h2 className="text-[14px] md:text-[18px] font-bold " >ACHILONU JOSEPH IKENNA</h2>
                                                <p className="text-[14px] md:text-[15px] " >0421958617</p>
                                                <p className="text-[13px] md:text-[14px] text-[#525252] " >Guaranty Trust Bank (GTBank) </p>
                                            </div>
                                        </div>
                                        <button className=" px-5 py-3 border-2 border-black rounded-[5px] text-[12px] md:text-[18px] font-bold " >
                                            Disconnect account
                                        </button>
                                    </div>

                                    <div className="mb-[72px] flex flex-col gap-3 md:gap-5" >
                                        <div className="flex justify-between items-center" >
                                            <label htmlFor="amount" className= "text-[13px] md:text-[20px] font-bold " >
                                                How much do you intend to withdraw?
                                            </label>
                                            <p className="hidden md:block md:text-[18px] text-[#525252] " >Balance: $150,000</p>
                                        </div>
                                        <input
                                            type="number"
                                            name="amount"
                                            id="amount"
                                            placeholder="Enter the amount"
                                            className="border-[1.5px] border-black bg-[#F9F9F9] w-full h-[50px] md:h-[62px] 
                                            px-3 md:px-[22px] py-[11px] rounded-[5px] "
                                            ref={numberInputRef}
                                        />
                                        <p className="md:hidden text-[12px] text-[#525252] " >Balance: $150,000</p>
                                    </div>

                                    <p className="mb-6 text-[15px] text-[#525252] " >
                                        In upholding the integrity and safety of organized campaigns, Palbucks is determined to combating financial
                                        crime and ensuring adherence to anti-money laundering measures.
                                    </p>
                                    <button className="w-full bg-black rounded-lg py-[10px] md:py-5 px-5 md:px-8 text-[15px] md:text-[28px] text-[#FFFFFF] font-bold "
                                        onClick={()=> setPageDisplay('successfulWithdrawal')}
                                    >
                                        Send withdrawal request
                                    </button>
                                    
                                </div>
                            </div>
                    : pageDisplay == 'successfulWithdrawal' ? 
                                <div className="mt-[73px] md:mt-[120px] max-w-[820px] block mx-auto  " >
                                    <img src={flyIcon} alt="success" className="mb-[34px] w-[49px] md:w-[71px] mx-auto " />
                                    <h3 className="text-[16px] md:text-[35px] font-black mb-4 md:mb-2 text-center " >
                                         Withdrawal request sent successfully
                                    </h3>
                                    <p className="text-[14px] md:text-[20px] mb-8 md:mb-10 text-center " >
                                        Your funds are on their way and should be credited to your account within 1-3 business days.
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

export default BankWithdrawal