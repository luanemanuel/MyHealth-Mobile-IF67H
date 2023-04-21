import React, {createContext, useContext, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [actualUser, setActualUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [loading, setLoading] = useState(true);

    const usersCollection = firestore().collection('Users');

    function signIn(userName, email, password) {
        return new Promise<void>((resolve, reject) => {
            auth()
                .signInWithEmailAndPassword(email, password)
                .catch(error => {
                    reject(error);
                });
            resolve();
        });
    }

    function signUp(name, gender, date, email, password) {
        return new Promise<void>((resolve, reject) => {
            auth()
                .createUserWithEmailAndPassword(email, password).then((user) => {
                usersCollection.doc(user.user.uid).set({
                    name: name,
                    gender: gender,
                    birth: date,
                }).catch(error => {
                    reject(error);
                });
            })
                .catch(error => {
                    reject(error);
                });
            resolve();
        });
    }

    function signOut() {
        return new Promise<void>((resolve, reject) => {
            auth()
                .signOut()
                .catch(error => {
                    reject(error);
                });
            resolve();
        });
    }

    function getUser() {
        return actualUser;
    }

    function getUserData() {
        if (actualUser == null) return null;
        return usersCollection.doc(actualUser.uid).get();
    }

    const value = {
        actualUser,
        getUser,
        getUserData,
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