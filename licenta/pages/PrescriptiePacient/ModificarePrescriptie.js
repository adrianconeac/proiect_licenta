import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {Input, Item, Label} from "native-base";
import {modifPrescriptie} from "../../services/ModificareService";
import {Button} from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class ModificarePrescriptie extends Component {
    constructor(props) {
        super(props);
        let prescriptie = this.props.navigation.getParam('prescriptie');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        let prescriptieKey = this.props.navigation.getParam('prescriptieKey');
        this.state = {
            prescriptie: {
                medicament: prescriptie.medicament,
                doza: prescriptie.doza,
                nota: prescriptie.nota,
                data: prescriptie.data,
            },
            pacientKey: pacientKey,
            prescriptieKey: prescriptieKey

        };
        this.handleMedicamentChange = this.handleMedicamentChange.bind(this);
        this.handleDozaChange = this.handleDozaChange.bind(this);
        this.handleNotaChange = this.handleNotaChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMedicamentChange(e) {

        this.setState({
            prescriptie: {
                ...this.state.prescriptie,
                medicament: e.nativeEvent.text,
            }
        });
    }

    handleDozaChange(e) {

        this.setState({
            prescriptie: {
                ...this.state.prescriptie,
                doza: e.nativeEvent.text,
            }
        });
    }

    handleNotaChange(e) {

        this.setState({
            prescriptie: {
                ...this.state.prescriptie,
                nota: e.nativeEvent.text,
            }
        });
    }

    handleDataChange(e) {

        this.setState({
            prescriptie: {
                ...this.state.prescriptie,
                data: e.nativeEvent.text,
            }
        });
    }

    handleSubmit() {
        modifPrescriptie(this.state.prescriptie.medicament, this.state.prescriptie.doza, this.state.prescriptie.nota, this.state.prescriptie.data, this.state.pacientKey, this.state.prescriptieKey);
        Alert.alert(
            'Prescriptie modificata cu succes'
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
            title: 'Modificare prescriptie',
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
                            onChange={this.handleMedicamentChange.bind(this)} value={this.state.prescriptie.medicament}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Doza
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleDozaChange.bind(this)} value={this.state.prescriptie.doza}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Nota
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleNotaChange.bind(this)} value={this.state.prescriptie.nota}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Data
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleDataChange.bind(this)} value={this.state.prescriptie.data}
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