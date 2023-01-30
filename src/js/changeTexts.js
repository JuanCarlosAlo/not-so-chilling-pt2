import { SCREENS, HEADERS } from "./const.js";

const formTitle = document.getElementById("form-title");
const formDescription = document.getElementById("form-description");

let textCounter = 0;

const changeText = () => {
  formTitle.textContent = HEADERS[textCounter].title;
  formDescription.textContent = HEADERS[textCounter].description;
};

const nextTexts = () => {
  if (textCounter <= SCREENS.length - 2) {
    textCounter++;
    changeText();
  } else return;
};
const previousTexts = () => {
  if (textCounter >= 1) {
    textCounter--;
    changeText();
  } else return;
};

export { nextTexts, previousTexts };
