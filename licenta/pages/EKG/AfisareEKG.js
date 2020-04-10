import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
import PropTypes from "prop-types";

export default class AfisareEKG extends Component {

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
            title: 'Afisare EKG',
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
        let EKG = this.props.navigation.getParam('EKG');
        let pacientKey = this.props.navigation.getParam('key');

        // let modificareKey = this.props.navigation.getParam('modificareKey');

        function EKGPacient(props) {
            if (Object.entries(EKG).length > 0) {
                return Object.entries(EKG).map(([EKGKey, value]) => (
                    <View>

                            {value.unda_P <10 ? <Text style={styles.item}>Unda P: {value.unda_P}</Text> : <Text style={styles.rosu}>Unda P: {value.unda_P}</Text>}


                        <Text style={styles.item}>Complex QRS: {value.complex_QRS}</Text>
                        <Text style={styles.item}>Unda T: {value.unda_T}</Text>
                        <Text style={styles.item}>Segment QT: {value.segment_QT}</Text>
                        <Text style={styles.item}>Unda ST: {value.unda_ST}</Text>
                        <Text style={styles.item}>Intervalul RR: {value.intervalul_RR}</Text>
                        <Text style={styles.item}>Intervalul PR: {value.intervalul_PR}</Text>
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
                                title="Modifica EKG"
                                onPress={() => props.navigation.navigate('ModificareEKGScreen', {
                                    EKGKey: EKGKey,
                                    pacientKey: pacientKey,
                                    EKG: value
                                })}>
                        </Button>
                    </View>
                ));
            } else {
                return <Text style={styles.ekgNull}>Nu exista EKG</Text>;
            }
        }

        return (

            <Container>
                <ScrollView>
                    <View>
                        <EKGPacient props={this.props} navigation={this.props.navigation}/>
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
                            title="Adaugare EKG"
                            onPress={() => this.props.navigation.navigate('AdaugareEKGScreen', {
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
        // color: '#ff0000'
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
    ekgNull: {
        marginLeft: 115,
        fontSize: 20,
        marginTop: 250,
    },
    rosu :{
        color: '#ff0000',
        padding: 10,
        fontSize: 20,
        height: 50,
    }
});
