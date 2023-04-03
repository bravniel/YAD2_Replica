import { ACTIONS } from '../actions/newAdActions';

// export const newAdInitialState = {
//   stageOne: {
//     active: true,
//     check: false,
//     values: {
//       propertyCategory: null,
//     },
//   },
//   stageTwo: {
//     active: false,
//     check: false,
//     values: {
//       propertyKind: null,
//       propertyState: null,
//       city: null,
//       street: null,
//       houseNumber: null,
//       floor: null,
//       totalFloors: null,
//       onPoles: null,
//     },
//   },
//   stageThree: {
//     active: false,
//     check: false,
//     values: {
//       roomNumber: null,
//       parking: null,
//       balcony: null,
//       stateProps: [],
//       aboutFurniture: null,
//       about: null,
//     },
//   },
//   stageFour: {
//     active: false,
//     check: false,
//     values: {
//       builtSize: null,
//       gardenSize: null,
//       totalSize: null,
//       price: null,
//       entranceDate: null,
//       entranceType: null, // defined, immediate, flexible
//     },
//   },
//   stageFive: {
//     active: true,
//     check: false,
//     values: {
//       imgFileSrc: null,
//     },
//   },
//   stageSix: {
//     active: false,
//     check: false,
//     values: {
//       ownerName: null,
//       ownerPhoneNumber: null,
//       ownerEmail: null,
//     },
//   },
//   stageSeven: {
//     active: false,
//     check: false,
//     values: {
//       exclusive: null,
//     },
//   },
// };

// export function NewAdReducer(state, action) {
//   switch (action.type) {
//     case 'FORM_1': {
//       const stageOne = { ...action.payload };
//       return { ...state, stageOne };
//     }
//     case 'FORM_2': {
//       const stageTwo = { ...action.payload };
//       return { ...state, stageTwo };
//     }
//     case 'FORM_3': {
//       const stageThree = { ...action.payload };
//       return { ...state, stageThree };
//     }
//     case 'FORM_4': {
//       const stageFour = { file: action.payload };
//       return { ...state, stageFour };
//     }
//     case 'FORM_5': {
//       const stageFive = { file: action.payload };
//       return { ...state, stageFive };
//     }
//     case 'FORM_6': {
//       const stageSix = { file: action.payload };
//       return { ...state, stageSix };
//     }
//     case 'FORM_7': {
//       const stageSeven = { file: action.payload };
//       return { ...state, stageSeven };
//     }
//   }
//   return state;
// }
export const newAdInitialState = {
  section1: {
    isShown: true,
    // isSectionValid: true,
  },
  section2: {
    isShown: false,
  },
  section3: {
    isShown: false,
  },
  section4: {
    isShown: false,
  },
  section5: {
    isShown: false,
  },
  section6: {
    isShown: false,
  },
  section7: {
    isShown: false,
  },
};

export function NewAdReducer(newAdState, action) {
  const validator = (inputValue, inputType) => {
    switch (inputType) {
      case 'number':
        return !isNaN(inputValue) && inputValue.trim().length > 0;
      case 'price':
        return inputValue.length == 0 || inputValue.trim().length > 5
          ? true
          : false;
      case 'email':
        return inputValue.includes('@'); // use better validator
      case 'description':
        return true;
      default:
        return inputValue ? true : false;
    }
  };

  const newAdNewState = { ...newAdState };
  switch (action.type) {
    case ACTIONS.CHANGE_INPUT: {
      newAdNewState[action.payload.inputName] = {
        ...newAdNewState[action.payload.inputName],
        value: action.payload.inputValue,
        isValid: validator(action.payload.inputValue, action.payload.inputType),
      };
      return newAdNewState;
    }

    case ACTIONS.TOGGLE_INPUT: {
      newAdNewState[action.payload.inputName] = {
        ...newAdNewState[action.payload.inputName],
        value: !newAdNewState[action.payload.inputName]?.value,
      };
      return newAdNewState;
    }

    case ACTIONS.TOGGLE_SHOW_SECTION: {
      for (let i = 1; i < 8; i++) {
        newAdNewState['section' + i] = {
          ...newAdNewState['section' + i],
          isShown:
            i === action.payload.sectionIndex
              ? !newAdNewState['section' + action.payload.sectionIndex]?.isShown
              : false,
        };
      }
      return newAdNewState;
    }

    case ACTIONS.TOGGLE_IS_SECTION_VALID: {
      if (action.payload.isValid === false) {
        newAdNewState[
          'section' + action.payload.sectionIndex
        ].isSectionValid = false;
        return newAdNewState;
      }
      if (action.payload.isValid === true) {
        newAdNewState[
          'section' + action.payload.sectionIndex
        ].isSectionValid = true;
        return newAdNewState;
      }

      newAdNewState['section' + action.payload.sectionIndex] = {
        ...newAdNewState['section' + action.payload.sectionIndex],
        isSectionValid:
          !newAdNewState['section' + action.payload.sectionIndex]
            ?.isSectionValid,
      };
      return newAdNewState;
    }

    default:
      return newAdState;
  }
}