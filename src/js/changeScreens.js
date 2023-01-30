import { SCREENS } from "../js/const";
import { allSteps } from "../js/generateSteps";

let currentScreen = 0;

const selectedStep = () => {
  if (allSteps && currentScreen <= 3) {
    allSteps.forEach((step) =>
      step.firstElementChild.classList.remove("step__number--selected")
    );
    allSteps[currentScreen].firstElementChild.classList.add(
      "step__number--selected"
    );
  }
};

const setScreens = (planScreen, formScreen, nextButton, backButton) => {
  if (currentScreen === 0) {
    formScreen.style.display = "block";
    planScreen.style.display = "none";
  }
  if (currentScreen >= 1) {
    backButton.style.display = "inline-block";
  } else backButton.style.display = "none";

  if (currentScreen === 1) {
    formScreen.style.display = "none";
    planScreen.style.display = "block";
  }
  if (currentScreen > 1) {
    formScreen.style.display = "none";
    planScreen.style.display = "none";
  }
  console.log(currentScreen);
};

const nextScreen = () => {
  if (currentScreen <= SCREENS.length - 1) {
    currentScreen++;
  }
  return;
};

const previousScreen = () => {
  if (currentScreen >= 0) {
    currentScreen--;
  }
  return;
};

export { setScreens, previousScreen, nextScreen, selectedStep };
