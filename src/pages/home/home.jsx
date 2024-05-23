import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setlinkcolor } from "../../actions/actions";
import Detailedevent from "../../components/detailedevent/detailedevent";
import Homebody from "../../components/homebody/homebody";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import { loadCrowdfundEvents } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import {refreshToken} from "../../auth/refreshToken"
import KycModal from "../../components/kyc/kycModal";

function Home(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    //This chooses if to render homebody or a particular fundevent's detailed page
    //const [homeorevent, sethomeorevent] = useState('home')
    const homeorevent = useSelector(state => state.managehomeorevent)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const sidebarslid = useSelector(state => state.sidebarslid)

    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const [kycModal, setKycModal] = useState(true)

    useEffect(()=>{
        dispatch(setlinkcolor('home'))

        // Get crowdfund details
        const getCrowdfunds = async() => {    
            const access_token = localStorage.getItem('access_token')

            // Send the image using Fetch API
            try{
                const response = await fetch('https://palbucks-api.onrender.com/funding/api/',{
                    headers:{
                        Authorization:`Bearer ${access_token}`,
                    }
                })
                
                const crowdfunds = await response.json()
                if(response.ok){                                  
                    dispatch(loadCrowdfundEvents(crowdfunds))
                }else{
                    console.error(crowdfunds)
                    /* if(crowdfunds.code == 'token_not_valid'){                    
                        // Attempt to refresh token first before redirecting
                        const response = await refreshToken(dispatch, navigate)
                        if (response == 'success'){
                            window.location.reload(true)
                        }else{
                            navigate('/signin')
                            localStorage.clear()
                        }
                    } */
                }
            }            
            catch(error){
                console.error(error)
            }        
        }

        getCrowdfunds()

    }, [])

    return(
        <div className=' bg-[#F9F9F9] min-h-full relative' >
            <Sidebar />
            <div className = {`${sidebarslid ? 'brkpoint:ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-md' : '' } 
            `} >
                <Navbar />
                {/* { homeorevent == 'home' ? <Homebody /> : <Detailedevent details = {homeorevent} /> } */}
                <Homebody />
            </div>
            <KycModal kycModal = {kycModal} setKycModal = {setKycModal} />
        </div>
    )
}

export default Home