import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default {
  headerView: {
    backgroundColor: 'transparent',
    elevation: 0,
    marginBottom: 0,
  },
  leftView: {
    flex: 0,
    width: wp(15),
  },
  bodyView: {flex: 1, width: wp(70)},
  rightView: {
    flex: 0,
    width: wp(15),
    alignItems: 'center',
  },
  align: {alignSelf: 'center'},
};
