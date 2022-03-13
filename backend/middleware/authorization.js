const jwt = require('jsonwebtoken');
const { sendError } = require('../utils/helpers');

exports.authorize = (req, res, next) => {
  try {
    // Get the token from the header of the req
    const jwtToken = req.header('token');

    // if there is no token
    if (!jwtToken) return sendError(res, 'Not Authorized - NO TOKEN', 403);

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = payload.user_id;

    // console.log(payload);

    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};
