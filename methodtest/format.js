export function formatJSON(obj) {
  const response = document.getElementById("response");

  response.style.whiteSpace = "pre";
  response.innerHTML = `${JSON.stringify(obj, null, "\t")}`;
}