import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import muteicon from "../../images/Mute icon.svg"
import Muteduser from "../muteduser/muteduser"
import userimg from "../../images/user.png"
import userimg2 from "../../images/user2.svg"
import userimg3 from "../../images/user3.svg"
import userimg4 from "../../images/user4.svg"
import userimg5 from "../../images/user5.svg"
import userimg6 from "../../images/user6.svg"




function Mutedaccounts(){

    const [openmutedaccounts, setopenmutedaccounts] = useState('open')

    const managemutedaccounts = () =>{

        if(openmutedaccounts == 'open'){
            setopenmutedaccounts('close')
        }else{
            setopenmutedaccounts('open')
        }
    }

    return(
        <div className = "w-full md:w-[90%] lg:w-[80] xl:w-[78%] bg-white " >
            <div className = "flex justify-between items-center p-[15px] md:py-5 md:px-7 cursor-pointer " onClick = {managemutedaccounts} >
                <h3 className = "text-sm md:text-lg font-bold flex items-center gap-2 " >
                    <img src={muteicon} alt="mute icon" className="w-[15px] h-[15px] md:w-5 md:h-5 " />
                    <span className="pt-[2px]" >Muted accounts</span>
                </h3>
                <img 
                    src={arrowup} 
                    alt="down arrow" 
                    className = {` ${openmutedaccounts == 'open'? '' : 'rotate-180'} cursor-pointer w-[20px] h-[10px] md:w-[30px] md:h-[14px]`}
                />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
                            
            <div className ={` ${openmutedaccounts == 'open' ? 'flex h-[150px] overflow-auto ' : 'hidden'} px-[10px] md:px-7 py-3 md:py-6 mb-3 gap-4 md:gap-8 flex-wrap items-center ${mutedusersdata.length ? '' : 'justify-center'}  `} >                
                {
                    mutedusersdata.length? mutedusersdata.map((item,i) =>{
                        return(
                            <Muteduser key={i} image = {item.image} name = {item.name}  />
                        )
                    }) :
                    <p className="text-[#8E8E93] text-[17px] text-center" >Nothing to show here :)</p>    
                }
            </div>                            
        
        </div>
    )
}

const mutedusersdata = [
    /* {
        image:userimg2,
        name:'Franca'
    },
    {
        image:userimg3,
        name:'Lilian',    
    },
    {
        image:userimg5,
        name:'Samuellateomatheend'
    },
    {
        image:userimg3,
        name:'Lilian',    
    } */
]

export default Mutedaccounts