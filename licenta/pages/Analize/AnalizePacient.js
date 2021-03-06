import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView, Image} from 'react-native';
import {Container} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {stergerePacient} from "../../services/StergereService";
import PropTypes from "prop-types";
import Firebase from "firebase";
import * as firebase from "firebase";

export default class AnalizePacient extends Component {

    constructor(props) {

        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');

        this.state = {
            pacientKey: pacientKey,
            urlAnalize: null
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
            title: 'Analize pacient',
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
        this.getAnalizePhoto().then(url => {
            this.setState({
                ...this.state,
                urlAnalize: url
            });
        });
    }

    async getAnalizePhoto() {
        let temp = {};
        const analize = Object.values(this.props.navigation.getParam('analize'));
        for(const analiza of analize) {
            await firebase.storage().ref().child(`images/${analiza.nume_analize}`).getDownloadURL().then(url => {
                temp[analiza.nume_analize] = url;
            })
                .catch(error => console.log("Error caught: " + error.message));
        }

        return temp;
    }


    render() {
        let analize = this.props.navigation.getParam('analize');
        let pacientKey = this.props.navigation.getParam('key');
        let url = this.state.urlAnalize;
        function AnalizePacient(props) {
            if (Object.entries(analize).length > 0) {
                return Object.entries(analize).map(([analizeKey, value]) => (
                    <View style={styles.flex}>
                        <Text style={styles.item}>Nume analiza: {value.nume_analize}</Text>
                        {url && <Image
                            style={styles.tinyLogo}
                            source={{uri: url[value.nume_analize]}}
                        />}
                        {/*<Button style={styles.button}*/}
                        {/*        icon={*/}
                        {/*            <Icon*/}
                        {/*                name="edit"*/}
                        {/*                size={15}*/}
                        {/*                color="white"*/}
                        {/*            />*/}
                        {/*        }*/}
                        {/*        title="Modifica analize"*/}
                        {/*        onPress={() => props.navigation.navigate('ModificareAnalizeScreen', {*/}

                        {/*            analizeKey: analizeKey,*/}
                        {/*            pacientKey: pacientKey,*/}
                        {/*            analize: value*/}
                        {/*        })}>*/}
                        {/*</Button>*/}
                    </View>
                ));
            } else {
                return <Text style={styles.analizeNull}>Nu exista analize</Text>;
            }
        }

        return (

            <Container>
                <ScrollView style={styles.container}>
                    <View>
                        <AnalizePacient props={this.props} navigation={this.props.navigation}/>
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
                            title="Adaugare analize"
                            onPress={() => this.props.navigation.navigate('AdaugareAnalizeScreen', {
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
        flex: 1,
        // paddingTop: 22,
        // backgroundColor: '#546e7a',
    },
flex :{
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
    tinyLogo: {
        width: 360,
        height: 450,
    },
    analizeNull: {
        marginLeft: 100,
        fontSize: 20,
        marginTop: 250,


    }
});
