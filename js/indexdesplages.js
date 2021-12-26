function avertissement(e) {
  let nili = e.key;

  if (nili === "i" || nili === "I") {
    alert(
      "La fonction d'information n'est pas disponible pour les pages d'index. Réessayez sur une autre page."
    );
  }
}
window.addEventListener("keypress", avertissement);
