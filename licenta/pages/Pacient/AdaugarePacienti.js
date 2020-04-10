import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView,
    Picker
} from 'react-native';
import {addItem,} from '../../services/AdaugareService';
import {Input, Item, Label} from "native-base";
import DatePicker from 'react-native-datepicker'
import * as firebase from "firebase";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class AdaugarePacienti extends Component {
    constructor(props) {
        super(props);
        let pacient = this.props.navigation.getParam('pacient', {});
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            date_generale: {
                nume: '',
                prenume: '',
                sex: [{
                    data: 'masculin'
                }, {
                    data: 'feminin'
                }
                ],
                data_nasterii: '',
                cnp: '',
                adresa: '',
                email: '',
                telefon: '',
                grupa_sanguina: ''

            },
            pacientKey: '',

        };
        this.handleNumeChange = this.handleNumeChange.bind(this);
        this.handlePrenumeChange = this.handlePrenumeChange.bind(this);
        this.handleSexChange = this.handleSexChange.bind(this);
        this.handleDataNasteriiChange = this.handleDataNasteriiChange.bind(this);
        this.handleCNPChange = this.handleCNPChange.bind(this);
        this.handleAdresaChange = this.handleAdresaChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTelefonChange = this.handleTelefonChange.bind(this);
        this.handleGrupaSanguinaChange = this.handleGrupaSanguinaChange.bind(this);
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

    handleSexChange(e) {

        this.setState({

            sex: e.nativeEvent.text,

        });
    }

    handleDataNasteriiChange(e) {

        this.setState({

            data_nasterii: e.nativeEvent.text,

        });
    }

    handleCNPChange(e) {

        this.setState({

            cnp: e.nativeEvent.text,

        });
    }

    handleAdresaChange(e) {

        this.setState({

            adresa: e.nativeEvent.text,

        });
    }

    handleEmailChange(e) {

        this.setState({

            email: e.nativeEvent.text,

        });
    }

    handleTelefonChange(e) {

        this.setState({

            telefon: e.nativeEvent.text,

        });
    }

    handleGrupaSanguinaChange(e) {

        this.setState({

            grupa_sanguina: e.nativeEvent.text,

        });
    }

    RegisterFunction() {
        try {
            if (this.state.nume === undefined || this.state.nume.length <= 0) {
                alert("Adaugati numele");
                return;
            }
            if (this.state.prenume === undefined || this.state.prenume.length <= 0) {
                alert("Adaugati prenumele");
                return;
            }
            if (this.state.sex === undefined || this.state.sex.length <= 0) {
                alert("Adaugati sexul");
                return;
            }
            if (this.state.data_nasterii === undefined || this.state.data_nasterii.length <= 0) {
                alert("Adaugati data nasterii");
                return;
            }
            if (this.state.cnp === undefined || this.state.cnp.length <= 0) {
                alert("Adaugati cnp-ul");
                return;
            }
            if (this.state.adresa === undefined || this.state.adresa.length <= 0) {
                alert("Adaugati adresa");
                return;
            }
            if (this.state.grupa_sanguina === undefined || this.state.grupa_sanguina.length <= 0) {
                alert("Adaugati grupa sanguina");
                return;
            }
            if (this.state.telefon === undefined || this.state.telefon.length <= 0) {
                alert("Adaugati telefonul");
                return;
            }
            this.handleSubmit();
            this.navigation();
        } catch (error) {
            console.log(error.toString())
        }

    }

    handleSubmit() {
        addItem(this.state.nume, this.state.prenume, this.state.sex, this.state.data_nasterii, this.state.cnp, this.state.adresa, this.state.email, this.state.telefon, this.state.grupa_sanguina);
        Alert.alert(
            'Pacient adaugat cu succes'
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
            title: 'Adaugare pacient',
            headerRight:
                () => (
                    <Button
                        buttonStyle={{
                            backgroundColor: '#546e7a',
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
                    <Picker
                        selectedValue={this.state.sex}
                        pick={ this.state.sex}
                        style={styles.picker}
                        onValueChange={(pick,) =>
                            this.setState({sex: pick})
                        }>
                        <Picker.Item label="Sex"/>
                        <Picker.Item label="Masculin" value="Masculin"/>
                        <Picker.Item label="Feminin" value="Feminin"/>
                    </Picker>
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
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            CNP
                        </Label>
                        <Input
                            autoCorrect={false}
                            keyboardType={'numeric'}
                            onChange={this.handleCNPChange.bind(this)} value={this.state.cnp} maxLength={13}
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
                            Email
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleEmailChange.bind(this)} value={this.state.email}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Telefon
                        </Label>
                        <Input
                            autoCorrect={false}
                            keyboardType={'numeric'}
                            onChange={this.handleTelefonChange.bind(this)} value={this.state.telefon}
                        />
                    </Item>
                    <Picker
                        selectedValue={this.state.grupa_sanguina}
                        pick={ this.state.grupa_sanguina}
                        style={styles.picker}
                        onValueChange={(pick,) =>
                            this.setState({grupa_sanguina: pick})
                        }>
                        <Picker.Item label="Grupa Sanguina"/>
                        <Picker.Item label="0(I)" value="0(I)"/>
                        <Picker.Item label="A(II) pozitiv" value="A(II) pozitiv"/>
                        <Picker.Item label="A(II) negativ" value="A(II) negativ"/>
                        <Picker.Item label="B(III) pozitiv" value="A(III) pozitiv"/>
                        <Picker.Item label="B(III) negativ" value="A(III) negativ"/>
                        <Picker.Item label="AB(IV) pozitiv" value="AB(IV) pozitiv"/>
                        <Picker.Item label="AB(IV) negativ" value="AB(IV) negativ"/>
                    </Picker>

                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="white"
                        onPress={() => {
                            this.RegisterFunction()
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
    grupa_sanguina: {
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 15,
        marginLeft: 3,
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
    picker: {
        height: 50,
        width: 180,
        color: '#FFFFFF',
        marginLeft: -5,
        fontSize: 14,
    },
});