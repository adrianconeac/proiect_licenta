import React, { Component } from 'react';
import {View, Button} from 'react-native';

export default class DosarPacient extends Component {

    render() {
        let pacient = this.props.navigation.getParam('pacient');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        return (
            <View>
                <Button onPress={() => this.props.navigation.navigate('AnalizePacientScreen', {analize: pacient.analize,
                    key: pacientKey})} title="Analize pacient"/>
                <Button onPress={() => this.props.navigation.navigate('DateGeneralePacientScreen', { date_generale: pacient.date_generale,  key: pacientKey})} title="Date Generale pacient"/>
            </View>
        )

    }

}
