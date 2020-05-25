import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appColors} from '@values/colors';

export default {
  carouselView: {height: hp(100), width: wp(100)},
  slideDataView: {backgroundColor: appColors.whiteColor, alignItems: 'center'},
  imgStyle: {height: hp(35), width: wp(100)},
  titleView: {
    marginTop: hp(10),
    marginLeft: wp(10),
    marginRight: wp(10),
    fontSize: hp(3),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitleView: {
    marginTop: hp(4),
    marginLeft: wp(10),
    marginRight: wp(10),
    fontSize: hp(2),
    textAlign: 'center',
  },
  flagView: {
    paddingTop: hp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {fontSize: hp(1.8)},
  loginTxt: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: appColors.blueColor,
  },
};
