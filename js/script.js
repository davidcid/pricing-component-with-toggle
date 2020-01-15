const switcher = document.querySelector(".switch");
const ball = document.querySelector(".ball");
const priceBasic = document.querySelector(".price.basic");
const priceProfessional = document.querySelector(".price.professional");
const priceMaster = document.querySelector(".price.master");

const monthlyPlans = {
  basic: 19.99,
  professional: 24.99,
  master: 39.99
};

const annualPlans = {
  basic: 199.99,
  professional: 249.99,
  master: 399.99
};

let monthly = false;

function updatePrices() {
  if (monthly) {
    priceBasic.innerHTML = `<span>&dollar;</span>${monthlyPlans.basic}`;
    priceProfessional.innerHTML = `<span>&dollar;</span>${monthlyPlans.professional}`;
    priceMaster.innerHTML = `<span>&dollar;</span>${monthlyPlans.master}`;
  } else {
    priceBasic.innerHTML = `<span>&dollar;</span>${annualPlans.basic}`;
    priceProfessional.innerHTML = `<span>&dollar;</span>${annualPlans.professional}`;
    priceMaster.innerHTML = `<span>&dollar;</span>${annualPlans.master}`;
  }
}

updatePrices();

switcher.addEventListener("click", () => {
  ball.classList.toggle("monthly");
  monthly ? (monthly = false) : (monthly = true);
  updatePrices();
});
