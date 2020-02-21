// import React, {Component} from 'react';
// import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
// import * as  Print from 'expo-print';
// import * as FileSystem from 'expo-file-system'
//
// export default class Test extends Component {
//
//     async createPDF(message) {
//
//         let filePath = await Print.printToFileAsync({
//             html: "<h1>analize</h1>",
//             fileName: 'test',
//             directory: 'docs',
//             width : 612,
//             height : 792,
//             base64 : false
//         });
//
//         alert('PDF Generated', filePath.uri);
//         console.log('xxxxxxxx=',filePath.uri)
//     }
//
//     render() {
//         return(
//             <View>
//                 <TouchableHighlight onPress={this.createPDF} style={styles.Main}>
//                     <Text>Create PDF</Text>
//                 </TouchableHighlight>
//             </View>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     Main : { marginTop : 100 }
// });

// import React from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
//
// export default function App() {
//     let [selectedImage, setSelectedImage] = React.useState(null);
//
//     let openImagePickerAsync = async () => {
//         let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
//
//         if (permissionResult.granted === false) {
//             alert('Permission to access camera roll is required!');
//             return;
//         }
//
//         let pickerResult = await ImagePicker.launchImageLibraryAsync();
//
//         if (pickerResult.cancelled === true) {
//             return;
//         }
//
//         setSelectedImage({ localUri: pickerResult.uri });
//     };
//
//     if (selectedImage !== null) {
//         return (
//             <View style={styles.container}>
//                 <Image
//                     source={{ uri: selectedImage.localUri }}
//                     style={styles.thumbnail}
//                 />
//             </View>
//         );
//     }
//
//     return (
//         <View style={styles.container}>
//             <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}  />
//             <Text >
//                 To share a photo from your phone with a friend, just press the button below!
//             </Text>
//
//             <TouchableOpacity onPress={openImagePickerAsync} >
//                 <Text>Pick a photo</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     /* Other styles hidden to keep the example brief... */
//     thumbnail: {
//         width: 300,
//         height: 300,
//         resizeMode: "contain"
//     }
// });


// import React, {Component} from 'react';
// import {Image, StyleSheet, View, Button, Text, Alert} from 'react-native';
// import * as ImagePicker  from 'expo-image-picker';
// import * as firebase from "firebase";
// import {Agenda, Calendar} from 'react-native-calendars';
//
// export default class Test extends Component {
//
//     onChooseImagesPress = async () => {
//         let result = await ImagePicker.launchCameraAsync();
//         //let result = await ImagePicker.launchImageLibraryAsync();
//
//         if (!result.cancelled) {
//             this.uploadImage(result.uri, "test-image")
//                 .then(() => {
//                     Alert.alert("success");
//                 })
//                 .catch((error) => {
//                     Alert.alert(error);
//                 });
//         }
//     };
//
//     uploadImage = async (uri, imageName) => {
//         const response = await fetch(uri);
//         const blob =await response.blob();
//
//         var ref = firebase.storage().ref().child("images/" + imageName);
//         return ref.put(blob)
//     };

// render() {
//     return (
//         <View style={styles.container}>
//             <Button title="Adauga o poza" onPress={this.onChooseImagesPress}/>
//         </View>
//     );
// }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 50,
//         alignItems: "center"
//     }
// });
//


import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';


export default class CalendarProgramari extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: {}
        };
    }


    render() {
        let programari = this.props.navigation.getParam('programari');
        let agenda= {};
        programari.map(o => {
           return Object.entries(o).map(([Key, programare]) => {
               if(agenda[programare.data]) {
                   agenda[programare.data].push({name: programare.nume_programare, ora:programare.ora})
               }
               else
               {
                   agenda[programare.data]=[{name: programare.nume_programare, ora: programare.ora}]
               }

            });
        });

        return (
            <Agenda
                items={agenda}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                renderItem={this.renderItem.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
            />
        );
    }
    renderItem(item) {
        return (
            <TouchableOpacity
                style={[styles.item, {height: item.height}]}
                onPress={() => Alert.alert(item.name)}
            >
                <Text>{item.name}</Text>
                <Text>{item.ora}</Text>
            </TouchableOpacity>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});