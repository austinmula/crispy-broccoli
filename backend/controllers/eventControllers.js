const pool = require('../db');
const { sendError } = require('../utils/helpers');

exports.addEvent = async (req, res) => {
  try {
    if (!req.user === req.body.user_id)
      return sendError(res, 'Not Allowed to Add', 400);

    const task = await pool.query(
      'INSERT INTO tasks (date, title, user_id) values ($1, $2, $3) RETURNING *',
      [req.body.data.date, req.body.data.title, req.body.data.user_id]
    );
    res.json(task.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
};
exports.getEvents = async (req, res) => {
  try {
    // console.log(req.body);
    const mytasks = await pool.query(
      'SELECT title, date FROM tasks WHERE user_id = $1',
      [req.user]
    );
    res.json(mytasks.rows);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
