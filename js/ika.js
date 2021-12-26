alert(
  "Pour des infos supplémentaires, pressez la touche I (majuscule ou minuscule) de votre clavier. Ceci est valable pour toutes les pages du site (index et notes de mise à jour non compris)."
);

function info(b) {
  let fafa = b.key;

  if (fafa === "i" || fafa === "I") {
    alert(
      "Appelée Ithaca à l'époque Romano-byzantine, elle était également connue sous les noms de Itacha, Thiaki, Dulichia ou Val di Compare"
    );
  }
}
window.addEventListener("keypress", info);
