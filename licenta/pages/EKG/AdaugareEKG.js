import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert, ScrollView
} from 'react-native';
import {Input, Item, Label} from "native-base";
import {addEKG } from "../../services/AdaugareService";
import DatePicker from "react-native-datepicker";
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class AdaugareEKG extends Component {
    constructor(props) {
        super(props);
        let pacientKey = this.props.navigation.getParam('pacientKey');
        this.state = {
            EKG: {
                unda_P: '',
                complex_QRS: '',
                unda_T: '',
                segment_QT: '',
                unda_ST: '',
                intervalul_RR: '',
                intervalul_PR: '',
                nota: '',
                data: ''
            },
            pacientKey: pacientKey

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

            unda_P: e.nativeEvent.text,

        });
    }

    handleComplexQrsChange(e) {

        this.setState({

            complex_QRS: e.nativeEvent.text,

        });
    }

    handleUndaTChange(e) {

        this.setState({

            unda_T: e.nativeEvent.text,

        });
    }

    handleSegmentQtChange(e) {

        this.setState({

            segment_QT: e.nativeEvent.text,

        });
    }

    handleUndaStChange(e) {

        this.setState({

            unda_ST: e.nativeEvent.text,

        });
    }

    handleIntervalul_RrChange(e) {

        this.setState({

            intervalul_RR: e.nativeEvent.text,

        });
    }

    handleIntervalul_PrChange(e) {

        this.setState({

            intervalul_PR: e.nativeEvent.text,

        });
    }

    handleNotaChange(e) {

        this.setState({

            nota: e.nativeEvent.text,

        });
    }

    handleDataChange(e) {

        this.setState({

            data: e.nativeEvent.text,

        });
    }


    handleSubmit() {
        addEKG(this.state.unda_P, this.state.complex_QRS, this.state.unda_T, this.state.segment_QT,
            this.state.unda_ST, this.state.intervalul_RR, this.state.intervalul_PR, this.state.nota,
            this.state.data, this.state.pacientKey);
        Alert.alert(
            'EKG adaugat cu succes'
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
            title: 'Adaugare EKG',
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
                            onChange={this.handleUndaPChange.bind(this)} value={this.state.unda_P}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>
                            Complex QRS
                        </Label>
                        <Input autoCorrect={false}
                               onChange={this.handleComplexQrsChange.bind(this)} value={this.state.complex_QRS}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Unda T
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleUndaTChange.bind(this)} value={this.state.unda_T}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Segment QT
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleSegmentQtChange.bind(this)} value={this.state.segment_QT}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Unda ST
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleUndaStChange.bind(this)} value={this.state.unda_ST}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Intervalul RR
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleIntervalul_RrChange.bind(this)} value={this.state.intervalul_RR}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Intervalul PR
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleIntervalul_PrChange.bind(this)} value={this.state.intervalul_PR}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label
                            style={styles.input}>
                            Nota
                        </Label>
                        <Input
                            autoCorrect={false}
                            onChange={this.handleNotaChange.bind(this)} value={this.state.nota}
                        />
                    </Item>
                    <DatePicker
                        style={{width: 200, marginTop: 5}}
                        date={this.state.date}
                        mode="date"
                        placeholder="Data efectuarii EKG-ului"
                        format="YYYY-MM-DD"
                        minDate="1950-01-01"
                        maxDate="2116-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {
                            this.setState({data: date})
                        }}
                    />
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
                            Adauga
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