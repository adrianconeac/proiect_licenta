import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PacientiComponent from '../components/PacientiComponent';
import { Container, Footer, FooterTab,Button} from 'native-base';

import { db } from '../config/db';

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
    }

    static navigationOptions = {
        title: 'Lista Pacienti',
    };

    render() {
        return (
            <Container>
            <View style={styles.container}>
                {

                    <PacientiComponent items={this.state.items}
                                       navigation={this.props.navigation}
                    />
                }
            </View>
                <Footer >
                    <FooterTab style={styles.footer}>
                        <Button full

                                onPress={() => this.props.navigation.navigate('AdaugarePacientiScreen')}>

                            <Text>adaugare pacient</Text>
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
        backgroundColor: '#79D4E7',
    }
});
