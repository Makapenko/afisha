const router = require('express').Router();
const db = require('../db/models');

router.get('/', async (req, res) => {
  const rawEvents = await db.Event.findAll();
  const rawLocations = await db.Location.findAll();
  console.log('rawEvents', rawEvents);
  const events = rawEvents.map((item) => item.dataValues);
  const locations = rawLocations.map((item) => item.dataValues);
  res.json({ message: 'ok', events, locations });
});

module.exports = router;
