import React from 'react';

function AddEvent(props) {

  const addEventHandler = (e) => {
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
      <form action="" onSubmit={addEventHandler}>

        ВЫБОР МЕСТА --------------------------------------------------------
        <br />
        Название события (title):
        <input type="text" name="title" /> <br />

        Описание события (description):
        <textarea name="description"></textarea> <br />

        Подкатегория (subcategory):
        <select name="subcategory">
          <option value="Широкий прокат">Кино - Широкий прокат</option>
          <option value="Ограниченный прокат">Кино - Ограниченный прокат</option>
          <option value="Кино в баре">Кино - Кино в баре</option>
          <option value="Большой театр">Театр - Большой театр</option>
          <option value="Камерный театр">Театр - Камерный театр</option>
          <option value="Театр - разное">Театр - разное</option>
          <option value="Концерты - Pop">Концерты - Pop</option>
          <option value="Концерты - Рок">Концерты - Рок</option>
          <option value="Концерты - Рэп">Концерты - Рэп</option>
          <option value="Концерты - Выступления в барах">Концерты - Выступления в барах</option>
          <option value="Концерты - Разное">Концерты - Разное</option>
          <option value="Экскурсии">Экскурсии</option>
          <option value="Обучение - Лекции">Экскурсии</option>
          <option value="Обучение - Мастер классы">Экскурсии</option>
          <option value="Обучение - Разное">Экскурсии</option>
        </select> <br />

        ТУТ БУДУТ ВСЕ СОБЫТИЯ В ЭТОМ МЕСТЕ, ЧТОБЫ НЕ ОШИБИТЬСЯ И НЕ ДОБАВИТЬ ДВА ОДИНАКОВЫХ СОБЫТИЯ

        <button> Сохранить </button>
      </form>
    </div>
  );
}

export default AddEvent;
