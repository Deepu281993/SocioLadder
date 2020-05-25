import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default {
  restaurantView: {
    marginTop: hp(5),
    marginBottom: hp(10),
  },
  cardView: {
    width: wp(95),
    alignSelf: 'center',
  },
  imgStyle: {
    height: hp(30),
    width: wp(95),
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  textView: {
    width: wp(90),
    alignSelf: 'center',
  },
  restaurantText: {
    fontSize: 22,
    marginTop: 3,
    marginBottom: 3,
  },
  restaurantAddressText: {
    marginTop: 3,
    marginBottom: 6,
  },
  dataView: {
    marginTop: hp(5),
  },
};
