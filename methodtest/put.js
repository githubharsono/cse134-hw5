import { formatJSON } from './format.js';

export function handlePut() {
  const id = document.getElementById("id");
  const article_name = document.getElementById("article_name");
  const article_body = document.getElementById("article_body");
  const date = document.getElementById("date");
  const response = document.getElementById("response");

  response.innerHTML = ""; // resets response output
  date.value = new Date().toLocaleString();

  const data = {
    id: id.value,
    article_name: article_name.value,
    article_body: article_body.value,
    date: date.value
  };

  fetch("https://httpbin.org/put", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(resp => resp.json())
    .then(json => formatJSON(json))
    .catch(error => console.error(error));
}
