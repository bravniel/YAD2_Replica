const { response } = require("..");

class UserError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Generic error handler.
 * @param {Error} error
 * @param {Request} req
 * @param {Result} res
 * @param {Callback} next
 */

const ErrorHandler = (error, req, res, next) => {
  console.log('error...');
  console.log(error.message);
  let Message = "";
  if (error.message.includes('User does not exist')) {
    error.status = 404;
    Message = 'משתמש זה לא קיים במערכת.';
  }
  if (error.message.includes('Invalid Password')) {
    error.status = 404;
    Message = 'סיסמה שגויה.';
  }
  if (error.message.includes('No apartments in DB.')) {
    (error.status = 404), (Message = 'אין דירות במערכת.');
  }
  if (error.message.includes('Owner was not specified.')) {
    (error.status = 404), (Message = 'לא צוין מוכר.');
  }
  if (error.message.includes('Violation of PRIMARY KEY')) {
    error.status = 403;
    Message = 'משתמש זה קיים במערכת.';
  }
  res.status(error.status).send({ Message, status: error.status });
};

module.exports = { ErrorHandler, UserError };

 //error.response.data.Error.includes('Owner was not specified.')