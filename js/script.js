const switcher = document.querySelector(".switch");
const ball = document.querySelector(".ball");
const basicPrice = document.querySelector(".basic .price");
const professionalPrice = document.querySelector(".professional .price");
const masterPrice = document.querySelector(".master .price");

const basic = 19.99;
const professional = 24.99;
const master = 39.99;

let monthly = false;

switcher.addEventListener("click", () => {
  ball.classList.toggle("monthly");
  if (!monthly) {
    console.log("hey!");
    monthly = true;
  } else {
    monthly = false;
  }
});

basicPrice.innerHTML = `<span>&dollar;</span>${basic}`;
professionalPrice.innerHTML = `<span>&dollar;</span>${professional}`;
masterPrice.innerHTML = `<span>&dollar;</span>${master}`;
