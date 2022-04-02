const pool = require('../db');
const { sendError } = require('../utils/helpers');

exports.getData = async (req, res) => {
  try {
    console.log(req.body);
    res.send('Hello');
  } catch (error) {
    res.status(500).json(error.message);
  }
};
