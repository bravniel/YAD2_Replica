export const ACTIONS = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  TOGGLE_INPUT: 'TOGGLE_INPUT',
  TOGGLE_SHOW_SECTION: 'TOGGLE_SHOW_SECTION',
  TOGGLE_IS_SECTION_VALID: 'TOGGLE_IS_SECTION_VALID',
};

export const changeInput = (inputName, inputValue, inputType) => ({
  type: ACTIONS.CHANGE_INPUT,
  payload: {
    inputName,
    inputValue,
    inputType,
  },
});

export const toggleInput = (inputName) => ({
  type: ACTIONS.TOGGLE_INPUT,
  payload: { inputName },
});

export const toggleShowSection = (sectionIndex) => ({
  type: ACTIONS.TOGGLE_SHOW_SECTION,
  payload: { sectionIndex },
});

export const toggleIsSectionValid = (sectionIndex, isValid) => ({
  type: ACTIONS.TOGGLE_IS_SECTION_VALID,
  payload: { sectionIndex, isValid },
});
