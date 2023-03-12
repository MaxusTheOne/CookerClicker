"use strict";

// start variables
let cookers = 0;
let cps = 0;
let refreshRate = 50;
let upgrade1Level = 0;
setInterval(numberUpdater, refreshRate);
document.querySelector("#cooker_sprite").addEventListener("click", cookerClicker);
document.querySelector("#upgrade1 button").addEventListener("click", upgradeClicker);

function numberUpdater() {
  // console.log(cps);
  cookers = cookers + cps * (refreshRate / 10000);
  document.querySelector("#total_cookers").textContent = Math.floor(cookers);
}
function updateWhenClicked() {
  // console.log("updateWhenClicked");
  document.querySelector("#cookers_per_sec").textContent = cps / 10;
  document.querySelector("#upgrade1_text").textContent =
    "price: " + costFinder(5, 1.07, upgrade1Level);
}
function cookerClicker() {
  let cooker = this;
  cookers++;
  cooker.classList.remove("clicked");
  cooker.offsetLeft;
  cooker.classList.add("clicked");
}
function upgradeClicker() {
  let cost = costFinder(5, 1.07, upgrade1Level);
  if (cost <= cookers) {
    cookers = cookers - cost;
    upgrade1Level++;
    cps = cps + 1;
  }
  updateWhenClicked();
}
function costFinder(base, rateGrowth, owned) {
  return (base * rateGrowth ** owned).toFixed(2);
}
