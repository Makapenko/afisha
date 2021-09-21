const router = require('express').Router();
const db = require('../db/models');

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
            code: 'ACCESS DENIED',
            message: 'Пользователь не найден',
          });
      }

      if (password === itemUser.password) {
        req.session.user = itemUser;

        res
          .status(200)
          .json({
            code: 'ACCESS GRANTED',
            message: 'Доступ разрешён',
          });
      } else {
        res
          .status(400)
          .json({
            code: 'ACCESS DENIED',
            message: 'Неверный пароль',
          });
      }
    } catch (error) {
      throw error.message;
    }
  });

module.exports = router;
