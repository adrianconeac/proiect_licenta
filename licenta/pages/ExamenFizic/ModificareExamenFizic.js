import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {Input, Item, Label} from "native-base";
import { modifExaminareFizica } from "../../services/ModificareService";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ModificareExamenFizic extends Component {
    constructor(props) {
        super(props);
        let examen_fizic = this.props.navigation.getParam('examen_fizic');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        let examen_fizicKey = this.props.navigation.getParam('examen_fizicKey');
        this.state = {
            examen_fizic: {
                temperatura: examen_fizic.temperatura,
                greutate: examen_fizic.greutate,
                sistolic: examen_fizic.sistolic,
                diastolic: examen_fizic.diastolic,
                puls: examen_fizic.puls,
                frecv_caridaca: examen_fizic.frecv_caridaca,
                frecv_respiratorie: examen_fizic.frecv_respiratorie,
                zgomote_cardiace: examen_fizic.zgomote_cardiace,
                zgomote_respiratorii: examen_fizic.zgomote_respiratorii,
                diagnostic: examen_fizic.diagnostic,
                data: examen_fizic.data,
            },
            pacientKey: pacientKey,
            examen_fizicKey: examen_fizicKey

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
            examen_fizic: {
                ...this.state.examen_fizic,
                temperatura: e.nativeEvent.text,
            }
        });
    }

    handleGreutateChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                greutate: e.nativeEvent.text,
            }
        });
    }

    handleSistolicChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                sistolic: e.nativeEvent.text,
            }
        });
    }

    handleDiastolicChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                diastolic: e.nativeEvent.text,
            }
        });
    }

    handlePulsChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                puls: e.nativeEvent.text,
            }
        });
    }

    handleFrecvCardiacaChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                frecv_caridaca: e.nativeEvent.text,
            }
        });
    }

    handleFrecvRespiratorieChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                frecv_respiratorie: e.nativeEvent.text,
            }
        });
    }

    handleZgomoteCardiaceChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                zgomote_cardiace: e.nativeEvent.text,
            }
        });
    }

    handleZgomoteRespiratoriiChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                zgomote_respiratorii: e.nativeEvent.text,
            }
        });
    }

    handleDiagnosticChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                diagnostic: e.nativeEvent.text,
            }
        });
    }

    handleDataChange(e) {

        this.setState({
            examen_fizic: {
                ...this.state.examen_fizic,
                data: e.nativeEvent.text,
            }
        });
    }

    handleSubmit() {
        modifExaminareFizica(this.state.examen_fizic.temperatura, this.state.examen_fizic.greutate, this.state.examen_fizic.sistolic,
            this.state.examen_fizic.diastolic, this.state.examen_fizic.puls,
            this.state.examen_fizic.frecv_caridaca, this.state.examen_fizic.frecv_respiratorie,
            this.state.examen_fizic.zgomote_cardiace, this.state.examen_fizic.zgomote_respiratorii, this.state.examen_fizic.diagnostic,
            this.state.examen_fizic.data,
            this.state.pacientKey, this.state.examen_fizicKey);
        Alert.alert(
            'Examen fizic modificat cu succes'
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
            title: 'Modificare examen',
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
                        onChange={this.handleTemperaturaChange.bind(this)} value={this.state.examen_fizic.temperatura}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Greutate
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleGreutateChange.bind(this)} value={this.state.examen_fizic.greutate}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Sistolic
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleSistolicChange.bind(this)} value={this.state.examen_fizic.sistolic}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Diastolic
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleDiastolicChange.bind(this)} value={this.state.examen_fizic.diastolic}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Puls
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handlePulsChange.bind(this)} value={this.state.examen_fizic.puls}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Frecventa Cardiaca
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleFrecvCardiacaChange.bind(this)} value={this.state.examen_fizic.frecv_caridaca}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Frecventa Respiratorie
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleFrecvRespiratorieChange.bind(this)} value={this.state.examen_fizic.frecv_respiratorie}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Zgomote Cardiace
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleZgomoteCardiaceChange.bind(this)} value={this.state.examen_fizic.zgomote_cardiace}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Zgomote Respiratorii
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleZgomoteRespiratoriiChange.bind(this)} value={this.state.examen_fizic.zgomote_respiratorii}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Diagnostic
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleDiagnosticChange.bind(this)} value={this.state.examen_fizic.diagnostic}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Data
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleDataChange.bind(this)} value={this.state.examen_fizic.data}
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