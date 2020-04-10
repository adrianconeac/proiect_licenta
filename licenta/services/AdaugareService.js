import {db} from '../config/db';
import { FIREBASE_EMPTY } from './constante';

export const addItem = (nume, prenume, sex, data_nasterii, cnp, adresa, email, telefon, grupa_sanguina ) => {
    db.ref('/items').push({
        date_generale: {
            nume: nume,
            prenume: prenume,
            sex: sex || FIREBASE_EMPTY,
            data_nasterii: data_nasterii || FIREBASE_EMPTY,
            cnp: cnp || FIREBASE_EMPTY,
            adresa: adresa || FIREBASE_EMPTY,
            email: email || FIREBASE_EMPTY,
            telefon: telefon || FIREBASE_EMPTY,
            grupa_sanguina: grupa_sanguina || FIREBASE_EMPTY,

        }
    });
};

export const addAnalize = (nume_analize, pacientKey) => {

    db.ref('/items').child(pacientKey).child('analize').push({
        nume_analize: nume_analize || FIREBASE_EMPTY,
        // specificatii: specificatii || FIREBASE_EMPTY
    });
};

export const addProgramari = (nume_programare, data, ora, pacientKey) => {

    db.ref('/items').child(pacientKey).child('programari').push({
        nume_programare: nume_programare || FIREBASE_EMPTY,
        data: data || FIREBASE_EMPTY,
        ora: ora || FIREBASE_EMPTY,
    });
};

export const addOperatii = (titlu_operatie, doctor, spital, nota, data, pacientKey) => {
    db.ref('/items').child(pacientKey).child('operatii').push({
        titlu_operatie: titlu_operatie || FIREBASE_EMPTY,
        doctor: doctor || FIREBASE_EMPTY,
        spital: spital || FIREBASE_EMPTY,
        data: data || FIREBASE_EMPTY,
        nota: nota || FIREBASE_EMPTY
    });
};

export const addPrescriptie = (medicament, doza, nota, data, pacientKey) => {
    db.ref('/items').child(pacientKey).child('prescriptie').push({
        medicament: medicament || FIREBASE_EMPTY,
        doza: doza || FIREBASE_EMPTY,
        nota: nota || FIREBASE_EMPTY,
        data: data || FIREBASE_EMPTY,
    });
};

export const addVaccin = (tip_vaccin, data, pacientKey) => {
    db.ref('/items').child(pacientKey).child('vaccin').push({
        tip_vaccin: tip_vaccin || FIREBASE_EMPTY,
        data: data || FIREBASE_EMPTY,
    });
};

export const addExamenFizic = (temperatura, greutate, sistolic, diastolic, puls, frecv_caridaca, frecv_respiratorie, zgomote_cardiace, zgomote_respiratorii, diagnostic, data, pacientKey) => {
    db.ref('/items').child(pacientKey).child('examen_fizic').push({
        temperatura: temperatura || FIREBASE_EMPTY,
        greutate: greutate || FIREBASE_EMPTY,
        sistolic: sistolic || FIREBASE_EMPTY,
        diastolic: diastolic || FIREBASE_EMPTY,
        puls: puls || FIREBASE_EMPTY,
        frecv_caridaca: frecv_caridaca || FIREBASE_EMPTY,
        frecv_respiratorie: frecv_respiratorie || FIREBASE_EMPTY,
        zgomote_cardiace: zgomote_cardiace || FIREBASE_EMPTY,
        zgomote_respiratorii: zgomote_respiratorii || FIREBASE_EMPTY,
        diagnostic: diagnostic || FIREBASE_EMPTY,
        data: data || FIREBASE_EMPTY,
    });
};

export const addEKG = (unda_P, complex_QRS, unda_T, segment_QT, unda_ST, intervalul_RR, intervalul_PR, nota, data, pacientKey) => {
    db.ref('/items').child(pacientKey).child('EKG').push({
        unda_P: unda_P,
        complex_QRS: complex_QRS,
        unda_T: unda_T,
        segment_QT: segment_QT,
        unda_ST: unda_ST,
        intervalul_RR: intervalul_RR,
        intervalul_PR: intervalul_PR,
        nota: nota,
        data: data
    });
};

