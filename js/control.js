import { removeStorage, setStorage } from "./storage.js";
import { addComment } from "./render.js";


const commentFormControl = (form, elem, localStorageKey) => {
  const submitComment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newComment = Object.fromEntries(formData);
    console.log(newComment);
    newComment.id = Math.round(Math.random() * 100000).toString();
    setStorage(localStorageKey, newComment);
    addComment(newComment, elem);
    form.reset();
  };
  form.addEventListener('submit', submitComment);
};


export { commentFormControl };
