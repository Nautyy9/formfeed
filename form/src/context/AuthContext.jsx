import React,{createContext, useContext, useState, useEffect} from 'react'
import {auth} from "../firebase"


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({children}) 
{
    const [currentUser, setUser] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const unsubscriber = auth.onAuthStateChanged(user => {
        setUser(user)
        setLoading(false)
      })
    
      return  unsubscriber

    }, [])
    

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut()
      }
    
      function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
      }
    
      function updateEmail(email) {
        return currentUser.updateEmail(email)
      }
    
      function updatePassword(password) {
        return currentUser.updatePassword(password)
      }

    const value= {
        currentUser,
        signup,
        signin,
        logout,
        updateEmail,
        updatePassword,
        resetPassword,

    }
return (  
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
)
}

export default AuthContext