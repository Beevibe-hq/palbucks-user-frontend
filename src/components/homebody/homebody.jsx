import arrowdown from '../../images/arrowdown.svg'
import userimg from '../../images/user.png'
import userimg2 from '../../images/user2.svg'
import eventimg from "../../images/eventimg.png";
import environmentimg from '../../images/environment label.svg'

import Fundevent from '../fundevent/fundevent'

function Homebody(){

    return(
        <div className = 'px-10 py-14'>
            <div className = 'mb-12'>
                <h1 className = 'font-bold text-4xl mb-[10px]' >Crowdfunding is better when done together.</h1>
                <p className = 'font-normal text-xl' >Raise funds for a project or cause in USDT, the prominent stable coin</p>
            </div>

            <div className = 'flex gap-6 mb-6 font-semibold text-lg'>
                <button className = ' w-[102px] bg-[#D8D8D8] h-[42px] rounded-3xl '>
                    Others
                </button>
                <button className = ' w-[112px] bg-inherit h-[42px] rounded-3xl hover:bg-[#D8D8D8] '>
                    For you
                </button>
            </div>
            
            <div className = 'flex gap-3'>
                <button className = {`bg-white w-[172px] h-[39px] flex items-center  justify-between pr-5 pl-3 rounded-tl-[10px] 
                rounded-tr-[30px] rounded-bl-[10px] rounded-br-[30px] `}>
                    <span className =' font-medium text-lg ' >Popular</span>
                    <img src={arrowdown} alt="down arrow icon" />
                </button>
                <button className = {`bg-white w-[132px] h-[39px] flex items-center  justify-between pr-5 pl-3 rounded-tl-[10px] 
                rounded-tr-[30px] rounded-bl-[10px] rounded-br-[30px] `}>
                    <span className =' font-medium text-lg ' >All</span>
                    <img src={arrowdown} alt="down arrow icon" />
                </button>
            </div>

            <div className = 'space-x-14'>
                
                {
                    data.map((item,i)=>{
                        return(
                          <Fundevent category = {item.category} placeholder = {item.placeholder} accountimages = {item.organizerimg}
                          organizeraccounts = {item.organizeraccounts} title = {item.title} description = {item.description}  
                          value = {item.value} target = {item.target} categoryimg = {item.categoryimg} 
                          location = {item.location} key = {i} />
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Homebody;






let data = [
    {
      organizerimg:[userimg2,userimg],
      category:'Environment',
      categoryimg: environmentimg,
      placeholder: eventimg,
      organizeraccounts:['Username001','Username002','Username003'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      value: 10000,
      target:12000,
      location:'Cyprus'
  
    },
    {
      organizerimg:[userimg2],
      category:'Refugee',
      categoryimg: environmentimg,
      organizeraccounts:['Username005','Username003'],
      placeholder: eventimg,
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      //value: 10000,
      //target:12000,
      location:'Singapore'
  
    }/* ,
    {
      organizerimg:[accountimg3],    
      placeholder: eventimg2,
      organizeraccounts:['Username002','Username003'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      value: 372550,
      target:800000,
  
    },
    {
      organizerimg:[accountimage],
      category:'Donate',
      placeholder: eventimg4,
      organizeraccounts:['Username001','Username002','Username003'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      //value: 10000,
      //target:12000
  
    },
    {
      organizerimg:[accountimg2,accountimg3],
      category:'Music',
      placeholder: eventimg3,
      organizeraccounts:['Username001'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      //value: 10000,
      //target:12000
  
    },
    {
      organizerimg:[accountimg2],
      organizeraccounts:['Username001'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      value: 760000,
      target:1200000
  
    }, */
  ]