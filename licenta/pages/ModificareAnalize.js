import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';
import {Input, Item, Label} from "native-base";
import {modifAnalize} from "../services/ModificareService";

export default class ModificareAnalize extends Component {
    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');
        let analize = this.props.navigation.getParam('analize', {});
        this.state = {
            analize: {
                nume_analize: analize.nume_analize,
                specificatii: analize.specificatii,
            },
            pacientKey: pacientKey,

        };
        this.handleNumeAnalizeChange = this.handleNumeAnalizeChange.bind(this);
        this.handleSpecificatiiChange = this.handleSpecificatiiChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumeAnalizeChange(e) {

        this.setState({
            analize: {
                ...this.state.analize,
                nume_analize: e.nativeEvent.text,
            }
        });
    }

    handleSpecificatiiChange(e) {

        this.setState({
            analize: {
                ...this.state.analize,
                specificatii: e.nativeEvent.text,
            }
        });
    }


    handleSubmit() {
        modifAnalize(this.state.analize.nume_analize, this.state.analize.specificatii, this.state.pacientKey);
        Alert.alert(
            'Analize modificate cu succes'
        );
    }

    navigation() {
        this.props.navigation.navigate('DosarPacientScreen')
    }


    render() {
        return (
            <View style={styles.main}>

                <Item floatingLabel>
                    <Label
                        style={styles.input}>
                        Nume analiza
                    </Label>
                    <Input
                        autoCorrect={false}
                        onChange={this.handleNumeAnalizeChange.bind(this)} value={this.state.analize.nume_analize}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Specificatii
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleSpecificatiiChange.bind(this)} value={this.state.analize.specificatii}
                    />
                </Item>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={() => {
                        this.handleSubmit();
                        this.navigation()
                    }}

                >
                    <Text
                        style={styles.buttonText}>
                        Adauga
                    </Text>
                </TouchableHighlight>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#546e7a',
        color: '#FFFFFF'
    },
    input: {
        height: 90,
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 2,
        marginTop: 10
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
});