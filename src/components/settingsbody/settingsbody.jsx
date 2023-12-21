import { useState } from "react"

import Accountsettings from "../accountsettings/accountsettings"
import Privacysettings from "../privacysettings/privacysettings"


function Settingsbody(){

    const [activesettingspage, setactivesettingspage] = useState('accounts')

    return(
        <div className = 'mt-[90px] md:mt-[100px] w-full h-full fold:px-2 phones:px-3 xphones:px-5 md:px-8 lg:px-10 pt-6 pb-10 md:py-10 bg-[#F9F9F9]'>

            <h1 className = "font-black font-merriweather text-xl phones:text-xl md:text-3xl leading-7 tracking-[0.5px] mb-9 md:mb-14 " > 
                Personalize your experience
            </h1>

            {/* <div className='flex gap-0 md:gap-[15px] mb-[30px] md:mb-12'> */}
            <div className='bg-white w-fit mt-[30px] md:mt-[40px] mb-[30px] md:mb-12' >
                <button className = {` ${activesettingspage == 'accounts' ? 'bg-black text-white ' : 'text-[#8E8E93] '  }
                  font-semibold rounded-[5px] px-[15px] py-[5px] text-xs phones:text-sm xphones:text-base`}
                   onClick = { () =>{
                       setactivesettingspage('accounts')
                   }

                   }
                >
                    My accounts
                </button>

                <button className = {` ${activesettingspage == 'privacy' ? 'bg-black text-white ' : 'text-[#8E8E93] '  }
                  font-semibold rounded-[5px] px-[15px] py-[5px] text-xs phones:text-sm xphones:text-base `}
                  onClick = { ()=>{
                      setactivesettingspage('privacy')
                  }

                  }  
                  >
                    Privacy & Safety
                </button>
                <button className = {` ${activesettingspage == 'wallet' ? 'bg-black text-white ' : 'text-[#8E8E93] '  }
                  font-semibold rounded-[5px] px-[15px] py-[5px] text-xs phones:text-sm xphones:text-base `}
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