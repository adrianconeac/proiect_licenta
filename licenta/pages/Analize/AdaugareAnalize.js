import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';
import {Input, Item, Label} from "native-base";
import {addAnalize} from "../../services/AdaugareService";

export default class AdaugareAnalize extends Component {
    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            analize:{
                nume_analize: '',
                specificatii: '',
            },
            pacientKey: pacientKey

        };
        this.handleNumeAnalizeChange = this.handleNumeAnalizeChange.bind(this);
        this.handleSpecificatiiChange = this.handleSpecificatiiChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNumeAnalizeChange(e) {

        this.setState({

            nume_analize: e.nativeEvent.text,

        });
    }

    handleSpecificatiiChange(e) {

        this.setState({

            specificatii: e.nativeEvent.text,

        });
    }


    handleSubmit() {
        addAnalize(this.state.nume_analize, this.state.specificatii, this.state.pacientKey);
        Alert.alert(
                'Analize adaugate cu succes'
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
                        onChange={this.handleNumeAnalizeChange.bind(this)} value={this.state.nume_analize}
                    />
                </Item>
                <Item floatingLabel>
                    <Label style={styles.input}>
                        Specificatii
                    </Label>
                    <Input autoCorrect={false}
                           onChange={this.handleSpecificatiiChange.bind(this)} value={this.state.specificatii}
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