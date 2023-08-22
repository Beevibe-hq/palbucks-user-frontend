import { useState } from "react"

import Accountsettings from "../accountsettings/accountsettings"
import Privacysettings from "../privacysettings/privacysettings"


function Settingsbody(){

    const [activesettingspage, setactivesettingspage] = useState('accounts')

    return(
        <div className = 'mt-[90px] md:mt-[100px] w-full h-full fold:px-2 phones:px-3 xphones:px-5 md:px-8 lg:px-10 pt-6 pb-10 md:py-10 bg-[#F9F9F9]'>

            <h1 className = "font-black text-xl phones:text-xl md:text-3xl leading-7 tracking-[0.5px] mb-9 md:mb-14 " > 
                Personalize your experience
            </h1>

            <div className = 'flex gap-0 md:gap-[15px] mb-[30px] md:mb-12'>                
                <button className = {` ${activesettingspage == 'accounts' ? 'bg-black md:bg-[#2CA9F2] text-white ' : 'text-[#8E8E93] '  }
                  font-semibold rounded-[5px] px-[15px] py-[5px] text-sm md:text-lg`}
                   onClick = { () =>{
                       setactivesettingspage('accounts')
                   }

                   }
                >
                    My accounts
                </button>

                <button className = {` ${activesettingspage == 'privacy' ? 'bg-black md:bg-[#2CA9F2] text-white ' : 'text-[#8E8E93] '  }
                  font-semibold rounded-[5px] px-[15px] py-[5px] text-sm md:text-lg `}
                  onClick = { ()=>{
                      setactivesettingspage('privacy')
                  }

                  }  
                  >
                    Privacy & Safety
                </button>
                <button className = {` ${activesettingspage == 'wallet' ? 'bg-black md:bg-[#2CA9F2] text-white ' : 'text-[#8E8E93] '  }
                  font-semibold rounded-[5px] px-[15px] py-[5px] text-sm md:text-lg `}
                  onClick = { ()=>{
                      setactivesettingspage('wallet')
                  }

                  }  
                  >
                    Wallet
                </button>
            </div>

            <div className = "w-full">
                {
                    activesettingspage === 'accounts' ? 
                    <Accountsettings />  :
                    <Privacysettings />   
                }
            </div>

        </div>
    )
}

export default Settingsbody