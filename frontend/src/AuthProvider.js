import React,{useState,createContext} from "react";

const AuthContext=createContext();

export function AuthProvider({children}){
    const [isLogin,setIsLogin]=useState(localStorage.getItem("token")?true:false);
    const [isSuperuser, setIsSuperuser] = useState(false);
     return(
      < AuthContext.Provider value={{ isLogin, setIsLogin,isSuperuser ,setIsSuperuser}}>
         {children}
     </AuthContext.Provider>
     )
}

export default AuthContext;