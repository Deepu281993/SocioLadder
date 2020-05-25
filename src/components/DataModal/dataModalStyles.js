import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default {
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  parentViewStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonStyle: {
    height: hp(7),
    width: '100%',
    justifyContent: 'center',
    borderTopWidth: 1,
  },
  align: {
    alignSelf: 'center',
  },
  closeView: {
    width: '100%',
  },
  marginT: {
    marginTop: 6,
  },
  eSignIcon: {
    position: 'absolute',
    marginTop: hp('6%'),
  },
  textStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
  },
  verifiedView: {alignItems: 'center', paddingBottom: hp('8%')},
};
