"use strict";

// start variables
let cookers = 0;
let cps = 0;
let refreshRate = 50;
let upgradeLevelList = [0, 0, 0, 0];
let baseList = [40, 5, 60, 540];
let rateGrowthList = [2.5, 1.07, 1.15, 1.15];
let cpsIncreaseList = [0, 2, 30, 100]; //Actual increase is divided by 10
let upgradeNameList = ["Cookers per Click", "Dough slappers", "Batter blaster", "Choco chipper"];
setInterval(numberUpdater, refreshRate);
document.querySelector("#cooker_sprite").addEventListener("click", cookerClicker);

upgradeInit(0);
upgradeInit(1);
upgradeInit(2);
upgradeInit(3);
function upgradeInit(upgradeNum) {
  document.querySelector("#upgrade" + upgradeNum + " button").addEventListener("click", upgradeClicker);
  updateWhenClicked(upgradeNum);
}

function numberUpdater() {
  // console.log(cps);
  cookers = cookers + cps * (refreshRate / 10000);
  document.querySelector("#total_cookers").textContent = Math.floor(cookers) + " cookers";
}
function updateWhenClicked(upgradeNum) {
  // console.log("updateWhenClicked");
  document.querySelector("#cookers_per_sec").textContent = `${cps / 10} cps`;
  document.querySelector("#upgrade" + upgradeNum + "_cost").textContent = `price: ${costFinder(baseList[upgradeNum], rateGrowthList[upgradeNum], upgradeLevelList[upgradeNum])}`;
  if (upgradeNum == 0) {
    document.querySelector("#upgrade0_amount").textContent = `${upgradeNameList[upgradeNum]}: ${2 ** upgradeLevelList[upgradeNum]}`;
  } else {
    document.querySelector("#upgrade" + upgradeNum + "_amount").textContent = `${upgradeNameList[upgradeNum]}: ${upgradeLevelList[upgradeNum]}`;
  }
}
function cookerClicker() {
  let cooker = this;
  cookers += 2 ** upgradeLevelList[0];
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

    cps += cpsIncreaseList[upgradeNum];
  }
  updateWhenClicked(upgradeNum);
}
function costFinder(base, rateGrowth, owned) {
  let cost = (base * rateGrowth ** owned).toFixed(2);
  console.log(`base: ${base}, rateGrowth: ${rateGrowth}, owned: ${owned}, cost: ${cost}`);
  return cost;
}
