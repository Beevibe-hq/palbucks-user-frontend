import { setIsAuthenticated } from "../actions/actions";

// Function to refresh the access token
export const refreshToken = async (dispatch) => {
    const refresh_token = localStorage.getItem('refresh_token');

    if (refresh_token) {
        try {
            const newToken = await fetch('https://palbucks-api.onrender.com/auth/token/refresh/', {
                method: 'POST',
                body: JSON.stringify({
                    refresh: refresh_token,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const refreshData = await newToken.json();
            console.log(refreshData);

            if (newToken.ok) {
                localStorage.setItem('access_token', refreshData.access);
                console.log('Token updated successfully')
                dispatch(setIsAuthenticated(true))
            }else{
                // If the refresh token is invalid or expired
                dispatch(setIsAuthenticated(false))
            }
        } catch (error) {
                console.error(error);
        }
    }else{
        dispatch(setIsAuthenticated(false))
    }
};

