import arrowdown from '../../images/arrowdown.svg'
import eventimg1 from '../../images/eventimg8.svg'
import eventimg2 from '../../images/eventimg7.svg'


import Fundevent from '../fundevent/fundevent'
import { useDispatch, useSelector } from 'react-redux'
import { setforyou, sethomebodydata, setothers, setScrollPosition } from '../../actions/actions'
import { useEffect, useRef, useState } from 'react'

import Activecampaign from '../activecampaign/activecampaign'
import Draftcampaign from '../draftcampaign/draftcampaign'
import Endedcampaign from '../endedcampaign/endedcampaign'
import Emptycampaign from '../emptycampaign/emptycampaign'

import Select from 'react-select'
import { options } from "../../components/organisecrowdfundbody/organisecrowdfundbody"
import { useMediaQuery } from 'react-responsive'

function Homebody(){

  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  //stores all the events data in redux store so it can be accessed anywhere
  const dispatch = useDispatch()
  
  //Read the scroll position from redux store when the page loads.
  const scrollposition = useSelector(state => state.homescrollposition)
  
  // Not working yet
  const filterOutdatedEvents = (date) => {
    const now = new Date()
    const eventDate = new Date(date)
    const timeDifference = eventDate - now
    if (Math.sign(timeDifference) !== -1) {
      return true
    } else {
      return false
    }
  }
  const crowdfundEvents = useSelector(state => state.crowdfundEvents.filter(filterOutdatedEvents));
  console.log(crowdfundEvents)
  
  const personalEvents = useSelector(state => state.crowdfundEvents.filter(item => item.organiser.username !== null && item.organiser.username == userInfo.username)) //(item => item.organiser.first_name == userInfo.first_name))
  
  const lastScrollPositionRef = useRef(null);
  
  //sets state for the homepage's display
  const lastdisplay = useSelector(state => state.homepagedisplay)
  const [display, setdisplay] = useState (lastdisplay)

  //sets state for the foryou page's display
  const [forYouView, setforYouView] = useState('all')



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
  
  const checkCampaignStatus = (date) => {
    const today = new Date()
    const campaignEndDate = new Date(date)
    const timeDifference = campaignEndDate.getTime() - today.getTime()
    const daysDifference = timeDifference / (1000 * 3600 * 24)
    
    // Calculate difference in milliseconds between the two dates and convert to days
    const daysLeft = Math.ceil((campaignEndDate - today) / (1000 * 60 * 60 * 24));
        
    if (daysDifference < 0) {
      return {
        campaignStatus :'ended',
      }
    } else if (daysDifference > 0) {
      return {
        campaignStatus :'active',
        daysLeft
      }
    }
  }
  
  useEffect(()=>{  
    window.scrollTo(0, scrollposition) //scroll to the page's previous position

    //event listens for scrolls and stores it in lastpositionref
    const handleScroll = () => {
      lastScrollPositionRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    
    return () =>{
      
      //dispatch the last scroll position and remove the listener before unmounting
      window.removeEventListener("scroll", handleScroll);
      if (lastScrollPositionRef.current !== null) {
        dispatch(setScrollPosition(lastScrollPositionRef.current));
      }
        }
  }, [])
  

    return(
        <div className = 'fold:px-2 phones:px-5 md:px-6 lg:px-10 pt-6 md:pt-10 pb-16 md:pb-20 mt-[90px] md:mt-[100px] w-full h-full font-arial '>
            <div className = 'fold:mb-5 phones:mb-6 md:mb-10 '>
                <h1 className = 'font-black text-xl phones:text-xl md:text-3xl leading-7 tracking-[0.5px] mb-[15px] font-merriweather' >
                  Crowdfunding is better when done together.
                </h1>
                <p className = 'hidden md:block font-normal text-lg tracking-[0.8px]' >Raise funds for a project or cause in USDT, the prominent stable coin</p>
            </div>

            <div className = 'flex fold:gap-4 phones:gap-4 font-black mb-4 md:mb-5 text-base tracking-[0.06px] leading-5'>
                <button className = {`w-[82px] md:w-[102px] ${display == 'others' ? 'bg-[#D8D8D8]' : 'bg-inherit hover:bg-[#D8D8D8]'}  
                  h-[35px] md:h-[42px] py-1 px-[5px] rounded-[10px] font-bold text-sm md:text-base `}
                 onClick={ () => {
                    dispatch(setothers())
                    setdisplay('others')

                 }}
                 >
                    Others
                </button>
                <button className = {`w-[92px] md:w-[112px] ${display == 'foryou' ? 'bg-[#D8D8D8]' : 'bg-inherit hover:bg-[#D8D8D8]'}
                   h-[35px] md:h-[42px] rounded-[10px] py-1 px-3 font-bold text-sm md:text-base `}
                  onClick={ () => {
                    dispatch(setforyou())
                    setdisplay('foryou')
                }}
                >
                    For you
                </button>
            </div>
            
            {/* This div chooses between two fragments below, displays the first fragment for others and the second fragment for foryou page */}
            <div>
              { 
                display == 'others' ? 

                //The others page starts here
                <>
                  <div className = 'flex gap-3 font-normal text-base leading-3 tracking-[0.1px] font-arial '>
                      <button className = {`bg-white fold:w-[118px] phones:w-[120px] md:w-[172px] h-[38px] md:h-[39px] flex items-center justify-between pr-5 pl-3 
                      rounded-r-[30px] rounded-l-[10px] shadow-[0px_0px_32px_rgba(0,0,0,0.04)] md:shadow-none `}>
                          <span className ='text-[13px] md:text-base ' >Popular</span>
                          <img src={arrowdown} alt="down arrow icon" />
                      </button>
                      {/* <button className = {`bg-white fold:w-[90px] phones:w-[109px] md:w-[132px] h-[30px] md:h-[39px] flex items-center justify-between pr-5 pl-3
                      rounded-r-[30px] rounded-l-[10px] shadow-[0px_0px_32px_rgba(0,0,0,0.04)] md:shadow-none `}>
                          <span className ='text-[13px] md:text-base ' >All</span>
                          <img src={arrowdown} alt="down arrow icon" />
                      </button> */}
                  <div className="bg-white min-w-[90px] phones:min-w-[120px] md:min-w-[150px] h-[30px] md:h-[39px]
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
                              border: state.isFocused ? 0 : 0,
                              // This line disable the blue border
                              boxShadow: state.isFocused ? 0 : 0,
                              "&:hover": {
                                  border: state.isFocused ? 0 : 0,
                              },
                              cursor:'pointer',
                              caretColor:'transparent',
                              paddingRight: isMobile ? '12px' : '20px',
                              paddingLeft:isMobile ? '4px':'12px',
                              borderTopLeftRadius:'10px',
                              borderBottomLeftRadius:'10px',
                              borderTopRightRadius:'30px',
                              borderBottomRightRadius:'30px',
                              color: 'black',
                              z:'10'
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
                      
                  </div>
                  <div className = 'eventparent w-full py-7 md:py-[35px]'>
                
                      {
                        /* Note here the id being passed as prop is the key of the array, when coming from the backend we can
                          request for an id in each of the objects,
                        */
                    
                        // Display all the events if the selected option is all or filter the events by the selected option
                          selectedOption == 'all' ?                        
                          crowdfundEvents.map((item,i)=>{
                              return(
                                <Fundevent category = {item.tags} crowdfundImage = {item.banner} accountimages = {item.organizerimg}
                                organiser = {item.organiser} title = {item.title} co_organisers = {item.co_organisers} description = {item.description}
                                amt_raised = {item.amt_raised} target_price = {item.target_price} categoryimg = {item.categoryimg}
                                location = {item.location} key = {i} eventimg = {item.placeholder} liked = {item.liked} id = {item.id}
                                organizer = {item.user_name} is_liked = {item.is_liked}
                                />
                              )
                          })
                          :
                          crowdfundEvents.filter(item => item.tags == selectedOption).map((item,i)=>{
                            return(
                              <Fundevent category = {item.tags} crowdfundImage = {item.banner} accountimages = {item.organizerimg}
                              organiser = {item.organiser} title = {item.title} co_organisers = {item.co_organisers} description = {item.description}
                              amt_raised = {item.amt_raised} target_price = {item.target_price} categoryimg = {item.categoryimg}
                              location = {item.location} key = {i} eventimg = {item.placeholder} liked = {item.liked} id = {item.id}
                              organizer = {item.user_name} is_liked = {item.is_liked}
                              />
                            )
                          })
                      }
                  </div>
                </>  
                //The break off between the two fragments
                :
                
                //The foryou page starts here
                <>
                  
                  <div className='bg-white w-fit mt-[30px] md:mt-[40px] mb-[30px]' >
                      {/* The four buttons below choose the display between the different campaigns */}
                      <button className={`${forYouView == 'all' ? 'bg-black text-white ' : 'text-[#8E8E93] bg-white' } font-bold text-sm phones:text-base py-[10px] px-[15px] phones:w-[80px] rounded-[5px]  `} 
                      onClick = { () => {
                          setforYouView('all')
                        }
                      }
                      >
                        All
                      </button>
                      <button className={`${forYouView == 'active' ? 'bg-black text-white ' : 'text-[#8E8E93] bg-white' } font-bold text-sm phones:text-base py-[10px] px-[15px] phones:w-[80px] rounded-[5px]  `} 
                      onClick = { () => {
                          setforYouView('active')
                        }
                      }
                      >
                        Active
                      </button>
                      <button className={`${forYouView == 'ended' ? 'bg-black text-white ' : 'text-[#8E8E93] bg-white' } font-bold text-sm phones:text-base py-[10px] px-[15px] phones:w-[80px] rounded-[5px]  `} 
                      onClick = { () => {
                          setforYouView('ended')
                        }
                      }
                      >
                        Ended
                      </button>
                      <button className={`${forYouView == 'draft' ? 'bg-black text-white ' : 'text-[#8E8E93] bg-white' } font-bold text-sm phones:text-base py-[10px] px-[15px] phones:w-[80px] rounded-[5px]  `} 
                      onClick = { () => {
                          setforYouView('draft')
                        }
                      }
                      >
                        Draft
                      </button>
                  </div>
                  

                  <div>
                    {
                      forYouView == 'all' ? 
                      <div className='md:pr-10' >
                        <h2 className='font-black text-xl md:text-2xl mb-[5px] md:mb-[10px]' >
                          All Campaigns
                        </h2>
                        <p className='text-base md:text-lg mb-6 md:mb-7' >
                          This is a list of all your campaigns, including active, ended and draft campaigns.
                        </p>
                        {/* {
                          foryoudata.length == 0 ? 
                          <Emptycampaign /> :
                          foryoudata.map((item,i) =>(
                            item.campaignstatus == 'active' ? 
                            <Activecampaign img = {item.img} title = {item.title} daysleft = {item.daysleft} key = {i} />
                            : item.campaignstatus == 'ended' ? 
                            <Endedcampaign img = {item.img} title = {item.title} key = {i} /> 
                            : item.campaignstatus == 'draft' ? 
                            <Draftcampaign key = {i} /> 
                            : null
                          ))
                          
                        } */}
                        {
                          personalEvents.length === 0 ? 
                            <Emptycampaign /> :                          
                          personalEvents.map((item,i) =>(
                            checkCampaignStatus(item.end_date).campaignStatus === 'ended' ? 
                              (
                                <Endedcampaign img = {item.banner} id = {item.id} title = {item.title} key = {item.id} />
                              )
                            :checkCampaignStatus(item.end_date).campaignStatus === 'active' ? 
                              (
                                <Activecampaign img = {item.banner} id = {item.id} title = {item.title} daysleft = {checkCampaignStatus(item.end_date).daysLeft} key = {item.id} />
                              )
                            :checkCampaignStatus(item.end_date).campaignStatus === 'draft' ?
                              (
                                <Draftcampaign key = {item.id} />
                              )
                            : null
                            
                          ))

                        }
                      </div> 
                      
                      :
                      
                      forYouView == 'active' ? 
                      <div className='md:pr-[40px]' >
                          <h2 className='font-black text-xl md:text-2xl mb-[5px] md:mb-[10px]' >
                            Active Campaign
                          </h2>
                          <p className='text-base md:text-lg mb-6 md:mb-7' >
                            Make edits and also view your dashboard for your active campaign
                          </p>
                          {/* {
                              foryoudata.filter(item => item.campaignstatus == 'active').length == 0 ? 
                              <Emptycampaign title = 'You have no active campaign to show here' /> 
                              :
                              foryoudata.filter(item => item.campaignstatus == 'active').map((item,i) =>(
                              <Activecampaign img = {item.img} title = {item.title} daysleft = {item.daysleft} key = {i} />
                            ))                                                                               
                          } */}
                          {
                            personalEvents.filter(item => checkCampaignStatus(item.end_date).campaignStatus === 'active').length == 0 ?
                              <Emptycampaign title = 'You have no active campaign to show here' /> :
                            personalEvents.filter(item => checkCampaignStatus(item.end_date).campaignStatus === 'active').map((item,i) =>(
                              <Activecampaign img = {item.banner} id = {item.id} title = {item.title} daysleft = {checkCampaignStatus(item.end_date).daysLeft} key = {item.id} />
                            ))
                          }

                      </div>
                      
                      :
                      
                      forYouView == 'ended' ?
                      <div className='md:pr-[40px]' >
                            <h2 className='font-black text-xl md:text-2xl mb-[5px] md:mb-[10px]' >
                              Ended Campaign
                            </h2>
                            <p className='md:text-lg mb-6 md:mb-7' >
                              These are your campaigns that you ended or has completed its 
                              time frame. They will automatically be deleted after 30 days.
                            </p>
                          {/* {
                            foryoudata.filter(item => item.campaignstatus == 'ended').length == 0 ? 
                            <Emptycampaign /> : 
                            foryoudata.filter(item => item.campaignstatus == 'ended').map((item,i) =>(
                              <Endedcampaign img = {item.img} title = {item.title} key = {i} />
                            ))
                          } */}
                          {
                            personalEvents.filter(item => checkCampaignStatus(item.end_date).campaignStatus === 'ended').length == 0 ?
                              <Emptycampaign /> :
                            personalEvents.filter(item => checkCampaignStatus(item.end_date).campaignStatus === 'ended').map((item,i) =>(
                              <Endedcampaign img = {item.banner} id = {item.id} title = {item.title} key = {item.id} />
                            ))
                          }
                      </div>
                      
                      :
                      
                      forYouView == 'draft' ?
                      <div className='md:pr-[40px]' >
                          <h2 className='font-black text-xl md:text-2xl mb-[5px] md:mb-[10px]' >
                              Draft Campaign
                          </h2>
                          <p className='text-base md:text-lg mb-6 md:mb-7' >
                              Campaigns that are “saved for later” are stored as draft.
                          </p>
                          {
                            foryoudata.filter(item => item.campaignstatus == 'draft').length == 0 ? 
                            <Emptycampaign title = 'Your draft box is empty' /> :
                            foryoudata.filter(item => item.campaignstatus == 'draft').map((item,i) =>(
                              <Draftcampaign key = {i} />
                            ))
                          }

                      </div>
                      
                      :
                      
                      ''
                    }

                  </div>

                </>


              }
            </div>

        </div>
    )
}

export default Homebody;




let foryoudata = [
  {
    campaignstatus: 'active',
    title:'The fight for our environment in Lagos begins today',
    daysleft: '29',
    img:eventimg1
  },
  {
    campaignstatus:'draft',
    title:'',   
  },
  {
    campaignstatus:'ended',
    title:'The hours of hope is raising funding for the ultimate Brother Bernard',
    img:eventimg2
  },
  {
    campaignstatus:'active',
    title:'This is the title of the main user’s crowdfunding and not a bigoted case so help them. ',
    daysleft:'60',
    img:eventimg1
  }
]