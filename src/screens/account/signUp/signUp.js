import React, {Component} from 'react';
import {View, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import {_Button, _Text, _InputBox, _DataModal} from '@components';
import LoginStyles from '@login/loginStyles';
import SignUpStyles from '@signUp/signUpStyles';
import {appColors} from '@values/colors';
import IconArrow from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {fetchAllCountries} from '@signUp/signUpAction';
import {
  validateEmail,
  validateName,
  validateMobileNumber,
} from '@values/validate';
import {Toast} from 'native-base';
const Realm = require('realm');
const DB_SCHEMA = require('../../../database/dbSchema.json');
let realm;
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailID: '',
      mobileNumber: '',
      country: '',
      modalVisibility: false,
      selectedIndex: null,
    };

    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.props.getAllCountries();
    this.createDB();
  }
  createDB() {
    realm = new Realm({schema: [DB_SCHEMA.Register_Schema]});
  }
  closeModal = () => {
    this.setState({modalVisibility: false});
  };

  openModal = () => {
    this.setState({modalVisibility: true});
  };

  onSignIn = () => {
    this.props.navigation.navigate('login');
  };
  onSignUp = () => {
    const {firstName, lastName, emailID, mobileNumber, country} = this.state;
    if (!validateName(firstName) || firstName == '') {
      Toast.show({
        text: 'Invalid First Name',
        type: 'danger',
      });
    } else if (!validateName(lastName) || lastName == '') {
      Toast.show({
        text: 'Invalid Last Name',
        type: 'danger',
      });
    } else if (!validateEmail(emailID) || emailID == '') {
      Toast.show({
        text: 'Invalid Email ID',
        type: 'danger',
      });
    } else if (!validateMobileNumber(mobileNumber)) {
      Toast.show({
        text: 'Invalid Mobile Number',
        type: 'danger',
      });
    } else if (country == '') {
      Toast.show({
        text: 'Please select Country',
        type: 'danger',
      });
    } else {
      //Insert in Local DB
      var registerPayload = {
        firstName: firstName,
        lastName: lastName,
        email: emailID,
        mobile: mobileNumber,
        country: country,
      };
      Realm.open({
        schema: [DB_SCHEMA.Register_Schema],
      }).then(realmResults => {
        realmResults.write(() => {
          realmResults.create('Register', registerPayload);
          Toast.show({
            text: 'Successfully Register',
            type: 'success',
          });
        });
      });

      setTimeout(() => {
        this.props.navigation.navigate('login');
      }, 1000);
    }
  };

  FlatListItemSeparator = () => {
    const {lineSeparator} = SignUpStyles;
    return <View style={[lineSeparator]} />;
  };

  renderCountry = ({item, index}) => {
    const {flatPadding, flatListNoData} = SignUpStyles;
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          this.setState({country: item.name, selectedIndex: index}, () => {
            this.closeModal();
          })
        }
        style={
          this.state.selectedIndex === index
            ? [{backgroundColor: appColors.yellowColor}, flatPadding]
            : [flatPadding]
        }>
        <_Text
          style={flatListNoData}
          color={
            this.state.selectedIndex === index
              ? appColors.whiteColor
              : appColors.blueColor
          }>
          {item.name}
        </_Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      firstName,
      lastName,
      emailID,
      mobileNumber,
      country,
      modalVisibility,
    } = this.state;
    const {
      loginView,
      marginTBview,
      marginTB,
      btnTop,
      alignS,
      fonts,
      dropDownArrow,
    } = LoginStyles;
    const {dropDownView} = SignUpStyles;
    return (
      <View style={loginView}>
        <StatusBar backgroundColor={appColors.blueColor} />
        <_Text heading style={[alignS, fonts]}>
          Create
          <_Text style={fonts} color={appColors.yellowColor}>
            {' '}
            Account
          </_Text>
        </_Text>

        <View style={marginTBview}>
          <_InputBox
            person
            style={[marginTB]}
            value={firstName}
            onChangeText={value => this.setState({firstName: value})}
            placeholder={'First Name'}
          />

          <_InputBox
            person
            style={marginTB}
            value={lastName}
            onChangeText={value => this.setState({lastName: value})}
            placeholder={'Last Name'}
          />

          <_InputBox
            email
            style={marginTB}
            value={emailID}
            keyboardType="email-address"
            onChangeText={value => this.setState({emailID: value})}
            placeholder={'Email ID'}
          />

          <_InputBox
            mobileNumber
            style={marginTB}
            value={mobileNumber}
            keyboardType="number-pad"
            onChangeText={value => this.setState({mobileNumber: value})}
            placeholder={'Mobile Number'}
            maxLength={10}
          />

          <TouchableOpacity
            style={[marginTB, dropDownView]}
            onPress={this.openModal}>
            {country == '' ? (
              <_Text color={appColors.grayColor}> Select Country</_Text>
            ) : (
              <_Text> {country}</_Text>
            )}
            <View style={dropDownArrow}>
              <IconArrow
                name={'arrow-drop-down'}
                size={20}
                color={appColors.grayColor}
              />
            </View>
          </TouchableOpacity>
        </View>

        <_Button style={btnTop} onPress={this.onSignUp}>
          SIGN UP
        </_Button>

        <_Button style={btnTop} onPress={this.onSignIn} bordered>
          SIGN IN
        </_Button>

        <_DataModal visible={modalVisibility} onRequestClose={this.closeModal}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={this.props.countriesData}
            extraData={this.state}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            keyExtractor={index => index.toString()}
            renderItem={({item, index}) => this.renderCountry({item, index})}
          />
        </_DataModal>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.signUpReducer.isFetching,
    countriesSuccess: state.signUpReducer.countriesSuccess,
    countriesError: state.signUpReducer.countriesError,
    countriesData: state.signUpReducer.countriesData,
    countriesVersion: state.signUpReducer.countriesVersion,
  };
}
const mapDispatchToProps = dispatch => ({
  getAllCountries: () => dispatch(fetchAllCountries()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
