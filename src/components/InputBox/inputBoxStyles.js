import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appColors} from '@values/colors';

export default {
  textBoxView: {
    height: hp(6),
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: appColors.grayColor,
    flexDirection: 'row',
  },
  inputBox: {
    height: hp(6),
    width: wp(70),
  },
  inputView: {justifyContent: 'center'},
};
