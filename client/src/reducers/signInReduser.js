export const signInFormInitialState = {
  values: {
    email: "",
    password: "",
  },
  isValid: {
    email: true,
    password: true,
  },
  isFormValid: false,
};

export function SignInFormReducer(state, action) {
  switch (action.type) {
    case "SET": {
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
    case "INIT": {
      return { ...signInFormInitialState };
    }
    default:
      return state;
  }
}

function IsFormValid(state) {
  return (
    state.values.email.length > 0 &&
    state.values.password.length > 0 &&
    state.isValid.email &&
    state.isValid.password
  );
}
