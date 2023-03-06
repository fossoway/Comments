const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

const setStorage = (key, value) => {
  const commentsList = getStorage(key);
  commentsList.push(value);
  localStorage.setItem(key, JSON.stringify(commentsList));
};


const removeStorage = (key, number) => {
  const commentsList = getStorage(key);
  const index = commentsList.findIndex(i => i.id === number);
  console.log(index);
  commentsList.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(commentsList));
};


const editStorage = (key, number) => {
  const commentList = getStorage(key);
  const index = commentList.findIndex(i => i.id === number);
  switch (commentList[index].isLike) {
    case 'yes':
      commentList[index].isLike = 'no';
      break;
    case 'no':
      commentList[index].isLike = 'yes';
      break;
  }
  localStorage.setItem(key, JSON.stringify(commentList));
};


export { getStorage, setStorage, removeStorage, editStorage };
