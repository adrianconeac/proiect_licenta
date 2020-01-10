import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import {ListItem} from 'react-native-elements';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column'
    },
});

export default class PacientiComponent extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        let items = this.props.items;
        return (
            <ScrollView>
            <View style={styles.itemsList}
            >
                {Object.keys(items).map((key) => {
                    return (
                        <View key={key}>
                            <ListItem
                                title={items[key].date_generale.nume}
                                subtitle={items[key].date_generale.prenume}
                                bottomDivider
                                onPress={() => this.props.navigation.navigate('DosarPacientScreen', { pacient: items[key], key, pacientKey: key})}
                            />

                        </View>
                    )
                })}
            </View>
            </ScrollView>
        );
    }
}