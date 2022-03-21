const pool = require('../db');
const { sendError } = require('../utils/helpers');

// Get Profile Information
exports.getProfile = async (req, res) => {
  try {
    const profile = await pool.query(
      'SELECT user_name, email, user_type, created_at, county, constituency, postal_address, phone_num FROM users u LEFT JOIN contactinfo c ON u.user_id = c.user_id WHERE u.user_id = $1',
      [req.user]
    );

    if (profile.rows.length === 0) sendError(res, 'Not Found', 404);

    res.json(profile.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Add Contact Info
exports.addContactInfo = async (req, res) => {
  const { county, constituency, postal_address, phone_num, user_id } =
    req.body.newdata;

  try {
    // Check if the info exists
    const user = await pool.query(
      'SELECT * FROM contactinfo WHERE user_id = $1',
      [user_id]
    );

    if (user.rows.length !== 0)
      return sendError(res, 'User Info ALREADY Exist', 401);

    const profile = await pool.query(
      'INSERT INTO contactinfo (county, constituency, postal_address, phone_num, user_id) VALUES  ($1, $2, $3, $4, $5) RETURNING *',
      [county, constituency, postal_address, phone_num, user_id]
    );

    if (profile.rows.length === 0) sendError(res, 'Not Found', 404);

    res.json(profile.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.fetchAllusers = async (req, res) => {
  try {
    // Check if Admin
    const usertype = await pool.query(
      'SELECT user_type FROM users WHERE user_id = $1',
      [req.user]
    );

    if (usertype.rows[0].user_type === 1)
      return sendError(res, 'You are NOT authorized', 401);

    // Select users
    const users = await pool.query(
      'SELECT user_id, user_name, email, user_type, created_at FROM users'
    );
    res.json(users.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.fetchAllusersDetailed = async (req, res) => {
  try {
    // Select users
    const users = await pool.query('SELECT * FROM profile');
    res.json(users.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.fetchOneuser = async (req, res) => {
  try {
    // Check if Admin
    const usertype = await pool.query(
      'SELECT user_type FROM users WHERE user_id = $1',
      [req.user]
    );

    if (usertype.rows[0].user_type === 1)
      return sendError(res, 'You are NOT authorized', 401);

    // Select users
    const users = await pool.query(
      'SELECT user_id, user_name, email, user_type, created_at FROM users WHERE user_id = $1',
      [req.params.id]
    );
    res.json(users.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Edit a USER
exports.editUser = async (req, res) => {
  try {
    let { name, email, user_type } = req.body;
    user_type = parseInt(user_type);
    // Check if Admin
    const usertype = await pool.query(
      'SELECT user_type FROM users WHERE user_id = $1',
      [req.user]
    );

    if (usertype.rows[0].user_type === 1)
      return sendError(res, 'You are NOT authorized', 401);

    const result = await pool.query(
      'UPDATE users SET user_name = $1, email = $2, user_type = $3 WHERE user_id = $4 RETURNING *',
      [name, email, user_type, req.params.id]
    );

    console.log(result.rows[0]);
    res.json(_.omit(result.rows[0], 'password'));
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // Check if Admin
    const usertype = await pool.query(
      'SELECT user_type FROM users WHERE user_id = $1',
      [req.user]
    );

    if (usertype.rows[0].user_type === 1)
      return sendError(res, 'You are NOT authorized', 401);

    const deleteuser = await pool.query(
      'DELETE FROM users WHERE user_id = $1 RETURNING *',
      [id]
    );

    if (deleteuser.rows.length === 0) sendError(res, 'Delete Failed', 404);

    res.status(200).json('Deleted Successfuly');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// users per week
exports.getweeklyUsers = async (req, res) => {
  try {
    const summary = await pool.query(
      `SELECT date_trunc('week', created_at) AS "Week", count(*) FROM users GROUP BY 1 ORDER BY 1`
    );

    res.json(summary.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// county distribution
exports.getcountyDistribution = async (req, res) => {
  try {
    const distribution = await pool.query(
      `SELECT county, COUNT(*) from contactinfo GROUP BY county ORDER BY count desc`
    );

    res.json(distribution.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
