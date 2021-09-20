const router = require('express').Router();
const db = require('../db/models');

router.get('/', async (req, res) => {
  const raw = await db.Event.findAll();
  const events = raw.map((item) => item.dataValues);
  res.json({ message: 'ok', events });
});

module.exports = router;
