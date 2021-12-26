function info(a) {
  let riku = a.key;

  if (riku === "i" || riku == "I") {
    alert(
      "Exogi fut l'un des principaux villages d'Ithaque au Moyen-Âge et au début de l'époque vénitienne, parce qu'il était difficilement atteignable par des pirates"
    );
  }
}
window.addEventListener("keypress", info);
