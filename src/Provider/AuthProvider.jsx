import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

// create context 
export const AuthContext = createContext(null)

// component
const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
     
    // create new user via sign up
    const signUp = (email,password) => {
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out 
    const logOut = () => {
        return signOut(auth)
    }

    // update user profile 
    const handleUpdateProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }
    
    // observer 
    useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])
    



    const authentications = {
        signUp,
        signIn,
        user,
        logOut,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;