import React, {Component} from 'react';
import {View} from 'react-native';
import {_Text} from '@components';
import CardStyles from '@card/cardStyles';
class _Card extends Component {
  render() {
    const {children: propChildren, style: propStyle} = this.props;
    const {cardView} = CardStyles;
    return <View style={[cardView, propStyle]}>{propChildren}</View>;
  }
}

export {_Card};
