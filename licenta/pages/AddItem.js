import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert
} from 'react-native';
import { addItem } from '../services/ItemService';
import {Input, Item, Label} from "native-base";

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            prenume: '',
        };
        this.handleNumeChange = this.handleNumeChange.bind(this);
        this.handlePrenumeChange = this.handlePrenumeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNumeChange(e) {

        this.setState({

            name: e.nativeEvent.text,

        });
    }

    handlePrenumeChange(e) {

        this.setState({

            prenume: e.nativeEvent.text,

        });
    }
    handleSubmit() {
        addItem(/*this.state.name,*/ this.state.prenume);
        Alert.alert(
            'Item saved successfully'
        );
    }

    navigation() {
        this.props.navigation.navigate('ListItemScreen')
    }


    render() {
        return (
            <View style={styles.main}>

                <Item floatingLabel>
                    <Label>Nume</Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChange={this.handleNumeChange.bind(this)} value={this.state.name}
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Prenume</Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChange={this.handlePrenumeChange.bind(this)} value={this.state.prenume}
                    />
                </Item>




                {/*<Text style={styles.title}>Adaugare pacienti</Text>*/}
                {/*<TextInput*/}
                {/*    style={styles.itemInput}*/}
                {/*    onChange={this.handleChange}*/}
                {/*/>*/}

                <TouchableHighlight
                    style = {styles.button}
                    underlayColor= "white"
                    onPress = {() => { this.handleSubmit(); this.navigation()}}

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
        backgroundColor: '#546e7a'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor:'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});