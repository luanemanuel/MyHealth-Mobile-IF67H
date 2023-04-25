import React, {createContext, useContext, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import storage from "@react-native-firebase/storage"
import {Vaccine} from "../interfaces/vaccine";

const VaccineContext = createContext({});

export function useVaccine() {
    return useContext(VaccineContext);
}

export function VaccineProvider({children}) {
    const [actualVaccine, setActualVaccine] = useState<Vaccine | null>(null);

    const usersCollection = firestore().collection('Users');

    const vaccinesStorage = storage().ref('Vaccines');

    function getVaccine() {
        return actualVaccine;
    }

    function createVaccine(userId, vaccineName, vaccineImage, vaccineDate, dose, nextDate) {
        const vaccineCollection = usersCollection.doc(userId).collection('Vaccines').doc();
        return new Promise<void>((resolve, reject) => {
            vaccinesStorage.child(vaccineCollection.id).putFile(vaccineImage).then((snapshot) => {
                vaccinesStorage.child(vaccineCollection.id).getDownloadURL().then((url) => {
                    vaccineCollection.set({
                        name: vaccineName,
                        imagePath: url,
                        date: vaccineDate,
                        dose: dose,
                        nextDate: nextDate,
                    }).then(() => resolve()).catch(error => {
                        reject(error);
                    });
                }).catch(error => {
                    reject(error);
                });
            }).catch(error => {
                reject(error);
            });
        });
    }

    function editVaccine(userId, vaccine: Vaccine) {
        const vaccineCollection = usersCollection.doc(userId).collection('Vaccines').doc(vaccine.id);
        return new Promise<void>((resolve, reject) => {
            vaccineCollection.set({
                name: vaccine.vaccineName,
                imagePath: vaccine.vaccineImage,
                date: vaccine.vaccineDate,
                dose: vaccine.vaccineDose,
                nextDate: vaccine.vaccineNextDose,
            }).then(() => resolve()).catch(error => {
                reject(error);
            });
        });
    }

    function deleteVaccine(userId, vaccineId) {
        const vaccineCollection = usersCollection.doc(userId).collection('Vaccines').doc(vaccineId);
        return new Promise<void>((resolve, reject) => {
            vaccineCollection.delete().then(() => resolve()).catch(error => {
                reject(error);
            });
        });
    }

    function getVaccineId(userId, vaccineName) {
        const vaccineCollection = usersCollection.doc(userId).collection('Vaccines');
        return new Promise<string>((resolve, reject) => {
            vaccineCollection.where('name', '==', vaccineName).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    resolve(doc.id);
                });
            }).catch(error => {
                reject(error);
            });
        });
    }

    function fetchVaccines(userId) {
        const vaccineCollection = usersCollection.doc(userId).collection('Vaccines');
        return new Promise<Vaccine[]>((resolve, reject) => {
            vaccineCollection.get().then((querySnapshot) => {
                const vaccines: Vaccine[] = [];
                querySnapshot.forEach((doc) => {
                    const vaccine = doc.data();
                    const date = vaccine.date.toDate();
                    const nextDate = vaccine.nextDate ? vaccine.nextDate.toDate() : null;
                    vaccines.push(new Vaccine(doc.id, vaccine.name, vaccine.imagePath, date, vaccine.dose, nextDate));
                });
                resolve(vaccines);
            }).catch(error => {
                reject(error);
            });
        });
    }

    const value = {
        actualVaccine,
        setActualVaccine,
        getVaccine,
        createVaccine,
        editVaccine,
        deleteVaccine,
        getVaccineId,
        fetchVaccines,
    }

    useEffect(() => {

    }, []);

    return (
        <VaccineContext.Provider value={value}>
            {children}
        </VaccineContext.Provider>
    );
}