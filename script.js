"use strict";

function getPageViews(value) {
  if (value == 100) {
    return "1M";
  } else {
    return `${value * 10}K`;
  }
}

function getPrice(value) {
  if (value < 5) {
    return 8;
  } else if (value < 10) {
    return 12;
  } else if (value < 50) {
    return 16;
  } else if (value < 100) {
    return 24;
  } else {
    return 36;
  }
}

function yearlyBilling(value) {
  return value * 0.75 * 12;
}

const slider = document.getElementById("slider");
const pageViews = document.querySelector(".pageviews>p:first-of-type");
const price = document.querySelector(".price>h1");
const monthYear = document.querySelector(".price>p");
const yearly = document.getElementById("yearly");

pageViews.textContent = getPageViews(slider.value);
price.textContent = `$${getPrice(slider.value)}.00`;

slider.addEventListener("change", () => {
  pageViews.textContent = getPageViews(slider.value);
  price.textContent = `$${getPrice(slider.value)}.00`;
});

yearly.addEventListener("click", () => {
  if (yearly.checked == true) {
    let priceFinalv2 = yearlyBilling(getPrice(slider.value));
    price.textContent = `$${priceFinalv2}.00 `;
    monthYear.textContent = "/ yearly";
  } else {
    price.textContent = `$${getPrice(slider.value)}.00 `;
    monthYear.textContent = "/ monthly";
  }
});
