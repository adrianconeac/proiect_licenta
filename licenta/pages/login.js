import React from "react";
import { Text, StyleSheet, View} from "react-native";
import { Container, Content, Header, Form, Input, Item, Button, Label} from "native-base";

import * as firebase from 'firebase';

class LoginTab extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            email: '',
            password: ''
        })
    }

    navigationFunction() {
        this.props.navigation.navigate('AddItemScreen')
    }

    loginFunction() {
        this.loginUser(this.state.email, this.state.password)
    }


    signUpUser = (email, password) => {

        try {
            if (this.state.password.length < 6) {
                alert("Please enter atleast 6 characters");
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error.toString())
        }
    }


    loginUser = (email, password) => {

        try {

            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            })
        }
        catch (error) {
            console.log(error.toString())

        }
    }

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
                   succes
                   onPress={() => { this.navigationFunction(); this.loginFunction();}}>
                       <Text style={{color:'white'}}>Login</Text>
                   </Button>

                   <Button style={{marginTop:10}}
                           full
                           rounded
                           primary
                           onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                       <Text style={{color:'white'}}>Sign Up</Text>
                   </Button>
               </Form>
           </Container>
        );
    }
}
export default LoginTab;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10
    },
});






