import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';
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
    state = {
        search: ''
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        let items = this.props.items;
        const { search } = this.state;
        return (

            <ScrollView>
                <SearchBar
                    placeholder="Cauta pacient"
                    onChangeText={this.updateSearch}
                    value={search}
                />
            <View style={styles.itemsList}
            >
                {Object.keys(items).map((key) => {
                    return (
                        <View key={key}>
                            <ListItem
                                title={items[key].date_generale.nume}
                                subtitle={items[key].date_generale.prenume}
                                bottomDivider
                                onPress={() => this.props.navigation.navigate('DosarPacientScreen', { pacient: items[key], key, pacientKey: key, analizeKey: key})}
                            />

                        </View>
                    )
                })}
            </View>
            </ScrollView>
        );
    }
}