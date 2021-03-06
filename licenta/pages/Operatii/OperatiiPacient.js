import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
import PropTypes from "prop-types";

export default class AfisareProgramariPacient extends Component {

    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');

        this.state = {
            pacientKey: pacientKey
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit() {
        stergerePacient(this.state.pacientKey);
        Alert.alert(
            'Pacient sters cu succes'
        );
    }

    navigation() {
        this.props.navigation.navigate('ListaPacientiScreen')
    }

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    navigationFunction() {
        this.props.navigation.navigate('LoginScreen')
    }

    static navigationOptions = ({navigation}) => {
        const logOut = navigation.getParam("logout", () => {
        });
        return {
            title: 'Operatii pacient',
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
        let operatii = this.props.navigation.getParam('operatii');
        let pacientKey = this.props.navigation.getParam('key');

        // let modificareKey = this.props.navigation.getParam('modificareKey');

        function OperatiiPacient(props) {
            if (Object.entries(operatii).length > 0) {
                return Object.entries(operatii).map(([operatiiKey, value]) => (
                    <View>
                        <Text style={styles.item}>Titlu operatie: {value.titlu_operatie}</Text>
                        <Text style={styles.item}>Doctor: {value.doctor}</Text>
                        <Text style={styles.item}>Spital: {value.spital}</Text>
                        <Text style={styles.item}>Nota: {value.nota}</Text>
                        <Text style={styles.item}>Data: {value.data}</Text>
                        <Button buttonStyle={styles.button}
                                icon={
                                    <Icon
                                        name="edit"
                                        size={15}
                                        color="white"
                                    />
                                }
                                title="Modifica operatie"
                                onPress={() => props.navigation.navigate('ModificareOperatiiScreen', {
                                    operatiiKey: operatiiKey,
                                    pacientKey: pacientKey,
                                    operatii: value
                                })}>
                        </Button>
                    </View>
                ));
            } else {
                return <Text style={styles.operatiiNull}>Nu exista operatii</Text>;
            }
        }

        return (
            <Container>
                <ScrollView style={styles.container}>
                    <View>
                        <OperatiiPacient props={this.props} navigation={this.props.navigation}/>
                    </View>
                </ScrollView>
                <View>
                    <Button buttonStyle={styles.button}
                            icon={
                                <Icon
                                    name="edit"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="Adaugare operatii"
                            onPress={() => this.props.navigation.navigate('AdaugareOperatiiScreen', {
                                pacientKey: pacientKey
                            })}>
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 50,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#546e7a',
    },
    delete: {
        marginTop: 20,
        width: 150,
        marginLeft: 10
    },
    operatiiNull: {
        marginLeft: 100,
        fontSize: 20,
        marginTop: 250,
    }
});
