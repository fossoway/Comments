import { getStorage } from "./storage.js";


const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  app.innerText = '';
  const localStorageKey = 'commentsList';
  const data = getStorage(localStorageKey);
}

window.commentsList = init;
