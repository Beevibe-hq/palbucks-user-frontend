import Blockedaccounts from "../blockedaccounts/blockedaccounts"
import Mutedaccounts from "../mutedaccounts/mutedaccounts"

function Privacysettings(){

    return(
        <div className = "w-full">
            
            <div className = "mb-7 md:mb-11">
                <h2 className=" font-black text-base md:text-xl leading-7 mb-2" >
                    Privacy & Safety
                </h2>
                <p className = "md:font-medium text-sm md:text-base " >
                    You can mute and block other accounts or users, thereby restricting the kind of contents you want to see.
                </p>
            </div>
            
            
            <div className = "w-full flex flex-col gap-8 md:gap-14 mb-5">
                <Mutedaccounts />                    
                <Blockedaccounts />    
            </div>
        
        
        </div>
    )
}

export default Privacysettings