import axios from "axios";


export const refreshAccessToken = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/refresh-access-token', {}, {
        withCredentials: true
      });
      console.log("response", response);
      const { accessToken, refreshToken } = response.data;

      // Set the user information and the new tokens
      console.log('New tokens:', accessToken, refreshToken);

      //call get current user
      const response2 = await axios.get('http://localhost:3000/api/users/current-user', {
        withCredentials: true
      });
      console.log("response2", response2.data.user);
      return response2.data.user
      
    } catch (error) {
      console.log("error",error)
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please log in again.");
        window.location.href = '/log-in';
      }
    }
  };
