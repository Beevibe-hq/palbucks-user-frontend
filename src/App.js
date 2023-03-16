import userimg2 from './images/user2.svg'
import userimg3 from './images/user3.svg'
import userimg4 from './images/user4.svg'
import userimg5 from './images/user5.svg'
import userimg6 from './images/user6.svg'
import eventimg from "./images/eventimg.png";
import eventimg2 from "./images/eventimg2.png";
import eventimg3 from "./images/eventimg3.png";
import eventimg4 from "./images/eventimg4.jpg";
import eventimg5 from "./images/eventimg5.jpg";
import eventimg6 from "./images/eventimg7.jpg";

import environmentimg from './images/environment label.svg'
import medicalimg from './images/medical label.svg'
import animalimg from './images/animal label.svg'


import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";


import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/home";
import Settings from "./pages/settings/settings";
import Detailedevent from "./components/detailedevent/detailedevent";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { sethomebodydata } from './actions/actions'

function App() {

  const dispatch = useDispatch()
  
  useEffect( ()=>{

   dispatch(sethomebodydata(data))
  }, [])

  return (
    
    <BrowserRouter>
      <div className="h-screen">        
        <Routes>
          
          <Route path='/' element = { <Home /> } />
          <Route path='/detailed/:id' element = { <Detailedevent /> } />
          <Route path= '/settings' element = { <Settings />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



let data = [
  {
    organizerimg:[userimg2],
    category:'Environment',
    categoryimg: environmentimg,
    placeholder: eventimg,
    organizeraccounts:['Franca'],
    title: 'This is the title of the main user’s crowdfunding kcmsdij isnd ',
    //description: "Description of the ongoing event that users will read to know what it's about",
    value: 10000,
    target:12000,
    location:'Cyprus',
    days:'30',
    totaldonations:20403,
    liked:true,
  },
  {
    organizerimg:[userimg3, userimg4],
    category:'Refugee',
    categoryimg: animalimg,
    organizeraccounts:['Franca','Hikim'],
    placeholder: eventimg2,
    title: 'Research on the construction of an automatic street light with motion and light sensors',
    //description: "Description of the ongoing event that users will read to know what it's about",
    //value: 10000,
    //target:12000,
    location:'Singapore',
    days:'49',
    totaldonations:20403,
    liked:false,
  },
  {
    organizerimg:[userimg3],
    category:'Medical',
    categoryimg:medicalimg,    
    placeholder: eventimg3,
    organizeraccounts:['Franca'],
    title: 'Title for this particular fundevent',
    //description: "Description of the ongoing event that users will read to know what it's about",
    value: 37255010,
    target:80030000,
    location:'Texas',
    days:'10',
    totaldonations:2040323,
    liked:true,
  },
  {
    organizerimg:[userimg2, userimg3, userimg4],
    category:'Donate',
    placeholder: eventimg2,
    categoryimg:medicalimg,  
    organizeraccounts:['Franca','Hikim','Mane'],
    title: 'Title for this particular fundevent',
    description: "Description of the ongoing event that users will read to know what it's about",
    value: 10000,
    target:12000,
    location:'Abuja',
    days:'19',
    totaldonations:12420403,
    liked:false,
  },
  {
    organizerimg:[userimg2, userimg3, userimg4],
    category:'Family',
    placeholder: eventimg4,
    categoryimg:medicalimg,  
    organizeraccounts:['Haaland','Franca','Hikim'],
    title: 'Support Chelsea football club to pay off their transfer fees that mudryk and lukaku accumulated',
    description: "Description of the ongoing event that users will read to know what it's about",
    value: 10000,
    target:12000,
    location:'Abuja',
    days:'19',
    totaldonations:327820403,
    liked:true
  },
  {
    organizerimg:[userimg2, userimg3, userimg4],
    category:'Faith',
    placeholder: eventimg5,
    categoryimg:medicalimg,  
    organizeraccounts:['Username001','Username002','Username003'],
    title: 'Title for this particular fundevent',
    description: "Description of the ongoing event that users will read to know what it's about",
    value: 10000,
    target:12000,
    location:'Abuja',
    days:'19',
    totaldonations:204032332,
    liked:true
  },
  {
    organizerimg:[userimg2, userimg3, userimg4],
    category:'Environment',
    placeholder: eventimg6,
    categoryimg:medicalimg,  
    organizeraccounts:['Username001','Username002','Username003'],
    title: 'This is the title of the main user’s crowdfunding',
    description: "Description of the ongoing event that users will read to know what it's about",
    value: 10000,
    target:12000,
    location:'Abuja',
    days:'19',
    totaldonations:3220244503,
    liked:true
  },
  /*
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