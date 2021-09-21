const router = require('express').Router();
const db = require('../db/models');
// const isAuthenticated = require('../middleware/isAuthenticated');

router.route('/signin')
  // eslint-disable-next-line consistent-return
  .post(async (req, res) => {
    const { username, password } = req.body;

    try {
      const itemUser = await db.Admin.findOne({ where: { username } });

      if (!itemUser) {
        return res
          .status(400)
          .json({
            code: 'ACCESS ERROR',
            message: 'Ошибка авторизации',
          });
      }

      if (password === itemUser.password) {
        req.session.user = itemUser;

        res
          .status(200)
          .json({
            code: 'ACCESS OK',
            message: 'Доступ разрешён',
          });
      } else {
        res
          .status(400)
          .json({
            code: 'ACCESS ERROR',
            message: 'Ошибка авторизации',
          });
      }
    } catch (error) {
      throw error.message;
    }
  });

module.exports = router;
