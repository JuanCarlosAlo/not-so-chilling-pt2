const monthlyText = document.getElementById("monthly-text");
const yearlyText = document.getElementById("yearly-text");

const allCards = document.querySelectorAll(".card");

const changePlan = (e) => {
  console.dir(e.target);
  if (e.target.checked) {
    monthlyText.classList.remove("select-plan__text--selected");
    yearlyText.classList.add("select-plan__text--selected");
  } else {
    yearlyText.classList.remove("select-plan__text--selected");
    monthlyText.classList.add("select-plan__text--selected");
  }
};

const changeCardPlan = (e) => {
  const arrayAllCards = Array.from(allCards);
  allCards.forEach((cardElement, index) => {
    if (e.target.classList.contains("card")) {
      cardElement.classList.remove("card--selected");
      e.target.classList.add("card--selected");
    }
  });
};

export { changePlan, changeCardPlan };
