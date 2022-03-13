const pool = require('../db');
const bcrypt = require('bcrypt');
const { jwtGenerator, sendError } = require('../utils/helpers');

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //check if the user exists
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    if (user.rows.length !== 0)
      return sendError(res, 'User already Exists', 401);

    // encrypt user password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // add user to db
    const newUser = await pool.query(
      'INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, bcryptPassword]
    );

    // new user - > res.json(newUser.rows[0]);
    // generate jwt token
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({
      user_id: newUser.rows[0].user_id,
      email: newUser.rows[0].email,
      user_name: newUser.rows[0].user_name,
      user_type: newUser.rows[0].user_type,
      token: token,
    });
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if user does not exist
    const user = await pool.query('SELECT * FROM users where email = $1', [
      email,
    ]);

    if (user.rows.length === 0)
      return sendError(res, 'Incorrect Email or Password', 401);

    // if user exists, check if entered password is correct
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword)
      return sendError(res, 'Incorrect Email or Password', 401);

    // Assign a jwt token
    const token = jwtGenerator(user.rows[0].user_id);
    res.json({
      user_id: user.rows[0].user_id,
      email: user.rows[0].email,
      user_name: user.rows[0].user_name,
      user_type: user.rows[0].user_type,
      token: token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Internal Server error');
  }
};
