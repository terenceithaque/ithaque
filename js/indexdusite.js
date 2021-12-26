function avertissement(e) {
  let koko = e.key;

  if (koko === "i" || koko === "I") {
    alert(
      "La fonction d'information n'est pas disponible pour les pages d'index. Réessayez sur une autre page."
    );
  }
}
window.addEventListener("keypress", avertissement);
