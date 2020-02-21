import {db} from '../config/db';
import { FIREBASE_EMPTY } from './constante';

export const addItem = (nume, prenume, data_nasterii, adresa, cnp,) => {
    db.ref('/items').push({
        date_generale: {
            nume: nume || FIREBASE_EMPTY,
            prenume: prenume || FIREBASE_EMPTY,
            data_nasterii: data_nasterii || FIREBASE_EMPTY,
            adresa: adresa || FIREBASE_EMPTY,
            cnp: cnp || FIREBASE_EMPTY
        }
    });
};

export const addAnalize = (nume_analize, specificatii, pacientKey) => {

    db.ref('/items').child(pacientKey).child('analize').push({
        nume_analize: nume_analize,
        specificatii: specificatii || FIREBASE_EMPTY
    });
};

export const addProgramari = (nume_programare, data, ora, pacientKey) => {

    db.ref('/items').child(pacientKey).child('programari').push({
        nume_programare: nume_programare,
        data: data,
        ora: ora
    });
};

export const addOperatii = (titlu_operatie, doctor, spital, nota, data, pacientKey) => {
    //data
    db.ref('/items').child(pacientKey).child('operatii').push({
        titlu_operatie: titlu_operatie,
        doctor: doctor,
        spital: spital,
        data: data,
        nota: nota || FIREBASE_EMPTY
    });
};