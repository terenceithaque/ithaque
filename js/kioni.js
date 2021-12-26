function info(y) {
  let tutu = y.key;

  if (tutu === "i" || tutu === "I") {
    alert(
      "De nos jours, Kioni est devenu une station touristique moderne  très animée, grâce à de nombreuses tavernes et cafés avoisinants le port, aux yachts privés ammarés, aux chambres d'hôtel, aux locations de sangliers et aux quelques magasins d'alimentation."
    );
  }
}
window.addEventListener("keypress", info);
