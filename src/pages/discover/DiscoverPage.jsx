import { Link, useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

import palbuckslogo from "../../images/appLogo.svg"
import palbucksgroup from "../../images/palbucks2.svg"
import menuicon from "../../images/Hamburger Menu.svg"
import { options } from "../../components/organisecrowdfundbody/organisecrowdfundbody"
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive'
import arrowdown from '../../images/arrowdown.svg'
import profileImgPlaceholder from "../../images/profileplaceholder.svg"
import cancelMenuIcon from "../../images/hamburger menu.svg"

import eventImg from "../../images/eventimg.png"
import eventImg2 from "../../images/eventimg2.png"
import eventImg3 from "../../images/eventimg3.png"
import eventImg4 from "../../images/eventimg4.jpg"
import eventimg7 from "../../images/eventimg7.svg"
import user2 from "../../images/user2.svg"
import user3 from "../../images/user3.svg"
import user4 from "../../images/user4.svg"
import user from "../../images/user.png"
import { baseUrl } from "../../auth/checkauthentication"


function DiscoverPage() {
    

    const navigate = useNavigate()

    const [mobileMenu, setMobileMenu] = useState('close')
    const handleMobileMenu = () => {
        if(mobileMenu == 'open'){
            setMobileMenu('close')
        }else{
            setMobileMenu('open')
        }
    }

    const [data, setData] = useState([])

    useEffect(() => {
        // Get crowdfund details
        const getCrowdfunds = async() => {                            
            try{
                const response = await fetch(`${baseUrl}/funding/api/`)                
                const crowdfunds = await response.json()
                if(response.ok){                                  
                    //dispatch(loadCrowdfundEvents(crowdfunds))
                    setData(crowdfunds)
                    console.log(crowdfunds)
                }else{
                    console.error(crowdfunds)                    
                }
            }            
            catch(error){
                console.error(error)
            }        
        }

        getCrowdfunds()
    }, [])

    useEffect(() => {
        console.log(data[0])
    },[data])


    //custom dropdown indicator for Select tag/component
    const CustomDropdownIndicator = () => (
            <img src = {arrowdown} alt = 'down arrow' className="w-[15px] h-[14px] " />
    )

    const isMobile = useMediaQuery({
        query:'(max-width:768px)'
    })

    // Add all to the options array
    const optionsWithAll = [{ label: 'All', value: 'all' }, ...options]  
    const [selectedOption, setSelectedOption] = useState('all')

    const maxItemsPerRow = 4; // Adjust this based on your requirement
    //const numRows = Math.ceil(data.length / maxItemsPerRow);


    /* if (data.length === 0) {
        return (
            <div>Loading...</div>       
        )
    } */
    return (
        <div className="font-merriweather" >
            <header className="w-full z-50 py-4 md:py-6 lg:py-[30px] px-5 md:px-10 lg:px-[95px] flex justify-between shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] bg-white fixed top-0 " >
                <div className=" flex gap-[10px] items-center cursor-pointer " onClick={() => {
                    navigate('/')
                }}  >
                    <img src={palbuckslogo} alt="Palbucks logo" className="w-5 md:w-7 lg:w-[33.4px]" />                    
                    <img src={palbucksgroup} alt="palbucks" className="w-[77px] md:w-[108px] lg:w-[138px] h-[14px] md:h-5 lg:h-[24px] "  />
                </div>
                <nav className="hidden md:flex items-center xl:gap-[46px] font-arial " >
                    <Link to = '/howitworks' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                        <span>How it works</span>
                    </Link>

                    <Link to = '/discover' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] ">
                        <span>Discover</span>
                    </Link>

                    <Link to = '/signin' className="text-[#525252] text-lg py-[5px] px-[10px] hover:p-[10px] hover:bg-[#D8D8D8] leading-[14px] flex items-center hover:rounded-[5px] "  >
                        <span>Sign in</span>
                    </Link>

                    <Link to = '/signup' className="text-[#000000] text-lg font-bold tracking-[0.069px] py-[8px] px-[16px] bg-[#35FAA0] hover:bg-[#35EB98] leading-[22px] flex items-center rounded-[5px] "  >
                        <span>Sign up</span>
                    </Link>
                </nav>
                <img src={menuicon} alt="menu icon" className="w-5 h-5 md:hidden" onClick={handleMobileMenu} />
            </header>

            <div className={` ${mobileMenu == 'open' ? '' : 'hidden'} md:hidden font-arial h-full w-full z-50 bg-white fixed top-0 pt-4 px-5`}>
                <div className="mb-6 flex justify-between items-center ">
                    <div className=" flex gap-[10px] md:gap-4 items-center " >
                        <img src={palbuckslogo} alt="Palbucks logo" className="w-5 md:w-7 lg:w-[33.4px]" />
                        <img src={palbucksgroup} alt="palbucks" className="w-[77px] md:w-[108px] lg:w-[138px] h-[14px] md:h-5 lg:h-[24px] "  />
                    </div>
                    <img src={cancelMenuIcon} alt="cancel menu icon" className="w-6" onClick={handleMobileMenu} />
                </div>
                <nav className="mb-8 flex flex-col gap-2">
                    <Link to = '/howitworks' className="py-3"  >
                        <span>How it works</span>
                    </Link>
                    <Link to = '/discover' className="py-3"  >
                        <span>Discover campaigns</span>
                    </Link>
                    <Link to = '/helpcenter' className="py-3"  >
                        <span>Help center</span>
                    </Link>
                    <Link to = '/communityguidelines' className="py-3"  >
                        <span>Community guidelines</span>
                    </Link>
                </nav>

                <button className="mb-5 bg-[#000] rounded w-full py-[10px] px-5 font-bold text-[#FFF]" 
                    onClick={()=>{navigate('/anonymouscrowdfundformtitle')}} 
                >
                    Start a crowdfund
                </button>
                <button className="border-[1px] border-[#8E8E93] rounded w-full py-[10px] px-5 font-bold text-[#000]" 
                    onClick={()=> {navigate('/signin')}}
                >
                    Sign in
                </button>
            </div>

            <main className="pt-3 md:pt-[70px] lg:pt-[125px] pb-10 mt-[103px] px-3  phones:px-5 md:px-8 lg:px-[94px] " >
                <h2 className="mx-auto mb-3 md:mb-6 
                    font-black text-center text-xl md:text-[40px] " >
                    Discover campaigns on Palbucks
                </h2>
                <p className="mb-5 md:mb-10 text-sm md:text-lg font-merriweather md:font-arial text-center" >
                    Find and explore organized campaigns 
                </p>

                <input
                    type="search"
                    className={` mb-[48px] w-[100%] xphones:w-[80%] md:w-[320px] brkpoint:w-[300px] lg:w-[480px]
                    h-[30px] phones:h-[44px] lg:h-[60px] bg-[#EAEAEA] mx-auto block
                    text-base pl-10 md:pl-12 lg:pl-14 placeholder-[#7A7575] bg-[length:20px] md:bg-[length:24px] bg-[image:url('./images/search.svg')] bg-[left_calc(5%)_top_calc(48%)]
                    bg-no-repeat rounded-3xl lg:rounded-[30px] shadow-[0px_0px_16px_rgba(0,0,0,0.04)] md:shadow-none font-arial font-normal 
                    focus:caret-[#2CA9F2] 
                      `}
                    placeholder='Search'
                    onChange={(e) => {
                        console.log(e.target.value)

                    }}                
                />

                <div className="mb-6 bg-[#F9F9F9] max-w-[90px] phones:max-w-[120px] md:max-w-[150px] h-[30px] md:h-[40px]
                    rounded-r-[30px] rounded-l-[10px] shadow-[0px_0px_32px_rgba(0,0,0,0.04)] md:shadow-none">
                    <Select
                      options={optionsWithAll}
                      placeholder="All"
                      onChange={(e) => { 
                        setSelectedOption(e.value)
                      }}
                      components={{
                          DropdownIndicator: CustomDropdownIndicator,
                          IndicatorSeparator : () => null
                      }}
                      styles={{
                          control: (base, state) => ({
                              ...base,
                              width:'100%',
                              height:'100%',
                              border: '0.5px solid #D9D9D9',
                              // This line disable the blue border
                              boxShadow: state.isFocused ? 0 : 0,
                              "&:hover": {
                                  border: '0.5px solid #D9D9D9',
                              },
                              cursor:'pointer',
                              caretColor:'transparent',
                              paddingRight: isMobile ? '12px' : '20px',
                              paddingLeft:isMobile ? '4px':'8px',
                              borderTopLeftRadius:'10px',
                              borderBottomLeftRadius:'10px',
                              borderTopRightRadius:'30px',
                              borderBottomRightRadius:'30px',
                              color: 'black',
                              z: '10',
                              backgroundColor:'#F9F9F9'
                          }),
                          menu: base => ({
                            ...base,
                            width: '200%',
                            zIndex: '30',      
                            color: 'black',
                          }),
                          menuList: base => ({
                            ...base,
                            // kill the white space on first and last option
                            padding: 0,
                          }),
                          placeholder: base => ({
                            ...base,
                            color: 'black',
                            fontSize:isMobile ? '13px':'16px'
                          })
                      }}
                      formatOptionLabel={(option, { isSelected}) => (
                          <div className="flex items-center gap-2 pl-0 ">
                          {
                            selectedOption !== option.value && option.icon && <img src={option.icon} alt="category icon" className="w-4 h-4" />
                          }
                              <span className="text-[13px] md:text-base pt-1 " >{option.label}</span>
                          </div>
                      )}
                    />
                </div>

                {/* <div className="discovereventparent flex flex-wrap w-full py-7 md:py-[35px] gap-6">
                    {
                    data.map((crowdfund, index) => (
                        <DiscoverPageCrowdfunds
                            key={index}
                            banner={crowdfund.banner}
                            title={crowdfund.title}
                            organiser={crowdfund.organiser}
                            value={crowdfund.amt_raised}
                            target={crowdfund.target_price}
                        />
                    ))}
                </div> */}

                {/* Add empty divs to fill the last row if it's not full */}
                <div className="flex flex-wrap justify-between w-full py-7 md:py-[35px] gap-6">
                    {data.map((item, index) => (
                        <DiscoverPageCrowdfunds
                            key={index}
                            banner={item.banner}
                            title={item.title}
                            organiser={item.organiser}
                            value={item.amt_raised}
                            target={item.target_price}
                        />
                    ))}

                    
                    {Array(maxItemsPerRow - (data.length % maxItemsPerRow)).fill().map((_, index) => (
                        <div key={index} className="invisible w-[calc(25%-12px)] md:w-[calc(33.3333%-12px)] lg:w-[calc(25%-12px)]"></div>
                    ))}
                </div>



            </main>
        </div>
    );
}


export default DiscoverPage;




function DiscoverPageCrowdfunds(props) {
    console.log(props.organiser);    

    return (
        <div className= {` w-full sm:max-w-[380px] md:max-w-[360px] smlaptops:max-w-[280px] mdlaptops:max-w-[350px]
            lglaptops:max-w-[350px]  min-w-[200px] cursor-pointer inline-block font-arial p-3 `} >
            <img
                src={props.banner? props.banner:eventImg4}
                alt="Campaign pic"
                className="mb-[18px] rounded-[10px] object-cover w-full 
                h-[196px] phones:h-[196px] xphones:h-[196px]"
            />
            <h3 className="text-xl font-bold mb-3 line-clamp-1 tracking-[-0.466px] " >
                {props.title ? props.title : "Help our Lucy survive cancer"}
            </h3>

            <div className="mb-8 flex gap-[6px] items-center " >
                <img
                    src={props.organiser.dp !== null ? props.organiser.dp : profileImgPlaceholder}
                    alt="crowdfund organiser"
                    className="rounded-full w-[30px] h-[30px] "
                />
                <p className="text-lg" >
                    organized by <span className="font-black" >{props.organiser?.first_name ? props.organiser.first_name : 'Lucy'}</span>
                </p>
            </div>

            <progress
                value={props.value ? props.value : '23543'} max={props.target ? props.target : '150000'}  
                className='landingpageprogressbar w-full h-[5px] lg:h-[12px] appearance-none rounded-full mb-0 md:mb-[18px]'
            />
            
            <p className='text-xs lg:text-base font-bold ' >${props.value ? props.value : '23,543'} raised </p>

        </div>
    )
}




let date = [
    {
        organiser: {
            dp: user,
            first_name: 'Lucy'
        },
        tags:'Environment',
        banner: eventImg,    
        title: 'Pastor Richard is helping 5000 children find a home',
        description: "Description of the ongoing event that users will read to know what it's about",
        amt_raised: 10000,
        target_price:12000,
        location:'Cyprus',
        days:'30',
        totaldonations:20403,
        liked:true,
    },
    {
        organiser: {
            dp: user2,
            first_name: 'John'
        },
        tags:'Environment',
        banner: eventImg2,    
        title: 'Help our Lucy survive cancer',
        description: "Description of the ongoing event that users will read to know what it's about",
        amt_raised: 10000,
        target_price:12000,
        location:'Cyprus',
        days:'30',
        totaldonations:20403,
        liked:false,
    },
    {
        organiser: {
            dp: user3,
            first_name: 'Jenny'
        },
        tags:'Environment',
        banner: eventImg3,    
        title: 'Thomas is painting to help raise mone for the less privileged',
        description: "Description of the ongoing event that users will read to know what it's about",
        amt_raised: 10000,
        target_price:12000,
        location:'Cyprus',
        days:'30',
        totaldonations:20403,
        liked:true,
    },
    {
        organiser: {
            dp: user4,
            first_name: 'Jenny'
        },
        tags:'Environment',
        banner: eventImg4,    
        title: 'This is the title of the main user’s crowdfunding kcmsdij isnd ',
        description: "Description of the ongoing event that users will read to know what it's about",
        amt_raised: 10000,
        target_price:12000,
        location:'Cyprus',
        days:'30',
        totaldonations:20403,
        liked:true,
    },
    {
        organiser: {
            dp: user,
            first_name: 'Lucy'
        },
        tags:'Environment',
        banner: eventimg7,    
        title: 'Help our Tia and Tiana celebrate the perfect birthday ',
        description: "Description of the ongoing event that users will read to know what it's about",
        amt_raised: 10000,
        target_price:12000,
        location:'Cyprus',
        days:'30',
        totaldonations:20403,
        liked:true,
    },
    {
        organiser: {
            dp: user,
            first_name: 'Lucy'
        },
        tags:'Environment',
        banner: eventimg7,    
        title: 'Help our Tia and Tiana celebrate the perfect birthday ',
        description: "Description of the ongoing event that users will read to know what it's about",
        amt_raised: 10000,
        target_price:12000,
        location:'Cyprus',
        days:'30',
        totaldonations:20403,
        liked:true,
    },
    {
        organiser: {
            dp: user,
            first_name: 'Lucy'
        },
        tags:'Environment',
        banner: eventimg7,    
        title: 'Help our Tia and Tiana celebrate the perfect birthday ',
        description: "Description of the ongoing event that users will read to know what it's about",
        amt_raised: 10000,
        target_price:12000,
        location:'Cyprus',
        days:'30',
        totaldonations:20403,
        liked:true,
    }
  
]