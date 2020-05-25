import React, {Component} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import DataModalStyles from '@dataModal/dataModalStyles';
import {View} from 'native-base';
import {_Text} from '@components';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

var defaultWidth = wp(80);
var defaultHeight = hp(50);

class _DataModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      visible,
      onRequestClose,
      children,
      widthModal,
      heightModal,
      cornerRadius,
    } = this.props;

    let otherStyle = {};
    if (cornerRadius) {
      otherStyle = cornerRadius;
    }

    const {container, closeView, content, parentViewStyle} = DataModalStyles;

    return (
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={onRequestClose}>
        <TouchableOpacity
          activeOpacity={1}
          style={container}
          onPress={onRequestClose}>
          <View>
            <View
              style={[
                parentViewStyle,
                {
                  width: widthModal == undefined ? defaultWidth : widthModal,
                  height:
                    heightModal == undefined ? defaultHeight : heightModal,
                },
              ]}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={[content]}>
                  <ScrollView
                    keyboardShouldPersistTaps="always"
                    showsVerticalScrollIndicator={false}
                    style={closeView}>
                    {children}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export {_DataModal};
