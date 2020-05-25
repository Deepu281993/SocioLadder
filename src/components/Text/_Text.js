import {appColors} from '@values/colors';

import {Text} from 'native-base';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';

class _Text extends Component {
  render() {
    const {
      headingStyle,
      primaryStyle,
      secondaryStyle,
      noteStyle,
      weightRegular,
      weightMedium,
      weightSemiBold,
      weightBold,
    } = styles;
    const {
      style: propStyle,
      heading,
      secondary,
      note,
      color,
      regular,
      medium,
      semiBold,
      bold,
      numberOfLines,
      onPress,
    } = this.props;

    let defaultStyle = [primaryStyle, weightMedium];
    let defaultColor = appColors.blueColor;
    if (heading) {
      defaultStyle = [headingStyle, weightMedium];
      defaultColor = appColors.blueColor;
    } else if (secondary) {
      defaultStyle = [secondaryStyle, weightRegular];
      defaultColor = appColors.blueColor;
    } else if (note) {
      defaultStyle = [noteStyle, weightRegular];
      defaultColor = appColors.blueColor;
    }

    if (color !== null) {
      defaultColor = color;
    }

    if (regular) {
      defaultStyle = [defaultStyle, weightRegular];
    } else if (medium) {
      defaultStyle = [defaultStyle, weightMedium];
    } else if (semiBold) {
      defaultStyle = [defaultStyle, weightSemiBold];
    } else if (bold) {
      defaultStyle = [defaultStyle, weightBold];
    }

    return (
      <Text
        onPress={onPress}
        ellipsizeMode="tail"
        style={[
          defaultStyle,
          propStyle ? propStyle : null,
          {color: defaultColor},
        ]}
        numberOfLines={numberOfLines}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 16,
  },
  primaryStyle: {
    fontSize: 14,
  },
  secondaryStyle: {
    fontSize: 12,
  },
  noteStyle: {
    fontSize: 9,
  },
  weightRegular: {
    fontFamily: Platform.OS === 'android' ? 'Ubuntu-Regular' : 'Ubuntu',
  },
  weightMedium: {
    fontFamily: 'Ubuntu-Medium',
  },
  weightSemiBold: {
    fontFamily: 'Ubuntu-Bold',
  },
  weightBold: {
    fontFamily: 'Ubuntu-Bold',
  },
});

// You can declare that a prop is a specific JS type.
_Text.propTypes = {
  // color: getColorValues(),
  heading: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  note: PropTypes.bool,
};

_Text.defaultProps = {
  // defaultStyle: styles.primaryStyle,
  color: null,
  heading: false,
  primary: true,
  secondary: false,
  note: false,
};

export {_Text};
