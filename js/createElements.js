export const createComment = ({name, date, comment}) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('comments__wrapper');

  const header = document.createElement('div');
  header.classList.add('comments__header');

  const userName = document.createElement('p');
  userName.classList.add('comments__name');
  userName.textContent = name;

  const dateElem = document.createElement('p');
  dateElem.classList.add('comments__date');
  dateElem.textContent = date;

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.classList.add('comments__button', 'comments__button-delete');

  header.append(userName, dateElem, deleteBtn);

  const textComment = document.createElement('p');
  textComment.classList.add('comments__text');
  textComment.textContent = comment;

  const likeBtn = document.createElement('button');
  likeBtn.type = 'button';
  likeBtn.classList.add('comments__button', 'comments__button-like');

  wrapper.append(header, textComment,likeBtn);

  return wrapper;
};
