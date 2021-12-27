function info(i) {
  let miolo = i.key;

  if (miolo === "i" || miolo === "I") {
    alert(
      "Une route mène à la magnifique Polis bay. A la gauche de celle-cit, on trouve une grotte nommée Loizos, qui aurait servie de temple de culte aux Nymphes et à Ulysse durant l'Antiquité."
    );
  }
}
window.addEventListener("keypress", info);
