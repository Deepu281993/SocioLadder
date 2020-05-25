import React, {Component} from 'react';
import {Button} from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appColors} from '@values/colors';
import {_Text} from '@components';

class _Button extends Component {
  render() {
    const {
      children: propChildren,
      style: propStyle,
      bordered,
      onPress,
    } = this.props;

    //Full Button
    let bgColor = appColors.yellowColor;
    let buttonHeight = hp(7);
    let bdRadius = 32;
    let bdWidth = 0;
    let bdColor = appColors.yellowColor;
    let textColor = appColors.blueColor;

    //Bordered Button
    if (bordered) {
      bgColor = appColors.whiteColor;
      buttonHeight = hp(7);
      bdRadius = 32;
      bdWidth = 1;
      bdColor = appColors.blueColor;
    }

    return (
      <Button
        style={[
          propStyle,
          {
            backgroundColor: bgColor,
            height: buttonHeight,
            borderColor: bdColor,
            borderWidth: bdWidth,
            justifyContent: 'center',
            borderRadius: bdRadius,
          },
        ]}
        onPress={onPress}>
        <_Text regular heading numberOfLines={1} color={textColor}>
          {' '}
          {propChildren && propChildren.toUpperCase()}
        </_Text>
      </Button>
    );
  }
}

export {_Button};
