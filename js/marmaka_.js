function info(a) {
  let mit = a.key;

  if (mit === "i" || mit === "I") {
    alert(
      "Pas trop loin de cette plage, on peut trouver l'île d'Agios Nikolaeos. De splendides plages comme Aetos et Piso Aetos se trouvent à côté. Vous trouverez également des plages comme celle-cit. Avec de la volonté et un sens de l'exploration, vous trouverez rapidemment de véritables paradis déserts."
    );
  }
}
window.addEventListener("keypress", info);
