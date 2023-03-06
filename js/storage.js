const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

const setStorage = (key, value) => {
  const commentsList = getStorage(key);
  commentsList.push(value);
  localStorage.setItem(key, JSON.stringify(commentsList));
};


const removeStorage = (key, number) => {
  const commentsList = getStorage(key);
  const index = commentsList.findIndex(i => i.id === number);
  commentsList.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(commentsList));
};


export { getStorage, setStorage, removeStorage };
