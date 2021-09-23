import React from 'react';
import styles from './AddPlace.module.css';

function AddPlace() {
  function addPlaceHandler(e) {
    e.preventDefault();

    const body = {
      title: e.target.title.value,
      description: e.target.description.value,
      address: e.target.address.value,
      type: e.target.type.value,
      coordX: e.target.coordX.value,
      coordY: e.target.coordY.value,
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

      url: [
        e.target.url0.value,
        e.target.url1.value,
        e.target.url2.value,
        e.target.url3.value,
        e.target.url4.value,
        e.target.url5.value,
      ],
    };

    // console.log(body, 'AddPlace');

    fetch(`${process.env.REACT_APP_SERVER_URL}/addLocation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ body }),
    })
      .then((response) => response.json())
      .then(data => alert(data.message))
      .catch((err) => err.message);
  };

  return (
    <div>
      <form action='' onSubmit={addPlaceHandler}>
        <h2>AddPlace</h2>

        Название места (title):
        <input className={styles.inputs} type='text' name='title' /> <br />
        Описание места (description):
        <textarea name='description'></textarea> <br />
        Адрес (address):
        <input type='text' name='address' /> <br />
        Тип (type):
        <input type='text' name='type' /> <br />
        <p>coordX</p>
        <input type='text' name='coordX' /> <br />
        <p>coordY</p>
        <input type='text' name='coordY' /> <br />
        <hr />
        Сайт (site):
        <input type='text' name='site' /> <br />
        vk:
        <input type='text' name='vk' /> <br />
        fb:
        <input type='text' name='fb' /> <br />
        instagram:
        <input type='text' name='instagram' /> <br />
        whatsapp:
        <input type='text' name='whatsapp' /> <br />
        telegram:
        <input type='text' name='telegram' /> <br />
        viber:
        <input type='text' name='viber' /> <br />
        email:
        <input type='text' name='email' /> <br />
        tel1:
        <input type='text' name='tel1' /> <br />
        tel2:
        <input type='text' name='tel2' /> <br />
        <hr />
        фото: ТУТ БУДЕТ МУЛЬТЕР <br />
        <input type='text' name='url0' />
        <input type='text' name='url1' />
        <input type='text' name='url2' />
        <input type='text' name='url3' />
        <input type='text' name='url4' />
        <input type='text' name='url5' />
        Координаты: тут будет карта <br />
        <button> Сохранить </button>
      </form>
    </div>
  );
}

export default AddPlace;
