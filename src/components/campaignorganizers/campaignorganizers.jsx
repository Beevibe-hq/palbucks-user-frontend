import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import organizersimg from "../../images/organizers.svg"


function Campaignorganizers(props){

    const [openorganizers, setopenorganizers] = useState(false)

    const manageorganizers = () =>{

        if(openorganizers == true){
            setopenorganizers(false)
        }else{
            setopenorganizers(true)
        }
    }

    return(
        <div className = "w-full bg-white cursor-pointer " onClick = {manageorganizers} >
            <div className = "flex justify-between items-center py-5 px-7" >
            <h3 className = "text-lg font-bold flex gap-2 " >
                <img src={organizersimg} alt="organizer icon" />
                <span>Campaign organiser(s)</span>
            </h3>
                <img src={openorganizers? arrowup : arrowdown} alt="down arrow" className = " cursor-pointer w-[30px] h-[14px] "  />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
            
                <div className ={` ${openorganizers ? 'flex' : 'hidden'} flex-col  mb-3 gap-3 px-7 py-6  `} >
                {
                    props.organizerdetails.map((item,i) =>{
                        return(
                            <div key ={i} className = "flex items-center gap-2 md:gap-5 "  >
                                <img src={item.image} alt="organizer account image" className = "w-[60px] md:w-[65px] "  />
                                {i == 0 ? 
                                <p className = "font-medium text-base md:text-lg " ><span className = "font-bold" >{item.name}</span> is the organiser of this crowdfund </p> :
                                <p className = "font-medium text-base md:text-lg " ><span className = "font-bold" >{item.name}</span> is the co-organiser </p>
                                
                                }
                            </div>
                        )
                    })
                }
                </div>
                                
            

        </div>

    )
}

export default Campaignorganizers