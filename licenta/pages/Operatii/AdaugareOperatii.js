import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';
import {addOperatii} from '../../services/AdaugareService';
import {Input, Item, Label} from "native-base";
import DatePicker from "react-native-datepicker";

export default class AdaugareOperatii extends Component {
    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            operatii:{
                titlu_operatie: '',
                doctor: '',
                spital: '',
                nota: '',
                data: '',
            },
            pacientKey: pacientKey

        };
        this.handleTitluOperatieChange = this.handleTitluOperatieChange.bind(this);
        this.handleDoctorChange = this.handleDoctorChange.bind(this);
        this.handleSpitalChange = this.handleSpitalChange.bind(this);
        this.handleNotaChange = this.handleNotaChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitluOperatieChange(e) {

        this.setState({

            titlu_operatie: e.nativeEvent.text,

        });
    }

    handleDoctorChange(e) {

        this.setState({

            doctor: e.nativeEvent.text,

        });
    }

    handleSpitalChange(e) {

        this.setState({

            spital: e.nativeEvent.text,

        });
    }

    handleNotaChange(e) {

        this.setState({

            nota: e.nativeEvent.text,

        });
    }

    handleDataChange(e) {

        this.setState({

            data: e.nativeEvent.text,

        });
    }



    handleSubmit() {
        addOperatii(this.state.titlu_operatie, this.state.doctor, this.state.spital, this.state.nota, this.state.data, this.state.pacientKey );
        Alert.alert(
            'Analize adaugate cu succes'
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
                        Titlu operatie
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleTitluOperatieChange.bind(this)} value={this.state.titlu_operatie}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Doctor
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleDoctorChange.bind(this)} value={this.state.doctor}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Spital
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleSpitalChange.bind(this)} value={this.state.spital}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Nota
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleNotaChange.bind(this)} value={this.state.nota}
                    />
                </Item>

                <DatePicker
                    style={{width: 200, marginTop: 5}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Data operatiei"
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
                        this.setState({data: date})
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