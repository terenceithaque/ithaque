function avertissement(u) {
  let atf = u.key;

  if (atf === "i" || atf === "I") {
    alert(
      "La fonction d'information n'est pas disponible pour les notes de mise à jour. Réessayez sur une autre page."
    );
  }
}
window.addEventListener("keypress", avertissement);
