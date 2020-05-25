import React, {Component} from 'react';
import {View, Image} from 'react-native';
import RestaurantStyles from '@home/homeStyles';
import RestaurantDetailsStyles from '@restaurantDetails/restaurantDetailsStyles';
import {_Container, _Card, _Text} from '@components';
import {appColors} from '@values/colors';

class RestaurantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {selectedData} = this.props.route.params;
    const {
      cardView,
      imgStyle,
      textView,
      restaurantText,
      restaurantAddressText,
    } = RestaurantStyles;
    const {
      marginTB,
      flexDir,
      marginBT,
      dataAlign,
      roundView,
    } = RestaurantDetailsStyles;
    return (
      <_Container
        title={selectedData.restaurantName}
        showBack
        navigation={this.props.navigation}>
        <View>
          <_Card style={[cardView, marginTB]}>
            <Image
              resizeMode="cover"
              source={selectedData.image}
              style={imgStyle}
            />
            <View style={textView}>
              <_Text
                color={appColors.blackColor}
                heading
                style={restaurantText}>
                {selectedData.restaurantName}
              </_Text>
              <_Text>{selectedData.dish}</_Text>

              <View style={flexDir}>
                <_Text
                  color={appColors.grayColor}
                  style={restaurantAddressText}>
                  ₹ {selectedData.rupees}
                </_Text>
                <View style={[flexDir, dataAlign]}>
                  <View style={roundView} />
                  <_Text
                    color={appColors.grayColor}
                    style={restaurantAddressText}>
                    {selectedData.mins} Mins
                  </_Text>
                </View>
              </View>
              <_Text>{selectedData.address}</_Text>
              <_Text style={marginBT}>{selectedData.offers}</_Text>
            </View>
          </_Card>
        </View>
      </_Container>
    );
  }
}

export default RestaurantDetails;
