import { useEffect, useState } from "react"
import arrowdown from "../../images/arrowdown.svg"
import arrowup from "../../images/arrowup.svg"
import { useMediaQuery } from "react-responsive"
import Loadingspinner from "../loadingspinner/loadingSpinner"

import Select from 'react-select'

function Changecountry(props) {
    

    const [countries, setcountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    //custom dropdown indicator for Select tag/component
    const CustomDropdownIndicator = () => (
        <img src = {arrowdown} alt = 'down arrow' className="w-[15px] h-[14px] " />
    )

    useEffect(() => {

        const getCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
                const data = await response.json()
                setcountries(data)
                //console.log(data)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        getCountries()
    }, [])
    
    const countryOptions = countries.map((country) => ({
        value: country.name.common,
        label: country.name.common
    })).sort((a, b) => a.label.localeCompare(b.label)); // Sort alphabetically    



    const [opencountry, setopencountry] = useState(true)
    const managecountry = () =>{

        if(opencountry == true){
            setopencountry(false)
        }else{
            setopencountry(true)
        }
    }

    const isMobile = useMediaQuery({
        query:'(max-width:768px)'
    })

    const handleCountryChange = async() =>{
        setIsLoading(true)
        if(selectedCountry !== ''){
            const access_token = localStorage.getItem('access_token')
            const formdata = new FormData()
            formdata.append("location",selectedCountry)
            const changeLocation = await fetch(`https://palbucks-api.onrender.com/users/api/profile/`,{
                method:'PATCH',
                headers:{
                    Authorization: `Bearer ${access_token}`,
                },
                body:formdata
            })

            const response = await changeLocation.json()
            console.log(response)
            if(changeLocation.status == 200){
                //alert('Location changed successfully')
                localStorage.setItem('userInfo', JSON.stringify(response))
            }else{
                alert('Email change failed')
            }
        }
        setIsLoading(false)
    }

    return(
        <div className = " rounded-[5px] w-full md:w-[90%] lg:w-full xl:w-[75%] bg-white " >
            <div className = "flex justify-between items-center p-[15px] md:py-5 md:px-7 cursor-pointer " onClick = {managecountry} >
                <h3 className = "text-sm md:text-lg font-bold" >
                    Location
                </h3>
                <img 
                    src={arrowup} alt="down arrow" 
                    className = {` ${opencountry ? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px]`}
                />
            </div>

            <hr className = " border-[1px] border-[#C4C4C4] " />
            
            <div className = {` ${opencountry ? '': 'hidden'} flex flex-col gap-3 px-[15px] md:px-7 py-3 md:py-6`} >                  
            <div className ={` ${opencountry ? 'flex flex-col md:flex-row md:items-center ' : 'hidden'} gap-5 md:gap-8 `} >
                    
                    {/* <input 
                        type="text" 
                        placeholder = "Search your country" 
                        className = {`
                            w-[250px] h-[46px] border-[0.5px] border-[#DDDDDD] 
                            text-sm md:text-base py-2 px-2 md:px-5 outline-0 rounded-lg 
                            focus:border-[#2CA9F2] focus:border-2 `} 
                    /> */}

                    <Select
                        options={countryOptions}
                        placeholder="Search your country"
                        onChange={(e) => {
                            setSelectedCountry(e.value)
                        }}
                        components={{
                            DropdownIndicator: CustomDropdownIndicator,
                            IndicatorSeparator : () => null
                        }}
                        styles={{
                            control: (base, state) => ({
                                ...base,
                                width: '250px',
                                height: '46px',
                                border: state.isFocused ? '1px solid #2CA9F2' : '0.5px solid #DDDDDD',
                                boxShadow: state.isFocused ? 0 : 0,                                
                                cursor:'pointer',
                                caretColor:'transparent',
                                paddingRight: isMobile ? '12px' : '20px',
                                paddingLeft:isMobile ? '4px':'12px',
                                borderTopLeftRadius:'10px',
                                borderBottomLeftRadius:'10px',
                                borderTopRightRadius:'10px',
                                borderBottomRightRadius:'10px',
                                color: 'black',
                                z:'10'
                            }),
                            menu: base => ({
                                ...base,
                                width: isMobile ? '100%': '120%',
                                zIndex: '30',      
                                color: 'black',
                            }),
                        }}
                    />

                    <button 
                        onClick={handleCountryChange}
                        className = {`bg-[#2CA9F2] min-w-[102px] md:min-w-[160px] w-fit hover:bg-blue-500 h-9 md:h-[42px] text-white rounded-[5px] md:rounded-[12px] px-[11px] md:px-[15px] py-[2px] md:py-[5px] 
                        font-black text-sm md:text-lg leading-7 `} 
                    >
                        <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                            <Loadingspinner width = '28px' height = '28px' />
                        </div>
                        <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                            Change location
                        </span>
                    </button>

                </div>
                <p className="hidden md:block font-medium text-base leading-6 text-[#7D7D7D] " >{selectedCountry }</p>
            </div>

        </div>

    )
}

export default Changecountry