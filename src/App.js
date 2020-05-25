import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '@login/login';
import SignUp from '@signUp/signUp';
import Home from '@home/home';
import Otp from '@otp/otp';
import Slides from '@slides/slides';
import RestaurantDetails from '@restaurantDetails/restaurantDetails';

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="slides" headerMode="none">
          <Stack.Screen name="slides" component={Slides} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signUp" component={SignUp} />
          <Stack.Screen name="otp" component={Otp} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen
            name="restaurantDetails"
            component={RestaurantDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
