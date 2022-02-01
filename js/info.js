// On crée un élément <div class="info"></div> (qui affiche l'icône "i") et on le place dans <body>
let elInfo = document.createElement("div");
elInfo.classList.add("info");

document.querySelector(".header-right").appendChild(elInfo);
//document.body.appendChild(elInfo);

// On crée des event listeners pour le clic et le clavier, et on appelle la fonction info.
elInfo.addEventListener("click", info);
window.addEventListener("keypress", info);

// On crée un élément HTML pour afficher le message (<div class="message"></div>).
let elBox = document.createElement("div");
elBox.classList.add("message");
document.body.appendChild(elBox);

let elMessage = document.createElement("div");
elBox.appendChild(elMessage);

// On crée un bouton que l'on place dans notre boîte de message. Equivalent de <button>OK</button>.
let elButton = document.createElement("button");
elButton.innerHTML = "OK";
elButton.addEventListener("click", closeBox);
elBox.appendChild(elButton);

/**
 * info
 * Réagit à des événements click et touches i et affiche un message d'alerte.
 * Les données de l'alerte sont dans l'attribut msg de <body data-msg="">.
 * @param {*} e Objet événement transmis par l'event listener.
 */
function info(e) {
  let message = document.body.dataset.msg;
  if (e.type === "click" || e.key === "i" || e.key === "I") {
    //    alert(message);
    elMessage.innerHTML = message;
    elBox.classList.add("visible");
  }
}

function closeBox(e) {
  elBox.classList.remove("visible");
}
