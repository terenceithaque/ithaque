let confirm = {
  setText: function (message, textNo, textYes) {
    elConfirmMessage.innerHTML = message;
    elConfirmNo.innerHTML = textNo;
    elConfirmYes.innerHTML = textYes;
  },

  clickNo: function () {
    // TODO: faire ce qu'on fait quand on clique Non.
    confirm.hide();
    // confirm.value = false;
    confirm.dispatchEvent(new CustomEvent("confirm", false));
  },
  clickYes: function () {
    // TODO: faire ce qu'on fait quand on clique Oui.
    confirm.hide();
    // confirm.value = true;
    confirm.dispatchEvent(new CustomEvent("confirm", true));
  },
  value: false,
  show: function () {
    elConfirmContainer.classList.add("visible");
  },
  hide: function () {
    elConfirmContainer.classList.remove("visible");
  },
};

let elConfirmContainer = document.createElement("div");
let elConfirm = document.createElement("div");
let elConfirmMessage = document.createElement("div");
let elConfirmNo = document.createElement("button");
let elConfirmYes = document.createElement("button");

elConfirmContainer.classList.add("confirm-container");
elConfirm.classList.add("confirm");
elConfirmMessage.classList.add("confirm-message");
elConfirmNo.classList.add("confirm-no");
elConfirmYes.classList.add("confirm-yes");

elConfirmNo.addEventListener("click", confirm.clickNo);
elConfirmYes.addEventListener("click", confirm.clickYes);

elConfirmContainer.appendChild(elConfirm);
elConfirm.appendChild(elConfirmMessage);
elConfirm.appendChild(elConfirmNo);
elConfirm.appendChild(elConfirmYes);

document.body.appendChild(elConfirmContainer);
