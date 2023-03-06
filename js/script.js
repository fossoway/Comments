const init = (selectorApp) => {
  const app = document.querySelector(selectorApp);
  app.innerText = '';
  const localStorageKey = 'commentsList';
}

window.commentsList = init;
