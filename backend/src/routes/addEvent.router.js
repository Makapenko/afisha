const router = require('express').Router();
const db = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { body } = req.body;
    let newEvent = null;

    try {
      newEvent = await db.Event.create({
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

      res
        .status(200)
        .json({
          code: 'EVENT SAVED',
          message: 'Событие добавлено в БД',
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);

      res
        .status(500)
        .json({
          message: 'Ошибка записи в БД',
        });
    }

    body.url.forEach(async (link) => {
      try {
        if (link !== '') {
          await db.EventPhoto.create({
            EventId: newEvent.id,
            url: link,
          });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error.message);
      }
    });
  });

module.exports = router;
