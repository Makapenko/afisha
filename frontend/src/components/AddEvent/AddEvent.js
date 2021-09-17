import React from 'react';

function AddEvent(props) {

  const addEventHandler = (e) => {
    e.preventDefault();

    const body = {
      title: e.target.title.value,
      description: e.target.description.value,
      subcategory: e.target.subcategory.value,
      price: e.target.price.value,
      startTime: e.target.startTime.value,
      endTime: e.target.endTime.value,
      doorsOpen: e.target.doorsOpen.value,
      startTime: e.target.startTime.value,
      endDate: e.target.endDate.value,
      linkToRegister: e.target.linkToRegister.value,
      linkToBuy: e.target.linkToBuy.value,
      linkToEvent: e.target.linkToEvent.value,
    }

    console.log(body);

    // fetch ('lockalhost:3000/addPlace', {
    //   method: 'POST',
    //   body: body
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

        Цена события (price):
        <input type="text" name="price" /> <br />

        Время начала (startTime):
        <input type="text" name="startTime" /> <br />

        Время окончания (endTime):
        <input type="text" name="endTime" /> <br />

        Двери открыты до (для концертов) (doorsOpen):
        <input type="text" name="doorsOpen" /> <br />

        Дата начала (startDate):
        <input type="text" name="startDate" /> <br />

        Дата окончания (endDate):
        <input type="text" name="endDate" /> <br />

        Ссылка на регистрацию (linkToRegister):
        <input type="text" name="linkToRegister" /> <br />

        Ссылка на покупку билета (linkToBuy):
        <input type="text" name="linkToBuy" /> <br />

        Ссылка на событие (linkToEvent):
        <input type="text" name="linkToEvent" /> <br />


        ТУТ БУДУТ ВСЕ СОБЫТИЯ В ЭТОМ МЕСТЕ, ЧТОБЫ НЕ ОШИБИТЬСЯ И НЕ ДОБАВИТЬ ДВА ОДИНАКОВЫХ СОБЫТИЯ
        <br />
        <button> Сохранить </button>
      </form>
    </div>
  );
}

export default AddEvent;
