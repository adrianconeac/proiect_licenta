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
        let operatii = this.props.navigation.getParam('operatii');
        let pacientKey = this.props.navigation.getParam('key');
        // let modificareKey = this.props.navigation.getParam('modificareKey');

        function OperatiiPacient(props) {
            if (Object.entries(operatii).length > 0) {
                return Object.entries(operatii).map(([operatiiKey,value]) => (
                    <View>
                        <Text style={styles.item}>Titlu operatie: {value.titlu_operatie}</Text>
                        <Text style={styles.item}>Doctor: {value.doctor}</Text>
                        <Text style={styles.item}>Spital: {value.spital}</Text>
                        <Text style={styles.item}>Nota: {value.nota}</Text>
                        <Text style={styles.item}>Data: {value.data}</Text>
                        <Button style={styles.button}
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
                return <Text>Nu exista operatii</Text>;
            }
        }

        return (

            <Container>
                <View>
                    <OperatiiPacient props={this.props} navigation={this.props.navigation}/>
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
                            title="Adaugare operatii"
                            onPress={() => this.props.navigation.navigate('AdaugareOperatiiScreen', {
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
