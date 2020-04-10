import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {Input, Item, Label} from "native-base";
import {modifVaccin} from "../../services/ModificareService";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ModificareVaccin extends Component {
    constructor(props) {
        super(props);
        let vaccin = this.props.navigation.getParam('vaccin');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        let vaccinKey = this.props.navigation.getParam('vaccinKey');
        this.state = {
            vaccin: {
                tip_vaccin: vaccin.tip_vaccin,
                data: vaccin.data,
            },
            pacientKey: pacientKey,
            vaccinKey: vaccinKey

        };
        this.handleTipVaccinChange = this.handleTipVaccinChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTipVaccinChange(e) {

        this.setState({
            vaccin: {
                ...this.state.vaccin,
                tip_vaccin: e.nativeEvent.text,
            }
        });
    }

    handleDataChange(e) {

        this.setState({
            vaccin: {
                ...this.state.vaccin,
                data: e.nativeEvent.text,
            }
        });
    }


    handleSubmit() {
        modifVaccin(this.state.vaccin.tip_vaccin, this.state.vaccin.data, this.state.pacientKey, this.state.vaccinKey);
        Alert.alert(
            'Vaccin modificat cu succes'
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
            title: 'Modificare vaccin',
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
                        Tip vaccin
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleTipVaccinChange.bind(this)} value={this.state.vaccin.tip_vaccin}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Data
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleDataChange.bind(this)} value={this.state.vaccin.data}
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