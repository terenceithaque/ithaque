function info(q) {
  let zozot = q.key;

  if (zozot === "i" || zozot === "I") {
    alert(
      "Mais comme vous le savez sans doute déjà, la plupart des plages n'ont aucune installation touristique, et Sarakikino ne déroge pas à la règle. Elle est parfaitement ignorée par la plupart des touristes, mais attirante pour les amoureux de la nature, d'autant plus que cette plage est parfaite pour l'apnée."
    );
  }
}
window.addEventListener("keypress", info);
