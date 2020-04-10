import React, {Component} from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './pages/home';
import AdaugarePacienti from './pages/Pacient/AdaugarePacienti';
import ListaPacienti from './pages/Pacient/ListaPacienti';
import LoginTab from './pages/InregistrareMedic/Login';
import RegisterTab from "./pages/InregistrareMedic/Register";
import AnalizePacient from "./pages/Analize/AnalizePacient";
import ModificarePacienti from "./pages/Pacient/ModificarePacienti";
import CalendarProgramari from "./pages/Programari/CalendarProgramari";
import AdaugareAnalize from "./pages/Analize/AdaugareAnalize";
import DosarPacient from "./pages/Pacient/DosarPacient";
import DateGeneralePacient from "./pages/Pacient/DateGeneralePacient";
import ModificareAnalize from "./pages/Analize/ModificareAnalize";
import AdaugareProgramari from "./pages/Programari/AdaugareProgramari";
import AfisareProgramariPacient from "./pages/Programari/AfisareProgramariPacient";
import Test from "./pages/test";
import AdaugareOperatii from "./pages/Operatii/AdaugareOperatii";
import OperatiiPacient from "./pages/Operatii/OperatiiPacient";
import ModificareOperatii from "./pages/Operatii/ModificareOperatii";
import ModificareProgramare from "./pages/Programari/ModificareProgramare";
import AdaugarePrescriptie from "./pages/PrescriptiePacient/AdaugarePrescriptie";
import AfisarePrescriptie from "./pages/PrescriptiePacient/AfisarePrescriptie";
import ModificarePrescriptie from "./pages/PrescriptiePacient/ModificarePrescriptie";
import AdaugareVaccin from "./pages/VaccinPacient/AdaugareVaccin";
import AfisareVaccin from "./pages/VaccinPacient/AfisareVaccin";
import ModificareVaccin from "./pages/VaccinPacient/ModificareVaccin";
import AdaugareExamenFizic from "./pages/ExamenFizic/AdaugareExamenFizic";
import AfisareExamenFizic from "./pages/ExamenFizic/AfisareExamenFizic";
import ModificareExamenFizic from "./pages/ExamenFizic/ModificareExamenFizic";
import AdaugareEKG from "./pages/EKG/AdaugareEKG";
import AfisareEKG from "./pages/EKG/AfisareEKG";
import ModificareEKG from "./pages/EKG/ModificareEKG";
import SchimbareParola from "./pages/InregistrareMedic/SchimbareParola";
import SetariCont from './pages/InregistrareMedic/SetariCont';

const AppNavigator = createStackNavigator(
    {
        LoginScreen: LoginTab,
        RegisterScreen: RegisterTab,
        SchimbareParolaScreen: SchimbareParola,
        SetariContScreen: SetariCont,
        //Pacient
        AdaugarePacientiScreen: AdaugarePacienti,
        ListaPacientiScreen: ListaPacienti,
        ModificarePacientiScreen: ModificarePacienti,
        DosarPacientScreen: DosarPacient,
        DateGeneralePacientScreen: DateGeneralePacient,
        HomeScreen: Home,
        //Analize
        AnalizePacientScreen: AnalizePacient,
        AdaugareAnalizeScreen: AdaugareAnalize,
        ModificareAnalizeScreen: ModificareAnalize,
        //Programari
        CalendarProgramariScreen: CalendarProgramari,
        AdaugareProgramariScreen: AdaugareProgramari,
        AfisareProgramariPacientScreen: AfisareProgramariPacient,
        ModificareProgramareScreen: ModificareProgramare,
        //Operatii
        AdaugareOperatiiScreen: AdaugareOperatii,
        AfisareOperatiiScreen: OperatiiPacient,
        ModificareOperatiiScreen: ModificareOperatii,
        //Prescriptie
        AdaugarePrescriptieScreen: AdaugarePrescriptie,
        AfisarePrescriptieScreen: AfisarePrescriptie,
        ModificarePrescriptieScreen: ModificarePrescriptie,
        //Vaccin
        AdaugareVaccinScreen: AdaugareVaccin,
        AfisareVaccinScreen: AfisareVaccin,
        ModificareVaccinScreen: ModificareVaccin,
        //ExamenFizic
        AdaugareExamenFizicScreen: AdaugareExamenFizic,
        AfisareExamenFizicScreen: AfisareExamenFizic,
        ModificareExamenFizicScreen: ModificareExamenFizic,
        //EKG
        AdaugareEKGScreen: AdaugareEKG,
        AfisareEKGScreen: AfisareEKG,
        ModificareEKGScreen: ModificareEKG,


        TestScreen: Test
    },
    {
        initialRouteName: 'LoginScreen',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}
