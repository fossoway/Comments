import {removeStorage, setStorage, editStorage} from "./storage.js";
import {addComment} from "./render.js";


const addAlert = (text) => {
  const alert = document.createElement('p');
  alert.classList.add('alert');
  alert.innerText = text;
  return alert;
}


const nameValidation = (elem) => {
  const regExpName = /[^а-яёА-ЯЁ]/u;
  elem.addEventListener('input', e => {
    if (regExpName.test(elem.value)) {
      if (!elem.nextElementSibling) {
        const alert = addAlert(`Только кириллица!`);
        elem.parentElement.append(alert);
      }
    }
  })
}


const isEmptyValidation = (elem) => {
  elem.addEventListener('blur', e => {
    if (elem.value.length === 0) {
      const alert = addAlert(`Поле не заполнено!`);
      elem.parentElement.append(alert);
    }
  })
};


const deleteError = (elem) => {
  elem.addEventListener('input', e => {
    if (elem.nextElementSibling) {
      elem.nextElementSibling.remove();
    }
  })
};


const commentFormControl = (form, elem, localStorageKey) => {
  const elements = form.querySelectorAll('.form__validation');
  const name = form.querySelector('#name');
  elements.forEach(item => isEmptyValidation(item));
  elements.forEach(item => deleteError(item));
  nameValidation(name);
  const submitComment = (event) => {
    event.preventDefault();
    const alert = form.querySelector('.alert');
    if (!alert) {
      const formData = new FormData(event.target);
      const newComment = Object.fromEntries(formData);
      newComment.id = Math.round(Math.random() * 100000).toString();
      newComment.isLike = 'no';
      if (!newComment.date) {
        const today = new Date();
        newComment.date = today.toLocaleString();
      }
      setStorage(localStorageKey, newComment);
      addComment(newComment, elem);
      form.reset();
    }
  }

  form.addEventListener('submit', submitComment);
};


const addLike = (app, localStorageKey) => {
  app.addEventListener('click', e => {
    if (e.target.closest('.comments__button-like')) {
      const target = e.target.closest('.comments__button-like');
      target.classList.toggle('comments__button-fill');
      const id = e.target.closest('.comments__wrapper').id;
      editStorage(localStorageKey, id);
    }
  })
};


const deleteComment = (app, localStorageKey) => {
  app.addEventListener('click', e => {
    if (e.target.closest('.comments__button-delete')) {
      e.target.closest('.comments__wrapper').remove();
      const id = e.target.closest('.comments__wrapper').id;
      removeStorage(localStorageKey, id);
    }
  })
}


export {commentFormControl, addLike, deleteComment};
