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

const AppNavigator = createStackNavigator(
    {
        AdaugarePacientiScreen: AdaugarePacienti,
        ListaPacientiScreen: ListaPacienti,
        HomeScreen: Home,
        LoginScreen: LoginTab,
        RegisterScreen: RegisterTab,
        AnalizePacientScreen: AnalizePacient,
        ModificarePacientiScreen: ModificarePacienti,
        AdaugareAnalizeScreen: AdaugareAnalize,
        DosarPacientScreen: DosarPacient,
        DateGeneralePacientScreen: DateGeneralePacient,
        ModificareAnalizeScreen: ModificareAnalize,
        CalendarProgramariScreen: CalendarProgramari,
        AdaugareProgramariScreen: AdaugareProgramari,
        AfisareProgramariPacientScreen: AfisareProgramariPacient,
        AdaugareOperatiiScreen: AdaugareOperatii,
        AfisareOperatiiScreen: OperatiiPacient,
        ModificareOperatiiScreen: ModificareOperatii,
        ModificareProgramareScreen: ModificareProgramare,
        TestScreen: Test
    },
    {
        initialRouteName: 'ListaPacientiScreen',
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
