import usdtlogo from "../../images/usdtlogo.svg"
import arrowdown from "../../images/arrowdown.svg"

function Walletbody(){

    return(
        <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[31px] lg:pr-[43px] pt-8 md:pt-[37px] pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
            <h1 className="text-[32px] font-black mb-5 " >Wallet</h1>
            <p className=" text-lg " >Check your wallet balance, connect to your external wallet, withdraw  your funds</p>
            
            <div className="pt-7 flex gap-[54px]" >
                
                <section className=" flex-[2] w-2/3" >
                    <h2 className=" text-[22px] font-black " >Account Balance and Information </h2>
                    <div className="flex lg:gap-7 pt-[35px] mb-12 " >
                        <div className="flex items-center justify-center lg:gap-4  bg-white py-6 px-7 rounded-[10px] shadow-[0px_0px_16px_rgba(0,0,0,0.04)] " >
                            <img src={usdtlogo} alt="USDT logo" className="w-[68px] h-[64px] "  />
                            <section className="flex flex-col gap-3" >
                                <h4 className=" text-[18px] text-[#525252]" >Wallet Balance</h4>
                                <h4 className="text-[22px] font-black leading-6 " >9922778 USDT</h4>
                                <h4 className="text-[16px] leading-5 text-[#37BCF7] font-black" >+23356 USDT </h4>
                            </section>
                        </div>
                        <div className="flex items-center justify-center lg:gap-4  bg-white py-6 px-7 rounded-[10px] shadow-[0px_0px_16px_rgba(0,0,0,0.04)] " >
                            <img src={usdtlogo} alt="USDT logo" className="w-[68px] h-[64px] "  />
                            <section className="flex flex-col gap-3" >
                                <button className="flex bg-[#F9F9F9] py-1 pl-2 pr-4 items-center gap-6 rounded-l-lg rounded-r-3xl " >
                                    <span>Last 3 months</span>
                                    <img src={arrowdown} alt="" className="relative bottom-[2px]" />
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

                    </div>

                </section>
                
                <section className="flex-1 w-1/3 lg:max-w-[370px] bg-white " >
                    <div className="py-[35px] px-[23px] border-b-[0.5px] border-[#D8D8D8] " >
                        <h3 className="text-[22px] font-black mb-3 " >Activites</h3>
                        <p className="text-[16px]" >See  your donation activites for your campaign. </p>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Walletbody