function info(o) {
  let ziki = o.key;

  if (ziki === "i" || ziki === "I") {
    alert(
      "Platrithias est composé des nombreuses maisons blanches traditionelles selon le style architectural vénitien et d'élégants batîments néo-classiques qui ont étés épargnés par le tremblemment de terre de 1953"
    );
  }
}
window.addEventListener("keypress", info);
