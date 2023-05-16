import usdtlogo from "../../images/usdtlogo.svg"
import arrowdown from "../../images/arrowdown.svg"
import user8 from "../../images/user8.svg"
import user12 from "../../images/user12.svg"
import user10 from "../../images/user10.svg"

import Activity from "../activity/activity"
import Transactions from "../transactions/transactions"

function Walletbody(){

    const processtransactiondata = () =>{
        let today = new Date().toDateString() //Get today's date
        let day = parseInt(today.split(' ')[1]) //Get the day and convert it to number
        let month = today.split(' ')[2].toLowerCase() //The month converted to lowercase for comparison with transactiondata month
    }

    return(
        <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[31px] lg:pr-[43px] pt-8 md:pt-[37px] pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
            <h1 className="text-[32px] font-black mb-5 " >Wallet</h1>
            <p className=" text-lg " >Check your wallet balance, connect to your external wallet, withdraw  your funds</p>
            
            <div className="pt-7 flex gap-[54px]" >
                
                <section className=" flex-[2] w-2/3" >
                    <h2 className=" text-[22px] font-black " >Account Balance and Information </h2>
                    <div className="flex lg:gap-7 justify-between pt-[35px] mb-12 " >
                        <div className="flex items-center justify-center lg:gap-4 2xl:min-w-[330px] bg-white py-[25px] px-[30px] rounded-[10px] shadow-[0px_0px_16px_rgba(0,0,0,0.04)] " >
                            <img src={usdtlogo} alt="USDT logo" className="w-[68px] h-[64px] "  />
                            <section className="flex flex-col gap-3" >
                                <h4 className=" text-[18px] text-[#525252]" >Wallet Balance</h4>
                                <h4 className="text-[22px] font-black leading-6 " >9922778 USDT</h4>
                                <h4 className="text-[16px] leading-5 text-[#37BCF7] font-black" >+23356 USDT </h4>
                            </section>
                        </div>
                        <div className="flex items-center justify-center lg:gap-4 2xl:min-w-[330px]  bg-white py-6 px-7 rounded-[10px] shadow-[0px_0px_16px_rgba(0,0,0,0.04)] " >
                            <img src={usdtlogo} alt="USDT logo" className="w-[68px] h-[64px] "  />
                            <section className="flex flex-col gap-3" >
                                <button className="flex bg-[#F9F9F9] text-[12px] py-1 pl-2 pr-4 items-center gap-6 rounded-l-lg rounded-r-3xl " >
                                    <span>Last 3 months</span>
                                    <img src={arrowdown} alt="" className="relative bottom-[2px] w-[15px] h-[9px] " />
                                </button>
                                <h4 className="text-[#525252] text-[18px] " >Amount Earned</h4>
                                <h4 className="font-black text-[22px] leading-6 " >123908 USDT</h4>
                            </section>
                        </div>
                    </div>
                    <button className={`text-[16px] text-white leading-5 font-black py-[10px] px-[15px] bg-[#37BCF7] mx-auto
                     block w-[67%] h-[40px] rounded-[10px] mb-[12px]  `} >
                        Withdraw Funds
                    </button>
                    <button className={`text-[16px] text-[#37BCF7] leading-5 font-black py-[10px] px-[15px] mx-auto
                     block w-[67%] h-[40px] rounded-[10px] mb-[70px] `} >
                        Fund Wallet
                    </button>

                    <div>
                        <h4 className="inline-block clear-right text-[22px] font-black leading-6 mb-[14px] " >Latest Transactions</h4>
                        <button className="flex float-right text-[12px] leading-5 bg-white py-1 pl-2 pr-4 items-center gap-6 rounded-l-lg rounded-r-3xl " >
                            <span>This month</span>
                            <img src={arrowdown} alt="" className="relative bottom-[1px] w-[15px] h-[9px] " />
                        </button>
                        <div className="">
                            <div className="mb-11">
                                <h5 className="text-[16px] mb-[26px] " >Today</h5>
                                {
                                    <div className="flex flex-col gap-5" >
                                    <Transactions type = {'credit'} />
                                    <Transactions type = {'debit'} />
                                    <Transactions type = {'funding'} />
                                    </div>
                                }
                            </div>
                            <div className="mb-11">
                                <h5 className="text-[16px] mb-[26px] " >Yesterday</h5>
                                {
                                    <div className="flex flex-col gap-5" >
                                    <Transactions type = {'funding'} />
                                    <Transactions type = {'funding'} />
                                    <Transactions type = {'funding'} />
                                    </div>
                                }
                            </div>
                            <div className="mb-11">
                                <h5 className="text-[16px] mb-[26px] " >March, 2023</h5>
                                {
                                    <div className="flex flex-col gap-5" >
                                    <Transactions type = {'debit'} />
                                    <Transactions type = {'debit'} />
                                    <Transactions type = {'debit'} />
                                    </div>
                                }
                            </div>

                            {/* {
                                
                                transactionsdata.filter().map((item,i)=>{
                                    return(
                                        <div>

                                        </div>
                                    )
                                })
                            } */}
                        </div>
                        
                    </div>

                </section>
                
                <section className="flex-1 w-1/3 2xl:min-w-[370px] lg:max-w-[370px] bg-white h-fit " >
                    <div className="py-[35px] px-[23px] border-b-[0.5px] border-[#D8D8D8] " >
                        <h3 className="text-[22px] font-black mb-3 " >Activites</h3>
                        <p className="text-[16px]" >See  your donation activites for your campaign. </p>
                    </div>
                    <div className="py-2 px-5 flex flex-col gap-4 " >
                        <Activity userdp = {user12} />
                        <Activity userdp = {user8} />
                        <Activity userdp = {user10} />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Walletbody


let transactionsdata = [
    {
        type:'credit',
        date:'may 5, 2023',
        amount:'3000 USDT'
    },
    {
        type:'debit',
        date:'may 5, 2023',
        amount:'127893 USDT'
    },
    {
        type:'funding',
        date:'may 5, 2023',
        amount:'10000 USDT'
    },
    {
        type:'funding',
        date:'may 4, 2023',
        amount:'100 USDT',
    },
    {
        type:'funding',
        date:'may 5, 2023',
        amount:'234 USDT'
    },
    {
        type:'funding',
        date:'may 4, 2023',
        amount:'1000000 USDT'
    },
    {
        type:'debit',
        date:'may 3, 2023',
        amount:'5000 USDT'
    },
    {
        type:'debit',
        date:'may 3, 2023',
        amount:'12000 USDT'
    },
    {
        type:'debit',
        date:'may 3, 2023',
        amount:'89300 USDT'
    },
    {
        type:'debit',
        date:'may 1, 2023',
        amount:'5332 USDT'
    },
    {
        type:'debit',
        date:'april 20, 2023',
        amount:'4300 USDT'
    },
]