"use strict";

// start variables
let cookers = 0;
let cps = 0;
let refreshRate = 50;
let upgradeLevelList = [0, 0];
let baseList = [0, 5];
let rateGrowthList = [0, 1.07];
let cpsIncreaseList = [0, 1]; //Actual increase is divided by 10
setInterval(numberUpdater, refreshRate);
document.querySelector("#cooker_sprite").addEventListener("click", cookerClicker);
document.querySelector("#upgrade1 button").addEventListener("click", upgradeClicker);
updateWhenClicked();

function numberUpdater() {
  // console.log(cps);
  cookers = cookers + cps * (refreshRate / 10000);
  document.querySelector("#total_cookers").textContent = Math.floor(cookers) + " cookers";
}
function updateWhenClicked() {
  // console.log("updateWhenClicked");
  document.querySelector("#cookers_per_sec").textContent = `${cps / 10} cps`;
  document.querySelector("#upgrade1_cost").textContent = `price: ${costFinder(5, 1.07, upgradeLevelList[1])}`;
  document.querySelector("#upgrade1_amount").textContent = `Dough slappers: ${upgradeLevelList[1]}`;
}
function cookerClicker() {
  let cooker = this;
  cookers++;
  cooker.classList.remove("clicked");
  cooker.offsetLeft;
  cooker.classList.add("clicked");
}
function upgradeClicker() {
  let upgradeNum = this.id[0];

  console.log(`lvlist: ${upgradeLevelList[upgradeNum]} Num: ${upgradeNum}`);
  let cost = costFinder(baseList[upgradeNum], rateGrowthList[upgradeNum], upgradeLevelList[upgradeNum]);
  console.log(cost);
  if (cost <= cookers) {
    cookers = cookers - cost;
    upgradeLevelList[upgradeNum]++;

    cps += cpsIncreaseList(upgradeNum);
  }
  updateWhenClicked();
}
function costFinder(base, rateGrowth, owned) {
  let cost = (base * rateGrowth ** owned).toFixed(2);
  console.log(`base: ${base}, rateGrowth: ${rateGrowth}, owned: ${owned}, cost: ${cost}`);
  return cost;
}

function cpsIncreaseList(num) {
  switch (num) {
    case "1":
      return 1;
  }
}
