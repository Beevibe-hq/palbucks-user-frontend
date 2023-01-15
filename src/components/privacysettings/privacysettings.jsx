import Blockedaccounts from "../blockedaccounts/blockedaccounts"
import Mutedaccounts from "../mutedaccounts/mutedaccounts"

function Privacysettings(){

    return(
        <div className = "w-full">
            
            <div className = "mb-11">
                <h2 className=" font-bold text-xl leading-7 mb-2" >Privacy & Safety</h2>
                <p className = "font-medium leading-6 text-base " >
                    You can mute and block other accounts or users, thereby restricting the kind of contents you want to see.
                </p>
            </div>
            
            
            <div className = "w-full flex flex-col gap-14 mb-20">
                <Mutedaccounts />                    
                <Blockedaccounts />    
            </div>
        
        
        </div>
    )
}

export default Privacysettings