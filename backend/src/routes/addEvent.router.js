const router = require('express').Router();
const db = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { body } = req.body;
    console.log('addEvent-01', body);

    const newEvent = await db.Event.create(
      {
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
      },
    );

    body.url.forEach(async (link) => {
      if (link !== '') {
        console.log(newEvent.id, link, 'newEvent.id, link');

        await db.EventPhoto.create({
          EventId: newEvent.id,
          url: link,
        });
      }
    });

    res
      .status(200)
      .json({
        code: 'EVENT SAVED',
        message: 'Событие добавлено в БД',
      });
  });

module.exports = router;
