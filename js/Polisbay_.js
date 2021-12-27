function info(a) {
  let zuzut = a.key;

  if (zuzut === "i" || zuzut === "I") {
    alert(
      "L'absence d'installations touristique est une chose qui caractérise l'endroit. La verdure présente autour de la plage est une énorme chance si vous cherchez de l'ombre. La plage dispose également d'un bar pour les boissons fraîches."
    );
  }
}
window.addEventListener("keypress", info);
