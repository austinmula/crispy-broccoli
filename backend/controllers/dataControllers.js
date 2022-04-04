const pool = require('../db');
const { sendError } = require('../utils/helpers');

// last 50 entries
exports.getData = async (req, res) => {
  try {
    const data = await pool.query(
      'SELECT * FROM sensor_data ORDER BY created_at desc limit 50'
    );

    res.json(data.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Whole Dataset
exports.getFullData = async (req, res) => {
  try {
    const data = await pool.query(
      'SELECT * FROM sensor_data ORDER BY created_at desc'
    );

    res.json(data.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//
exports.hourlyData = async (req, res) => {
  try {
    const data = await pool.query(`SELECT * from hourly_data`);
    res.json(data.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
//
exports.weeklyData = async (req, res) => {
  try {
    const data = await pool.query(`SELECT * from weekly_data`);
    res.json(data.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
