"use client"
import { SessionProvider} from "next-auth/react"




const AuthProvaider = ({children}) => {
  return ( 
    <SessionProvider>
      {children}
    </SessionProvider>
   );
}
 
export default AuthProvaider;