"use strict";

// start variables
let cookers = 0;
setInterval(numberUpdater, 10);
document.querySelector("#cooker_sprite").addEventListener("click", cookerClicker);

function numberUpdater() {
  document.querySelector("#total_cookers").textContent = cookers;
}
function cookerClicker() {
  let cooker = this;
  cookers++;
  cooker.classList.remove("clicked");
  cooker.offsetLeft;
  cooker.classList.add("clicked");
}
