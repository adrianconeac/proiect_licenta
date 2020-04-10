import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {Input, Item, Label} from "native-base";
import {addExamenFizic } from "../../services/AdaugareService";
import DatePicker from "react-native-datepicker";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class AdaugareExamenFizic extends Component {
    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            examen_fizic: {
                temperatura: '',
                greutate: '',
                sistolic: '',
                diastolic: '',
                puls: '',
                frecv_caridaca: '',
                frecv_respiratorie: '',
                zgomote_cardiace: '',
                zgomote_respiratorii: '',
                diagnostic: '',
                data: ''
            },
            pacientKey: pacientKey

        };
        this.handleTemperaturaChange = this.handleTemperaturaChange.bind(this);
        this.handleGreutateChange = this.handleGreutateChange.bind(this);
        this.handleSistolicChange = this.handleSistolicChange.bind(this);
        this.handleDiastolicChange = this.handleDiastolicChange.bind(this);
        this.handlePulsChange = this.handlePulsChange.bind(this);
        this.handleFrecvCardiacaChange = this.handleFrecvCardiacaChange.bind(this);
        this.handleFrecvRespiratorieChange = this.handleFrecvRespiratorieChange.bind(this);
        this.handleZgomoteCardiaceChange = this.handleZgomoteCardiaceChange.bind(this);
        this.handleZgomoteRespiratoriiChange = this.handleZgomoteRespiratoriiChange.bind(this);
        this.handleDiagnosticChange = this.handleDiagnosticChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTemperaturaChange(e) {

        this.setState({

            temperatura: e.nativeEvent.text,

        });
    }

    handleGreutateChange(e) {

        this.setState({

            greutate: e.nativeEvent.text,

        });
    }

    handleSistolicChange(e) {

        this.setState({

            sistolic: e.nativeEvent.text,

        });
    }

    handleDiastolicChange(e) {

        this.setState({

            diastolic: e.nativeEvent.text,

        });
    }

    handlePulsChange(e) {

        this.setState({

            puls: e.nativeEvent.text,

        });
    }

    handleFrecvCardiacaChange(e) {

        this.setState({

            frecv_caridaca: e.nativeEvent.text,

        });
    }

    handleFrecvRespiratorieChange(e) {

        this.setState({

            frecv_respiratorie: e.nativeEvent.text,

        });
    }

    handleZgomoteCardiaceChange(e) {

        this.setState({

            zgomote_cardiace: e.nativeEvent.text,

        });
    }

    handleZgomoteRespiratoriiChange(e) {

        this.setState({

            zgomote_respiratorii: e.nativeEvent.text,

        });
    }

    handleDiagnosticChange(e) {

        this.setState({

            diagnostic: e.nativeEvent.text,

        });
    }

    handleDataChange(e) {

        this.setState({

            data: e.nativeEvent.text,

        });
    }


    handleSubmit() {
        addExamenFizic(this.state.temperatura, this.state.greutate, this.state.sistolic, this.state.diagnostic,
            this.state.puls, this.state.frecv_caridaca, this.state.frecv_respiratorie, this.state.zgomote_cardiace,
            this.state.zgomote_respiratorii, this.state.diagnostic, this.state.data, this.state.pacientKey);
        Alert.alert(
            'Examen fizic adaugat cu succes'
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
            title: 'Examen fizic',
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
            <ScrollView>
                <View style={styles.main}>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Temperatura
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleTemperaturaChange.bind(this)} value={this.state.temperatura}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Greutate
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleGreutateChange.bind(this)} value={this.state.greutate}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Tensiune arteriala sistolic
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleSistolicChange.bind(this)} value={this.state.sistolic}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Tensiune arteriala diastolic
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleDiastolicChange.bind(this)} value={this.state.diastolic}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Puls
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handlePulsChange.bind(this)} value={this.state.puls}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Frecventa Caridaca
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleFrecvCardiacaChange.bind(this)} value={this.state.frecv_caridaca}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Frecventa Respiratorie
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleFrecvRespiratorieChange.bind(this)} value={this.state.frecv_respiratorie}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Zgomote Cardiace
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleZgomoteCardiaceChange.bind(this)} value={this.state.zgomote_cardiace}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Zgomote Respiratorii
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleZgomoteRespiratoriiChange.bind(this)} value={this.state.zgomote_respiratorii}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Diagnostic
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleDiagnosticChange.bind(this)} value={this.state.diagnostic}
                        />
                    </Item>
                    <DatePicker
                        style={{width: 200, marginTop: 5}}
                        date={this.state.date}
                        mode="date"
                        placeholder="Data examinarii"
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
            </ScrollView>
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