import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, ListItem} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
import PropTypes from "prop-types";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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

    navigationFunction() {
        this.props.navigation.navigate('LoginScreen')
    }

    static navigationOptions = ({navigation}) => {
        const logOut = navigation.getParam("logout", () => {
        });
        return {
            title: 'Date Generale',
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
                                style={{ marginRight: 10 }}
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

    // import Icon from 'react-native-vector-icons/FontAwesome';

    render() {
        let date_generale = this.props.navigation.getParam('date_generale');
        // let pacientKey = this.props.navigation.getParam('pacientKey');
        //let pacient = this.props.navigation.getParam('pacient');
        let pacientKey = this.props.navigation.getParam('key');
        return (

            <Container>
                <ScrollView>
                    <View>
                        <View>
                            <Text style={styles.item}>Nume: {date_generale.nume}</Text>
                            <Text style={styles.item}>Prenume: {date_generale.prenume}</Text>
                            <Text style={styles.item}>Sex: {date_generale.sex}</Text>
                            <Text style={styles.item}>Data nasterii: {date_generale.data_nasterii}</Text>
                            <Text style={styles.item}>CNP: {date_generale.cnp}</Text>
                            <Text style={styles.item}>Adresa: {date_generale.adresa}</Text>
                            <Text style={styles.item}>Email: {date_generale.email}</Text>
                            <Text style={styles.item}>Telefon: {date_generale.telefon}</Text>
                            <Text style={styles.item}>Grupa Sanguina: {date_generale.grupa_sanguina}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Button buttonStyle={styles.button}

                            icon={
                                <Icon
                                    name="edit"
                                    size={16}
                                    color="white"
                                    style={{ marginRight: 10 }}
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
    },
    item: {
        fontSize: 20,
        height: 50,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#546e7a',
    },
    buton_logout: {
        marginRight: 10,
        color: '#ff0000',
    }
});