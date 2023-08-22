import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import blockicon from "../../images/Block icon2.svg"
import Blockeduser from "../blockeduser/blockeduser"
import userimg from "../../images/user.png"
import userimg2 from "../../images/user2.svg"
import userimg3 from "../../images/user3.svg"
import userimg4 from "../../images/user4.svg"
import userimg5 from "../../images/user5.svg"
import userimg6 from "../../images/user6.svg"
import userimg7 from "../../images/user7.svg"
import userimg8 from "../../images/user8.svg"
import userimg9 from "../../images/user9.svg"
import userimg10 from "../../images/user10.svg"
import userimg11 from "../../images/user11.svg"




function Blockedaccounts(){

    const [openblockedaccounts, setopenblockedaccounts] = useState('open')

    const manageblockedaccounts = () =>{

        if(openblockedaccounts == 'open'){
            setopenblockedaccounts('close')
        }else{
            setopenblockedaccounts('open')
        }
    }

    return(
        <div className = "w-full md:w-[90%] lg:w-[80] xl:w-[78%] bg-white " >
            <div className = "flex justify-between items-center p-[15px] md:py-5 md:px-7 cursor-pointer " onClick = {manageblockedaccounts} >
                <h3 className = "text-sm md:text-lg font-bold flex items-center gap-2 " >
                    <img src={blockicon} alt="block icon" className="w-[15px] h-[15px] md:w-5 md:h-5 " />
                    <span className="pt-[2px]" >Blocked accounts</span>
                </h3>
                <img 
                    src={arrowup} 
                    alt="down arrow" 
                    className = {` ${openblockedaccounts == 'open'? '' : 'rotate-180'} cursor-pointer w-[20px] h-[10px] md:w-[30px] md:h-[14px]`}
                />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
                            
            <div className ={` ${openblockedaccounts == 'open' ? 'flex h-[300px] overflow-auto ' : 'hidden'} px-[10px] md:px-7 py-3 md:py-6 mb-3 gap-4 md:gap-8 flex-wrap items-center `} >                
                {
                    blockedusersdata.map((item,i) =>{
                        return(
                            <Blockeduser key={i} image = {item.image} name = {item.name}  />
                        )
                    } )                    
                }
            </div>                            
        
        </div>
    )
}

const blockedusersdata = [
    {
        image:userimg10,
        name:'Lola'
    },
    {
        image:userimg11,
        name:'Richard',    
    },
    {
        image:userimg3,
        name:'Lilian'    
    },
    {
        image:userimg9,
        name:'Gerrard'    
    },{
        image:userimg8,
        name:'Eunice'    
    },{
        image:userimg7,
        name:'Emma'
    },
    {
        image:userimg5,
        name:'Samuellateomatheend'
    }
]

export default Blockedaccounts