import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {Input, Item, Label} from "native-base";
import { modifOperatii } from "../../services/ModificareService";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ModificareOperatii extends Component {
    constructor(props) {
        super(props);
        let operatii = this.props.navigation.getParam('operatii');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        let operatiiKey = this.props.navigation.getParam('operatiiKey');
        this.state = {
            operatii: {
                titlu_operatie: operatii.titlu_operatie,
                doctor: operatii.doctor,
                spital: operatii.spital,
                nota: operatii.nota,
                data: operatii.data,
            },
            pacientKey: pacientKey,
            operatiiKey: operatiiKey

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
            operatii: {
                ...this.state.operatii,
                titlu_operatie: e.nativeEvent.text,
            }
        });
    }

    handleDoctorChange(e) {

        this.setState({
            operatii: {
                ...this.state.operatii,
                doctor: e.nativeEvent.text,
            }
        });
    }

    handleSpitalChange(e) {

        this.setState({
            operatii: {
                ...this.state.operatii,
                spital: e.nativeEvent.text,
            }
        });
    }

    handleNotaChange(e) {

        this.setState({
            operatii: {
                ...this.state.operatii,
                nota: e.nativeEvent.text,
            }
        });
    }

    handleDataChange(e) {

        this.setState({
            operatii: {
                ...this.state.operatii,
                data: e.nativeEvent.text,
            }
        });
    }

    handleSubmit() {
        modifOperatii(this.state.operatii.titlu_operatie, this.state.operatii.doctor, this.state.operatii.spital, this.state.operatii.nota, this.state.operatii.data, this.state.pacientKey, this.state.operatiiKey);
        Alert.alert(
            'Operatie modificate cu succes'
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
            title: 'Modificare operatie',
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
                        Titlu operatie
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleTitluOperatieChange.bind(this)} value={this.state.operatii.titlu_operatie}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Doctor
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleDoctorChange.bind(this)} value={this.state.operatii.doctor}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Spital
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleSpitalChange.bind(this)} value={this.state.operatii.spital}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Nota
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleNotaChange.bind(this)} value={this.state.operatii.nota}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Data
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleDataChange.bind(this)} value={this.state.operatii.data}
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