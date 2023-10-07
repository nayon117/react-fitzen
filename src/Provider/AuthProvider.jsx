import PropTypes from 'prop-types';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// create context 
export const AuthContext = createContext(null)

// component
const AuthProvider = ({ children }) => {
     
    // create new user via sign up
    const signUp = (email,password) => {
       return  createUserWithEmailAndPassword(auth, email, password)
    }

    const authentications = {
        signUp
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