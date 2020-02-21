import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
import PropTypes from "prop-types";

export default class AnalizePacient extends Component {

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
        let analize = this.props.navigation.getParam('analize');
        let pacientKey = this.props.navigation.getParam('key');
        function AnalizePacient (props) {
            console.log("XXXXXXXXXXXXXXXXXXXXXX", props);
            if (Object.entries(analize).length > 0) {
                return Object.entries(analize).map(([analizeKey, value]) => (
                    <View>
                        <Text style={styles.item}>Nume analize: {value.nume_analize}</Text>
                        <Text style={styles.item}>Specificatii: {value.specificatii}</Text>
                        <Button style={styles.button}
                                icon={
                                    <Icon
                                        name="edit"
                                        size={15}
                                        color="white"
                                    />
                                }
                                title="Modifica analize"
                                onPress={() => props.navigation.navigate('ModificareAnalizeScreen', {

                                    analizeKey: analizeKey,
                                    pacientKey: pacientKey,
                                    analize: value
                                })}>
                        </Button>
                    </View>
                ));
            } else {
                return <Text>Nu avem analize</Text>;
            }
        }
        return (
            <Container>
                <View>
                    <AnalizePacient props={this.props} navigation={this.props.navigation} />
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
                            title="Adaugare analize"
                            onPress={() => this.props.navigation.navigate('AdaugareAnalizeScreen', {
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
