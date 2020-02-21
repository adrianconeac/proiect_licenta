import React, { Component } from 'react';
import {View, Button, Alert} from 'react-native';
import {stergerePacient} from "../../services/StergereService";

export default class DosarPacient extends Component {

    constructor(props) {

        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');

        this.state = {
            pacientKey: pacientKey
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        stergerePacient(this.state.pacientKey);
        Alert.alert(
            'Pacient sters cu succes'
        );
    }

    navigation() {
        this.props.navigation.navigate('ListaPacientiScreen')
    }

    render() {
        let pacient = this.props.navigation.getParam('pacient');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        return (
            <View>
                <Button onPress={() => this.props.navigation.navigate('DateGeneralePacientScreen', { date_generale: pacient.date_generale || {},  key: pacientKey})} title="Date Generale pacient"/>
                <Button onPress={() => this.props.navigation.navigate('AfisareProgramariPacientScreen', { programari: pacient.programari || {}, key: pacientKey})} title="Programari"/>
                <Button onPress={() => this.props.navigation.navigate('AnalizePacientScreen', {analize: pacient.analize || {},
                    key: pacientKey})} title="Analize pacient"/>
                <Button onPress={() => this.props.navigation.navigate('AfisareOperatiiScreen', { operatii: pacient.operatii || {}, key: pacientKey})} title="Operatii"/>
                <Button onPress={() => {
                    this.handleSubmit();
                    this.navigation()
                }} title="Sterge pacient"/>
            </View>
        )

    }

}
