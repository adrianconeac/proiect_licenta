import {db} from "../config/db";

export const modifPacient = (nume, prenume, data_nasterii, adresa, cnp, pacientKey) => {
    db.ref('/items').child(pacientKey).update({
        date_generale: {
            nume: nume,
            prenume: prenume,
            data_nasterii: data_nasterii,
            adresa: adresa,
            cnp: cnp
        },

    });
};

export const modifAnalize = (nume_analize, specificatii, pacientKey,analizeKey,) => {
    db.ref('/items').child(pacientKey).child('analize').child(analizeKey).update({
            nume_analize: nume_analize,
            specificatii: specificatii
    });
};

export const modifOperatii = (titlu_operatie, doctor, spital, nota, data, pacientKey, operatiiKey) => {
    db.ref('/items').child(pacientKey).child('operatii').child(operatiiKey).update({
        titlu_operatie: titlu_operatie,
        doctor: doctor,
        spital: spital,
        nota: nota,
        data: data
    });
};

export const modifProgramare = (nume_programare, data, ora, pacientKey, programareKey) => {
    db.ref('/items').child(pacientKey).child('programari').child(programareKey).update({
        nume_programare: nume_programare,
        data: data,
        ora: ora
    });
};
