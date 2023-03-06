import { getStorage } from "./storage.js";
import { renderComments } from "./render.js";
import { commentFormControl, addLike, deleteComment } from "./control.js";


const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  const form = document.querySelector('.form');

  app.innerText = '';
  const localStorageKey = 'commentsList';
  const data = getStorage(localStorageKey);
  renderComments(app, data);
  commentFormControl(form, app, localStorageKey);
  addLike(app, localStorageKey);
  deleteComment(app, localStorageKey);
}

window.commentsList = init;
