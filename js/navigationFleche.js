function definirNavigationFlecheDroite(nomPage) {
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      window.location = nomPage;
    }
  });
}
function definirNavigationFlecheGauche(nomPage) {
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      window.location = nomPage;
    }
  });
}
