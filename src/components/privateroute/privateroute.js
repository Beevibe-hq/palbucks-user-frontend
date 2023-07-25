import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Route} from 'react-router-dom';
import { redirect, } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    /* 
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [isVerificationComplete, setIsVerificationComplete] = useState(false)
 */
    
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)

    useEffect(()=>{

        /* const checkAuthentication = async() => {
            const access_token = localStorage.getItem('access_token')            
            //const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3ODc1MDI4LCJpYXQiOjE2ODc4NzM4MjgsImp0aSI6ImM2OTI4ZTU5YTIwNzQ3ODQ4OGUyYmQ1MDQ3ZjI4MmU1IiwidXNlcl9pZCI6ImNvbm5lbGwifQ.TOg3aWy0rsJ7HknM70yUY4VHoqh-Tc1eMptLNFDXYB4'

            //check if the token is still valid here if not set it to false so as to restart login
            if(access_token){

                try{
                    const verifyToken = await fetch('https://palbucks-api.onrender.com/auth/token/verify/',{
                        method: 'POST',
                        body:JSON.stringify({
                            "token":access_token
                        }),
                        headers: {
                            'Content-Type': 'application/json', // Specify the content type as JSON
                        },
                    })

                    const response = await verifyToken.json()
                    console.log(response)

                    // Set isAuthenticated true or false from verification responce
                    if(response.code == 'token_not_valid'){
                        
                        // Attempt to refresh token before redirecting to sign in
                        const refresh_token = localStorage.getItem('refresh_token')
                        if(refresh_token){
                            try{
                                const newToken = await fetch('https://palbucks-api.onrender.com/auth/token/refresh/',{
                                    method: 'POST',
                                    body:JSON.stringify({
                                        "refresh":refresh_token
                                    }),
                                    headers: {
                                        'Content-Type': 'application/json', 
                                    },
                                })
            
                                const refreshData = await newToken.json()
                                console.log(refreshData)
                                
                                // Store the access token if it's available
                                if(newToken.ok){
                                    localStorage.setItem('access_token',refreshData.access)
                                    setIsAuthenticated(true)
                                    alert('refreshed')
                                }
                                
                            }catch(error){
                                console.error(error)
                            }
            
                        }else{
                            setIsAuthenticated(false)
                        }
                        
                    }else{
                        setIsLoading(false)
                        setIsAuthenticated(true)
                    }                    

                }catch(error){
                    console.error(error)
                }                                 
                setIsLoading(false)
            }else{
                setIsLoading(false)
            }
        }

        checkAuthentication();
 */
        
    },[])

    /* if(isLoading){
        return(
            <div className=" text-center font-bold" >
                Loading ...
            </div>
        )
    }else{
        return isAuthenticated ? <Outlet /> : <Navigate to= "/signin" /> 
    } */

    return isAuthenticated ? <Outlet /> : <Navigate to= "/signin" /> 


    
    
}

export default PrivateRoute