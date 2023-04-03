export const searchFormInitialState = {
  city: { value: '', valid: false },
  propertyKind: {
    values: { apartments: [], houses: [], others: [] },
    valid: true,
  },
  roomsRange: { value: { start: '', end: '' }, valid: true },
  priceRange: { value: { start: '', end: '' }, valid: true },
  stateProperties: { values: [], valid: true },
  floorRange: { value: { start: '', end: '' }, valid: true },
  sizeRange: { value: { start: '', end: '' }, valid: true },
  entranceDate: { value: '' },
  immediateEntrance: { value: false },
  openSearch: { value: '' },
};

export function SearchFormReducer(state, action) {
  switch (action.type) {
    case 'CITY': {
      let city = { value: action.payload.value, valid: true };
      return { ...state, city };
    }
    case 'PROPERTY_KIND': {
      let values;
      if (action.option === 'APARTMENTS')
        values = {
          ...state.propertyKind.values,
          apartments: action.payload.value,
        };
      if (action.option === 'HOUSES')
        values = { ...state.propertyKind.values, houses: action.payload.value };
      if (action.option === 'OTHERS')
        values = { ...state.propertyKind.values, others: action.payload.value };
      const propertyKind = { ...state.propertyKind, values };
      return { ...state, propertyKind };
    }
    case 'ROOMS_RANGE': {
      let value;
      if (action.option === 'START')
        value = { ...state.roomsRange.value, start: action.payload.value };
      else value = { ...state.roomsRange.value, end: action.payload.value };
      const roomsRange = { ...state.roomsRange, value };
      return { ...state, roomsRange };
    }
    case 'PRICE_RANGE': {
      let value;
      if (action.option === 'START') {
        let start;
        if (action.payload.value === '') start = '';
        else start = action.payload.value;
        value = { ...state.priceRange.value, start };
      } else {
        let end;
        if (action.payload.value === '') end = '';
        else end = action.payload.value;
        value = { ...state.priceRange.value, end };
      }
      let valid = RangeValidation(value.start, value.end);
      const priceRange = { ...state.priceRange, value, valid };
      return { ...state, priceRange };
    }
    case 'STATE_PROPERTIES': {
      const values = [...action.payload.value];
      const stateProperties = { ...state.stateProperties, values };
      return { ...state, stateProperties };
    }
    case 'FLOOR_RANGE': {
      let value;
      if (action.option === 'START')
        value = { ...state.floorRange.value, start: action.payload.value };
      else value = { ...state.floorRange.value, end: action.payload.value };
      const floorRange = { ...state.floorRange, value };
      return { ...state, floorRange };
    }
    case 'SIZE_RANGE': {
      let value;
      if (action.option === 'START') {
        let start;
        if (action.payload.value === '') start = '';
        else start = action.payload.value;
        value = { ...state.sizeRange.value, start };
      } else {
        let end;
        if (action.payload.value === '') end = '';
        else end = action.payload.value;
        value = { ...state.sizeRange.value, end };
      }
      const valid = RangeValidation(value.start, value.end);
      const sizeRange = { ...state.sizeRange, value, valid };
      return { ...state, sizeRange };
    }
    case 'ENTRANCE_DATE': {
      const entranceDate = { value: action.payload.value };
      return { ...state, entranceDate };
    }
    case 'IMMEDIATE_ENTRANCE': {
      const immediateEntrance = { value: action.payload.value };
      return { ...state, immediateEntrance };
    }
    case 'OPEN_SEARCH': {
      const openSearch = {
        value: action.payload.value.length > 0 ? action.payload.value : '',
      };
      return { ...state, openSearch };
    }
    case 'CLEAN': {
      const cleanState = {
        city: { value: '', valid: false },
        propertyKind: {
          values: { apartments: [], houses: [], others: [] },
          valid: true,
        },
        roomsRange: { value: { start: '', end: '' }, valid: true },
        priceRange: { value: { start: '', end: '' }, valid: true },
        stateProperties: { values: [], valid: true },
        floorRange: { value: { start: '', end: '' }, valid: true },
        sizeRange: { value: { start: '', end: '' }, valid: true },
        entranceDate: { value: '' },
        immediateEntrance: { value: false },
        openSearch: { value: '' },
      };
      return cleanState;
    }
    default:
      return state;
  }
}

function RangeValidation(start, end) {
  if (start === '' || end === '') return true;
  if (start > end) return false;
  return true;
}
