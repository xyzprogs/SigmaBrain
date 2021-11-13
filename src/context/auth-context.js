import { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
const AuthContext = createContext()

export const AuthActionType = {
    LOGGED_IN: "LOGGED_IN",
    NOT_LOGGED_IN: "NOT_LOGGED_IN"
}

function AuthContextProvider(props){
    const fireauth = getAuth()
    const[auth, setAuth] = useState({
        user: fireauth.currentUser,
        loggedIn: true,
        loading: true
    })

    
    // useEffect(()=>{
    //     let user = fireauth.currentUser
    //     console.log(fireauth.currentUser)
    //     if(user){
    //         authReducer({
    //             type: AuthActionType.LOGGED_IN,
    //             payload: {
    //                 user: user,
    //                 loggedIn: true,
    //                 loading: false
    //             }
    //         })
    //     }else{
    //         authReducer({
    //             type: AuthActionType.NOT_LOGGED_IN,
    //             payload: {
    //                 user: null,
    //                 loggedIn: false,
    //                 loading: false
    //             }
    //         })
    //     }
    // }, [fireauth.currentUser])
    onAuthStateChanged(fireauth, (user)=>{
        // if(user != auth.user ){
        //     console.log("update user information")
        //     if(user){
        //         setAuth({
        //             user:user,
        //             loggedIn:true
        //         })
        //     }
        // }
        auth.user = user
        if(user && !auth.loggedIn){
            console.log("login user")
            setAuth({
                user:user,
                loggedIn: true
            })
        }

        if(user==null && auth.loggedIn){
            console.log("log out user")
            setAuth({
                user:null,
                loggedIn: false
            })
        }

        // if(user){
        //     console.log("logging in")
        //     setAuth({
        //         user: user,
        //         loggedIn: true
        //     }, [user])
        // }else{
        //     console.log("logging in")
        //     setAuth({
        //         user: null,
        //         loggedIn: false
        //     }, [user])
        // }
    })

    const authReducer = (action) => {
        const {type, payload } = action;

        switch(type){
            case AuthActionType.LOGGED_IN: {
                localStorage.setItem("uid", payload.user.uid)
                return setAuth({
                    user: payload.user,
                    loggedIn: payload.loggedIn
                })
            }

            case AuthActionType.NOT_LOGGED_IN: {
                localStorage.removeItem("uid")
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
                authReducer({
                    type: AuthActionType.LOGGED_IN,
                    payload: {
                        user: userCredential.user,
                        loggedIn: true,
                        loading: false
                    }
                })
            })
            .catch((error)=>{
                // const errorCode = error.code;
                // const errorMessage = error.message;
            })
    }

    auth.signOut = () => {
        signOut(fireauth).then(()=>{
            authReducer({
                type: AuthActionType.NOT_LOGGED_IN,
                payload: {
                    user: null,
                    loggedIn: false,
                    loading: false
                }
            })
        }).catch((error)=>{
        })
    }

    auth.getCurrentUserUid = () => {
        if(auth.user!=null){
            return auth.user.uid
        }
    }

    return(
        <AuthContext.Provider value={{auth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
export { AuthContextProvider }