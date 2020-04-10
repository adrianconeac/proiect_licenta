import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {Input, Item, Label} from "native-base";
import {addPrescriptie} from "../../services/AdaugareService";
import DatePicker from "react-native-datepicker";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class AdaugarePrescriptie extends Component {
    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            prescriptie: {
                medicament: '',
                doza: '',
                nota: '',
                data: ''
            },
            pacientKey: pacientKey

        };
        this.handleMedicamentChange = this.handleMedicamentChange.bind(this);
        this.handleDozaChange = this.handleDozaChange.bind(this);
        this.handleNotaChange = this.handleNotaChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMedicamentChange(e) {

        this.setState({

            medicament: e.nativeEvent.text,

        });
    }

    handleDozaChange(e) {

        this.setState({

            doza: e.nativeEvent.text,

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
        addPrescriptie(this.state.medicament, this.state.doza, this.state.nota, this.state.data, this.state.pacientKey);
        Alert.alert(
            'Prescriptie adaugata cu succes'
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
            title: 'Adaugare prescriptie',
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
                            Medicament
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleMedicamentChange.bind(this)} value={this.state.medicament}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Doza medicament
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleDozaChange.bind(this)} value={this.state.doza}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Nota medicala
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleNotaChange.bind(this)} value={this.state.nota}
                        />
                    </Item>
                    <DatePicker
                        style={{width: 200, marginTop: 5}}
                        date={this.state.date}
                        mode="date"
                        placeholder="Data prescriptiei"
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