import { createContext,useState,useContext } from "react";
const AuthContext = createContext({users:null,token:null});
const AuthProvider = ({children})=> {
    const [user, setUser] = useState({users: null, token: null});
 return (
    <AuthContext.Provider value ={{user,setUser}}>
        {children}
    </AuthContext.Provider>
 );
}
const useAuth = () => useContext(AuthContext);
export {AuthProvider,useAuth}