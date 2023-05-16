import { useState } from "react"
import crediticon from "../../images/crediticon.svg"
import debiticon from "../../images/debiticon.svg"
import fundingicon from "../../images/fundingicon.jpg"

function Transactions(props){

    const transactiontype = props.type

    return (
        <div className="w-full flex h-[48px] gap-5 items-center " >
            <img src={ 
                transactiontype === 'credit' ? crediticon : 
                transactiontype === 'debit' ? debiticon :
                transactiontype === 'funding' ?  fundingicon :
                null
            }
             alt="credit icon" className="h-[46px] w-[51px] " />
            <div className=" w-full gap-0 " >
                <h5 className="inline-block text-[16px] font-black mb-[10px]" >
                { 
                transactiontype === 'credit' ? 'Funding into wallet' : 
                transactiontype === 'debit' ? 'Withdrawal into external wallet' :
                'Funded a crowdfund campaign' }
                </h5>
                <h5 className="text-[18px] font-black float-right " >3000 USDT</h5>
                <p className="text-[14px]" >March 15, 2023</p>
            </div>
        </div>
    )
}

export default Transactions