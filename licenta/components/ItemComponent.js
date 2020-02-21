import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class ItemComponent extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <View style={styles.itemsList}>
                {this.props.items.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemText}>{item.prenume}</Text>
                        </View>
                    )
                })}
            </View>
        );
    }
}