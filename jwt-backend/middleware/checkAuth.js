const { verify } = require('jsonwebtoken');
const jwtKey = require('../shared/key');
const {NoAuthError} = require('../model/errors');

module.exports.checkAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  if (!req.headers.authorization) {
    console.log('No header');
    return next(new NoAuthError('Authentication failed.'));
  }
  const authDetails = req.headers.authorization.split(' ');

  if (authDetails.length !== 2) {
    console.log('Header not valid');
    return next(new NoAuthError('Authentication failed.'));
  }
  const authToken = authDetails[1];
  try {
    const validToken = verify(authToken, jwtKey.KEY);
    req.token = validToken;
  } catch (error) {
    console.log('Token not valid');
    return next(new NoAuthError('Authentication failed.'));
  }
  next();
}