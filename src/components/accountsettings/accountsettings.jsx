import Changecountry from "../changecountry/changecountry"
import Changemail from "../changemail/changemail"
import Changepassword from "../changepassword/changepassword"
import Changeusername from "../changeusername/changeusername"

function Accountsettings(props){

    return(
        <div className ="w-full" >

            <div className = "mb-11">
                <h2 className=" font-bold text-xl leading-7 mb-2" >Account information</h2>
                <p className = "font-medium leading-6 text-base " >Update your account information such as your username, phone number, email address and country at any time.</p>
            </div>

            <div className = "w-full flex flex-col gap-11 mb-20" >
                <Changeusername />
                <Changeusername />        
                <Changemail />
                <Changecountry />                          
            </div>

            <Changepassword />            
        </div>
    )
}

export default Accountsettings