function couleur() {
  let color = window.localStorage.getItem("couleur");

  document.body.setAttribute("class", color);
  // document.body.classList.add(color);

  /*
  if (color === "or") {
    document.body.classList.add("or");
  }
  if (color === "vert") {
    document.body.classList.add("vert");
  }
  if (color === "original") {
    document.body.classList.add("original");
  }
*/
}
