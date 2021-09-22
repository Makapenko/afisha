const router = require('express').Router();
const db = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { body } = req.body;

    const newEvent = await db.Event.create({
      title: body.title,
      description: body.description,
      AdminId: body.AdminId,
      LocationId: Number(body.LocationId),
      price: body.price,
      subcategory: body.subcategory,
      timeStart: body.startTime,
      timeEnd: body.endTime,
      dorsOpen: body.doorsOpen,
      dateStart: body.startDate,
      dateEnd: body.endDate,
      linkToRegister: body.linkToRe,
      linkToBuy: body.linkToBuy,
      linkToEvent: body.linkToEvent,
    });

    // eslint-disable-next-line consistent-return
    body.url.forEach(async (item) => {
      try {
        if (item !== '') {
          await db.EventPhoto.create({
            EventId: newEvent.id,
            url: item,
          });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error.message);
        return null;
      }
    });

    res
      .status(200)
      .json({
        code: 'EVENT SAVED',
        message: 'EVENT SAVED',
      });
  });

module.exports = router;
