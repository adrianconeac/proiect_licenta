// import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableHighlight,
//     Alert, ScrollView
// } from 'react-native';
// import {Input, Item, Label} from "native-base";
// import {addAnalize} from "../../services/AdaugareService";
// import {Button} from "react-native-elements";
// import Icon from 'react-native-vector-icons/FontAwesome';
//
// export default class AdaugareAnalize extends Component {
//     constructor(props) {
//         super(props);
//         let pacientKey = this.props.navigation.getParam('pacientKey');
//         this.state = {
//             analize: {
//                 nume_analize: '',
//                 specificatii: '',
//             },
//             pacientKey: pacientKey
//
//         };
//         this.handleNumeAnalizeChange = this.handleNumeAnalizeChange.bind(this);
//         this.handleSpecificatiiChange = this.handleSpecificatiiChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleNumeAnalizeChange(e) {
//
//         this.setState({
//
//             nume_analize: e.nativeEvent.text,
//
//         });
//     }
//
//     handleSpecificatiiChange(e) {
//
//         this.setState({
//
//             specificatii: e.nativeEvent.text,
//
//         });
//     }
//
//
//     handleSubmit() {
//         addAnalize(this.state.nume_analize, this.state.specificatii, this.state.pacientKey);
//         Alert.alert(
//             'Analize adaugate cu succes'
//         );
//     }
//
//     navigation() {
//         this.props.navigation.navigate('DosarPacientScreen')
//     }
//
//     navigationFunction() {
//         this.props.navigation.navigate('LoginScreen')
//     }
//
//
//
//     static navigationOptions = ({navigation}) => {
//         const logOut = navigation.getParam("logout", () => {
//         });
//         return {
//             title: 'Adaugare Analize',
//             headerRight:
//                 () => (
//
//                     <Button
//                         buttonStyle={{
//                             backgroundColor:'#546e7a',
//                             marginRight: 10
//                         }}
//                         icon={
//                             <Icon
//                                 name="sign-out"
//                                 size={15}
//                                 color="white"
//                             />
//                         }
//                         title="Sign out"
//                         onPress={logOut}/>
//                 )
//         }
//     };
//
//     componentDidMount() {
//         this.props.navigation.setParams({logout: () => this.navigationFunction()});
//     }
//
//     render() {
//
//         return (
//                 <View style={styles.main}>
//
//                     <Item floatingLabel>
//                         <Label
//                             style={styles.input}>
//                             Nume analiza
//                         </Label>
//                         <Input
//                             autoCorrect={false}
//                             onChange={this.handleNumeAnalizeChange.bind(this)} value={this.state.nume_analize}
//                         />
//                     </Item>
//                     <Item floatingLabel>
//                         <Label style={styles.input}>
//                             Specificatii
//                         </Label>
//                         <Input autoCorrect={false}
//                                onChange={this.handleSpecificatiiChange.bind(this)} value={this.state.specificatii}
//                         />
//                     </Item>
//                     <TouchableHighlight
//                         style={styles.button}
//                         underlayColor="white"
//                         onPress={() => {
//                             this.handleSubmit();
//                             this.navigation()
//                         }}
//
//                     >
//                         <Text
//                             style={styles.buttonText}>
//                             Adauga
//                         </Text>
//                     </TouchableHighlight>
//
//
//                 </View>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         padding: 30,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         backgroundColor: '#546e7a',
//         color: '#FFFFFF'
//     },
//     input: {
//         height: 90,
//         fontSize: 14,
//         color: '#FFFFFF',
//         marginLeft: 2,
//         marginTop: 10
//     },
//     button: {
//         height: 45,
//         flexDirection: 'row',
//         backgroundColor: 'white',
//         borderColor: 'white',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginBottom: 10,
//         marginTop: 10,
//         alignSelf: 'stretch',
//         justifyContent: 'center'
//     },
//     buttonText: {
//         fontSize: 18,
//         color: '#111',
//         alignSelf: 'center'
//     },
// });


import React, {Component} from 'react';
import {Image, StyleSheet, View, Button, Alert, Text, TouchableHighlight} from 'react-native';
import * as ImagePicker  from 'expo-image-picker';
import * as firebase from "firebase";
import {addAnalize} from "../../services/AdaugareService";
import {Input, Item, Label} from "native-base";

export default class AdaugareAnalize extends Component {

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumeAnalizeChange(e) {

        this.setState({

            nume_analize: e.nativeEvent.text,

        });
    }

    // navigation() {
    //     this.props.navigation.navigate('DosarPacientScreen')
    // }
    //
    // navigationFunction() {
    //     this.props.navigation.navigate('LoginScreen')
    // }



    onChooseImagesPress = async () => {
        let result = await ImagePicker.launchCameraAsync();
        //let result = await ImagePicker.launchImageLibraryAsync();
        //let result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
           this.uploadImage(result.uri, this.state.nume_analize) &&  this.handleSubmit()
                .then(() => {
                    Alert.alert("Analiza ");
                })
                .catch((error) => {
                    Alert.alert(error);
                });
        }
    };

    handleSubmit() {
        addAnalize(this.state.nume_analize, this.state.pacientKey);
        Alert.alert(
            'Analize adaugate cu succes'
        );
    }

    uploadImage = async (uri) => {
        const response = await fetch(uri);
        const blob =await response.blob();

        var ref = firebase.storage().ref().child("images/" + this.state.nume_analize);
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
                {/*<TouchableHighlight*/}
                {/*    style={styles.button}*/}
                {/*    underlayColor="white"*/}
                {/*    onPress={() => {*/}
                {/*        // this.handleSubmit();*/}
                {/*        this.onChooseImagesPress()*/}
                {/*    }}*/}

                {/*>*/}
                {/*    <Text*/}
                {/*        style={styles.buttonText}>*/}
                {/*        Adauga*/}
                {/*    </Text>*/}
                {/*</TouchableHighlight>*/}
                <Button title="Adauga o poza" onPress={this.onChooseImagesPress}/>
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
