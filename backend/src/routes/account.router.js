const router = require('express').Router();
const isAuthenticated = require('../middleware/isAuthenticated');

router.route('/')
  .get(isAuthenticated, (req, res) => {
    res
      .status(200)
      .json({
        code: 'ACCESS GRANTED',
        message: 'Доступ разрешён',
      });
  });

module.exports = router;
