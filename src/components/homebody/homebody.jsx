import arrowdown from '../../images/arrowdown.svg'


import Fundevent from '../fundevent/fundevent'
import { useDispatch, useSelector } from 'react-redux'
import { sethomebodydata, setScrollPosition } from '../../actions/actions'
import { useEffect, useRef, useState } from 'react'

function Homebody(){

  //stores all the events data in redux store so it can be accessed anywhere
  const dispatch = useDispatch()
  //Read the scroll position from redux store when the page loads.
  const scrollposition = useSelector(state => state.homescrollposition)
  const homebodydata = useSelector(state => state.managehomebodydata)

  const lastScrollPositionRef = useRef(null);
  
  
  
  useEffect(()=>{
    //dispatch(sethomebodydata(data)) this is already done in app.js

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
        <div className = 'fold:px-2 phones:px-6 md:px-6 lg:px-10 pt-8 md:pt-10 pb-16 md:pb-20 mt-[90px] md:mt-[100px] w-full h-full '>
            <div className = 'fold:mb-5 phones:mb-6 md:mb-10 font-merriweather '>
                <h1 className = 'font-black fold:text-xl phones:text-2xl md:text-4xl leading-7 tracking-[0.5px] mb-[15px]' >Crowdfunding is better when done together.</h1>
                <p className = 'hidden md:block font-normal text-lg tracking-[0.8px]' >Raise funds for a project or cause in USDT, the prominent stable coin</p>
            </div>

            <div className = 'flex fold:gap-4 phones:gap-4 font-merriweather font-black mb-4 md:mb-5 text-base tracking-[0.06px] leading-5'>
                <button className = 'w-[82px] md:w-[102px] bg-[#D8D8D8] h-[35px] md:h-[42px] py-1 px-3 rounded-[10px] '>
                    Others
                </button>
                <button className = 'w-[92px] md:w-[112px] bg-inherit h-[35px] md:h-[42px] rounded-[10px] hover:bg-[#D8D8D8] py-1 px-3 '>
                    For you
                </button>
            </div>
            
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

        </div>
    )
}

export default Homebody;





