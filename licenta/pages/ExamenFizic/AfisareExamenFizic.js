import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
import PropTypes from "prop-types";

export default class AfisareExamenFizic extends Component {

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
        let examen_fizic = this.props.navigation.getParam('examen_fizic');
        let pacientKey = this.props.navigation.getParam('key');

        // let modificareKey = this.props.navigation.getParam('modificareKey');

        function ExamenFizicPacient(props) {
            if (Object.entries(examen_fizic).length > 0) {
                return Object.entries(examen_fizic).map(([examen_fizicKey, value]) => (
                    <View>
                        <Text style={styles.item}>Temperatura: {value.temperatura}</Text>
                        <Text style={styles.item}>Greutate: {value.greutate}</Text>
                        <Text style={styles.item}>Sistolic: {value.sistolic}</Text>
                        <Text style={styles.item}>Diastolic: {value.diastolic}</Text>
                        <Text style={styles.item}>Puls: {value.puls}</Text>
                        <Text style={styles.item}>Frecventa Cardiaca: {value.frecv_caridaca}</Text>
                        <Text style={styles.item}>Frecventa Respiratorie: {value.frecv_respiratorie}</Text>
                        <Text style={styles.item}>Zgomote Cardiace: {value.zgomote_cardiace}</Text>
                        <Text style={styles.item}>Zgomote Respiratorii: {value.zgomote_respiratorii}</Text>
                        <Text style={styles.item}>Diagnostic: {value.diagnostic}</Text>
                        <Text style={styles.item}>Data: {value.data}</Text>

                        <Button buttonStyle={styles.button}
                                icon={
                                    <Icon
                                        name="edit"
                                        size={15}
                                        color="white"
                                    />
                                }
                                title="Modifica examen fizic"
                                onPress={() => props.navigation.navigate('ModificareExamenFizicScreen', {
                                    examen_fizicKey: examen_fizicKey,
                                    pacientKey: pacientKey,
                                    examen_fizic: value
                                })}>
                        </Button>
                    </View>
                ));
            } else {
                return <Text style={styles.examenNull}>Nu exista examen fizic</Text>;
            }
        }

        return (

            <Container>
                <ScrollView>
                    <View>
                        <ExamenFizicPacient props={this.props} navigation={this.props.navigation}/>
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
                            title="Adaugare examen fizic"
                            onPress={() => this.props.navigation.navigate('AdaugareExamenFizicScreen', {
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
        paddingTop: 22
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
    examenNull: {
        marginLeft: 80,
        fontSize: 20,
        marginTop: 250,
    }
});
