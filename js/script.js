import { getStorage } from "./storage.js";
import { renderComments, addComment } from "./render.js";


const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  app.innerText = '';
  const localStorageKey = 'commentsList';
  const data = getStorage(localStorageKey);
  renderComments(app, data);
}

window.commentsList = init;
