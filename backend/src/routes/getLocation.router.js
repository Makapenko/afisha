const router = require('express').Router();
const db = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const location = await db.Location.findAll();

    res
      .status(200)
      .json({
        code: 'LOCATION SENDED',
        location,
        userId: req.session.user.id,
      });
  });

module.exports = router;
