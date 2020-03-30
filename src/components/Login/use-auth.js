import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { createContext, useState } from "react";
import {Route,Redirect} from 'react-router-dom'




firebase.initializeApp(firebaseConfig);

const AuthContext=createContext();
export const PrivateRoute=({ children, ...rest })=> {
    const auth=useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export const AuthProvider=(props)=>{
    const auth=Auth();
    return<AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth=()=>{
    return useContext(AuthContext);
}

const Auth = ()=>{
    const [user,setUser]=useState(null)
    const signUp=(email,password,name)=>{
       return firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(res=>{
            firebase.auth().currentUser.updateProfile({
                displayName:name
            }).then(()=>{
                setUser(res.user);
                window.history.back();
            })
        })
        .catch(error=>{
    
            setUser(null)
            return error.message;
        })
    }
    const signIn=(email,password)=>{
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res=>{
            setUser(res.user);
            window.history.back();
        })
        .catch(err=>setUser({error:err.message}))
    }
    const signOut=()=>{
        return firebase.auth().signOut()
            .then(res=>setUser(null))
    }
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                const currUser=user;
                setUser(currUser);
            }
        })
    },[])

    return{
        user,
        signUp,
        signIn,
        signOut
    }

}
export default Auth;
