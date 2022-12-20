// Appliquer une image de fond lors du mois de décembre
//let elDoc = document.getElementsByTagName("body");

//elDoc.style;

const date = new Date(); // Construire la date
let mois = date.getMonth(); // Obtenir le mois actuel
console.log(mois);

function loadImage() {
  if (mois === 11) {
    // document.body.innerText = "Cocorico";

    let background = (document.body.style.backgroundImage =
      "url(../images/images de fond/noel.png)");
    console.log(background);
    document.body.style.backgroundColor = "green";
  }
}

loadImage();
