import arrowdown from '../../images/arrowdown.svg'
import userimg from '../../images/user.png'
import userimg2 from '../../images/user2.svg'
import userimg3 from '../../images/user3.svg'
import userimg4 from '../../images/user4.svg'
import userimg5 from '../../images/user5.svg'
import userimg6 from '../../images/user6.svg'
import eventimg from "../../images/eventimg.png";
import eventimg2 from "../../images/eventimg2.png";
import eventimg3 from "../../images/eventimg3.png";

import environmentimg from '../../images/environment label.svg'
import medicalimg from '../../images/medical label.svg'
import animalimg from '../../images/animal label.svg'

import Fundevent from '../fundevent/fundevent'

function Homebody(){

    return(
        <div className = 'fold:px-2 phones:px-6 md:px-10 py-8 md:py-14 mt-[90px] md:mt-[100px] w-full h-full'>
            <div className = 'fold:mb-5 phones:mb-6 md:mb-12'>
                <h1 className = 'font-bold fold:text-2xl phones:text-2xl md:text-4xl mb-[10px]' >Crowdfunding is better when done together.</h1>
                <p className = 'hidden md:block font-normal text-xl' >Raise funds for a project or cause in USDT, the prominent stable coin</p>
            </div>

            <div className = 'flex fold:gap-4 phones:gap-6 mb-4 md:mb-6 font-semibold text-base md:text-lg'>
                <button className = 'w-[82px] md:w-[102px] bg-[#D8D8D8] h-[35px] md:h-[42px] py-1 px-3 rounded-3xl '>
                    Others
                </button>
                <button className = 'w-[92px] md:w-[112px] bg-inherit h-[35px] md:h-[42px] rounded-3xl hover:bg-[#D8D8D8] py-1 px-3 '>
                    For you
                </button>
            </div>
            
            <div className = 'flex gap-3 font-medium fold:text-base md:text-lg'>
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

            <div className = 'eventparent w-full'>
                
                {
                    data.map((item,i)=>{
                        return(
                          <Fundevent category = {item.category} placeholder = {item.placeholder} accountimages = {item.organizerimg}
                          organizeraccounts = {item.organizeraccounts} title = {item.title} description = {item.description}  
                          value = {item.value} target = {item.target} categoryimg = {item.categoryimg} 
                          location = {item.location} key = {i} eventimg = {item.placeholder} />
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
      organizerimg:[userimg2],
      category:'Environment',
      categoryimg: environmentimg,
      placeholder: eventimg,
      organizeraccounts:['Username001'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      value: 10000,
      target:12000,
      location:'Cyprus'
  
    },
    {
      organizerimg:[userimg3, userimg4],
      category:'Refugee',
      categoryimg: animalimg,
      organizeraccounts:['Username001','Username002'],
      placeholder: eventimg2,
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      //value: 10000,
      //target:12000,
      location:'Singapore'
  
    },
    {
      organizerimg:[userimg3],
      category:'Medical',
      categoryimg:medicalimg,    
      placeholder: eventimg3,
      organizeraccounts:['Username003'],
      //title: 'Title for this particular fundevent',
      //description: "Description of the ongoing event that users will read to know what it's about",
      value: 372550,
      target:800000,
      location:'Texas'
  
    },
    {
      organizerimg:[userimg2, userimg3, userimg4],
      category:'Donate',
      placeholder: eventimg2,
      categoryimg:medicalimg,  
      organizeraccounts:['Username001','Username002','Username003'],
      title: 'Title for this particular fundevent',
      description: "Description of the ongoing event that users will read to know what it's about",
      value: 10000,
      target:12000,
      location:'Abuja'
  
    },/*
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