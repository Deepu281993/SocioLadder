import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {_Button, _Card, _Container, _Text, _InputBox} from '@components';
import LoginStyles from '@login/loginStyles';
import {appColors} from '@values/colors';
import {validateMobileNumber} from '@values/validate';
import {Toast} from 'native-base';
import _ from 'lodash';
const Realm = require('realm');
const DB_SCHEMA = require('../../../database/dbSchema.json');
let myData;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
    };
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  componentDidMount() {
    //Get Register Table data from LOcal DB
    Realm.open({
      schema: [DB_SCHEMA.Register_Schema],
    }).then(realmResults => {
      realmResults.write(() => {
        myData = realmResults.objects('Register');
      });
    });
  }
  onSignIn = () => {
    const {mobileNumber} = this.state;
    if (!validateMobileNumber(mobileNumber)) {
      Toast.show({
        text: 'Invalid Mobile Number',
        type: 'danger',
      });
    } else {
      //Checking Enter Mobile Number is Exits in Local DB or not
      var result = _.find(myData, {mobile: mobileNumber});
      if (result == undefined) {
        Toast.show({
          text: 'Invalid Data',
          type: 'danger',
        });
      } else {
        this.props.navigation.navigate('otp');
      }
    }
  };
  onSignUp = () => {
    this.props.navigation.navigate('signUp');
  };

  render() {
    const {
      loginView,
      marginTBview,
      marginTB,
      btnTop,
      alignS,
      fonts,
    } = LoginStyles;
    const {mobileNumber} = this.state;
    return (
      <View style={loginView}>
        <StatusBar backgroundColor={appColors.blueColor} />
        <_Text heading style={[alignS, fonts]}>
          Sign In to
          <_Text style={fonts} color={appColors.yellowColor}>
            {' '}
            SocioLadder
          </_Text>
        </_Text>

        <View style={marginTBview}>
          <_InputBox
            mobileNumber
            style={marginTB}
            value={mobileNumber}
            keyboardType="number-pad"
            onChangeText={value => this.setState({mobileNumber: value})}
            placeholder={'Mobile Number'}
            maxLength={10}
          />
        </View>

        <_Button style={btnTop} onPress={this.onSignIn}>
          SIGN IN
        </_Button>
        <_Button bordered style={btnTop} onPress={this.onSignUp}>
          SIGN UP
        </_Button>
      </View>
    );
  }
}

export default Login;
