const newAdValues = {
  numberOfParkingPlaces: {
    value: '2',
    isValid: true,
  },
  numberOfPorches: {
    value: 'ללא',
    isValid: true,
  },
  settlement: {
    value: 'חיפה ',
    isValid: true,
  },
  street: {
    value: 'דרך יד לבנים ',
    isValid: true,
  },
  typeOfProperty: {
    value: 'דירה',
    isValid: true,
  },
  stateOfProperty: {
    value: 'משופץ (שופץ ב5 שנים האחרונות)',
    isValid: true,
  },
  addressNumber: {
    value: '208',
    isValid: true,
  },
  floor: {
    value: '3',
    isValid: true,
  },
  floorsInBuilding: {
    value: '12',
    isValid: true,
  },
  isOnStilts: {
    value: true,
  },
  numberOfRooms: {
    value: '4',
    isValid: true,
  },
  hasAC: {
    value: true,
  },
  hasMamad: {
    value: true,
  },
  hasWarehouse: {
    value: true,
  },
  hasFurniture: {
    value: true,
  },
  furnitureDescription: {
    value: 'כסא, שולחן',
    isValid: true,
  },
  builtSquareMeters: {
    value: '68',
    isValid: true,
  },
  overallSquareMeters: {
    value: '75',
    isValid: true,
  },
  price: {
    value: '800000',
    isValid: true,
  },
  entryDate: {
    value: '2023-03-16',
    isValid: true,
  },
  isImmediate: {
    value: true,
  },
  isFlexible: {
    value: false,
  },
  imageSrcName: {
    value: 'house.png',
    isValid: true,
  },
  nameOfContact: {
    value: 'דניאל',
    isValid: true,
  },
  phoneNumberOfContact: {
    value: '054835030',
    isValid: true,
  },
  emailOfContact: {
    value: 'bravniel@gmail.com',
    isValid: true,
  },
  adTrack: {
    value: 'בולט במיוחד',
    isValid: true,
  },
  assetDescription: {
    value: 'גש',
    isValid: true,
  },
};
const propertyObject = {
  // Your property object here
};

const processedProperty = processProperty({ ...newAdState });
console.log(processedProperty);

function processProperty(property) {
  // Remove section objects
  delete property.section1;
  delete property.section2;
  delete property.section3;
  delete property.section4;
  delete property.section5;
  delete property.section6;
  delete property.section7;

  // Remove isReadRules property
  delete property.isReadRules;

  // Remove isValid property from all objects
  for (const key in property) {
    delete property[key].isValid;
  }

  // Check for isImmediate and isFlexible properties
  const isImmediate = property.isImmediate?.value;
  const isFlexible = property.isFlexible?.value;

  if (isImmediate) {
    // If isImmediate is true, set entryDate to "immediate"
    property.entryDate.value = 'מיידי';
  } else if (isFlexible) {
    // If isFlexible is true, set entryDate to "flexible"
    property.entryDate.value = 'גמיש';
  } else {
    // If both are false, delete entryDate property
    delete property.isImmediate;
    delete property.isFlexible;
  }

  property['uploadDate'].value = new Date().toISOString().substring(0, 10);
  // Return the modified property object
  return property;
}
