import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {Input, Item, Label} from "native-base";
import { modifEKG } from "../../services/ModificareService";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ModificareEKG extends Component {
    constructor(props) {
        super(props);
        let EKG = this.props.navigation.getParam('EKG');
        let pacientKey = this.props.navigation.getParam('pacientKey');
        let EKGKey = this.props.navigation.getParam('EKGKey');
        this.state = {
            EKG: {
                unda_P: EKG.unda_P,
                complex_QRS: EKG.complex_QRS,
                unda_T: EKG.unda_T,
                segment_QT: EKG.segment_QT,
                unda_ST: EKG.unda_ST,
                intervalul_RR: EKG.intervalul_RR,
                intervalul_PR: EKG.intervalul_PR,
                nota: EKG.nota,
                data: EKG.data,
            },
            pacientKey: pacientKey,
            EKGKey: EKGKey

        };
        this.handleUndaPChange = this.handleUndaPChange.bind(this);
        this.handleComplexQrsChange = this.handleComplexQrsChange.bind(this);
        this.handleUndaTChange = this.handleUndaTChange.bind(this);
        this.handleSegmentQtChange = this.handleSegmentQtChange.bind(this);
        this.handleUndaStChange = this.handleUndaStChange.bind(this);
        this.handleIntervalul_RrChange = this.handleIntervalul_RrChange.bind(this);
        this.handleIntervalul_PrChange = this.handleIntervalul_PrChange.bind(this);
        this.handleNotaChange = this.handleNotaChange.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUndaPChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                unda_P: e.nativeEvent.text,
            }
        });
    }

    handleComplexQrsChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                complex_QRS: e.nativeEvent.text,
            }
        });
    }

    handleUndaTChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                unda_T: e.nativeEvent.text,
            }
        });
    }

    handleSegmentQtChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                segment_QT: e.nativeEvent.text,
            }
        });
    }

    handleUndaStChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                unda_ST: e.nativeEvent.text,
            }
        });
    }

    handleIntervalul_RrChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                intervalul_RR: e.nativeEvent.text,
            }
        });
    }

    handleIntervalul_PrChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                intervalul_PR: e.nativeEvent.text,
            }
        });
    }

    handleNotaChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                nota: e.nativeEvent.text,
            }
        });
    }

    handleDataChange(e) {

        this.setState({
            EKG: {
                ...this.state.EKG,
                data: e.nativeEvent.text,
            }
        });
    }

    handleSubmit() {
        modifEKG(this.state.EKG.unda_P, this.state.EKG.complex_QRS, this.state.EKG.unda_T,
            this.state.EKG.segment_QT, this.state.EKG.unda_ST,
            this.state.EKG.intervalul_RR, this.state.EKG.intervalul_PR,
            this.state.EKG.nota, this.state.EKG.data,
            this.state.pacientKey, this.state.EKGKey);
        Alert.alert(
            'EKG modificat cu succes'
        );
    }

    navigation() {
        this.props.navigation.navigate('DosarPacientScreen')
    }

    navigationFunction() {
        this.props.navigation.navigate('LoginScreen')
    }

    static navigationOptions = ({navigation}) => {
        const logOut = navigation.getParam("logout", () => {
        });
        return {
            title: 'Modificare EKG',
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

    componentDidMount() {
        this.props.navigation.setParams({logout: () => this.navigationFunction()});
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.main}>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Unda P
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleUndaPChange.bind(this)} value={this.state.EKG.unda_P}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Complex QRS
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleComplexQrsChange.bind(this)} value={this.state.EKG.complex_QRS}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Unda T
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleUndaTChange.bind(this)} value={this.state.EKG.unda_T}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Segment QT
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleSegmentQtChange.bind(this)} value={this.state.EKG.segment_QT}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Unda ST
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleUndaStChange.bind(this)} value={this.state.EKG.unda_ST}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                           Intervalul RR
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleIntervalul_RrChange.bind(this)} value={this.state.EKG.intervalul_RR}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Intervalul PR
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleIntervalul_PrChange.bind(this)} value={this.state.EKG.intervalul_PR}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Nota
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleNotaChange.bind(this)} value={this.state.EKG.nota}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Data
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleDataChange.bind(this)} value={this.state.EKG.data}
                        />
                    </Item>

                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="white"
                        onPress={() => {
                            this.handleSubmit();
                            this.navigation()
                        }}

                    >
                        <Text
                            style={styles.buttonText}>
                            Modifica
                        </Text>
                    </TouchableHighlight>


                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#546e7a',
        color: '#FFFFFF'
    },
    input: {
        height: 90,
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 2,
        marginTop: 10
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
});