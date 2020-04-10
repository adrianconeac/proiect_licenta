import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
import PropTypes from "prop-types";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
            title: 'Programari',
            headerRight:
                () => (
                    <Button
                        buttonStyle={{
                            backgroundColor: '#546e7a',
                            marginRight: 5
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
        let programari = this.props.navigation.getParam('programari');
        let pacientKey = this.props.navigation.getParam('key');

        // let analizeKey = this.props.navigation.getParam('analizekey');

        function ProgramariPacient(props) {
            if (Object.entries(programari).length > 0) {
                return Object.entries(programari).map(([programareKey, value]) => (
                    <View>
                        <Text style={styles.item}>Nume programare: {value.nume_programare}</Text>
                        <Text style={styles.item}>Data: {value.data}</Text>
                        <Text style={styles.item}>Ora: {value.ora}</Text>
                        <Button buttonStyle={styles.button}
                                icon={
                                    <Icon
                                        name="edit"
                                        size={15}
                                        color="white"
                                    />
                                }
                                title="Modifica programare"
                                onPress={() => props.navigation.navigate('ModificareProgramareScreen', {
                                    programareKey: programareKey,
                                    pacientKey: pacientKey,
                                    programari: value
                                })}>
                        </Button>
                    </View>
                ));
            } else {
                return(
                <View>
                <Text style={styles.programariNull}>Nu exista programari</Text>
                </View>
                );
            }
        }

        return (

            <Container style={styles.container}>
                <ScrollView>

                    <View>
                        <ProgramariPacient props={this.props} navigation={this.props.navigation}/>
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
                            title="Adaugare programari"
                            onPress={() => this.props.navigation.navigate('AdaugareProgramariScreen', {
                                // pacient: pacient,
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
        flex: 1
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
    programariNull: {
        marginLeft: 80,
        fontSize: 20,
        marginTop: 250,
    }
});
