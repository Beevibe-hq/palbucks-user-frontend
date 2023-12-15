import { useState } from "react"
import crediticon from "../../images/crediticon.svg"
import debiticon from "../../images/debiticon.svg"
import fundingicon from "../../images/fundingicon.jpg"

function Transactions(props){

    const transactiontype = props.type

    return (
        <div className="w-full flex md:h-[48px] gap-2 phones:gap-3 md:gap-5 items-center " >
            <img
                src={ 
                    transactiontype === 'credit' ? crediticon : 
                    transactiontype === 'debit' ? debiticon :
                    transactiontype === 'funding' ?  fundingicon :
                    null
                }
                alt="credit icon"
                className="h-[35px] md:h-[46px] w-10 md:w-[51px] "
            />
            <div className="flex justify-between gap-1 w-full">
                <div className="flex flex-col gap-0 " >
                    <h5 className="inline-block text-sm md:text-base font-black mb-[3px] md:mb-[10px] max-w-[170px] md:max-w-none" >
                    {
                    transactiontype === 'credit' ? 'Funding into wallet' :
                    transactiontype === 'debit' ? 'Withdrawal into external wallet' :
                    'Funded a crowdfund campaign' }
                    </h5>
                    <p className="text-xs md:text-sm" >March 15, 2023</p>
                </div>
                <h5 className="text-sm md:text-lg font-black float-right " >
                    {props.amt ? props.amt : '3000'} USDT
                </h5>
            </div>
        </div>
    )
}

export default Transactions