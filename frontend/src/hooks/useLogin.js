import { useState } from "react";
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext";




const useLogin = () => {
  const [loading, setLoading] = useState(false);

  // our custom hook for maintaining authenticated user in a state variable
  const { setAuthenticatedUser } = useAuthContext();

  // login function will take username and password, and send it to backend for login authentication, if everything is fine we will set this user in local storage and then update the authenticatedUser state (our AuthContext provider) 
  const login = async ({ userName, password }) => {

    setLoading = true;
    try {
      // send request to backend
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
      })
      // converting the response to json
      const data = await res.json();
      // checking if there is an error
      if (data.error) {
        throw new Error(data.error);
      }

      // setting up the data in local storage and updating the authenticatedUser state
      localStorage.setItem('authenticated-chat-user', JSON.stringify(data));
      setAuthenticatedUser(data);

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    finally {
      setLoading = false;
    }
  }

}












