import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
const AuthContext = createContext()

export const AuthActionType = {
    LOGGED_IN: "LOGGED_IN",
    NOT_LOGGED_IN: "NOT_LOGGED_IN"
}

function AuthContextProvider(props){
    const[auth, setAuth] = useState({
        user: null,
        loggedIn: false
    })

    const fireauth = getAuth()
    onAuthStateChanged(fireauth, (user)=>{
        if(user){
            if(auth.loggedIn==false){
                // console.log("user is logged in auth context ", user)
                authReducer({
                    type: AuthActionType.LOGGED_IN,
                    payload: {
                        user: user,
                        loggedIn: true}
                })

            }
        }
        else{
            if(auth.loggedIn){
                authReducer({
                    type: AuthActionType.NOT_LOGGED_IN,
                    payload: {
                        user: null,
                        loggedIn: false}
                })
            }
        }
    })

    const authReducer = (action) => {
        const {type, payload } = action;

        switch(type){
            case AuthActionType.LOGGED_IN: {
                return setAuth({
                    user: payload.user,
                    loggedIn: payload.loggedIn
                })
            }

            case AuthActionType.NOT_LOGGED_IN: {
                return setAuth({
                    user: payload.user,
                    loggedIn: payload.loggedIn
                })
            }

            default:
                return auth;
        }
    }

    auth.login = (email, password) => {
        signInWithEmailAndPassword(fireauth, email, password)
            .then((userCredential)=>{
                //
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    return(
        <AuthContext.Provider value={{auth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
export { AuthContextProvider }