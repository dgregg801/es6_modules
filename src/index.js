console.log("Hello World");

// TODO
import { WishList } from "./wishlist.js";

const form = document.getElementById("submitForm");
const carMakeInput = document.getElementById("makeInput");
const carModelInput = document.getElementById("modelInput");
const carYearInput = document.getElementById("yearInput");
const removeBtn = document.getElementsByClassName("btn btn-warning removeBtn");
const ulElement = document.querySelector("#wishListContainer > ul");
const carMakeDisplay = document.getElementById("car-make");
const carModelDisplay = document.getElementById("car-model");
const carYearDisplay = document.getElementById("car-year");



const newWishList = new WishList();

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
    carMakeInput.textContent = car.make;
    carModelInput.textContent = car.model;
    carYearInput.textContent = car.year;

    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDomList() {
    ulElement.innerHTML = "";
    newWishList.list.forEach((car) => {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        li.addEventListener("click", () => showCarDetails(car));
        ulElement.appendChild(li);
    });
}
