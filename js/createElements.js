const dateFormat = (datePost) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  const diffToday = now - today;
  const diffYesterday = now - yesterday;
  if ((now - datePost) < diffToday) {
    return 'Сегодня';
  } else if (((now - datePost) > diffToday) && ((now - datePost) < diffYesterday)) {
    return 'Вчера';
  }
  return datePost.toLocaleDateString();
}


const createElemComments = (tag, classNameList) => {
  const elem = document.createElement(tag);
  elem.classList.add(...classNameList);
  return elem;
};


export const createComment = ({name, date, id, comment, isLike}) => {
  const wrapper = createElemComments('div', ['comments__wrapper']);
  wrapper.id = id;

  const header = createElemComments('div', ['comments__header']);

  const userName = createElemComments('p', ['comments__name']);
  userName.textContent = name;

  const dateElem = createElemComments('p', ['comments__date']);
  const datePost = new Date(date);
  const templateDate = dateFormat(datePost);
  dateElem.textContent = `${templateDate}, ${datePost.toLocaleTimeString()}`;

  const deleteBtn = createElemComments('button', ['comments__button', 'comments__button-delete']);
  deleteBtn.type = 'button';

  header.append(userName, dateElem, deleteBtn);

  const textComment = createElemComments('p', ['comments__text']);
  textComment.textContent = comment;

  const likeBtn = createElemComments('button', ['comments__button', 'comments__button-like'])
  likeBtn.type = 'button';
  if (isLike === 'yes') {
    likeBtn.classList.add('comments__button-fill');
  }

  wrapper.append(header, textComment,likeBtn);

  return wrapper;
};
