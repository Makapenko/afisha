const router = require('express').Router();
const db = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { body } = req.body;
    let newLocation = null;

    // console.log('addLocationRouter-01', body);
    try {
      newLocation = await db.Location.create(
        {
          title: body.title,
          description: body.description,
          address: body.address,
          type: body.type,
          coordX: Number(body.coordX),
          coordY: Number(body.coordY),
          site: body.site,
          vk: body.vk,
          fb: body.fb,
          instagram: body.instagram,
          whatsapp: body.whatsapp,
          telegram: body.telegram,
          viber: body.viber,
          email: body.email,
          tel1: body.tel1,
          tel2: body.tel2,
        },
      );

      res
        .status(200)
        .json({
          code: 'LOCATION SAVED',
          message: 'Локация добавлена в БД',
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

    try {
      body.url.forEach(async (link) => {
        if (link !== '') {
          await db.LocationPhoto.create({
            LocationId: newLocation.id,
            url: link,
          });
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
    // .then(res => {
    //   const locId = res.id;

    //   body.url.map(el=>{
    //     if (el!=''){
    //       db.LocationPhoto.create({ LocationId: locId, url: el })
    //       .catch(err => console.log(err));
    //     }
    //   })
    // }).catch(err => console.log(err))
  });

module.exports = router;
