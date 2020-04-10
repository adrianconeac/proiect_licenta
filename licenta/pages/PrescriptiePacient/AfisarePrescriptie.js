import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
import PropTypes from "prop-types";

export default class AfisarePrescriptie extends Component {

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
            title: 'Afisare prescriptie',
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
        let prescriptie = this.props.navigation.getParam('prescriptie');
        let pacientKey = this.props.navigation.getParam('key');

        // let modificareKey = this.props.navigation.getParam('modificareKey');

        function PrescriptiePacient(props) {
            if (Object.entries(prescriptie).length > 0) {
                return Object.entries(prescriptie).map(([prescriptieKey, value]) => (
                    <View>
                        <Text style={styles.item}>Medicament: {value.medicament}</Text>
                        <Text style={styles.item}>Doza: {value.doza}</Text>
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
                                title="Modifica prescriptie"
                                onPress={() => props.navigation.navigate('ModificarePrescriptieScreen', {
                                    prescriptieKey: prescriptieKey,
                                    pacientKey: pacientKey,
                                    prescriptie: value
                                })}>
                        </Button>
                    </View>
                ));
            } else {
                return <Text style={styles.prescriptiiNull}>Nu exista prescriptii</Text>;
            }
        }

        return (

            <Container>
                <ScrollView>
                    <View>
                        <PrescriptiePacient props={this.props} navigation={this.props.navigation}/>
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
                            title="Adaugare prescriptie"
                            onPress={() => this.props.navigation.navigate('AdaugarePrescriptieScreen', {
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
    prescriptiiNull: {
        marginLeft: 100,
        fontSize: 20,
        marginTop: 250,
    }
});
