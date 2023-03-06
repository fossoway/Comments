import { removeStorage, setStorage, editStorage } from "./storage.js";
import { addComment } from "./render.js";


const commentFormControl = (form, elem, localStorageKey) => {
  const submitComment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newComment = Object.fromEntries(formData);
    newComment.id = Math.round(Math.random() * 100000).toString();
    newComment.isLike = 'no';
    setStorage(localStorageKey, newComment);
    addComment(newComment, elem);
    form.reset();
  };
  form.addEventListener('submit', submitComment);
};


const addLike = (app, localStorageKey) => {
  app.addEventListener('click', e => {
    if (e.target.closest('.comments__button-like')) {
      const target = e.target.closest('.comments__button-like');
      target.classList.toggle('comments__button-fill');
      const id = e.target.closest('.comments__wrapper').id;
      console.dir(e.target.closest('.comments__wrapper'));
      editStorage(localStorageKey, id);
    }
  })
};


const deleteComment = (app, localStorageKey) => {
  app.addEventListener('click', e => {
    if (e.target.closest('.comments__button-delete')) {
      e.target.closest('.comments__wrapper').remove();
      const id = e.target.closest('.comments__wrapper').id;
      console.log(id);
      removeStorage(localStorageKey, id);
    }
  })
}


export { commentFormControl, addLike, deleteComment };
