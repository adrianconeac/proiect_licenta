import React, {Component} from 'react';
import {Image, StyleSheet, View, Button, Alert, Text, TouchableHighlight} from 'react-native';
import * as ImagePicker  from 'expo-image-picker';
import * as firebase from "firebase";
import {addAnalize} from "../services/AdaugareService";
import {Input, Item, Label} from "native-base";

export default class Test extends Component {

    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            analize: {
                nume_analize: '',
            },
            pacientKey: pacientKey

        };
        this.handleNumeAnalizeChange = this.handleNumeAnalizeChange.bind(this);
        this.onChooseImagesPress = this.onChooseImagesPress.bind(this);
    }

    handleNumeAnalizeChange(e) {

        this.setState({

            nume_analize: e.nativeEvent.text,

        });
    }

    // handleSubmit() {
    //     addAnalize(this.state.nume_analize, this.state.pacientKey);
    //     Alert.alert(
    //         'Analize adaugate cu succes'
    //     );
    // }

    navigation() {
        this.props.navigation.navigate('DosarPacientScreen')
    }

    navigationFunction() {
        this.props.navigation.navigate('LoginScreen')
    }



    onChooseImagesPress = async () => {
        let result = await ImagePicker.launchCameraAsync();
        //let result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
            this.uploadImage(result.uri, "test-image")
                .then(() => {
                    Alert.alert("success");
                })
                .catch((error) => {
                    Alert.alert(error);
                });
            addAnalize(this.state.nume_analize, this.state.pacientKey);
            Alert.alert(
                'Analize adaugate cu succes'
            );
        }
    };

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob =await response.blob();

        var ref = firebase.storage().ref().child("images/" + imageName);
        return ref.put(blob)
    };

render() {
    return (
        <View style={styles.container}>

            <Item floatingLabel>
                <Label
                    style={styles.input}>
                    Nume analiza
                </Label>
                <Input
                    autoCorrect={false}
                    onChange={this.handleNumeAnalizeChange.bind(this)} value={this.state.nume_analize}
                />
            </Item>
            <TouchableHighlight
                style={styles.button}
                underlayColor="white"
                onPress={() => {
                    // this.handleSubmit();
                    this.onChooseImagesPress()
                }}

            >
                <Text
                    style={styles.buttonText}>
                    Adauga
                </Text>
            </TouchableHighlight>
            {/*<Button title="Adauga o poza" onPress={this.onChooseImagesPress}/>*/}
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
});
