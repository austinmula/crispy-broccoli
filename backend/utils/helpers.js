const jwt = require('jsonwebtoken');

exports.sendError = (res, error, status = 401) => {
  res.status(status).json({ error: error });
};

exports.jwtGenerator = (user_id) => {
  const payload = {
    user_id: user_id,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
};
