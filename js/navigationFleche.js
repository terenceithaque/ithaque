function definirNavigationFleche(nomPage) {
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      window.location = nomPage;
    }
  });
}
