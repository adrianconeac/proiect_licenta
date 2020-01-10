import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, ListItem} from 'react-native-elements';
import {stergerePacient} from "../services/StergereService";
import PropTypes from "prop-types";

export default class DateGeneralePacient extends Component {

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


    render() {
        let date_generale = this.props.navigation.getParam('date_generale');
        // let pacientKey = this.props.navigation.getParam('pacientKey');
        let pacient = this.props.navigation.getParam('pacient');
        let pacientKey = this.props.navigation.getParam('key');
        return (

            <Container>
                <View>


                    <View>
                        <Text style={styles.item}>Nume: {date_generale.nume}</Text>
                        <Text style={styles.item}>Prenume: {date_generale.prenume}</Text>
                        <Text style={styles.item}>CNP: {date_generale.cnp}</Text>
                        <Text style={styles.item}>Data nasterii: {date_generale.data_nasterii}</Text>
                        <Text style={styles.item}>Adresa: {date_generale.adresa}</Text>
                    </View>
                </View>
                <View>
                    <Button style={styles.button}
                            icon={
                                <Icon
                                    name="edit"
                                    size={15}
                                    color="white"
                                />
                            }
                            title="Modifica pacient"
                            onPress={() => this.props.navigation.navigate('ModificarePacientiScreen', {
                                date_generale: date_generale,
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
        width: 150,
        marginLeft: 10,
        marginBottom: 30
    },
    delete: {
        marginTop: 20,
        width: 150,
        marginLeft: 10
    },
});


// {/*<Text style={styles.item}>Nume: {pacient.date_generale.nume}</Text>*/}
// {/*<Text style={styles.item}>Prenume: {pacient.date_generale.prenume}</Text>*/}
// {/*<Text style={styles.item}>CNP: {pacient.date_generale.cnp}</Text>*/}
// {/*<Text style={styles.item}>Data nasterii: {pacient.date_generale.data_nasterii}</Text>*/}
// {/*<Text style={styles.item}>Adresa: {pacient.date_generale.adresa}</Text>*/}
// {/*<Text style={styles.item}>Nume analize: {pacient.analize.nume_analize}</Text>*/}