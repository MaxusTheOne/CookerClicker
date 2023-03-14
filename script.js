"use strict";

// start variables
let cookers = 0;
let cps = 0;
let refreshRate = 50;
let upgrade1Level = 0;
setInterval(numberUpdater, refreshRate);
document.querySelector("#cooker_sprite").addEventListener("click", cookerClicker);
document.querySelector("#upgrade1 button").addEventListener("click", upgradeClicker);
document.querySelector("#upgrade1_cost").textContent = `price: ${costFinder(5, 1.07, upgrade1Level)}`;
document.querySelector("#upgrade1_amount").textContent = `Dough slappers: ${upgrade1Level}`;

function numberUpdater() {
  // console.log(cps);
  cookers = cookers + cps * (refreshRate / 10000);
  document.querySelector("#total_cookers").textContent = Math.floor(cookers) + " cookers";
}
function updateWhenClicked() {
  // console.log("updateWhenClicked");
  document.querySelector("#cookers_per_sec").textContent = `${cps / 10} cps`;
  document.querySelector("#upgrade1_cost").textContent = `price: ${costFinder(5, 1.07, upgrade1Level)}`;
  document.querySelector("#upgrade1_amount").textContent = `Dough slappers: ${upgrade1Level}`;
}
function cookerClicker() {
  let cooker = this;
  cookers++;
  cooker.classList.remove("clicked");
  cooker.offsetLeft;
  cooker.classList.add("clicked");
}
function upgradeClicker(base, rateGrowth, owned, cpsIncrease) {
  let upgradeNum = this.id[0];
  console.log(upgradeNum);
  let cost = costFinder(baseList(upgradeNum), rateGrowthList(upgradeNum), eval("upgrade" + upgradeNum + "Level"));
  console.log(cost);
  if (cost <= cookers) {
    cookers = cookers - cost;
    eval("upgrade" + upgradeNum + "Level");
    cps += cpsIncreaseList(upgradeNum);
  }
  updateWhenClicked();
}
function costFinder(base, rateGrowth, owned) {
  let cost = (base * rateGrowth ** owned).toFixed(2);
  console.log(`base: ${base}, rateGrowth: ${rateGrowth}, owned: ${owned}, cost: ${cost}`);
  return cost;
}
function baseList(num) {
  console.log("baselist " + num);
  switch (num) {
    case "1":
      return 5;
  }
}
function rateGrowthList(num) {
  switch (num) {
    case "1":
      return 1.07;
  }
}
function cpsIncreaseList(num) {
  switch (num) {
    case "1":
      return 1;
  }
}
