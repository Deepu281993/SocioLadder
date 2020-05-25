import React, {Component} from 'react';
import {View, Dimensions, Image, StatusBar} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import {appColors} from '@values/colors';
import SlidesStyles from '@slides/slidesStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SplashScreen from 'react-native-splash-screen';
const {width, height} = Dimensions.get('window');
import {_Text} from '@components';
class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: {width, height},
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }
  getView(img, title, subtitle, isFlag) {
    const {
      slideDataView,
      imgStyle,
      titleView,
      subTitleView,
      flagView,
      font,
      loginTxt,
    } = SlidesStyles;
    return (
      <View style={[slideDataView, this.state.size]}>
        <Image resizeMode={'cover'} style={imgStyle} source={img} />
        <_Text style={titleView}>{title}</_Text>
        <_Text style={subTitleView} color={appColors.grayColor}>
          {subtitle}
        </_Text>
        {isFlag ? (
          <View style={flagView}>
            <_Text style={font}>
              Have an account ?{' '}
              <_Text
                onPress={() => this.props.navigation.navigate('login')}
                style={loginTxt}>
                Login
              </_Text>
            </_Text>
          </View>
        ) : null}
      </View>
    );
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  };
  render() {
    const {carouselView} = SlidesStyles;
    return (
      <View style={carouselView}>
        <StatusBar backgroundColor={appColors.blueColor} />
        <Carousel
          swipe
          delay={2000}
          isLooped={false}
          style={{height: hp(100), width: wp(100)}}
          bullets={true}
          autoplay={false}
          pageInfo={false}
          bulletStyle={{borderColor: appColors.yellowColor}}
          bulletsContainerStyle={{marginBottom: hp(5)}}
          chosenBulletStyle={{backgroundColor: appColors.blueColor}}
          onAnimateNextPage={p => console.log(p)}>
          {this.getView(
            require('../../assets/img/Slider1.jpeg'),
            'With a Wide collection of Cuisiness',
            'Ready to Order from top restaurants',
          )}

          {this.getView(
            require('../../assets/img/Slider2.jpg'),
            ' Delivery quickly to your doorstep',
            'Ready to Order from top restaurants',
          )}

          {this.getView(
            require('../../assets/img/Slider3.jpg'),
            ' Delivery quickly to your doorstep',
            'Ready to Order from top restaurants',
          )}

          <View>
            {this.getView(
              require('../../assets/img/Slider4.jpg'),
              'Order from wide range of restaurants',
              'Ready to Order from top restaurants',
              true,
            )}
          </View>
        </Carousel>
      </View>
    );
  }
}

export default Slides;
