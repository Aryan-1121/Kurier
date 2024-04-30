
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { authenticatedUser } = useAuthContext();

  return (
   <div className="p-4 h-screen flex items-center justify-center">

      <Routes>
        {/* if user is authenticated then be at home page else redirect to login page */}
        <Route path="/" element={authenticatedUser ? <Home /> : <Login />} />
        {/* if user is authenticated then redirect to home page else redirect to login page */}
        <Route path="/login" element={authenticatedUser ? <Navigate to='/' /> : <Login />} />
        {/* if user is authenticated then redirect to home page else redirect to signup page */}
        <Route path="/signup" element={authenticatedUser ? <Navigate to='/' /> : <SignUp />} />

      </Routes>
      <Toaster />


   </div>
  )
}

export default App
