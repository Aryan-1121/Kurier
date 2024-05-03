import { createContext, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";



export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authenticatedUser } = useAuthContext();

  // if the user is authenticated then we will create a new socket connection to BE, and then set it to state else(when user logs out) set it to null

  useEffect(() => {
    if (authenticatedUser) {
      const newSocket = io('http://localhost:5000')
      setSocket(newSocket);

      // the hook also returns a cleanup function that closes the socket when the component unmounts or the authenticatedUser changes.

      // The socket.close() ensures that the socket connection is properly closed to prevent any potential memory leaks or unintended behavior.
      return () => {
        socket.close();
      }
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }

  }, [authenticatedUser]);


  return <SocketContext.Provider value={{ socket, onlineUsers }}></SocketContext.Provider>;
}













