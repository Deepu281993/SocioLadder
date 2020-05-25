import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appColors} from '@values/colors';

export default {
  marginTB: {
    marginTop: hp(10),
  },
  flexDir: {
    flexDirection: 'row',
  },
  marginBT: {
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  dataAlign: {alignItems: 'center', marginLeft: 30},
  roundView: {
    height: 7,
    width: 7,
    borderRadius: 7 / 2,
    backgroundColor: appColors.grayColor,
  },
};
