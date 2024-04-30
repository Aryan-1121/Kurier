import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (fullName, username, password, confirmPassword, gender) => {
    setLoading(true);
    // check if all fields are filled + passwords match + password is atleast 6 characters 
    const isSuccess = handleInputErrors({ fullName, username, password, confirmPassword, gender });
    if (!isSuccess) {
      setLoading(false);
      return;
    }

    // if everything is fine send request to backend
    try {
      const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
      });

      // convert the response to json
      const data = await res.json();
      console.log(data)

    } catch (error) {
      toast.error(error.message)
    }
    finally {
      setLoading(false);
    }
  }
  return (loading, signup);
}


function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill all fields');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }

  return true;

}
export default useSignup;