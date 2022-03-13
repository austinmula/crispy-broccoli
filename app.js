require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./backend/routes/userRoutes'));
app.use('/auth', require('./backend/routes/authRoutes'));

// app.use('/api/chatroom', require('./server/routes/chatroomRoutes'));
// app.use('/api/messages', require('./server/routes/messageRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
