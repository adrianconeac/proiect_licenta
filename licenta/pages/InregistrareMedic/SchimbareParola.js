import React from "react";
import { Text, StyleSheet,} from "react-native";
import { Container, Form, Input, Item, Button, Label} from "native-base";

import * as firebase from 'firebase';

class SchimbareParola extends React.Component {


    constructor(props) {
        super(props);

        this.state = ({
            email: '',
        })
    }


    forgotFunction() {
        this.forgotPassword(this.state.email);

    }

    navigationFunction() {
        this.props.navigation.navigate('LoginScreen')
    }

    forgotPassword = (email) => {
        try {
            firebase.auth().sendPasswordResetEmail(email).then(function (user) {
                alert("Email trimis cu succes");
            })
        }
        catch (error) {
            console.log(error.toString())

        }
    };

    render() {
        return (
            <Container style={styles.container}>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({email})}
                        />
                    </Item>
                    <Button style={{marginTop:10}}
                            full
                            rounded
                            primary
                            onPress={() => {  this.forgotFunction(); this.navigationFunction();}}>
                        <Text style={{color:'white'}}>Trimite email</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}
export default SchimbareParola;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10
    },
});