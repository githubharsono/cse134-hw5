import { handlePost } from './post.js';
import { handleGet } from './get.js';
import { handlePut } from './put.js';
import { handleDelete } from './delete.js';

window.addEventListener('DOMContentLoaded', init);

function init() {
  const postBtn = document.getElementById('postBtn');
  const getBtn = document.getElementById('getBtn');
  const putBtn = document.getElementById('putBtn');
  const deleteBtn = document.getElementById('deleteBtn');

  postBtn.addEventListener('click', handlePost);
  getBtn.addEventListener('click', handleGet);
  putBtn.addEventListener('click', handlePut);
  deleteBtn.addEventListener('click', handleDelete);
}