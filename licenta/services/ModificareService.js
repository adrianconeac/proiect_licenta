import {db} from "../config/db";

export const modifPacient = (nume, prenume, sex, data_nasterii,  cnp, adresa, email, telefon, grupa_sanguina, pacientKey) => {
    db.ref('/items').child(pacientKey).update({
        date_generale: {
            nume: nume,
            prenume: prenume,
            sex: sex,
            data_nasterii: data_nasterii,
            cnp: cnp,
            adresa: adresa,
            email: email,
            telefon: telefon,
            grupa_sanguina: grupa_sanguina

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

export const modifPrescriptie = (medicament, doza, nota, data, pacientKey, prescriptieKey) => {
    db.ref('/items').child(pacientKey).child('prescriptie').child(prescriptieKey).update({
        medicament: medicament,
        doza: doza,
        nota: nota,
        data: data
    });
};

export const modifVaccin = (tip_vaccin,  data, pacientKey, vaccinKey) => {
    db.ref('/items').child(pacientKey).child('vaccin').child(vaccinKey).update({
        tip_vaccin: tip_vaccin,
        data: data
    });
};

export const modifExaminareFizica = (temperatura, greutate, sistolic, diastolic, puls, frecv_caridaca, frecv_respiratorie, zgomote_cardiace, zgomote_respiratorii, diagnostic, data, pacientKey, examen_fizicKey) => {
    db.ref('/items').child(pacientKey).child('examen_fizic').child(examen_fizicKey).update({
        temperatura: temperatura,
        greutate: greutate,
        sistolic: sistolic,
        diastolic: diastolic,
        puls: puls,
        frecv_caridaca: frecv_caridaca,
        frecv_respiratorie: frecv_respiratorie,
        zgomote_cardiace: zgomote_cardiace,
        zgomote_respiratorii: zgomote_respiratorii,
        diagnostic: diagnostic,
        data: data
    });
};

export const modifEKG = (unda_P, complex_QRS, unda_T, segment_QT, unda_ST, intervalul_RR, intervalul_PR, nota, data, pacientKey, examen_EKGKey) => {
    db.ref('/items').child(pacientKey).child('EKG').child(examen_EKGKey).update({
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

