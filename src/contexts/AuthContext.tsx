import React, {createContext, useContext, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [actualUser, setActualUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [loading, setLoading] = useState(true);

    function signIn(email, password) {
        return new Promise((resolve, reject) => {
            auth()
                .signInWithEmailAndPassword(email, password)
                .catch(error => {
                    reject(error);
                });
        });
    }

    function signUp(email, password) {
        return new Promise((resolve, reject) => {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .catch(error => {
                    reject(error);
                });
        });
    }

    function signOut() {
        return new Promise((resolve, reject) => {
            auth()
                .signOut()
                .catch(error => {
                    reject(error);
                });
        });
    }

    function getUser() {
        return actualUser;
    }

    const value = {
        actualUser,
        getUser,
        signIn,
        signUp,
        signOut,
    }

    useEffect(() => {
        return auth().onAuthStateChanged(user => {
            setActualUser(user);
            setLoading(false);
        });
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}