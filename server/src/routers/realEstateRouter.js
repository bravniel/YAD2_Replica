const express = require('express');
const sql = require('mssql');
const UserAuth = require('../middleware/authentication');

const { v4: uuidv4 } = require('uuid');

const router = express.Router();

/* Adds a realestate sell to the DB. */
router.post('/asset', async (req, res, next) => {
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
    let queryString = `INSERT INTO Property (${keys}) VALUES (${values})`;
    console.log('queryString: ', queryString);
    let propsQueryString = `INSERT INTO Props (${propsKeys}) VALUES (${propsValues})`;
    console.log('propsQueryString: ', propsQueryString);
    const result = await sql.query(queryString);
    const propsResult = await sql.query(propsQueryString);
    res.send({});
  } catch (error) {
    return next(error);
  }
});

/* Returns the states according to the search form input. */
router.get('/assets', async (req, res, next) => {
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
    const states = await sql.query(
      `SELECT * FROM Property join Props on Property.propertyId = Props.propertyId ${queryString} ORDER BY CASE 
    WHEN adTrack = N'בולט במיוחד' THEN 1
    WHEN adTrack = N'בולט' THEN 2
    WHEN adTrack = N'בסיסי' THEN 3
    ELSE 4
  END, adTrack, ${orderBy} OFFSET ${offset} ROWS FETCH NEXT 5 ROWS ONLY;`
    );
    const rows = await sql.query(
      `SELECT COUNT(*) AS count FROM Property join Props on Property.propertyId = Props.propertyId ${queryString};`
    );
    const finalStatesNumber = rows.recordset[0].count;
    res.send({ data: states.recordset, numOfPages: finalStatesNumber });
  } catch (error) {
    return next(error);
  }
});

/* Returns a fixed number of states upon application load. */
// router.get('/', async (req, res, next) => {
//   try {
//     const states = await sql.query(
//       `SELECT * FROM Property join Props on Property.propertyId = Props.propertyId;`
//     );
//     const finalStates = states.recordsets[0];
//     if (finalStates.length === 0) throw new Error('No apartments in DB.');
//     console.log(states);
//     res.send(states.recordset);
//   } catch (error) {
//     return next(error);
//   }
// });

module.exports = router;
