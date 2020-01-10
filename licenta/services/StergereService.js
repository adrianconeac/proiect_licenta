import {db} from "../config/db";

export const stergerePacient = (pacientKey) => {
    db.ref('/items').child(pacientKey).remove();
};
