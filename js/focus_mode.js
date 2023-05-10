// Script pour passer le site en mode concentration. En mode concentration, les boîtes de dialogus ("alert") sont désactivées
let setMode;

function getMode() {
  setMode = window.localStorage.getItem("set");
  console.log(setMode);
  console.log(setMode.valueOf());
  return setMode;
}
