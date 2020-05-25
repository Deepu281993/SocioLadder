import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {_Button, _Card, _Container, _Text, _InputBox} from '@components';
import LoginStyles from '@login/loginStyles';
import {appColors} from '@values/colors';
import {validateOTP} from '@values/validate';
import {Toast} from 'native-base';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import OtpStyles from '@otp/otpStyles';

class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    };
  }

  validateOtp(code) {
    const {otp} = this.state;
    if (!validateOTP(code) || otp == '') {
      Toast.show({
        text: 'Invalid OTP',
        type: 'danger',
      });
    } else {
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'home'}],
      });

      // this.props.navigation.navigate('home');
    }
  }
  render() {
    const {loginView, btnTop, alignS, fonts} = LoginStyles;
    const {otpView, codeInputView} = OtpStyles;
    const {code, otp} = this.state;
    return (
      <View style={loginView}>
        <StatusBar backgroundColor={appColors.blueColor} />
        <_Text heading style={[alignS, fonts]}>
          Enter
          <_Text style={fonts} color={appColors.yellowColor}>
            {' '}
            OTP
          </_Text>
        </_Text>

        <View>
          <OTPInputView
            style={otpView}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={codeInputView}
            codeInputHighlightStyle={{
              borderColor: appColors.blueColor,
              color: appColors.blueColor,
            }}
            onCodeFilled={code => {
              //After Entering four Numbers
              this.setState({otp: code}, () => this.validateOtp(code));
            }}
          />
        </View>

        <_Button style={btnTop} onPress={() => this.validateOtp(otp)}>
          SUBMIT
        </_Button>
      </View>
    );
  }
}

export default Otp;
