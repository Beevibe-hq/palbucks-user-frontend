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

function Homebody(){

  //stores all the events data in redux store so it can be accessed anywhere
  const dispatch = useDispatch()
  
  //Read the scroll position from redux store when the page loads.
  const scrollposition = useSelector(state => state.homescrollposition)
  const homebodydata = useSelector(state => state.managehomebodydata)

  const lastScrollPositionRef = useRef(null);
  
  //sets state for the homepage's display
  const lastdisplay = useSelector(state => state.homepagedisplay)
  const [display, setdisplay] = useState (lastdisplay)

  //sets state for the foryou page's display
  const [forYouView, setforYouView] = useState('all')

  
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
        <div className = 'fold:px-2 phones:px-5 md:px-6 lg:px-10 pt-8 md:pt-10 pb-16 md:pb-20 mt-[90px] md:mt-[100px] w-full h-full '>
            <div className = 'fold:mb-5 phones:mb-6 md:mb-10 font-merriweather '>
                <h1 className = 'font-black fold:text-xl phones:text-2xl md:text-3xl leading-7 tracking-[0.5px] mb-[15px]' >Crowdfunding is better when done together.</h1>
                <p className = 'hidden md:block font-normal text-lg tracking-[0.8px]' >Raise funds for a project or cause in USDT, the prominent stable coin</p>
            </div>

            <div className = 'flex fold:gap-4 phones:gap-4 font-merriweather font-black mb-4 md:mb-5 text-base tracking-[0.06px] leading-5'>
                <button className = {`w-[82px] md:w-[102px] ${display == 'others' ? 'bg-[#D8D8D8]' : 'bg-inherit hover:bg-[#D8D8D8]'}  h-[35px] md:h-[42px] py-[15px] px-[5px] rounded-[10px] `}
                 onClick={ () => {
                    dispatch(setothers())
                    setdisplay('others')

                 }}
                 >
                    Others
                </button>
                <button className = {`w-[92px] md:w-[112px] ${display == 'foryou' ? 'bg-[#D8D8D8]' : 'bg-inherit hover:bg-[#D8D8D8]'} h-[35px] md:h-[42px] rounded-[10px] py-1 px-3 `}
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
                  <div className = 'flex gap-3 font-normal text-base leading-3 tracking-[0.1px] font-merriweather '>
                      <button className = {`bg-white fold:w-[130px] phones:w-[146px] md:w-[172px] h-[37px] md:h-[39px] flex items-center  justify-between pr-5 pl-3 rounded-tl-[10px]
                      rounded-tr-[30px] rounded-bl-[10px] rounded-br-[30px] shadow-[0px_0px_32px_rgba(0,0,0,0.04)] md:shadow-none `}>
                          <span className ='  ' >Popular</span>
                          <img src={arrowdown} alt="down arrow icon" />
                      </button>
                      <button className = {`bg-white fold:w-[90px] phones:w-[109px] md:w-[132px] h-[37px] md:h-[39px] flex items-center  justify-between pr-5 pl-3 rounded-tl-[10px]
                      rounded-tr-[30px] rounded-bl-[10px] rounded-br-[30px] shadow-[0px_0px_32px_rgba(0,0,0,0.04)] md:shadow-none `}>
                          <span className =' ' >All</span>
                          <img src={arrowdown} alt="down arrow icon" />
                      </button>
                  </div>
                  <div className = 'eventparent w-full py-[35px]'>
                
                      {
                        /* Note here the id being passed as prop is the key of the array, when coming from the backend we can
                          request for an id in each of the objects,
                        */
                          homebodydata.map((item,i)=>{
                              return(
                                <Fundevent category = {item.category} placeholder = {item.placeholder} accountimages = {item.organizerimg}
                                organizeraccounts = {item.organizeraccounts} title = {item.title} description = {item.description}
                                value = {item.value} target = {item.target} categoryimg = {item.categoryimg}
                                location = {item.location} key = {i} eventimg = {item.placeholder} liked = {item.liked} id = {i} />
                              )
                          })
                      }
                  </div>
                </>  
                //The break off between the two fragments
                :
                
                //The foryou page starts here
                <>
                  
                  <div className='bg-white w-fit mt-[40px] mb-[31px]' >
                      {/* The four buttons below choose the display between the different campaigns */}
                      <button className={`${forYouView == 'all' ? 'bg-black text-white ' : 'text-[#8E8E93] bg-white' } font-bold text-[16px] py-[10px] px-[15px] w-[80px] rounded-[5px]  `} 
                      onClick = { () => {
                          setforYouView('all')
                        }
                      }
                      >
                        All
                      </button>
                      <button className={`${forYouView == 'active' ? 'bg-black text-white ' : 'text-[#8E8E93] bg-white' } font-bold text-[16px] py-[10px] px-[15px] w-[80px] rounded-[5px]  `} 
                      onClick = { () => {
                          setforYouView('active')
                        }
                      }
                      >
                        Active
                      </button>
                      <button className={`${forYouView == 'ended' ? 'bg-black text-white ' : 'text-[#8E8E93] bg-white' } font-bold text-[16px] py-[10px] px-[15px] w-[80px] rounded-[5px]  `} 
                      onClick = { () => {
                          setforYouView('ended')
                        }
                      }
                      >
                        Ended
                      </button>
                      <button className={`${forYouView == 'draft' ? 'bg-black text-white ' : 'text-[#8E8E93] bg-white' } font-bold text-[16px] py-[10px] px-[15px] w-[80px] rounded-[5px]  `} 
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
                      <div>
                        <h2 className='font-black text-[24px] mb-[10px]' >All Campaigns</h2>
                        <p className='text-[18px] mb-7' >This is a list of all your campaigns, including active, ended and draft campaigns.</p>
                        {
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
                          
                        }
                      </div> 
                      
                      :
                      
                      forYouView == 'active' ? 
                      <div className='pr-[40px]' >
                        <h2 className='font-black text-[24px] mb-[10px]' >Active Campaign</h2>
                        <p className='text-[18px] mb-7 ' >Make edits and also view your dashboard for your active campaign</p>
                        {
                            foryoudata.filter(item => item.campaignstatus == 'active').length == 0 ? 
                            <Emptycampaign title = 'You have no active campaign to show here' /> 
                            :
                            foryoudata.filter(item => item.campaignstatus == 'active').map((item,i) =>(
                            <Activecampaign img = {item.img} title = {item.title} daysleft = {item.daysleft} key = {i} />
                          )) 
                          
                          
                        }

                      </div>
                      
                      :
                      
                      forYouView == 'ended' ?
                      <div className='pr-[40px]' >
                        <h2 className='font-black text-[24px] mb-[10px]' >Ended Campaign</h2>
                        <p className='text-[18px] mb-7 ' >These are your campaigns that you ended or has completed its 
                        time frame. They will automatically be deleted after 30 days.</p>
                        {
                          foryoudata.filter(item => item.campaignstatus == 'ended').length == 0 ? 
                          <Emptycampaign /> : 
                          foryoudata.filter(item => item.campaignstatus == 'ended').map((item,i) =>(
                            <Endedcampaign img = {item.img} title = {item.title} key = {i} />
                          ))
                        }
                      </div>
                      
                      :
                      
                      forYouView == 'draft' ?
                      <div className='pr-[40px]' >
                        <h2 className='font-black text-[24px] mb-[10px]' >Draft Campaign</h2>
                        <p className='text-[18px] mb-7 ' >Campaigns that are “saved for later” are stored as draft.</p>
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