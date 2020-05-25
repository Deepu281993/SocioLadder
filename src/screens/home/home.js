import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {_Container, _Card, _Text} from '@components';
import {connect} from 'react-redux';
import {fetchAllRestaurants} from '@home/homeAction';
import RestaurantStyles from '@home/homeStyles';
import {appColors} from '@values/colors';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getAllRestaurants();
  }

  getRestaurants(data) {
    const {
      cardView,
      imgStyle,
      textView,
      restaurantText,
      restaurantAddressText,
      dataView,
    } = RestaurantStyles;

    return data.map((obj, i) => (
      <TouchableOpacity
        key={i}
        style={dataView}
        onPress={() =>
          this.props.navigation.navigate('restaurantDetails', {
            selectedData: obj,
          })
        }>
        <_Card style={cardView}>
          <Image resizeMode="cover" source={obj.image} style={imgStyle} />
          <View style={textView}>
            <_Text color={appColors.blackColor} heading style={restaurantText}>
              {obj.restaurantName}
            </_Text>
            <_Text>{obj.dish}</_Text>
            <_Text color={appColors.grayColor} style={restaurantAddressText}>
              {obj.address}
            </_Text>
          </View>
        </_Card>
      </TouchableOpacity>
    ));
  }
  render() {
    const {restaurantView} = RestaurantStyles;
    return (
      <_Container title="Restaurants" showMenu showNotification>
        <StatusBar backgroundColor={appColors.blueColor} />
        <ScrollView>
          <View style={restaurantView}>
            {this.getRestaurants(this.props.restaurantsData)}
          </View>
        </ScrollView>
      </_Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.homeReducer.isFetching,
    restaurantsSuccess: state.homeReducer.restaurantsSuccess,
    restaurantsError: state.homeReducer.restaurantsError,
    restaurantsData: state.homeReducer.restaurantsData,
    restaurantsVersion: state.homeReducer.restaurantsVersion,
  };
}
const mapDispatchToProps = dispatch => ({
  getAllRestaurants: () => dispatch(fetchAllRestaurants()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
