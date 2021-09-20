const router = require('express').Router();
const db = require('../db/models');

router.route('/')
  .post((req, res) => {
    const { body } = req.body;
    
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
      const locId = res.id;
      body.url.map(el=>{
        if (el!=''){
          console.log(el,';;;;;;;;;;;;;');
          db.LocationPhoto.create({ LocationId: locId, url: el })
          .catch(err => console.log(err.message));
        }
      })
    }).catch(err => console.log(err.message))
  })
module.exports = router;
