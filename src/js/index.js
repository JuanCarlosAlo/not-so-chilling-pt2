// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import {
  setScreens,
  previousScreen,
  nextScreen,
  selectedStep,
} from "./changeScreens.js";
import { nextTexts, previousTexts } from "./changeTexts.js";
import { generateSteps } from "../js/generateSteps";
import { changePlan, changeCardPlan } from "../js/planChange.js";

const formScreen = document.getElementById("form-data");
const planScreen = document.getElementById("plans-container");

const selectPlan = document.getElementById("select-plan");
const cardContainer = document.getElementById("card-plan-container");

const nextButton = document.getElementById("button-next");
const backButton = document.getElementById("button-back");

setScreens(planScreen, formScreen, nextButton, backButton);
generateSteps();

nextButton.addEventListener("click", (e) => {
  nextTexts();
  nextScreen();
  selectedStep();
  setScreens(planScreen, formScreen, nextButton, backButton);
});

backButton.addEventListener("click", (e) => {
  previousTexts();
  previousScreen();
  selectedStep();
  setScreens(planScreen, formScreen, nextButton, backButton);
});

selectPlan.addEventListener("change", (e) => {
  changePlan(e);
});

cardContainer.addEventListener("click", (e) => {
  changeCardPlan(e);
});
