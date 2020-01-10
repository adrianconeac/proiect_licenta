import React, {Component} from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './pages/home';
import AdaugarePacienti from './pages/AdaugarePacienti';
import ListaPacienti from './pages/ListaPacienti';
import LoginTab from './pages/Login';
import RegisterTab from "./pages/Register";
import AnalizePacient from "./pages/AnalizePacient";
import ModificarePacienti from "./pages/ModificarePacienti";
import Test from "./pages/test";
import AdaugareAnalize from "./pages/AdaugareAnalize";
import DosarPacient from "./pages/DosarPacient";
import DateGeneralePacient from "./pages/DateGeneralePacient";
import ModificareAnalize from "./pages/ModificareAnalize";

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
        TestScreen: Test,
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
