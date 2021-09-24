const router = require('express').Router();
const db = require('../db/models');

router.get('/', async (req, res) => {
  const rawEvents = await db.Event.findAll({ include: { model: db.EventPhoto } });
  const rawLocations = await db.Location.findAll({ include: { model: db.LocationPhoto } });

  const events = rawEvents.map((item) => item.dataValues);
  const locations = rawLocations.map((item) => item.dataValues);

  console.log("events", events);
  console.log("locations", locations);

  res.json({
    message: 'ok',
    events,
    locations,
  });
});

module.exports = router;
