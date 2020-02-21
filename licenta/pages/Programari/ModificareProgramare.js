import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';
import {Input, Item, Label} from "native-base";
import { modifProgramare } from "../../services/ModificareService";
import DatePicker from "react-native-datepicker";

export default class ModificareProgramare extends Component {
    constructor(props) {
        super(props);
        let programari = this.props.navigation.getParam('programari');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        let programareKey = this.props.navigation.getParam('programareKey');
        this.state = {
            programari: {
                nume_programare: programari.nume_programare,
                data: programari.data,
                ora: programari.ora
            },
            pacientKey: pacientKey,
            programareKey: programareKey

        };
        this.handleNumeProgramareChange = this.handleNumeProgramareChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleOraChange = this.handleOraChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumeProgramareChange(e) {

        this.setState({
            programari: {
                ...this.state.programari,
                nume_programare: e.nativeEvent.text,
            }
        });
    }

    handleDataChange(e) {

        this.setState({
            programari: {
                ...this.state.programari,
                data: e.nativeEvent.text,
            }
        });
    }

    handleOraChange(e) {

        this.setState({
            programari: {
                ...this.state.programari,
                ora: e.nativeEvent.text,
            }
        });
    }

    handleSubmit() {
        modifProgramare(this.state.programari.nume_programare, this.state.programari.data, this.state.programari.ora, this.state.pacientKey, this.state.programareKey);
        Alert.alert(
            'Programare modificata cu succes'
        );
    }

    navigation() {
        this.props.navigation.navigate('DosarPacientScreen')
    }


    render() {

        return (
            <View style={styles.main}>

                <Item floatingLabel>
                    <Label
                        style={styles.input}>
                        Nume programare
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleNumeProgramareChange.bind(this)} value={this.state.programari.nume_programare}
                    />
                </Item>
                <Item floatingLabel>
                    <Label
                        style={styles.input}>
                        Data
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleDataChange.bind(this)} value={this.state.programari.data}
                    />
                </Item>
                <Item floatingLabel>
                    <Label
                        style={styles.input}>
                        Ora
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleOraChange.bind(this)} value={this.state.programari.ora}
                    />
                </Item>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={() => {
                        this.handleSubmit();
                        this.navigation()
                    }}

                >
                    <Text
                        style={styles.buttonText}>
                        Modifica
                    </Text>
                </TouchableHighlight>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#546e7a',
        color: '#FFFFFF'
    },
    input: {
        height: 90,
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 2,
        marginTop: 10
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
});