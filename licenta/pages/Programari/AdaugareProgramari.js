import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {addProgramari} from '../../services/AdaugareService';
import {Input, Item, Label} from "native-base";
import DatePicker from 'react-native-datepicker'
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";


export default class AdaugareProgramari extends Component {
    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            programari: {
                nume_programare: '',
                data: '',
                ora: '',
            },
            pacientKey: pacientKey

        };
        this.handleNumeProgramareChange = this.handleNumeProgramareChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleOraChange = this.handleOraChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumeProgramareChange(e) {

        this.setState({

            nume_programare: e.nativeEvent.text,

        });
    }

    handleDataChange(e) {

        this.setState({

            data: e.nativeEvent.text,

        });
    }

    handleOraChange(e) {

        this.setState({

            ora: e.nativeEvent.text,

        });
    }


    handleSubmit() {
        addProgramari(this.state.nume_programare, this.state.data, this.state.ora, this.state.pacientKey);
        Alert.alert(
            'Programare adaugata cu succes'
        );
    }

    navigation() {
        this.props.navigation.navigate('DosarPacientScreen')
    }

    navigationFunction() {
        this.props.navigation.navigate('LoginScreen')
    }

    static navigationOptions = ({navigation}) => {
        const logOut = navigation.getParam("logout", () => {
        });
        return {
            title: 'Adaugare programare',
            headerRight:
                () => (
                    <Button
                        buttonStyle={{
                            backgroundColor:'#546e7a',
                            marginRight: 10
                        }}
                        icon={
                            <Icon
                                name="sign-out"
                                size={15}
                                color="white"
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
        return (
                <View style={styles.main}>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Nume analiza
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleNumeProgramareChange.bind(this)} value={this.state.nume_programare}
                        />
                    </Item>
                    <DatePicker
                        style={{width: 200, marginTop: 5}}
                        date={this.state.date}
                        mode="date"
                        placeholder="Data"
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

                    <DatePicker
                        style={{width: 200, marginTop: 5}}
                        date={this.state.time}
                        mode="time"
                        placeholder="Ora"
                        format="HH:mm"
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
                        onDateChange={(time) => {
                            this.setState({ora: time})
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