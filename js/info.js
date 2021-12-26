/* Affiche le message d'information */
function info(e) {
  let message = document.body.dataset.msg;
  let magot = e.key;
  if (magot === "i" || magot === "I") {
    alert(message);
  }
}

window.addEventListener("keypress", info);
