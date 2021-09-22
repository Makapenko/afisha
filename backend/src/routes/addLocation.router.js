const router = require('express').Router();
const db = require('../db/models');

router.route('/')

  .post((req, res) => {
    const { body } = req.body;
    console.log(body, "на бэке");

    console.log("++++++++++++");
    db.Location.create(
      {
        title: body.title,
        description: body.description,
        address: body.address,
        type: body.type,
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
      }
    ).then(res => {
      console.log("111111111111");
      const locId = res.id;
      console.log(locId,"111111111111");

      body.url.map(el=>{
        if (el!=''){
          db.LocationPhoto.create({ LocationId: locId, url: el })
          .catch(err => console.log(err,"&&&&&&&&&&&&&"));
        }
      })
      console.log("111111111111");

    }).catch(err => console.log(err,"--------"))
  })
module.exports = router;
