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

export const modifAnalize = (nume_analize, specificatii, pacientKey) => {
    db.ref('/items').child(pacientKey).update({
        analize: {
            nume_analize: nume_analize,
            specificatii: specificatii
        },
    });
};
