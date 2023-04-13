export const editUserInfoFormInitialState = {
  // values: {
  //   FirstName: '',
  //   LastName: '',
  //   PhoneNumber: '',
  //   dateOfBirth: '',
  //   city: '',
  //   street: '',
  //   houseNumber: '',
  // },
  isValid: {
    FirstName: true,
    LastName: true,
    PhoneNumber: true,
    dateOfBirth: true,
    city: true,
    street: true,
    houseNumber: true,
  },
  isFormValid: false,
};

export function EditUserInfoFormReducer(state, action) {
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
      return { ...editUserInfoFormInitialState, values: action.payload.data };
    }
    default:
      return state;
  }
}

function IsFormValid(state) {
  return (
    state.values.FirstName.length > 0 &&
    state.values.LastName.length > 0 &&
    state.values.PhoneNumber.length > 0 &&
    state.values.dateOfBirth.length > 0 &&
    state.values.city.length > 0 &&
    state.values.street.length > 0 &&
    state.values.houseNumber > 0 &&
    state.isValid.FirstName &&
    state.isValid.LastName &&
    state.isValid.PhoneNumber &&
    state.isValid.dateOfBirth &&
    state.isValid.city &&
    state.isValid.street &&
    state.isValid.houseNumber
  );
}
