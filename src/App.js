import userimg2 from './images/user2.svg'
import userimg3 from './images/user3.svg'
import userimg4 from './images/user4.svg'
//import userimg5 from './images/user5.svg'
//import userimg6 from './images/user6.svg'
import eventimg from "./images/eventimg.png";
import eventimg2 from "./images/eventimg2.png";
import eventimg3 from "./images/eventimg3.png";
import eventimg4 from "./images/eventimg4.jpg";
import eventimg5 from "./images/eventimg5.jpg";
import eventimg6 from "./images/eventimg7.jpg";

import environmentimg from './images/environment label.svg'
import medicalimg from './images/medical label.svg'
import animalimg from './images/animal label.svg'


import { BrowserRouter, Route, Routes } from "react-router-dom";



import Home from "./pages/home/home";
import Settings from "./pages/settings/settings";
import Detailedevent from "./components/detailedevent/detailedevent";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { sethomebodydata } from './actions/actions'
import Organisecrowdfund from './pages/organisecrowdfund/organisecrowdfund'
import Profilepage from './components/profilepage/profilepage'
import Wallet from './pages/wallet/wallet'
import Notificationspage from './pages/notificationspage/notificationspage'
import Helpcenter from './pages/helpcenter/helpcenter'
import Howitworks from './pages/howitworks/howitworks'
import Termsofuse from './pages/termsofuse/termsofuse'
import Privacypolicy from './pages/privacypolicy/privacypolicy'
import CommunityGuidelines from './pages/communityguidelines/communityguidelines'
import LandingPage from './pages/landingpage/landingpage'
import Signinpage from './pages/signin/signin'
import Signuppage from './pages/signup/signup'
import Otppage from './pages/otppage/otppage'
import Completesignup from './pages/completeSignup/completesignup'
import PrivateRoute from './components/privateroute/privateroute'
import { checkAuthentication } from './auth/checkauthentication'
import { refreshToken } from './auth/refreshToken'
import Loadingspinner from './components/loadingspinner/loadingSpinner'

function App() {
    
    const dispatch = useDispatch();
    //const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)
    const logoutLoading = useSelector(state => state.authReducer.isLoading)

  useEffect( ()=>{
   
    checkAuthentication(dispatch)
    
    // Get crowdfund details
    const getCrowdfunds = async() => {    
          const access_token = localStorage.getItem('access_token')

          // Send the image using Fetch API
          try{
            const crowdfunds = await fetch('https://palbucks-api.onrender.com/funding/api/',{
              headers:{
                Authorization:`Bearer ${access_token}`,
              }
            }).json()
            console.log(crowdfunds)
          }
          catch(error){
            console.error(error)
          }        
    }
    
   //Store crowdfund details in Redux store 
   dispatch(sethomebodydata(data))

   // Refresh the access token every 15 minutes
   const tokenRefreshInterval = setInterval(()=>{
      refreshToken(dispatch)
      //alert('refresh')
   }, 15 * 60 * 1000 )

   return () => {
      clearInterval(tokenRefreshInterval);
   }
   
  }, [])

  if(logoutLoading){
    return (
      <div className="flex items-center justify-center h-screen">
        <Loadingspinner />
      </div>
    )
  }else{
    return (    
      <BrowserRouter>
        <div className="h-screen">        
          <Routes>
            <Route path='/' element = {<LandingPage />} />
            <Route path='/signin' element = { <Signinpage/> } />
            <Route path='/signup' element = { <Signuppage /> } />
            <Route path='/otppage' element = { <Otppage /> } />
            <Route path='/completesignup' element = { <Completesignup /> } />          

            <Route exact path='/home' element = { <PrivateRoute element = {<Home />} />} >
              <Route path='/home' element={<Home />} />
            </Route>

            
            <Route path='/detailed/:id' element = { <Detailedevent /> } />
            <Route path= '/settings' element = { <Settings />} />
            <Route path='/organisecrowdfund' element = {<Organisecrowdfund />} />
            <Route path='/profilepage' element  = {<Profilepage />} />
            <Route path='/wallet' element = {<Wallet/>} />
            <Route path='/notificationspage' element = { <Notificationspage />} />
            <Route exact path='/helpcenter' element = { <PrivateRoute element = { <Helpcenter />} />} >
              <Route path='/helpcenter' element = { <Helpcenter /> } />
            </Route>
            <Route path='/howitworks' element = { <Howitworks /> } />
            <Route path = '/termsofuse' element = { <Termsofuse /> } />
            <Route path = '/privacypolicy' element = { <Privacypolicy /> }  />
            <Route path='/communityguidelines' element = { <CommunityGuidelines/> } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



let data = [
  {
    organizerimg:[userimg2],
    category:'Environment',
    categoryimg: environmentimg,
    crowdfundImage: eventimg,
    organizeraccounts:['Franca'],
    title: 'This is the title of the main user’s crowdfunding kcmsdij isnd ',
    //description: "Description of the ongoing event that users will read to know what it's about",
    amt_raised: 10000,
    target_price:12000,
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
    crowdfundImage: eventimg2,
    title: 'Research on the construction of an automatic street light with motion and light sensors',
    //description: "Description of the ongoing event that users will read to know what it's about",
    //amt_raised: 10000,
    //target_price:12000,
    location:'Singapore',
    days:'49',
    totaldonations:20403,
    liked:false,
  },
  {
    organizerimg:[userimg3],
    category:'Medical',
    categoryimg:medicalimg,    
    crowdfundImage: eventimg3,
    organizeraccounts:['Franca'],
    title: 'Title for this particular fundevent',
    //description: "Description of the ongoing event that users will read to know what it's about",
    amt_raised: 37255010,
    target_price:80030000,
    location:'Texas',
    days:'10',
    totaldonations:2040323,
    liked:true,
  },
  {
    organizerimg:[userimg2, userimg3, userimg4],
    category:'Donate',
    crowdfundImage: eventimg2,
    categoryimg:medicalimg,  
    organizeraccounts:['Franca','Hikim','Mane'],
    title: 'Title for this particular fundevent',
    description: "Description of the ongoing event that users will read to know what it's about",
    amt_raised: 10000,
    target_price:12000,
    location:'Abuja',
    days:'19',
    totaldonations:12420403,
    liked:false,
  },
  
  {
    organizerimg:[userimg2, userimg3, userimg4],
    category:'Family',
    crowdfundImage: eventimg4,
    categoryimg:medicalimg,  
    organizeraccounts:['Haaland','Franca','Hikim'],
    title: 'Support Chelsea football club to pay off their transfer fees that mudryk and lukaku accumulated',
    description: "Description of the ongoing event that users will read to know what it's about",
    amt_raised: 10000,
    target_price:12000,
    location:'Abuja',
    days:'19',
    totaldonations:327820403,
    liked:true
  },
  /*
  {
    organizerimg:[userimg2, userimg3, userimg4],
    category:'Faith',
    crowdfundImage: eventimg5,
    categoryimg:medicalimg,  
    organizeraccounts:['Username001','Username002','Username003'],
    title: 'Title for this particular fundevent',
    description: "Description of the ongoing event that users will read to know what it's about",
    amt_raised: 10000,
    target_price:12000,
    location:'Abuja',
    days:'19',
    totaldonations:204032332,
    liked:true
  },
  {
    organizerimg:[userimg2, userimg3, userimg4],
    category:'Environment',
    crowdfundImage: eventimg6,
    categoryimg:medicalimg,  
    organizeraccounts:['Username001','Username002','Username003'],
    title: 'This is the title of the main user’s crowdfunding',
    description: "Description of the ongoing event that users will read to know what it's about",
    amt_raised: 10000,
    target_price:12000,
    location:'Abuja',
    days:'19',
    totaldonations:3220244503,
    liked:true
  },
  
  {
    organizerimg:[accountimg2,accountimg3],
    category:'Music',
    crowdfundImage: eventimg3,
    organizeraccounts:['Username001'],
    //title: 'Title for this particular fundevent',
    //description: "Description of the ongoing event that users will read to know what it's about",
    //amt_raised: 10000,
    //target_price:12000

  },
  {
    organizerimg:[accountimg2],
    organizeraccounts:['Username001'],
    //title: 'Title for this particular fundevent',
    //description: "Description of the ongoing event that users will read to know what it's about",
    amt_raised: 760000,
    target_price:1200000

  }, */
]