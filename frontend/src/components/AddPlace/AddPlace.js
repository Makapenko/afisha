import React from 'react';

function AddPlace(props) {

  const addPlaceHandler = (e) => {
    e.preventDefault();

    const body = {
      title: e.target.title.value,
      description: e.target.description.value,
      address: e.target.address.value,
      type: e.target.type.value,
      site: e.target.site.value,
      vk: e.target.vk.value,
      fb: e.target.fb.value,
      instagram: e.target.instagram.value,
      whatsapp: e.target.whatsapp.value,
      telegram: e.target.telegram.value,
      viber: e.target.viber.value,
      email: e.target.email.value,
      tel1: e.target.tel1.value,
      tel2: e.target.tel2.value,
    }

    console.log(body);

    // fetch ('lockalhost:3000/addPlace', {
    //   method: 'POST',
    //   body: {
    //     title, description, address, type, site, vk, fb, instagram, whatsapp, telegram, viber, email, tel1, tel2
    //   }
    // })
  }

  return (
    <div>
      <form action="" onSubmit={addPlaceHandler}>

        Название места (title):
        <input type="text" name="title" /> <br />

        Описание места (description):
        <textarea name="description"></textarea> <br />

        Адрес (address):
        <input type="text" name="address" /> <br />

        Тип (type):
        <input type="text" name="type" />  <br />

        <hr />

        Сайт (site):
        <input type="text" name="site" />  <br />

        vk:
        <input type="text" name="vk" />  <br />

        fb:
        <input type="text" name="fb" />  <br />

        instagram:
        <input type="text" name="instagram" />  <br />

        whatsapp:
        <input type="text" name="whatsapp" />  <br />

        telegram:
        <input type="text" name="telegram" />  <br />

        viber:
        <input type="text" name="viber" />  <br />

        email:
        <input type="text" name="email" />  <br />

        tel1:
        <input type="text" name="tel1" />  <br />

        tel2:
        <input type="text" name="tel2" />  <br />

        <hr />

        фото: ТУТ БУДЕТ МУЛЬТЕР <br />

        Координаты: тут будет карта <br />

        <button> Сохранить </button>
      </form>
    </div>
  );
}

export default AddPlace;
