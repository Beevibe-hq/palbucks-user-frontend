import SignUpHeader from "../../components/signUpHeader/signUpHeader"
import bgradient from "../../images/authpages/bgradient.svg"
import bgradient2 from "../../images/bgradient1.svg"
import bgradient3 from "../../images/authpages/bgradient2.svg"
import { useState, useEffect } from "react"
import Loadingspinner from "../../components/loadingspinner/loadingSpinner"
import Select from "react-select"
import { options } from "../../components/organisecrowdfundbody/organisecrowdfundbody"
import arrowdown2 from "../../images/organiseCrowdfund/arrowdown.svg"
import { useMediaQuery } from "react-responsive"
import { useDispatch, useSelector } from "react-redux"
import { updateAnonymousCrowdfundData } from "../../actions/actions"
import { useNavigate } from "react-router-dom"

function AnonymousCrowdfundFormTitle() {

    const isMobile = useMediaQuery({
        query:'(max-width: 767px)'   
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const prevCrowdfundData = useSelector((state) => state.anonymousCrowdfundData )
    //console.log(prevCrowdfundData)
    //alert(prevCrowdfundData.personalInfo.phone)

    /* const [crowdfundData, setCrowdfundData] = useState(() => {
        if (prevCrowdfundData && prevCrowdfundData.crowdfundData) {
            const { tags, title, location } = prevCrowdfundData.crowdfundData;
                return { tags, title, location };
        } else {
        // If prevCrowdfundData doesn't exist or doesn't contain the desired properties, set default values
            return {
                tags: '',
                title: '',
                location: ''
            };
        }
    }); */
    const [crowdfundData, setCrowdfundData] = useState({
        tags: '',
        title: '',
        location: ''
    })

    
    const [countries, setcountries] = useState([])    
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
                    
    const CustomDropdownIndicator = () => (
        <img src = {arrowdown2} alt = 'down arrow' className="w-[15px] h-[14px] " />
    )


    
    return (
        <div className="relative font-arial" >
            <SignUpHeader page='anonymouscrowdfund' />
            <div className ="w-24 md:w-[400px] md:h-[800px] absolute -z-10 -right-[0px] top-[100px] md:-top-[200px] ">
                <img src={bgradient} alt="" className="w-full" />            
            </div>
            
            <div className ="w-24 md:w-[400px] md:h-[200px] absolute -z-10 -left-[0px] top-[535px] md:-top-[100px] lg:-top-[280px] ">
                <img src={bgradient3} alt="" className="w-full" />                 
            </div>

            <main className="pt-5 md:pt-[150px] mt-[103px] px-3 " >


                <div className="bg-white w-full phones:w-[98%] md:w-[70%] lg:w-[950px] mx-auto flex flex-col gap-[2.5px] md:gap-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.04)] rounded md:rounded-[10px] ">                
                    <div className="py-4 md:py-[30px] px-6 md:pl-[50px] md:pr-[30px] ">
                        <h3 className="text-lg md:text-[30px] font-black md:leading-[39px] " >
                            Let's begin your journey
                        </h3>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-[50px] px-6 md:px-[50px] py-5 md:py-[47px] border-t-[3px] md:border-t-[6px] border-[#F9F9F9] md:items-center ">
                        <div className="flex flex-col items-start gap-3 md:gap-5 w-full ">
                            <label
                                htmlFor="title"
                                className="text-base md:text-xl font-bold "
                                >
                                Give a title to your campaign
                            </label>
                            <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Enter your campaign title"
                                value={crowdfundData.title}
                                onChange={(e) => {
                                    setCrowdfundData((prevData) => ({...prevData, title:e.target.value}) )
                                } }
                                className={`w-full md:min-w-[390px] h-[38px] md:h-[60px] px-3 md:px-[22px] rounded-sm md:rounded border-[1.5px] border-black bg-[#F9F9F9] outline-none
                                    focus:border-[#37BCF7] focus:border-[2px] md:focus:border-[2px] focus:caret-[#37BCF7] text-sm md:text-lg   `}
                            />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-5 w-full max-w-[390px] ">
                            <label 
                                htmlFor="category"
                                className="text-base md:text-xl font-bold "
                                >
                                Select a category for your campaign
                            </label>
                            
                            <Select                                
                                options={options}
                                placeholder="Select category"
                                onChange={(e) => {
                                    setCrowdfundData((prevData) => ({...prevData, tags:e.value}) )
                                }}
                                defaultValue={crowdfundData.tags? crowdfundData.tags: ''}
                                components={{
                                    DropdownIndicator: CustomDropdownIndicator,
                                    IndicatorSeparator : () => null 
                                }}
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        width:'100%',
                                        height:isMobile ? '38px':'60px',                                        
                                        border: state.isFocused ? '2px solid #37BCF7' : '1.5px solid black',
                                        borderRadius: isMobile? '2px': '5px',
                                        
                                        // This line disable the blue border
                                        boxShadow: state.isFocused ? 0 : 0,
                                        "&:hover": {
                                            border: state.isFocused ? '1px solid gray' : '1px solid gray',
                                        },
                                        cursor:'pointer',
                                        caretColor:'transparent',
                                        paddingRight:'20px',
                                        paddingLeft:'-10px',
                                    }),       
                                    menu: base => ({
                                        ...base,
                                        //height: isMobile ? '100%': '120%',
                                        zIndex: '30',      
                                        color: 'black',
                                    }),
                                    menuList: base => ({
                                        ...base,
                                        // kill the white space on first and last option
                                        padding: 0,
                                    }),
                                }}
                                formatOptionLabel={(option) => (
                                    <div className="flex items-center gap-2 ">
                                        <img src={option.icon} alt="category icon" className="w-4 h-4" />
                                        <span className="text-sm font-black pt-1" >{option.label}</span>                                        
                                    </div>
                                )}
                            />
                        </div>

                        <div className="flex flex-col gap-3 md:gap-5 w-full max-w-[390px]">
                            <label 
                                htmlFor="location"
                                className="text-base md:text-xl font-bold "
                                >
                                Select your country
                            </label>                            
                            <Select
                                options={countryOptions}
                                placeholder="Select country"
                                onChange={(e) => {
                                    setCrowdfundData((prevData) => ({...prevData, location:e.value}) )
                                } }
                                components={{
                                    DropdownIndicator: CustomDropdownIndicator,
                                    IndicatorSeparator : () => null
                                }}
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        width:'100%',
                                        height:isMobile ? '38px':'60px',                                        
                                        border: state.isFocused ? '2px solid #37BCF7' : '1.5px solid black',
                                        borderRadius: isMobile? '2px': '5px',
                                        
                                        // This line disable the blue border
                                        boxShadow: state.isFocused ? 0 : 0,
                                        "&:hover": {
                                            border: state.isFocused ? '1px solid gray' : '1px solid gray',
                                        },
                                        cursor:'pointer',
                                        caretColor:'transparent',
                                        paddingRight:'20px',
                                        paddingLeft:'-10px',
                                    }),       
                                    menu: base => ({
                                        ...base,
                                        //height: isMobile ? '100%': '120%',
                                        zIndex: '30',      
                                        color: 'black',
                                    }),
                                    menuList: base => ({
                                        ...base,
                                        // kill the white space on first and last option
                                        padding: 0,
                                    }),
                                }}
                            />
                        </div>

                        

                    </div>
                </div>
                
                <button 
                    /* className={`xl:min-w-[288px] min-w-[228px] mt-[75px] mb-[29px] px-[50px] hover:px-[65px] transition-all duration-500 py-[15.1px]                 
                    font-bold bg-black text-white rounded-[8px] text-[28px] mx-auto flex items-center justify-center ]                                 
                    `} */
                    className="min-w-[208px] md:min-w-[228px] mt-[35px] md:mt-[75px] mb-8 px-[50px] hover:px-[65px] py-[10px] md:py-[20.1px] transition-all duration-500 
                        font-bold bg-black text-white rounded md:rounded-[8px] text-lg md:text-[28px] mx-auto flex items-center justify-center  " 
                    onClick={() => {
                        if (crowdfundData.title !== '' && crowdfundData.location !== '' && crowdfundData.tags !== '') {
                            console.log(crowdfundData)
                            dispatch(updateAnonymousCrowdfundData({crowdfundData:crowdfundData}))    
                            navigate('/anonymouscrowdfundformamount')
                        } else {
                            alert('Fill all inputs')
                        }
                        
                    }}                 
                    >
                    <span className={` block`}>
                        Continue
                    </span>
                </button> 

            </main>
        </div>
    )
}

export default AnonymousCrowdfundFormTitle