import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';
import {addItem,} from '../../services/AdaugareService';
import {Input, Item, Label} from "native-base";
import DatePicker from 'react-native-datepicker'

export default class AdaugarePacienti extends Component {
    constructor(props) {
        super(props);
        let pacient = this.props.navigation.getParam('pacient', {});
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            date_generale: {
                nume: '',
                prenume: '',
                data_nasterii: '',
                adresa: '',
                cnp: ''
            },
            pacientKey: '',

        };
        this.handleNumeChange = this.handleNumeChange.bind(this);
        this.handlePrenumeChange = this.handlePrenumeChange.bind(this);
        this.handleDataNasteriiChange = this.handleDataNasteriiChange.bind(this);
        this.handleAdresaChange = this.handleAdresaChange.bind(this);
        this.handleCNPChange = this.handleCNPChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumeChange(e) {

        this.setState({

            nume: e.nativeEvent.text,

        });
    }

    handlePrenumeChange(e) {

        this.setState({

            prenume: e.nativeEvent.text,

        });
    }

    handleDataNasteriiChange(e) {

        this.setState({

            data_nasterii: e.nativeEvent.text,

        });
    }

    handleAdresaChange(e) {

        this.setState({

            adresa: e.nativeEvent.text,

        });
    }

    handleCNPChange(e) {

        this.setState({

            cnp: e.nativeEvent.text,

        });
    }


    handleSubmit() {
        addItem(this.state.nume, this.state.prenume, this.state.data_nasterii, this.state.adresa, this.state.cnp);
        Alert.alert(
            'Pacient adaugat cu succes'
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
                        onChange={this.handleNumeChange.bind(this)} value={this.state.nume}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Prenume
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handlePrenumeChange.bind(this)} value={this.state.prenume}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Adresa
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleAdresaChange.bind(this)} value={this.state.adresa}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        CNP
                    </Label>
                    <Input
                        autoCorrect={false}
                        keyboardType={'numeric'}
                        onChange={this.handleCNPChange.bind(this)} value={this.state.cnp}
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
                        Adauga
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