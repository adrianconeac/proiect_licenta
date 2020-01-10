// import React from 'react';
// import {StyleSheet, Text, FlatList, ListView} from 'react-native';
// import {Container, Content, Header, Input, Item, Button, Icon, List, ListItem} from 'native-base'
//
// // import * as firebase from 'firebase';
//
// var data = ["adi", "andrea"];
//
// export default class HomeTab extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//
//         this.state = {
//             listViewData: data,
//         newContact: ""
//     }
//     }
//
//     render() {
//         return (
//             <Container style={styles.container}>
//                 <Content>
//                     <Item>
//                         <Input
//                             placeholder="Add name"
//                         />
//                         <Button>
//                             <Icon name="add"/>
//                         </Button>
//                     </Item>
//                 </Content>
//
//                 <Content>
//                     <FlatList
//                         dataSource={this.ds.cloneWithRows(this.state.FlatList)}
//                         renderItem={({item}) => <Text style={styles.item}>{item.data}</Text>}
//                     />
//
//                         {/*// renderLeftHiddenRow{data =>*/}
//                         {/*//     <Button full>*/}
//                         {/*//         <Icon name="information-circle"/>*/}
//                         {/*//     </Button>*/}
//                         {/*// }*/}
//                         {/*// renderRightHiddenRow={data =>*/}
//                         {/*//     <Button full danger>*/}
//                         {/*//         <Icon name="trash"/>*/}
//                         {/*//     </Button>*/}
//                         {/*// }*/}
//                         {/*// leftOpenValue={-75}*/}
//                         {/*// rightOpenValue={-75}/>*/}
//                 </Content>
//             </Container>
//         );

//

import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('ListItemScreen')} title="apasa"/>
            </View>
        )
    }
}
