require('dotenv').config(); // Доступ к переменным окружения
const express = require('express');
// const path = require('path');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const db = require('./src/db/models');

const app = express();

const PORT = process.env.PORT || 4000;
const HOST = 'localhost';

// const indexRouter = require('./src/routes/index.router');

// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(session({
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // 12 hours
  },
}));

// app.use('/', indexRouter);

// sequelize.authenticate();

app.listen(PORT, async () => {
  /* eslint-disable no-console */
  console.log(`Server listens http://${HOST}:${PORT}`);
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  /* eslint-enable no-console */
});
