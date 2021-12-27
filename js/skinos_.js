function info(i) {
  let gaga = i.key;

  if (gaga === "i" || gaga === "I") {
    alert(
      "Skinos est une superbe plage avec les cyprès qui la bordent. Cependant, la plage ne dispose d'aucune commodité touristique. Le fait quelle n'offre aucune de ces commodités donne pourtant tout son charme et sa beauté naturelle à la plage."
    );
  }
}
window.addEventListener("keypress", info);
