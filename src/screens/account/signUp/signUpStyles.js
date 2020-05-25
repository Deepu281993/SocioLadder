import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {appColors} from '@values/colors';
export default {
  dropDownView: {
    height: hp(4),
    width: wp(70),
    borderBottomWidth: 1,
    borderColor: appColors.grayColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: appColors.grayColor,
  },
  flatListNoData: {
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 3,
  },
  flatPadding: {
    width: '100%',
    padding: 10,
  },
  dropDownArrow: {justifyContent: 'center'},
};
