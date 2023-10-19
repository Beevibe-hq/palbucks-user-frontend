import { useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import organizersimg from "../../images/organizers.svg"
import profilePlaceholder from "../../images/profileplaceholder.svg"

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
            <div className = "flex justify-between items-center py-3 md:py-5 px-4 md:px-7" >
                <h3 className = "md:text-lg font-bold flex gap-2 md:gap-4 " >
                    <img src={organizersimg} alt="organizer icon" className="w-4 md:w-6"  />
                    <span>Campaign organiser(s)</span>
                </h3>
                <img 
                    src={arrowup} 
                    alt="down arrow" 
                    className = {` ${openorganizers ? '' : 'rotate-180'} cursor-pointer w-[20px] md:w-[25px] h-[10px] md:h-[14px] `}  />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
            
            <div className ={` ${openorganizers ? 'flex' : 'hidden'} flex-col gap-3 px-4 md:px-7 py-3 md:py-6  `} >
                {/* {
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
                } */}
                    <div className = "flex items-center gap-2 md:gap-4 "  >
                        <img src={props.organiserimage} alt="organizer profile pic" className = "w-[45px] md:w-[60px] rounded-full border-[#35FAA0] border-2 md:border-[3px] "  />  
                        <p className = "font-medium text-sm md:text-lg " ><span className = "font-bold" >{props.organiser}</span> is the organiser of this crowdfund </p>
                        <div className="min-w-[8px] md:w-[13px] h-2 md:h-[13px] bg-[#35FAA0] rounded-full " ></div>
                    </div>
                    
                    {/* Navigate through the co_organizers list and display them below */}
                    {
                        props.co_organisers.map((item,i) =>{
                            return(
                                <div key ={i} className = "flex items-center gap-2 md:gap-4 "  >
                                    <img src={item.dp ? item.dp : profilePlaceholder } alt="coOrganizer profile pic" className = "w-[45px] md:w-[60px] rounded-full"  />  
                                    <p className = "font-medium text-sm md:text-lg " ><span className = "font-bold" >{item.first_name} {item.last_name}</span> is a co-organiser </p>                                    
                                </div>
                            )
                        })
                    }
            </div>
                                
            

        </div>

    )
}

export default Campaignorganizers