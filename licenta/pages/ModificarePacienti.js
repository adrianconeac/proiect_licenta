import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';
import {modifPacient} from '../services/ModificareService';
import {Input, Item, Label} from "native-base";
import DatePicker from 'react-native-datepicker'

export default class ModificarePacienti extends Component {
    constructor(props) {
        super(props);
        let date_generale = this.props.navigation.getParam('date_generale', {});
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            date_generale: {
                nume: date_generale.nume,
                prenume: date_generale.prenume,
                data_nasterii: date_generale.data_nasterii,
                adresa: date_generale.adresa,
                cnp: date_generale.cnp
            },
            pacientKey: pacientKey
        };
        this.handleNumeModif = this.handleNumeModif.bind(this);
        this.handlePrenumeModif = this.handlePrenumeModif.bind(this);
        this.handleDataNasteriiModif = this.handleDataNasteriiModif.bind(this);
        this.handleAdresaModif = this.handleAdresaModif.bind(this);
        this.handleCNPModif = this.handleCNPModif.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumeModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                nume: e.nativeEvent.text
            }
        });
    }

    handlePrenumeModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                prenume: e.nativeEvent.text,
            }
        });
    }

    handleDataNasteriiModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                data_nasterii: e.nativeEvent.text,
            }
        });
    }

    handleAdresaModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                adresa: e.nativeEvent.text,
            }
        });
    }

    handleCNPModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                cnp: e.nativeEvent.text,
            }
        });
    }

    handleSubmit() {
        modifPacient(this.state.date_generale.nume, this.state.date_generale.prenume, this.state.date_generale.data_nasterii, this.state.date_generale.adresa, this.state.date_generale.cnp, this.state.pacientKey);
        Alert.alert(
            'Pacient modificat cu succes'
        );

    }

    navigation() {
        this.props.navigation.navigate('ListaPacientiScreen')
    }


    render() {
        return (
            <View style={styles.main}>

                <Item floatingLabel>
                    <Label
                        style={styles.input}>
                        Nume
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleNumeModif.bind(this)}
                        value={this.state.date_generale.nume}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Prenume
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handlePrenumeModif.bind(this)}
                           value={this.state.date_generale.prenume}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Adresa
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleAdresaModif.bind(this)}
                        value={this.state.date_generale.adresa}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        CNP
                    </Label>
                    <Input
                        autoCorrect={false}
                        keyboardType={'numeric'}
                        onChange={this.handleCNPModif.bind(this)}
                        value={this.state.date_generale.cnp}
                    />
                </Item>

                <DatePicker
                    style={{width: 200, marginTop: 5}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Data nasterii"
                    format="YYYY-MM-DD"
                    minDate="1950-01-01"
                    maxDate="2116-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    onDateChange={(date) => {
                        this.setState({data_nasterii: date})
                    }}
                />

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