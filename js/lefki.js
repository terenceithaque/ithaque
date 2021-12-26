function info(u) {
  let mili = u.key;

  if (mili === "i" || mili === "I") {
    alert(
      "Actuellement, le village ne compte pas plus de 50 habitants. Ses petites maisons aux toits de tuile rouge témoignent d'une architecture traditionelle unique. Il s'agit d'un beau village, avec plusieurs santiers qui mènent à des plages en contrebas."
    );
  }
}
window.addEventListener("keypress", info);
