// On crée un élément <div class="info"></div> et on le place dans <body data-msg="">
let elInfo = document.createElement("div");
elInfo.classList.add("info");
document.body.appendChild(elInfo);

// On crée des event listeners pour le clic et le clavier, et on appelle la fonction info.
elInfo.addEventListener("click", info);
window.addEventListener("keypress", info);

/**
 * info
 * Réagit à des événements click et touches i et affiche un message d'alerte.
 * Les données de l'alerte sont dans l'attribut msg de <body data-msg="">.
 * @param {*} e Objet événement transmis par l'event listener.
 */
function info(e) {
  let message = document.body.dataset.msg;
  if (e.type === "click" || e.key === "i" || e.key === "I") {
    alert(message);
  }
}
