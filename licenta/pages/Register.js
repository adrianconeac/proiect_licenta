import React from "react";
import { Text, StyleSheet,} from "react-native";
import { Container, Form, Input, Item, Button, Label} from "native-base";

import * as firebase from 'firebase';

class RegisterTab extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            email: '',
            password: ''
        })
    }

    navigationFunction() {
        this.props.navigation.navigate('LoginScreen')
    }

    RegisterFunction() {
        this.RegisterUser(this.state.email, this.state.password)
    }


    RegisterUser = (email, password) => {

        try {
            if(this.state.password.length <6) {
                alert("Please enter atleast 6 characters");
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
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

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({password})}
                        />
                    </Item>

                    <Button style={{marginTop:10}}
                            full
                            rounded
                            primary
                            onPress={() => { this.navigationFunction(); this.RegisterFunction();}}>
                        <Text style={{color:'white'}}>Register</Text>
                    </Button>
                </Form>
            </Container>
        );
    }
}
export default RegisterTab;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10
    },
});