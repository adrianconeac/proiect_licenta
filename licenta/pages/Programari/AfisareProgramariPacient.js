import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
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


    render() {
        let programari = this.props.navigation.getParam('programari');
        let pacientKey = this.props.navigation.getParam('key');
        // let analizeKey = this.props.navigation.getParam('analizekey');

        function ProgramariPacient(props) {
            if (Object.entries(programari).length > 0) {
                return Object.entries(programari).map(([programareKey,value]) => (
                    <View>
                        <Text style={styles.item}>Nume programare: {value.nume_programare}</Text>
                        <Text style={styles.item}>Data: {value.data}</Text>
                        <Text style={styles.item}>Ora: {value.ora}</Text>
                        <Button style={styles.button}
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
                return <Text>Nu avem analize boss...</Text>;
            }
        }





        return (

            <Container>
                <View>
                    <ProgramariPacient props={this.props} navigation={this.props.navigation}/>
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
                            title="Adaugare programari"
                            onPress={() => this.props.navigation.navigate('AdaugareProgramariScreen', {
                                // pacient: pacient,
                                pacientKey: pacientKey
                            })}>
                    </Button>
                </View>
                <View>

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
