import { setIsAuthenticated, setLogoutLoading } from "../actions/actions";

// Base url for the api requests
//export const baseUrl = 'https://palbucks-api.onrender.com'
//export const baseUrl = 'https://octopus-app-oy6v5.ondigitalocean.app';
export const baseUrl = "https://palbucks-aad4f76ec2a6.herokuapp.com";

export const checkAuthentication = async (dispatch) => {
  const access_token = localStorage.getItem("access_token");
  //const access_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3ODc1MDI4LCJpYXQiOjE2ODc4NzM4MjgsImp0aSI6ImM2OTI4ZTU5YTIwNzQ3ODQ4OGUyYmQ1MDQ3ZjI4MmU1IiwidXNlcl9pZCI6ImNvbm5lbGwifQ.TOg3aWy0rsJ7HknM70yUY4VHoqh-Tc1eMptLNFDXYB4'

  //check if the token is still valid here if not set it to false so as to restart login
  if (access_token) {
    try {
      const verifyToken = await fetch(`${baseUrl}/auth/token/verify/`, {
        method: "POST",
        body: JSON.stringify({
          token: access_token,
        }),
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
        },
      });

      const response = await verifyToken.json();
      //console.log(response)

      // Set isAuthenticated true or false from verification responce
      if (response.code == "token_not_valid") {
        // Attempt to refresh token before redirecting to sign in
        const refresh_token = localStorage.getItem("refresh_token");
        if (refresh_token) {
          try {
            const newToken = await fetch(`${baseUrl}/auth/token/refresh/`, {
              method: "POST",
              body: JSON.stringify({
                refresh: refresh_token,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const refreshData = await newToken.json();
            console.log(refreshData);

            // Store the access token if it's available
            if (newToken.ok) {
              localStorage.setItem("access_token", refreshData.access);
              //setIsAuthenticated(true)
              dispatch(setIsAuthenticated(true));
              console.log("Token updated /refreshed successfully");
            } else {
              return {
                detail: "Token is invalid or expired",
                code: "token_not_valid",
              };
            }
          } catch (error) {
            console.error(error);
          }
        } else {
          dispatch(setIsAuthenticated(false));
          return {
            detail: "Token is invalid or expired",
            code: "token_not_valid",
          };
        }

        return response;
      } else {
        dispatch(setIsAuthenticated(true));
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    dispatch(setIsAuthenticated(false));
  }
};
