function info(i) {
  let gag = i.key;

  if (gag === "i" || gag === "I") {
    alert(
      "Vathy a plusieurs points communs avec l'architecture de venise: maisons avec toits de tuiles, des manoirs et des ruelles pavées"
    );
    alert("Vathy a été continuellement habitée depuis le temps des vénitiens");
  }
}
window.addEventListener("keypress", info);
