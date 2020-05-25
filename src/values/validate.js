export function validateEmail(value) {
  var emailRegex = /^[A-Za-z]([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(value);
}

export const validateName = text => {
  var regex = /^[^\s0-9!@#$%.^&*()]+[a-zA-Z ]+([a-zA-Z])$/;
  return regex.test(text);
};

export function validateMobileNumber(value) {
  var mobileNumberRegex = /^[0][5-9]\d{9}$|^[5-9]\d{9}$/;
  return mobileNumberRegex.test(value);
}
export function validateOTP(value) {
  var otpRegex = /^[0-9]*$/;
  return otpRegex.test(value);
}
