import Changecountry from "../changecountry/changecountry"
import Changemail from "../changemail/changemail"
import Changepassword from "../changepassword/changepassword"
import Changeusername from "../changeusername/changeusername"

function Accountsettings(props){

    
    return(
        <div className ="w-full" >

            <div className = "mb-7 md:mb-11">
                <h2 className=" font-black text-base md:text-xl leading-7 mb-2" >
                    Account information
                </h2>
                <p className = "md:font-medium text-sm md:text-base " >
                    Update your account information such as your username, phone number, email address and country.
                </p>
            </div>

            <div className = "w-full flex flex-col gap-8 md:gap-11 mb-[50px] md:mb-20" >                
                <Changeusername />        
                <Changemail />
                <Changecountry />                          
            </div>

            <Changepassword />            
        </div>
    )
}

export default Accountsettings