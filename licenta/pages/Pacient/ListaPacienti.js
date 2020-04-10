import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PacientiComponent from '../../components/PacientiComponent';
import {Container, Footer, FooterTab, } from 'native-base';
import {Button} from "react-native-elements";


import {db} from '../../config/db';

import { YellowBox } from 'react-native';
import _ from 'lodash';
import Icon from "react-native-vector-icons/FontAwesome";

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

let itemsRef = db.ref('/items');

export default class ListaPacienti extends Component {

    state = {
        items: []
    };


    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items: data});
        });
        this.props.navigation.setParams({logout: () => this.navigationFunction()});
    }

    navigationFunction() {
        this.props.navigation.navigate('SetariContScreen')
    }


    static navigationOptions = ({navigation}) => {
        const logOut = navigation.getParam("logout", () => {
        });
        return {
            title: 'Adaugare vaccin',
            headerRight:
                () => (
                    <Button
                        buttonStyle={{
                            backgroundColor:'#546e7a',
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

    render() {
        // let programari = this.state.items.map((p) => p.programari);
        let programari= Object.entries(this.state.items).map(([Key, value])=>value.programari).filter(p=>p);


        return (
            <Container>
                <View style={styles.container}>
                    {

                        <PacientiComponent items={this.state.items}
                                           navigation={this.props.navigation}
                        />
                    }
                </View>
                <Footer>
                    <FooterTab style={styles.footer}>
                        <Button full
                                buttonStyle={{ borderRightWidth: 1, }}
                                onPress={() => this.props.navigation.navigate('AdaugarePacientiScreen')}>

                            <Text>adaugare pacient</Text>
                        </Button>

                        <Button full

                                onPress={() => this.props.navigation.navigate('CalendarProgramariScreen', {programari: programari})}>

                            <Text>Calendar programari</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#546e7a',
    },
    footer: {
        flex: 1,
        width: 10,
        justifyContent: 'center',
        backgroundColor: '#bbeeff',
    }
});
