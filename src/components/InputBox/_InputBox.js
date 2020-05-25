import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import InputBoxStyles from '@inputBox/inputBoxStyles';
import IconEmail from 'react-native-vector-icons/Fontisto';
import IconPassword from 'react-native-vector-icons/AntDesign';
import IconPerson from 'react-native-vector-icons/MaterialIcons';
import IconMobile from 'react-native-vector-icons/FontAwesome';
import {appColors} from '@values/colors';

class _InputBox extends Component {
  render() {
    const {textBoxView, inputBox, inputView} = InputBoxStyles;
    const {
      fieldValue,
      keyboardType,
      maxLength,
      minLength,
      onChangeText,
      email,
      mobileNumber,
      person,
      secureTextEntry,
      style: propStyle,
      placeholder,
      multiline,
    } = this.props;

    return (
      <View>
        <View style={[textBoxView, propStyle]}>
          <View style={inputView}>
            {/* Icons */}
            {email && (
              <IconEmail name={'email'} size={20} color={appColors.grayColor} />
            )}
            {mobileNumber && (
              <IconMobile
                name={'mobile-phone'}
                size={25}
                color={appColors.grayColor}
              />
            )}
            {person && (
              <IconPerson
                name={'person-outline'}
                size={20}
                color={appColors.grayColor}
              />
            )}
          </View>
          <TextInput
            style={[inputBox]}
            value={fieldValue}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
            minLength={minLength}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            multiline={multiline}
          />
        </View>
      </View>
    );
  }
}

export {_InputBox};
