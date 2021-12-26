function info(a) {
  let rukruk = a.key;

  if (rukruk === "i" || rukruk === "I") {
    alert(
      "Mais la plage, comme la plupart des autres, conserve son aspect naturel grâce à l'abscence d'installations touristiques. Cela fait d'elle une belle plage qui offre l'une des meilleures expériences de bain possible."
    );
  }
}
window.addEventListener("keypress", info);
