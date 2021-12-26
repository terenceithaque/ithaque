function info(o) {
  let qalakala = o.key;

  if (qalakala === "i" || qalakala === "I") {
    alert(
      "Selon la mythologie grecque, Dexa aurait été l'endroit où serait passé Ulysse lors de son retour à Ithaque, après la guerre de Troie"
    );
  }
}
window.addEventListener("keypress", info);
