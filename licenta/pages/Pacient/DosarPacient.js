import React, {Component} from 'react';
import {View, Alert, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";

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

    navigationFunction() {
        this.props.navigation.navigate('LoginScreen')
    }

    static navigationOptions = ({navigation}) => {
        const logOut = navigation.getParam("logout", () => {
        });
        return {
            title: 'Dosar pacient',
            headerRight:
                () => (
                    <Button
                        buttonStyle={{
                            backgroundColor: '#546e7a',
                            marginRight: 10
                        }}
                        icon={
                            <Icon
                                name="sign-out-alt"
                                size={15}
                                color="white"
                                style={{ marginRight: 10 }}
                            />
                        }
                        title="Sign out"
                        onPress={logOut}/>
                )
        }
    };

    componentDidMount() {
        this.props.navigation.setParams({logout: () => this.navigationFunction()});
    }

    render() {
        let pacient = this.props.navigation.getParam('pacient');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        return (
            <ScrollView>
                <View>
                    <Button buttonStyle={{
                        backgroundColor: '#546e7a',
                        // marginTop: 25,
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 65
                    }}
                            icon={
                                <Icon
                                    name="user-circle"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            } onPress={() => this.props.navigation.navigate('DateGeneralePacientScreen', {
                        date_generale: pacient.date_generale || {},
                        key: pacientKey
                    })} title="Date Generale pacient"/>
                    <Button buttonStyle={{
                        backgroundColor: '#546e7a',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 65
                    }}
                            icon={
                                <Icon
                                    name="calendar-alt"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('AfisareProgramariPacientScreen', {
                        programari: pacient.programari || {},
                        key: pacientKey
                    })} title="Programari"/>
                    <Button buttonStyle={{
                        backgroundColor: '#546e7a',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 65
                    }}
                            icon={
                                <Icon
                                    name="file-medical"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('AnalizePacientScreen', {
                        analize: pacient.analize || {},
                        key: pacientKey
                    })} title="Analize pacient"/>
                    <Button buttonStyle={{
                        backgroundColor: '#546e7a',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 65
                    }}
                            icon={
                                <Icon
                                    name="hospital"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('AfisareOperatiiScreen', {
                        operatii: pacient.operatii || {},
                        key: pacientKey
                    })} title="Operatii"/>
                    <Button buttonStyle={{
                        backgroundColor: '#546e7a',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 65
                    }}
                            icon={
                                <Icon
                                    name="file-prescription"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('AfisarePrescriptieScreen', {
                        prescriptie: pacient.prescriptie || {},
                        key: pacientKey
                    })} title="Prescriptie"/>
                    <Button buttonStyle={{
                        backgroundColor: '#546e7a',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 65
                    }}
                            icon={
                                <Icon
                                    name="syringe"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('AfisareVaccinScreen', {
                        vaccin: pacient.vaccin || {},
                        key: pacientKey
                    })} title="Vaccin"/>
                    <Button buttonStyle={{
                        backgroundColor: '#546e7a',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 65
                    }}
                            icon={
                                <Icon
                                    name="user-md"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('AfisareExamenFizicScreen', {
                        examen_fizic: pacient.examen_fizic || {},
                        key: pacientKey
                    })} title="Examen fizic"/>
                    <Button buttonStyle={{
                        backgroundColor: '#546e7a',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 65
                    }}
                            icon={
                                <Icon
                                    name="heartbeat"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('AfisareEKGScreen', {
                        EKG: pacient.EKG || {},
                        key: pacientKey
                    })} title="EKG"/>
                    <Button buttonStyle={{
                        backgroundColor: '#ff4c4c',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black',
                        height: 72
                    }}
                            icon={
                                <Icon
                                    // style={{ marginRight: 40 }}
                                    name="trash-alt"
                                    size={25}
                                    color="white"
                                    style={{ marginRight: 10 }}
                                />
                            }
                            onPress={() => {
                        this.handleSubmit();
                        this.navigation()
                    }} title="Stergere pacient"/>
                </View>
            </ScrollView>
        )
    }

}
