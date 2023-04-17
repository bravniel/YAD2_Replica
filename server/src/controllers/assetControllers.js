const { v4: uuidv4 } = require('uuid');
const assetServices = require('../services/assetServices');

const addAsset = async (req, res, next) => {
  try {
    const state = req.body;
    const uuid = uuidv4();
    let keys = 'propertyId';
    let values = "N'" + uuid + "'";
    let propsKeys = 'propertyId';
    let propsValues = "N'" + uuid + "'";
    for (const key in req.body) {
      if (key != 'props') {
        keys += ', ' + key;
        values += ", N'" + req.body[key] + "'";
      } else {
        for (const propsKey in req.body.props) {
          propsKeys += ', ' + propsKey;
          propsValues += ", N'" + req.body.props[propsKey] + "'";
        }
      }
    }
    const result = await assetServices.insertAssetToDB(keys, values);
    const propsResult = await assetServices.insertAssetPropsToDB(
      propsKeys,
      propsValues
    );
    res.send({});
  } catch (error) {
    return next(error);
  }
};

const getAssets = async (req, res, next) => {
  const offset = (req.query.page - 1) * 5;
  const orderBy = `${req.query.orderBy}`;
  const search = JSON.parse(req.query.search);
  const filterBy = req.query.filterBy;

  let queryString = 'WHERE owner IS NOT NULL';
  if (search.city.value.length > 0)
    queryString +=
      ` AND street LIKE N'%` +
      search.city.value +
      "%' OR settlement LIKE N'%" +
      search.city.value +
      "%'";
  if (
    search.propertyKind.values.apartments.length >= 1 ||
    search.propertyKind.values.houses.length >= 1 ||
    search.propertyKind.values.others.length >= 1
  ) {
    const typesOfProperty = [
      ...search.propertyKind.values.apartments,
      ...search.propertyKind.values.houses,
      ...search.propertyKind.values.others,
    ];
    let queryTypeOfPropertyString = '';
    let cnt = 0;
    typesOfProperty.forEach((element) => {
      cnt == 0
        ? (queryTypeOfPropertyString += `typeOfProperty = N'` + element + "'")
        : (queryTypeOfPropertyString +=
            ` OR typeOfProperty = N'` + element + "'");
      cnt++;
    });
    queryString += ' AND ' + queryTypeOfPropertyString;
  }
  if (search.roomsRange.value.start.length > 0)
    queryString += ` AND numberOfRooms >= ` + search.roomsRange.value.start;
  if (search.roomsRange.value.end.length > 0)
    queryString += ` AND numberOfRooms <= ` + search.roomsRange.value.end;
  if (search.priceRange.value.start.length > 0)
    queryString += ` AND price >= ` + search.priceRange.value.start;
  if (search.priceRange.value.end.length > 0)
    queryString += ` AND price <= ` + search.priceRange.value.end;
  if (search.stateProperties.values.length > 0) {
    search.stateProperties.values.forEach((element) => {
      if (element != 'numberOfParkingPlaces' && element != 'numberOfPorches')
        queryString += ` AND ${element} = 1`;
      else if (element == 'numberOfParkingPlaces') {
        queryString += ` AND numberOfParkingPlaces != N'ללא'`;
      } else {
        queryString += ` AND numberOfPorches != N'ללא'`;
      }
    });
  }
  if (search.floorRange.value.start.length > 0)
    queryString += ` AND floor >= ` + search.floorRange.value.start;
  if (search.floorRange.value.end.length > 0)
    queryString += ` AND floor <= ` + search.floorRange.value.end;
  if (search.sizeRange.value.start.length > 0)
    queryString +=
      ` AND overallSquareMeters >= ` + search.sizeRange.value.start;
  if (search.sizeRange.value.end.length > 0)
    queryString += ` AND overallSquareMeters <= ` + search.sizeRange.value.end;
  if (search.entranceDate.value.length > 0) {
    search.immediateEntrance.value == true
      ? (queryString +=
          ` AND entryDate = N'` +
          search.entranceDate.value +
          "' OR entryDate = N'מיידי'")
      : (queryString +=
          ` AND entryDate = N'` + search.entranceDate.value + "'");
  }
  if (search.immediateEntrance.value == true) {
    search.entranceDate.value.length > 0
      ? (queryString +=
          ` AND entryDate = N'` +
          search.entranceDate.value +
          "' OR entryDate = N'מיידי'")
      : (queryString += ` AND entryDate = N'מיידי'`);
  }
  if (search.openSearch.value.length > 0)
    queryString +=
      ` AND assetDescription LIKE N'%` + search.openSearch.value + "%'";
  if (filterBy.withPicture == 'true')
    queryString += ` AND imageSrcName IS NOT NULL`;
  if (filterBy.withPrice == 'true') queryString += ` AND price IS NOT NULL`;
  try {
    const states = await assetServices.getAssetsFromDB(
      queryString,
      orderBy,
      offset
    );
    const rows = await assetServices.countAllAssetsFromDB(queryString);
    const finalStatesNumber = rows.recordset[0].count;
    res.send({ data: states.recordset, numOfPages: finalStatesNumber });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  addAsset,
  getAssets,
};
