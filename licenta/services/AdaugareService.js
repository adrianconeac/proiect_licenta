import {db} from '../config/db';

export const addItem = (nume, prenume, data_nasterii, adresa, cnp,) => {
    db.ref('/items').push({
        date_generale: {
            nume: nume,
            prenume: prenume,
            data_nasterii: data_nasterii,
            adresa: adresa,
            cnp: cnp
        }
    });
};

export const addAnalize = (nume_analize, specificatii, pacientKey) => {

    db.ref('/items').child(pacientKey).child('analize').push({
        nume_analize: nume_analize,
        specificatii: specificatii
    });
};