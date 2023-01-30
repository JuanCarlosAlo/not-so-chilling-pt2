import { SCREENS } from "../js/const.js";
const steps = document.getElementById("steps");

let allSteps;

const printSteps = (fragment) => {
  steps.append(fragment);
  allSteps = document.querySelectorAll(".step");
};

const generateSteps = () => {
  const fragment = document.createDocumentFragment();
  SCREENS.forEach((step, index) => {
    const newStep = document.createElement("li");
    newStep.classList.add("step");

    const newStepNumber = document.createElement("span");
    newStepNumber.classList.add("step__number");
    index === 0 && newStepNumber.classList.add("step__number--selected");
    newStepNumber.textContent = index + 1;

    const newStepInfo = document.createElement("div");
    newStepInfo.classList.add("step__info");

    const newStepTitle = document.createElement("span");
    newStepTitle.classList.add("step__title");
    newStepTitle.textContent = `Step ${index + 1}`;

    const newStepDescription = document.createElement("span");
    newStepDescription.classList.add("step__description");
    newStepDescription.textContent = step.toUpperCase();

    newStep.append(newStepNumber);
    newStepInfo.append(newStepTitle, newStepDescription);
    newStep.append(newStepInfo);
    fragment.append(newStep);
  });
  printSteps(fragment);
};

export { generateSteps, allSteps };
