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

    const [openmutedaccounts, setopenmutedaccounts] = useState('close')

    const managemutedaccounts = () =>{

        if(openmutedaccounts == 'open'){
            setopenmutedaccounts('close')
        }else{
            setopenmutedaccounts('open')
        }
    }

    return(
        <div className = " w-[90%] lg:w-[80] xl:w-[78%] bg-white " >
            <div className = "flex justify-between items-center py-5 px-7" >
                <h3 className = "text-lg font-bold flex gap-2 " >
                    <img src={muteicon} alt="mute icon" />
                    <span>Muted accounts</span>
                </h3>
                <img src={openmutedaccounts == 'open' ? arrowup : arrowdown} alt="down arrow" className = " cursor-pointer w-[30px] h-[14px] "
                    onClick = {managemutedaccounts}  />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
                            
            <div className ={` ${openmutedaccounts == 'open' ? 'flex' : 'hidden'} px-7 py-6 mb-3 gap-8 flex-wrap items-center `} >                
                {
                    mutedusersdata.map((item,i) =>{
                        return(
                            <Muteduser key={i} image = {item.image} name = {item.name}  />
                        )
                    } )                    
                }
            </div>                            
        
        </div>
    )
}

const mutedusersdata = [
    {
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
    }
]

export default Mutedaccounts