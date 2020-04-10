import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {modifPacient} from '../../services/ModificareService';
import {Input, Item, Label} from "native-base";
import DatePicker from 'react-native-datepicker'
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ModificarePacienti extends Component {
    constructor(props) {
        super(props);
        let date_generale = this.props.navigation.getParam('date_generale', {});
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            date_generale: {
                nume: date_generale.nume,
                prenume: date_generale.prenume,
                sex: date_generale.sex,
                data_nasterii: date_generale.data_nasterii,
                cnp: date_generale.cnp,
                adresa: date_generale.adresa,
                email: date_generale.email,
                telefon: date_generale.telefon,
                grupa_sanguina: date_generale.grupa_sanguina,

            },
            pacientKey: pacientKey
        };
        this.handleNumeModif = this.handleNumeModif.bind(this);
        this.handlePrenumeModif = this.handlePrenumeModif.bind(this);
        this.handleSexModif = this.handleSexModif.bind(this);
        this.handleDataNasteriiModif = this.handleDataNasteriiModif.bind(this);
        this.handleCNPModif = this.handleCNPModif.bind(this);
        this.handleAdresaModif = this.handleAdresaModif.bind(this);
        this.handleEmailModif = this.handleEmailModif.bind(this);
        this.handleTelefonModif = this.handleTelefonModif.bind(this);
        this.handleGrupaSanguinaModif = this.handleGrupaSanguinaModif.bind(this);

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

    handleSexModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                sex: e.nativeEvent.text,
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

    handleCNPModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                cnp: e.nativeEvent.text,
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

    handleEmailModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                email: e.nativeEvent.text,
            }
        });
    }

    handleTelefonModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                telefon: e.nativeEvent.text,
            }
        });
    }

    handleGrupaSanguinaModif(e) {

        this.setState({
            date_generale: {
                ...this.state.date_generale,
                grupa_sanguina: e.nativeEvent.text,
            }
        });
    }


    handleSubmit() {
        modifPacient(this.state.date_generale.nume, this.state.date_generale.prenume, this.state.date_generale.sex, this.state.date_generale.data_nasterii,
            this.state.date_generale.cnp, this.state.date_generale.adresa, this.state.date_generale.email, this.state.date_generale.telefon, this.state.date_generale.grupa_sanguina, this.state.pacientKey,);

        Alert.alert(
            'Pacient modificat cu succes'
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
            title: 'Modificare pacient',
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
                            Sexul
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleSexModif.bind(this)}
                            value={this.state.date_generale.sex}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Data nasterii
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleDataNasteriiModif.bind(this)}
                            value={this.state.date_generale.data_nasterii}
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
                            Email
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleEmailModif.bind(this)}
                            value={this.state.date_generale.email}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Telefon
                        </Label>
                        <Input
                            autoCorrect={false}
                            keyboardType={'numeric'}
                            onChange={this.handleTelefonModif.bind(this)}
                            value={this.state.date_generale.telefon}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Grupa Sanguina
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleGrupaSanguinaModif.bind(this)}
                            value={this.state.date_generale.grupa_sanguina}
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