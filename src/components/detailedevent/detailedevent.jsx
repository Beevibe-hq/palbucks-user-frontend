import { useDispatch, useSelector } from "react-redux"
import { sethomeorevent } from "../../actions/actions"
import backarrow from "../../images/backarrow.svg"
import date from "../../images/date.svg"

function Detailedevent(props){

    const dispatch = useDispatch()
    const homebodydata = useSelector(state => state.managehomebodydata)

    let propdetails = props.details
    let eventid = propdetails.charAt(propdetails.length-1)
    let eventdetails  = homebodydata[eventid]

    //console.log(eventdetails)
    
    const formatnumber = n => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
      };
      
      let totaldonations = formatnumber(eventdetails.totaldonations);

    return(
        <div className = 'fold:px-2 phones:px-6 md:px-6 lg:px-10 pt-8 pb-16 md:pb-20 md:pt-14 mt-[90px] md:mt-[100px] w-full h-full'>
            
            <img src={backarrow} alt="back arrow" className = {`w-8 mb-8 cursor-pointer`} 
            onClick = { 
                () => {
                    dispatch(sethomeorevent('home'))
                }  
            }
            />
            
            <div className="bg-[#636363] mb-9 flex gap-2 px-4 w-56 h-9 rounded-2xl justify-center items-center   text-white ">
                <img src={date} alt="calendar icon" className = "w-4" />
                <span>{`${eventdetails.days} days remaining`}</span>
            </div>
            
            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-10 ">
                
                <div className =" relative w-full md:w-[60%] " >
                    <img src={eventdetails.placeholder} alt="Fund event image" className = {` w-full h-[250px] md:h-[350px] rounded-xl `} />
                    <div className = 'absolute top-4 left-5 bg-white flex gap-2 px-4 rounded-lg py-1 items-center'>
                        <img src={eventdetails.categoryimg} alt="Event category icon" className = 'w-[17px] h-[17px] ' />
                        <span className = 'text-base font-medium ' >{eventdetails.category}</span>
                    </div>
                </div>

                <div className= {`bg-white w-full md:w-[350px] px-5 py-7 h-fit rounded-xl shadow-[0px_0px_32px_rgba(0_0_0_0.04)] `} >
                    
                    <p className= 'text-[14px] font-bold mb-[5px]'>{eventdetails.value ? eventdetails.value.toLocaleString() : '23,543'} USDT raised
                    <span className='font-semibold text-[#bba7a7] float-right' > {eventdetails.target ? eventdetails.target.toLocaleString() : '150,000'} USDT target</span>
                    </p>

                    <progress value={eventdetails.value ? eventdetails.value : '23543'} max={eventdetails.target ? eventdetails.target : '150000'}  
                    className='progressbar w-full h-[5px] appearance-none rounded-[5px] mb-2 phones:mb-4 xphones:mb-5 md:mb-[5px]' />

                    <p className = {`text-[#C5C5C5] font-medium text-sm mb-9 `} >{totaldonations} donations so far </p>

                    <button className = {`text-white  bg-[#2CA9F2] px-7 py-3 rounded-[20px] items-center mx-auto block`} >
                        Fund now
                    </button>

                                        
                </div>
            </div>

        </div>
    )
}

export default Detailedevent

/* let data = [
    {
      organizerimg:[userimg2],
      category:'Environment',
      categoryimg: environmentimg,
      placeholder: eventimg,
      organizeraccounts:['Username001'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      value: 10000,
      target:12000,
      location:'Cyprus',
      days:'30'
    }
] */