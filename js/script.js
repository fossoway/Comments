import { getStorage } from "./storage.js";
import { renderComments, addComment } from "./render.js";
import { commentFormControl } from "./control.js";


const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  const form = document.querySelector('.form');

  app.innerText = '';
  const localStorageKey = 'commentsList';
  const data = getStorage(localStorageKey);
  renderComments(app, data);
  commentFormControl(form, app, localStorageKey);
}

window.commentsList = init;
