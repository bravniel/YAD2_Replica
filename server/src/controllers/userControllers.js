const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userServices = require('../services/userServices');

const loginUser = async (req, res, next) => {
  try {
    const user = await userServices.chechIfUserExistsInDB(req.body.email);
    if (user.recordset.length === 0) throw new Error('User does not exist');
    const isMatch = await bcrypt.compare(
      req.body.password,
      user.recordset[0].Password
    );
    if (!isMatch) throw new Error('Invalid Password');
    const token = jwt.sign(
      { payload: user.recordset[0].Email },
      process.env.TOKEN_SECRET,
      { expiresIn: '1h' }
    );
    res.send({
      token,
      firstName: user.recordset[0].FirstName,
      lastName: user.recordset[0].LastName,
      email: user.recordset[0].Email,
    });
  } catch (e) {
    return next(e);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const user = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      password: await bcrypt.hash(req.body.password, 8),
    };
    const newUser = await userServices.insertUserDataToDB(user);
    const token = jwt.sign(
      { payload: newUser.email },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '1h',
      }
    );
    res.send({
      token,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (e) {
    return next(e);
  }
};

const getUserData = async (req, res, next) => {
  try {
    const userInfo = await userServices.getUserDataFromDB(req.user);
    res.send(userInfo.recordset[0]);
  } catch (e) {
    return next(e);
  }
};

const editUserData = async (req, res, next) => {
  try {
    const userInfo = await userServices.updateUserDataOnDB(req.user, req.body);
    const user = await userServices.chechIfUserExistsInDB(req.user);
    const token = jwt.sign(
      { payload: user.recordset[0].Email },
      process.env.TOKEN_SECRET,
      { expiresIn: '1h' }
    );
    res.send({
      token,
      firstName: user.recordset[0].FirstName,
      lastName: user.recordset[0].LastName,
      email: user.recordset[0].Email,
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  loginUser,
  registerUser,
  getUserData,
  editUserData,
};
