import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [channels, setChannels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])

    const signup = (email, password, username) => {
        return auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                user.user.updateProfile({
                    displayName: username,
                })
            });
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    const addChannel = (name) => {
        return setChannels([...channels, name])
    }

    const value = {
        currentUser,
        channels,
        addChannel,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
