import { createComment } from "./createElements.js";


export const renderComments = (elem, commentsList) => {
  const allComments = commentsList.map(createComment);
  elem.append(...allComments);
};


export const addComment = (comment, elem) => {
  elem.append(createComment(comment));
};
