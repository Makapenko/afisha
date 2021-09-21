const router = require('express').Router();
const db = require('../db/models');

router.route('/')

  .post((req, res) => {
    console.log("пришли на бэк")

    const { body } = req.body;
    console.log(body, "на бэке");

    console.log("++++++++++++");
    db.Event.create(
      {
        AdminId: 1,
        title: body.title,
        description: body.description,
        subcategory: body.subcategory,
        price: body.price,
        LocationId: body.LocationId,
        startTime: body.startTime,
        endTime: body.endTime,
        doorsOpen: body.doorsOpen,
        endDate: body.endDate,
        linkToRegister: body.linkToRegister,
        linkToBuy: body.linkToBuy,
        linkToEvent: body.linkToEvent
      }
    ).then((res) => {
      const locId = res.id;
      console.log(locId);
      console.log(body.url);
      body.url.map(el => {
        if (el != '') {
          db.EventPhoto.create({ EventId: locId, url: el })
            .then(console.log("+==========="))
            .catch(err => console.log(err));
        }
      })
      console.log('++++++++++11111111111111111');
    }).catch(err => console.log(err))
  })
module.exports = router;
