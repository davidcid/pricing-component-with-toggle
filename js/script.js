const switcher = document.querySelector(".switch");
const ball = document.querySelector(".ball");
const basicPrice = document.querySelector(".basic .price");
const professionalPrice = document.querySelector(".professional .price");
const masterPrice = document.querySelector(".master .price");

const prices = {
  basic: 19.99,
  professional: 24.99,
  master: 39.99
}

let monthly = false;

const updatePrices = Object.values(prices).forEach(price => {
  price *= 10;
  console.log(price);
});

switcher.addEventListener("click", () => {
  ball.classList.toggle("monthly");
  if (!monthly) {
    basicPrice.innerHTML = `<span>&dollar;</span>${prices.basic}`;
    professionalPrice.innerHTML = `<span>&dollar;</span>${prices.professional}`;
    masterPrice.innerHTML = `<span>&dollar;</span>${prices.master}`;
    monthly = true;
  } else {
    basicPrice.innerHTML = `<span>&dollar;</span>${prices.basic * 10}`;
    professionalPrice.innerHTML = `<span>&dollar;</span>${prices.professional * 10}`;
    masterPrice.innerHTML = `<span>&dollar;</span>${prices.master * 10}`;
    monthly = false;
  }
});

basicPrice.innerHTML = `<span>&dollar;</span>${prices.basic}`;
professionalPrice.innerHTML = `<span>&dollar;</span>${prices.professional}`;
masterPrice.innerHTML = `<span>&dollar;</span>${prices.master}`;
