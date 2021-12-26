function info(h) {
  let pikpok = h.key;

  if (pikpok === "i" || pikpok === "I") {
    alert(
      "Le pittoresque port de Frikes s'enfonce dans la baie et sert d'abri aux bateaux de pêche."
    );
    alert(
      " De petites maisons blanches situées dans la petite vallée surplombent le port. Pendant l'été, il est possible de prendre un ferry pour les îles voisines"
    );
  }
}
window.addEventListener("keypress", info);
