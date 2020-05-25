import React, {Component} from 'react';
import {Text, Platform, TouchableOpacity} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appColors} from '@values/colors';
import {_Text} from '@components';
import HeaderStyles from '@header/headerStyles';
import {Body, Button, Header, Icon, Left, Right, View} from 'native-base';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';

const marginSide = Platform.OS === 'ios' ? wp('2%') : wp('1%');
class _Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {headerView, leftView, bodyView, rightView, align} = HeaderStyles;
    const {
      children: propChildren,
      style: propStyle,
      showBack,
      showMenu,
      showNotification,
      title,
    } = this.props;

    return (
      <View>
        <Header hasTabs style={headerView}>
          <Left style={[leftView, {marginLeft: marginSide}]}>
            {showBack && (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <IconMaterial
                  name={'keyboard-arrow-left'}
                  size={30}
                  color={appColors.whiteColor}
                />
              </TouchableOpacity>
            )}
            {showMenu && (
              <TouchableOpacity>
                <IconFeather
                  name={'menu'}
                  size={30}
                  color={appColors.whiteColor}
                />
              </TouchableOpacity>
            )}
          </Left>
          <Body style={bodyView}>
            {title && (
              <_Text
                color={appColors.whiteColor}
                heading
                style={align}
                numberOfLines={1}>
                {title}
              </_Text>
            )}
          </Body>
          <Right style={[rightView, {marginRight: marginSide}]}>
            {showNotification && (
              <IconMaterial
                name={'notifications'}
                size={30}
                color={appColors.whiteColor}
              />
            )}
          </Right>
        </Header>
      </View>
    );
  }
}

export {_Header};
