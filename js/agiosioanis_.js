function info(y) {
  let magot = y.key;

  if (magot === "i" || magot === "I") {
    alert(
      "Il y a aussi un village nommé Agios Ioannis, qui a quelques chambres d'hôtel. Il y a beaucoup de plages dans le coin, comme Kassidi, Vlihada, Vitsillia et Petrokopio"
    );
  }
}
window.addEventListener("keypress", info);

function updateInfo(a) {
  let kiki = a.key;
  if (kiki === "u" || kiki === "U") {
    alert(
      "Notes de mise à jour: ajout du 23 Décembre 2021 (en développement): ajout d'une page: Dexa"
    );
  }
}
window.addEventListener("keypress", updateInfo);
