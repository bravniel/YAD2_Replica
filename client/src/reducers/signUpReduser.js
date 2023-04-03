export const signUpFormInitialState = {
  values: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    repeatPassword: '',
    siteRegulations: false,
    advertisingMailing: false,
  },
  isValid: {
    firstName: true,
    lastName: true,
    phoneNumber: true,
    email: true,
    password: true,
    repeatPassword: true,
    siteRegulations: true,
    advertisingMailing: true,
  },
  isFormValid: false,
};

export function SignUpFormReducer(state, action) {
  switch (action.type) {
    case 'SET': {
      const newValues = { ...state.values };
      newValues[action.payload.type] = action.payload.value;
      const newIsValid = { ...state.isValid };
      newIsValid[action.payload.type] = action.payload.isValidInput;
      const newIsFormValid = IsFormValid({
        isValid: { ...newIsValid },
        values: { ...newValues },
      });
      return {
        isValid: { ...newIsValid },
        values: { ...newValues },
        isFormValid: newIsFormValid,
      };
    }
    case 'INIT': {
      return { ...signUpFormInitialState };
    }
    default:
      return state;
  }
}

function IsFormValid(state) {
  return (
    state.values.firstName.length > 0 &&
    state.values.lastName.length > 0 &&
    state.values.email.length > 0 &&
    state.values.password.length > 0 &&
    state.values.repeatPassword.length > 0 &&
    state.values.phoneNumber.length > 0 &&
    state.values.siteRegulations &&
    state.isValid.firstName &&
    state.isValid.lastName &&
    state.isValid.email &&
    state.isValid.password &&
    state.isValid.repeatPassword &&
    state.isValid.phoneNumber &&
    state.isValid.siteRegulations
  );
}
