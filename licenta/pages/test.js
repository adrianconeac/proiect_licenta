import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

export default class Test extends Component {
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('PacientDetaliiScreen')} title="apasa"/>
            </View>
        )
    }
}
