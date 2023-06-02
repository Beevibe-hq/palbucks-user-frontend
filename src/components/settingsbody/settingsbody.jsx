import { useState } from "react"

import Accountsettings from "../accountsettings/accountsettings"
import Privacysettings from "../privacysettings/privacysettings"


function Settingsbody(){

    const [activesettingspage, setactivesettingspage] = useState('accounts')

    return(
        <div className = 'mt-[90px] md:mt-[100px] w-full h-full py-16 px-[50px] bg-[#F9F9F9]'>

            <h1 className = "font-bold text-4xl leading-[24px] mb-16 " > Personalize your experience</h1>

            <div className = 'flex gap-[15px] mb-14'>                
                <button className = {` ${activesettingspage == 'accounts' ? 'bg-[#2CA9F2] text-white ' : 'text-[#7D7D7D] '  }
                  font-semibold  w-[160px] h-[42px] rounded-[5px] px-[15px] py-[5px] text-lg leading-7 `}
                   onClick = { () =>{
                       setactivesettingspage('accounts')
                   }

                   }
                >
                    My accounts
                </button>

                <button className = {` ${activesettingspage == 'privacy' ? 'bg-[#2CA9F2] text-white ' : 'text-[#7D7D7D] '  }
                  font-semibold  w-[190px] h-[42px] rounded-[5px] px-[15px] py-[5px] text-lg leading-7 `}
                  onClick = { ()=>{
                      setactivesettingspage('privacy')
                  }

                  }  
                  >
                    Privacy & Safety
                </button>
            </div>

            <div className = "w-full">
                {
                    activesettingspage == 'accounts' ? 
                    <Accountsettings />  :
                    <Privacysettings />   
                }
            </div>

        </div>
    )
}

export default Settingsbody